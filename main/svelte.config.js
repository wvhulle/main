
// import { createSvelteKitConfig } from '../lib/node/deploy/kit';
// export default config;

/** @type {import('@sveltejs/kit').Config} */
// const config = createSvelteKitConfig('main', true);
// console.log(`The config that will be used:`, config)

import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-node';


const config = {
		// Consult https://kit.svelte.dev/docs/integrations#preprocessors
		// for more information about preprocessors
		preprocess: vitePreprocess(),

		kit: {
			env: { dir: "../" },
			alias: {
				$lib: "../lib"
			},
			files: {
				assets: "../static",
				hooks:  { client: './hooks.client', server: './hooks.server' },
				lib: "../lib",
				routes: './routes',
				appTemplate: `../static/app.html`
			},
			outDir: `../cache/dev/main/`,
			adapter: adapter({ out: "build" })
		}
	};

    export default config;	