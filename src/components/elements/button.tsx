import clsx from "clsx";
import { forwardRef } from "react";
import Spinner from "./spinner";

type ButtonProps = {
	variant?: "primary" | "secondary" | "danger";
	size?: "sm" | "md" | "lg";
	block?: boolean;
	loading?: boolean;
	icon?: React.ReactNode;
	iconPosition?: "left" | "right";
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button(
	props: ButtonProps,
	ref: React.ForwardedRef<HTMLButtonElement>
) {
	const {
		variant = "primary",
		size = "md",
		block = false,
		loading = false,
		icon,
		iconPosition = "left",
		children,
		...buttonProps
	} = props;

	return (
		<button
			ref={ref}
			className={clsx(
				"flex items-center justify-center gap-x-2 relative",
				{ "w-full": block },
				{ "bg-primary-500 text-white": variant === "primary" },
				{ "bg-secondary-500 text-white": variant === "secondary" },
				{ "bg-danger-500 text-white": variant === "danger" },
				{ "text-gray-500": loading },
				{ "text-white": !loading },
				{
					"px-4 py-2 rounded-md text-base": size === "md",
				},
				{ "px-3 py-1 rounded-sm text-sm": size === "sm" },
				{ "px-5 py-3 rounded-lg text-lg": size === "lg" }
			)}
			{...buttonProps}
			disabled={loading || buttonProps.disabled}
		>
			{loading ? (
				<span className="flex items-center justify-center text-white">
					<Spinner size="medium" variant="secondary" />
				</span>
			) : (
				<>
					{icon && iconPosition === "left" && icon}
					{children}
					{icon && iconPosition === "right" && icon}
				</>
			)}
		</button>
	);
}

export default forwardRef(Button);
