<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# 專案說明

這是一個使用 Next.js 和 TypeScript 建立的個人履歷網頁專案。

## 技術堆疊

- Next.js (App Router)
- React
- TypeScript
- CSS Modules（無 Tailwind）

## 檔案結構

- `src/app/`: 包含頁面組件和路由
- `public/`: 靜態資源
- `src/app/components/`: 可重用的 UI 組件

## 編碼風格指南

- 使用函數組件與 React Hooks
- 採用 TypeScript 類型定義
- 遵循 ESLint 規則
- 使用 CSS Modules 進行樣式設計，共用 token 定義於 `src/app/globals.css`
