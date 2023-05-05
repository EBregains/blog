import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

// Dependency to read markdown files
import { escapeSvelte, mdsvex } from 'mdsvex';
// Dependency to highlight code blocks
import shiki from 'shiki';

/** @type {import('mdsvex').MdsvexOptions;} */
const mdsvexConfig = {
  extensions: ['.md'],
  layout: {
    _: './src/mdsvex.svelte'
  },
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const highlighter = await shiki.getHighlighter({ theme: 'poimandres' });
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));
      return `{@html \`${html}\`}}`;
    }
  }
}
/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
	kit: {
		adapter: adapter()
	}
};

export default config;
