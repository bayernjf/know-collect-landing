# 部署 — know-collect-landing（VideoVault）

更新时间：2026-09-09

## 站点信息
- `astro.config.mjs` 的 `site`：`https://know-collect.bayjf.com`
- 技术栈：Astro 7（SSG，零运行时 JS）+ Tailwind CSS 4 + `@astrojs/sitemap`（含 i18n）+ `@astrojs/rss`
- 内容：Content Collections（MDX/Markdown 博客，中英双语）
- Node：`>=22.12.0`（根目录 `.node-version` 已配置）
- 包管理器：npm

## 构建
```bash
npm install
npm run build     # astro build && node scripts/shot.mjs
npm run preview
```

## Cloudflare Pages（Git 集成，推荐）
不用 GitHub Actions，用 Pages 原生 Git 集成，`git push` 即自动构建部署。

| 配置项 | 值 |
|---|---|
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variables | `NODE_VERSION = 22` |

绑定自定义域名：Pages 项目 → Custom domains → 添加域名 → 按提示设置 CNAME。

## 发布后验证
1. 中文首页（`/`）与英文首页（`/en/`）均可访问，语言切换正确。
2. 博客列表与详情页（中英）正常，RSS（`rss.xml`）可访问。
3. `sitemap.xml` 含双语 hreflang，`robots.txt` 指向正确的 sitemap 地址。
4. OG 图（构建时由 `scripts/shot.mjs` 截出）能正常返回。

## 改域名时的同步点
- `astro.config.mjs` 的 `site`
- `public/robots.txt` 里的 Sitemap 行
- 页面 / 组件里硬编码的站点 URL（若有）
