import { client } from "@/lib/client";
import { HttpTypes } from "@/types";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export const useSignIn = (
	options?: UseMutationOptions<
		string | { location: string },
		Error,
		HttpTypes.SignInWithUsernamePass
	>
) => {
	return useMutation({
		mutationFn: (payload) => client.post("/auth/login", payload),
		onSuccess: async (data, variables, context) => {
			options?.onSuccess?.(data, variables, context);
		},
		...options,
	});
};

export const useSignOut = (options?: UseMutationOptions<string, Error>) => {
	return useMutation({
		mutationFn: (_) => client.post("/auth/logout"),
		onSuccess: async (data, variables, context) => {
			options?.onSuccess?.(data, variables, context);
		},
		...options,
	});
};
