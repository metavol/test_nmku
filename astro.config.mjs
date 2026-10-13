import { defineConfig } from 'astro/config';

// GitHub Pages: https://metavol.github.io/test_nmku/
// 本番（学内サーバー）に移す際は site を本番URLに、base を '/' に変更する。
export default defineConfig({
  site: 'https://metavol.github.io',
  base: '/test_nmku',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
