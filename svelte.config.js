import { windi } from "svelte-windicss-preprocess";
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		windi({})
	],

	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		}
	}
};

export default config;
