// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://antim0n.github.io',
	base: '/astro-pagescms',
	integrations: [mdx(), sitemap()],
});
