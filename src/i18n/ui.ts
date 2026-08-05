// UI 字符串字典：中英双语
// 新增页面文案时，在对应 locale 下追加 key，保持两边同步

export const languages = {
  zh: '简体中文',
  en: 'English',
} as const;

export const defaultLang = 'zh';

export const ui = {
  zh: {
    'nav.features': '核心能力',
    'nav.platforms': '支持平台',
    'nav.usecases': '使用场景',
    'nav.comparison': '对比',
    'nav.faq': '常见问题',
    'nav.blog': '博客',
    'nav.docs': '文档',
    'nav.langSwitch': 'English',

    'hero.badge': '跨平台视频收藏管理工具',
    'hero.title': '把抖音、B站、小红书的视频收进一个收藏夹',
    'hero.subtitle': 'VideoVault 支持跨平台视频收藏，自动抓取标题与封面，AI 一键生成视频总结，提供文件夹分组、笔记批注与报告导出。本地优先，无需登录即可使用。',
    'hero.cta.primary': '在 GitHub 查看',
    'hero.cta.secondary': '阅读文档',

    'features.title': '为什么选择 VideoVault',
    'features.subtitle': '不只是收藏链接，而是把视频变成可整理、可总结、可回顾的知识库',

    'platforms.title': '三大平台一站式收藏',
    'platforms.subtitle': '粘贴链接即可收藏，自动抓取标题、作者与封面',

    'usecases.title': '使用场景',
    'usecases.subtitle': '无论学习、追更还是素材整理，VideoVault 都能帮你管好视频',

    'compare.title': '与常见方案对比',
    'compare.subtitle': '比浏览器收藏夹、Notion 手记和平台自带收藏更专业',

    'faq.title': '常见问题',
    'faq.subtitle': '关于平台支持、数据存储、AI 总结与本地使用的关键问题',

    'cta.title': '开始整理你的视频收藏',
    'cta.subtitle': '本地即可运行，无需登录，数据归你所有',
    'cta.button': '在 GitHub 查看',

    'footer.tagline': '跨平台视频收藏管理工具',
    'footer.rights': '保留所有权利。',
  },

  en: {
    'nav.features': 'Features',
    'nav.platforms': 'Platforms',
    'nav.usecases': 'Use Cases',
    'nav.comparison': 'Comparison',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.docs': 'Docs',
    'nav.langSwitch': '简体中文',

    'hero.badge': 'Cross-platform Video Bookmark Manager',
    'hero.title': 'Save Douyin, Bilibili, and Xiaohongshu videos in one place',
    'hero.subtitle': 'VideoVault bookmarks videos across platforms, auto-fetches titles and covers, generates AI summaries, and offers folders, notes, and report export. Local-first, works without login.',
    'hero.cta.primary': 'View on GitHub',
    'hero.cta.secondary': 'Read the Docs',

    'features.title': 'Why VideoVault',
    'features.subtitle': 'Not just links — turn videos into an organized, summarized, searchable knowledge base',

    'platforms.title': 'Three platforms, one bookmark manager',
    'platforms.subtitle': 'Paste a link to save. Titles, authors, and covers are auto-fetched',

    'usecases.title': 'Use Cases',
    'usecases.subtitle': 'Learning, follow-along, or material gathering — VideoVault keeps your videos organized',

    'compare.title': 'Compared to common alternatives',
    'compare.subtitle': 'More capable than browser bookmarks, Notion notes, or platform-native favorites',

    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Key questions on platforms, storage, AI summaries, and local usage',

    'cta.title': 'Start organizing your video collection',
    'cta.subtitle': 'Runs locally, no login required, you own your data',
    'cta.button': 'View on GitHub',

    'footer.tagline': 'Cross-platform Video Bookmark Manager',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export type UIKey = keyof typeof ui[typeof defaultLang];
