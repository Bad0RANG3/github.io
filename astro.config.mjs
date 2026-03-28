import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bad0rang3.github.io',
  base: '/',
  output: 'static',
  integrations: [tailwind()]
});
