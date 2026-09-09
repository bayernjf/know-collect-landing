# AGENTS.md — know-collect-landing（VideoVault）

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览
VideoVault 落地页：跨平台视频收藏管理工具（抖音 / B站 / 小红书）。Astro 静态站点，中英双语，
针对 SEO 与 GEO（面向 AI 大模型）优化。

## 技术栈
| 类别 | 方案 |
|------|------|
| 框架 | Astro 7（SSG，零运行时 JS） |
| 样式 | Tailwind CSS 4（`@tailwindcss/vite`，暗色石墨蓝灰主题） |
| 内容 | Content Collections（MDX/Markdown 博客，中英双语） |
| SEO | `@astrojs/sitemap`（含 i18n）、`@astrojs/rss` |
| i18n | 自研字典：`src/i18n/ui.ts` + `getLangFromUrl` / `useTranslations` / `localizePath` |
| Node / 包管理 | >= 22.12（`.node-version` 已配置）/ npm |

## 常用命令
```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # astro build && node scripts/shot.mjs
npm run preview
```

## 约定
- 路由：中文在根路径 `/`（`src/pages/index.astro`），英文在 `/en/`（`src/pages/en/index.astro`）；
  博客同样分 `content/blog/{zh,en}/`。
- FAQ 数据集中在 `src/data/faq.ts`，同时供渲染与 JSON-LD schema 使用，改一处即可。
- 新增 UI 文案必须同时补中英两版。
- 部署细节见 `docs/DEPLOYMENT.md`。

## 不要做的事
- 不要只改一个语言的文案。
- 不要提交构建产物（dist/ 与构建时截出的图）。
- 不要提交 `.env` 或任何密钥。
- 不要跳过 `git pull --rebase` 直接 push。
