import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./"),
			"@admin-panel": path.resolve(__dirname, "./admin-panel"),
			"@landing-page": path.resolve(__dirname, "./landing-page"),
		},
	},
	server: {
		"/api":{
			target: "http://localhost:8082",
			changeOrigin: true,
			secure: false,
		},
		host: true,
		port: 3000,
	},
});
