import { client } from "@/lib/client";
import { queryKeysFactory } from "@/lib/query-key-factory";
import { HttpTypes } from "@/types";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import qs from "qs";

const USERS_QUERY_KEY = "users" as const;
const usersQueryKeys = {
	...queryKeysFactory(USERS_QUERY_KEY),
	me: () => [USERS_QUERY_KEY, "me"],
};

export const useMe = (
	query?: HttpTypes.GetMeParams,
	options?: UseQueryOptions<
		HttpTypes.GetMeResponse,
		Error,
		HttpTypes.GetMeResponse,
		QueryKey
	>
) => {
	const q = qs.stringify(query);
	const { data, ...rest } = useQuery({
		queryFn: () => client.get("/me?" + q).then((res) => res.data),
		queryKey: usersQueryKeys.me(),
		...options,
	});

	return { ...data, ...rest };
};
