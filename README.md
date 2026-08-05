# VideoVault Landing

VideoVault 落地页 —— 跨平台视频收藏管理工具（抖音/B站/小红书）。基于 Astro 静态站点，中英双语，针对 SEO 与 GEO（生成式引擎优化，面向 AI 大模型）优化。

## 技术栈

- Astro 7（SSG，零运行时 JS）
- Tailwind CSS 4（暗色石墨蓝灰主题）
- @astrojs/sitemap（带 i18n 的 sitemap）
- @astrojs/rss（博客 RSS）
- Content Collections（MDX/Markdown 博客，中英双语）
- Node >= 22.12.0

## 本地开发

```bash
# 确保 Node 22+（项目根目录 .node-version 已配置，fnm/nvm 会自动切换）
node -v

npm install
npm run dev      # http://localhost:4321
```

## 构建

```bash
npm run build    # 产物输出到 dist/
npm run preview  # 本地预览生产构建
```

## 目录结构

```
src/
├── components/      # Hero/Features/Platforms/UseCases/ComparisonTable/FAQ/CTA/Footer/Nav/SEO
├── layouts/         # BaseLayout（全站 SEO head）、PostLayout（博客）
├── pages/
│   ├── index.astro          # 中文首页
│   ├── en/index.astro       # 英文首页
│   ├── blog/                # 中文博客（列表 + [...slug]）
│   ├── en/blog/             # 英文博客
│   └── rss.xml.ts           # RSS feed
├── content/blog/{zh,en}/    # 博客 Markdown 内容
├── i18n/            # ui 字典 + i18n 工具（getLangFromUrl/useTranslations/localizePath）
├── data/faq.ts      # FAQ 数据（同时供渲染与 JSON-LD schema）
├── consts.ts        # 站点常量（URL/名称/描述/社交链接/OG 图）
└── styles/global.css
public/
├── robots.txt       # 放行 AI 爬虫（GPTBot/ClaudeBot/PerplexityBot/Bytespider 等）
├── llms.txt         # 中文 llms.txt（向 AI 模型自述产品）
├── llms-en.txt      # English llms.txt
└── favicon.svg
```

## 部署到 Cloudflare Pages（推荐：Git 集成）

不用 GitHub Actions，使用 Cloudflare Pages 原生 Git 集成，`git push` 自动构建部署。

1. 代码推到 GitHub 仓库
2. 登录 Cloudflare Dashboard → Workers & Pages → Create application → Pages → Connect to Git
3. 选择仓库，配置构建：
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION = 22`
4. Save and Deploy。push 即部署，PR 自动生成预览链接

绑定自定义域名：Pages 项目 → Custom domains → 添加域名 → 按提示设置 CNAME。

## 部署到 Vercel（可选）

若有后端 API 需求才用 Vercel，落地页本身纯静态无需 Vercel。如需部署：

1. Vercel Dashboard → New Project → Import Git 仓库
2. Framework preset: `Astro`，Build command 与 output 自动识别
3. Deploy

## SEO 优化

- 全站 meta（title/description/canonical/robots）通过 [SEO.astro](src/components/SEO.astro) 统一管理
- Open Graph + Twitter Card，每页独立 OG 图（`OG_IMAGE` in `consts.ts`）
- hreflang 中英互指（`zh-CN` / `en-US` / `x-default`）
- JSON-LD：`SoftwareApplication` + `FAQPage` 结构化数据
- sitemap-index.xml 自动生成（含 i18n alternate）
- Core Web Vitals：Astro 零 JS + Tailwind，首屏 LCP < 1s

## GEO 优化（针对 AI 大模型）

目标：让 ChatGPT/Perplexity/Claude/Gemini/文心/Kimi/豆包 在回答「视频收藏工具」「抖音视频保存」类问题时引用 VideoVault。

- **robots.txt 显式放行 AI 爬虫**：GPTBot、ClaudeBot、PerplexityBot、Bytespider、Applebot-Extended、Google-Extended、CCBot、anthropic-ai
- **llms.txt / llms-en.txt**：根目录 Markdown，向模型自述产品定义、核心能力、差异化、技术栈、关键链接
- **FAQPage JSON-LD**：FAQ 数据同时渲染页面与输出 schema，模型可直接抓取为答案
- **SoftwareApplication JSON-LD**：标明产品实体，便于模型识别
- **段落结论前置 + 具体数字**：模型偏好摘取首句与可引用断言
- **对比表**：ComparisonTable 组件，模型爱摘表格数据
- **博客长文**：针对高价值 query（跨平台视频收藏、AI 视频总结）产出长文

## 自定义指南

部署前需替换以下占位：

1. **域名**：[astro.config.mjs](astro.config.mjs) 的 `site` 与 [src/consts.ts](src/consts.ts) 的 `SITE_URL`
2. **GitHub 仓库链接**：[src/consts.ts](src/consts.ts) 的 `SOCIAL.github` / `SOCIAL.docs`
3. **OG 图**：放置 `public/og/og-zh.png` 与 `public/og/og-en.png`（1200×630）
4. **联系邮箱**：`SOCIAL.email`
5. **robots.txt / llms.txt** 中的域名与链接

## 常用命令

```bash
npm install       # 安装依赖
npm run dev       # 开发服务器
npm run build     # 生产构建
npm run preview   # 预览构建
```
