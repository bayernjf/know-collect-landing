// 站点级常量，集中管理便于跨页面/组件复用
// 部署到自定义域名后，需同步修改 astro.config.mjs 的 site 字段

export const SITE_URL = 'https://know-collect.bayjf.com';
export const SITE_NAME = 'VideoVault';
export const SITE_TITLE = 'VideoVault | 跨平台视频收藏管理工具';
export const SITE_TITLE_EN = 'VideoVault | Cross-platform Video Bookmark Manager';
export const SITE_DESCRIPTION =
  'VideoVault 是跨平台视频收藏管理工具，支持抖音、B站、小红书视频收藏，AI 智能总结、报告生成、文件夹分组与笔记批注。本地优先，无需登录即可使用。';
export const SITE_DESCRIPTION_EN =
  'VideoVault is a cross-platform video bookmark manager. Save videos from Douyin, Bilibili, and Xiaohongshu with AI summaries, reports, folders, and notes. Local-first, works without login.';
export const AUTHOR = 'VideoVault';
export const LOCALES = ['zh', 'en'] as const;
export const DEFAULT_LOCALE = 'en';

// 社交与外部链接
// TODO: 替换为实际 GitHub 仓库地址
export const SOCIAL = {
  github: 'https://github.com/bayernjf/know-collect',
  docs: 'https://github.com/bayernjf/know-collect#readme',
  email: 'b4yernjf@gmail.com',
};

// 默认 OG 图片
export const OG_IMAGE = {
  zh: '/og/og-zh.png',
  en: '/og/og-en.png',
};
