# sync-medium

將 Medium 文章同步到本地 `blogData.ts`，使用 Playwright MCP 完整抓取原文。

---

## ⚠️ 執行前置步驟（必須先完成）

此 skill 需要 **Playwright MCP** 才能完整抓取 Medium 原文（WebFetch 有 AI 摘要層，無法保證完整性）。

**步驟 1：** 執行 `/update-config`，將以下設定加入**專案** `.claude/settings.json` 的 `mcpServers`：

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

**步驟 2：** 重新啟動 Claude Code（MCP 需要重啟才生效）。

**步驟 3：** 重新執行 `/sync-medium`，skill 會自動檢查 Playwright 是否可用。

> 若未完成前置步驟直接執行，skill 將停止並提示錯誤。

---

## ⚠️ 執行後清理步驟（必須）

同步完成後，執行 `/update-config` 移除 `playwright` MCP 設定並重啟 Claude Code，確保日常任務不會載入此 MCP。

---

## 使用方式

```
/sync-medium
/sync-medium --all        # 強制重新抓取所有文章（含已同步的）
```

---

## 執行步驟

你將執行以下工作（**全程使用中文回覆**）：

### 0. 檢查 Playwright MCP 是否可用

嘗試呼叫任一 Playwright 工具（如 `playwright_navigate`）。若工具不存在，**立即停止**並顯示：

```
❌ 找不到 Playwright MCP 工具。
請依照 SKILL.md「執行前置步驟」啟用 Playwright MCP 後重新執行 /sync-medium。
```

### 1. 讀取現有 blogData

讀取 `src/data/blogData.ts`，找出所有已同步的 `slug` 清單。

### 2. 取得 Medium 文章列表

使用 Playwright 導覽至 `https://1zhi-lily.medium.com/`，等待 JS 完整渲染後取得所有文章連結：

```
playwright_navigate: https://1zhi-lily.medium.com/
playwright_get_visible_text 或 playwright_evaluate: 取得所有文章 URL
```

從頁面中找出所有文章 URL（格式：`https://1zhi-lily.medium.com/<title-slug-hash>`）。

### 3. 比對未同步文章

- slug 推導：從 URL 最後一段去除末尾 hash（最後 12 字元加連字號）
  - 例：`https://1zhi-lily.medium.com/what-is-agentic-rag-2d34673accdd` → slug: `what-is-agentic-rag`
- 過濾出尚未在 `blogData.ts` 中的文章

若傳入 `--all`，略過此步驟，抓取所有文章。

### 4. 逐篇抓取完整文章內容

對每篇待同步文章，使用 Playwright 導覽並等待 JS 完整渲染：

```
playwright_navigate: <文章 URL>
playwright_get_visible_text 或 playwright_evaluate: 取得完整 DOM 內容
```

從完整 DOM 解析以下欄位（**保留原文，不翻譯、不摘要、不改寫**）：

| 欄位 | 來源 |
|------|------|
| `title` | `<h1>` 或 `og:title` |
| `date` | 文章發布日期，格式 `YYYY-MM-DD` |
| `description` | `og:description` 或文章第一段 |
| `mediumUrl` | 完整文章 URL |
| `tags` | Medium tag/topic 列表 |
| `content` | 結構化內文（見下方規則） |

#### content 解析規則

將文章拆解為 `BlogSection[]`，**逐字輸出原文，不得省略、合併或摘要任何段落**：

| DOM 元素 | BlogSection type | 說明 |
|----------|-----------------|------|
| `h1` / `h2` / `h3` | `heading` | content = 標題文字 |
| `p` | `paragraph` | content = 段落全文 |
| `pre` / `code` | `code` | content = 程式碼原文（保留縮排換行） |
| `ul` / `ol` | `list` | content = 清單前的標題文字（或空字串），items = 各 `<li>` 文字陣列 |

### 5. 寫入 blogData.ts

將新文章以 `BlogPost` 物件格式 **prepend**（插入陣列最前面）到 `src/data/blogData.ts`：

```ts
{
  slug: 'article-slug',
  title: '文章標題（原文）',
  date: '2026-06-19',
  description: '摘要（原文）',
  mediumUrl: 'https://1zhi-lily.medium.com/...',
  tags: ['Tag1', 'Tag2'],
  content: [
    { type: 'heading', content: '段落標題（原文）' },
    { type: 'paragraph', content: '段落內容（原文）' },
    { type: 'list', content: '清單前標題或空字串', items: ['項目一', '項目二'] },
    { type: 'code', content: 'const x = 1;' },
  ],
},
```

### 6. 提醒清理並回報結果

同步完成後顯示：

```
✅ 同步完成。
⚠️ 請記得執行 /update-config 移除 playwright MCP 設定，並重啟 Claude Code。
```

同時告知：
- 本次新同步幾篇，列出標題與 slug
- 哪些已存在（跳過）
- 若某篇 fetch 失敗，說明原因並跳過

---

## 注意事項

- slug 必須全部小寫、只含英數字和連字號，去除 Medium URL 末尾的 hash 部分
- 若 Medium 有 paywall，只能取得部分內容時，content 填入一個 paragraph 說明需前往 Medium 閱讀完整內容
- 若 Playwright 導覽失敗，回報錯誤並建議確認 `@playwright/mcp` 已安裝（`npx @playwright/mcp@latest`）
