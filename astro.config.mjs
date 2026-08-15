// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// 占位域名，部署到自定义域名后需同步修改
const SITE = 'https://know-collect.bayjf.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: { zh: 'zh-CN', en: 'en-US' },
    },
  })],
  i18n: {
    defaultLocale: 'en',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
