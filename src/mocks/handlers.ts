import { http, HttpResponse } from "msw";

const baseUrl = "/v1/Api";

export const handlers = [
	// auth
	http.post(`${baseUrl}/auth/login`, () => {
		return HttpResponse.json({ user: "John Doe" });
	}),

	http.get(`${baseUrl}/me`, () => {
		return HttpResponse.json({ user: "John Doe" });
	}),
];
