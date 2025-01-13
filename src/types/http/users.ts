export type GetMeParams = {};

export type GetMeResponse = {
	user: User
};

export type User = {
	id: number;
	username: string;
	email: string;
	createdAt: string;
	updatedAt: string;
};