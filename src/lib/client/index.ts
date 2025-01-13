import axios from "axios";

export const client = axios.create({
	baseURL: "/v1/Api",
	headers: {
		"Content-Type": "application/json",
	},
});

if (typeof window !== undefined) {
	(window as any).__client = client;
}
