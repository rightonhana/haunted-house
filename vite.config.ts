import { defineConfig } from "vite";

export default defineConfig({
	root: './',
	base: './',
	build: {
		chunkSizeWarningLimit: 600
	}
});