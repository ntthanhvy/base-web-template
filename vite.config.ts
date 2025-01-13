import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());

	return {
		plugins: [react()],
		resolve: {
			alias: {
				"@": "/src",
			},
		},

		server: {
			proxy: {
				"/v1/Api": {
					target: env.VITE_API_URL || "",
					changeOrigin: true,
				},
			},
		},
	};
});
