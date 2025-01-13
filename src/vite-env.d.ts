/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_NOTI_INTERVAL: number;
	readonly VITE_BACKEND_API_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
