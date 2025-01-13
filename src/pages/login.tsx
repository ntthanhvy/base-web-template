import Button from "@/components/elements/button";
import Input from "@/components/elements/input";
import { useSignIn } from "@/hooks/api/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

const loginSchema = z.object({
	username: z.string().min(1, { message: "Username is required" }),
	password: z.string().min(1, { message: "Password is required" }),
});

type LoginSchemaForm = z.infer<typeof loginSchema>;

export default function Login() {
	const navigate = useNavigate();

	const form = useForm<LoginSchemaForm>({
		resolver: zodResolver(loginSchema),
	});
	const { register, handleSubmit, formState } = form;
	const { errors } = formState;

	const { mutate, isPending } = useSignIn();

	const onSubmit = (data: LoginSchemaForm) => {
		// navigate({ pathname: "/a/dashboard", search: "?isLogin=true" });
		mutate(
			{
				username: data.username,
				password: data.password,
			},
			{
				onSuccess: () => {
					navigate({ pathname: "/a/dashboard", search: "?isLogin=true" });
				},
				onError: (error) => {
					console.log(error);
				},
			}
		);
	};

	return (
		<div className="w-screen h-screen flex items-center justify-center">
			<form
				className="w-[400px] bg-white shadow rounded-lg p-8"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h1 className="text-2xl font-bold text-gray-900">Login</h1>
				<div className="mt-4">
					<Input
						label="Username"
						error={errors.username?.message}
						{...register("username")}
					/>
				</div>
				<div className="mt-4">
					<Input
						label="Password"
						error={errors.password?.message}
						type="password"
						{...register("password")}
					/>
				</div>
				<div className="mt-6">
					<Button type="submit" block loading={isPending}>
						Login
					</Button>
				</div>
			</form>
		</div>
	);
}
