# sync-medium

將 Medium 文章同步到本地 `blogData.ts`。

## 使用方式

```
/sync-medium
/sync-medium --all        # 強制重新抓取所有文章（含已同步的）
```

## 執行步驟

你將執行以下工作（**全程使用中文回覆**）：

### 1. 讀取現有 blogData

讀取 `src/data/blogData.ts`，找出所有已同步的 `slug` 清單。

### 2. Fetch Medium 文章列表

使用 WebFetch 抓取 `https://1zhi-lily.medium.com/` 頁面，從頁面內容中找出所有文章的連結（通常格式為 `https://1zhi-lily.medium.com/<article-title-slug-hash>`）。

如果 Medium 首頁文章數量不足，也抓取：
- `https://1zhi-lily.medium.com/latest`

### 3. 比對未同步文章

對照步驟 1 的 slug 清單，過濾出**尚未同步**的文章 URL。

- slug 推導方式：從 URL 路徑取最後一段，去除末尾的 hash（通常是最後 12 個字元加連字號），例如：
  - URL: `https://1zhi-lily.medium.com/what-is-agentic-rag-2d34673accdd`
  - slug: `what-is-agentic-rag`

若使用者傳入 `--all`，略過此步驟，抓取所有文章。

### 4. Fetch 各篇文章內容

對每篇未同步的文章，使用 WebFetch 抓取完整頁面。從頁面 HTML/文字中解析：

- **title**：文章標題（`<h1>` 或 og:title）
- **date**：發布日期（格式 `YYYY-MM-DD` 或 `YYYY-MM`）
- **description**：文章摘要（og:description 或第一段）
- **mediumUrl**：完整文章 URL
- **tags**：文章 tags（Medium 的 tag/topic 列表）
- **content**：結構化內文（見下方規則）

#### content 解析規則

將文章拆解為 `BlogSection[]`，規則如下：

| Medium 元素 | BlogSection type |
|---|---|
| `<h1>` / `<h2>` / `<h3>` | `heading` |
| 一般段落 `<p>` | `paragraph` |
| 程式碼區塊 `<pre>` / `<code>` | `code` |
| 有序/無序清單 `<ul>` / `<ol>` | `list`（content 為清單標題或空字串，items 為各項目文字） |

**重要：保留文章原文，不翻譯、不改寫。**

### 5. 寫入 blogData.ts

將新文章以 `BlogPost` 物件格式 **prepend**（插入到陣列最前面，因為 Medium 最新的文章應排在最前面）到 `src/data/blogData.ts` 的 `blogData` 陣列中。

格式範例：
```ts
{
  slug: 'article-slug',
  title: '文章標題（原文）',
  date: '2026-06-18',
  description: '摘要（原文）',
  mediumUrl: 'https://1zhi-lily.medium.com/...',
  tags: ['Tag1', 'Tag2'],
  content: [
    { type: 'heading', content: '段落標題（原文）' },
    { type: 'paragraph', content: '段落內容（原文）' },
    { type: 'list', content: '', items: ['項目一', '項目二'] },
    { type: 'code', content: 'const x = 1;' },
  ],
},
```

### 6. 回報結果

告知使用者：
- 本次新同步了幾篇文章，列出標題與 slug
- 哪些文章已存在（跳過）
- 如果某篇文章 fetch 失敗，說明原因並跳過

### 注意事項

- Medium 頁面可能需要 JavaScript 渲染，若 WebFetch 無法取得完整內容，先嘗試 `https://1zhi-lily.medium.com/<slug>` 直接抓單篇
- 若 Medium 返回 paywall 或登入牆，則只抓取能取得的部分（title、description、date、tags），content 填入一個 paragraph 說明需前往 Medium 閱讀完整內容
- slug 必須全部小寫、只含英數字和連字號，去除 Medium URL 末尾的 hash 部分
