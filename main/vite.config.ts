//@ts-ignore
import { sveltekit } from './node_modules/kit/packages/kit/src/exports/vite/index.js';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
});
