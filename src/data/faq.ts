// FAQ 数据：中英双语，同时供 FAQ 组件渲染与 SEO JSON-LD schema 使用
// 保证 AI 搜索能直接抓取为答案（GEO 关键）

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: Record<'zh' | 'en', FaqItem[]> = {
  zh: [
    {
      question: 'VideoVault 是什么？',
      answer:
        'VideoVault 是跨平台视频收藏管理工具，支持抖音、B站、小红书视频收藏，提供 AI 智能总结、报告生成、文件夹分组与笔记批注。本地优先，无需登录即可使用，数据归用户所有。',
    },
    {
      question: 'VideoVault 支持哪些平台？',
      answer:
        '首版支持抖音（含 v.douyin.com 短链）、B站、小红书（含 xhslink.com 分享链接）三大平台。粘贴视频链接即可自动识别平台、提取视频 ID 并抓取标题、作者、描述与封面图。',
    },
    {
      question: '我的视频数据存在哪里？数据归谁所有？',
      answer:
        '数据采用双写策略：localStorage 即时保存，Supabase 异步同步。未配置 Supabase 时进入纯本地模式，所有数据存于浏览器本地，无需登录，完全归用户所有。配置 Supabase 后，数据基于行级安全（RLS）按用户隔离存储。',
    },
    {
      question: 'AI 总结支持哪些模型？需要付费吗？',
      answer:
        'AI 调用统一走 OpenAI 兼容的 /chat/completions 接口，支持 OpenAI、DeepSeek、通义千问、Ollama 等任意兼容服务。用户自带 API Key，费用由所用模型服务商收取。未配置时自动回退到 mock 模式，可正常体验界面与流程。',
    },
    {
      question: '不登录能用吗？是否必须配置 Supabase？',
      answer:
        '可以。未配置 Supabase 时 VideoVault 自动进入本地模式，无需登录，所有功能完整可用。本地模式数据存于浏览器 localStorage，Supabase 仅作为可选的云端同步与多端协作后端。',
    },
    {
      question: 'VideoVault 与浏览器收藏夹、Notion 手记有什么区别？',
      answer:
        '浏览器收藏夹只存链接，无元数据、无总结、无分组；Notion 需手动复制粘贴标题与笔记。VideoVault 自动抓取标题、作者、封面，AI 一键生成总结，支持文件夹分组、笔记批注、报告导出与数据导入导出，专为视频收藏场景设计。',
    },
    {
      question: '如何部署自己的 VideoVault？',
      answer:
        'VideoVault 是开源项目，可在 GitHub 获取源码。本地运行：npm install 后 npm run dev。生产部署：前端为静态构建（npm run build），可托管到 Cloudflare Pages、Vercel 等任意静态托管；可选部署 Supabase 作为后端，元数据抓取走 Supabase Edge Function 代理以规避 CORS。',
    },
  ],
  en: [
    {
      question: 'What is VideoVault?',
      answer:
        'VideoVault is a cross-platform video bookmark manager. It supports saving videos from Douyin, Bilibili, and Xiaohongshu, with AI summaries, report generation, folder grouping, and note annotation. Local-first, works without login, and you own your data.',
    },
    {
      question: 'Which platforms does VideoVault support?',
      answer:
        'The first release supports Douyin (including v.douyin.com short links), Bilibili, and Xiaohongshu (including xhslink.com share links). Paste a video link and VideoVault auto-detects the platform, extracts the video ID, and fetches the title, author, description, and cover image.',
    },
    {
      question: 'Where is my video data stored, and who owns it?',
      answer:
        'Data is dual-written: localStorage for instant saves, Supabase for async sync. Without Supabase configured, VideoVault runs in pure local mode: all data stays in the browser, no login required, fully owned by you. With Supabase, data is isolated per user via Row Level Security (RLS).',
    },
    {
      question: 'Which AI models are supported for summaries? Is there a fee?',
      answer:
        'AI calls go through an OpenAI-compatible /chat/completions endpoint, supporting OpenAI, DeepSeek, Tongyi Qianwen, Ollama, and any compatible service. You bring your own API key; fees are charged by your model provider. Without configuration, VideoVault falls back to mock mode so you can still explore the UI and flow.',
    },
    {
      question: 'Can I use it without logging in? Is Supabase required?',
      answer:
        'Yes. Without Supabase configured, VideoVault automatically enters local mode: no login required, all features fully usable. Local mode stores data in browser localStorage. Supabase is an optional backend for cloud sync and multi-device collaboration.',
    },
    {
      question: 'How is VideoVault different from browser bookmarks or Notion notes?',
      answer:
        'Browser bookmarks only store links: no metadata, no summaries, no grouping. Notion requires manually pasting titles and notes. VideoVault auto-fetches titles, authors, and covers, generates AI summaries in one click, and supports folder grouping, note annotation, report export, and data import/export, purpose-built for video bookmarking.',
    },
    {
      question: 'How do I deploy my own VideoVault instance?',
      answer:
        'VideoVault is open source on GitHub. Run locally with npm install then npm run dev. For production, the frontend is a static build (npm run build) hostable on Cloudflare Pages, Vercel, or any static host. Optionally deploy Supabase as the backend; metadata fetching uses a Supabase Edge Function proxy to bypass CORS.',
    },
  ],
};
