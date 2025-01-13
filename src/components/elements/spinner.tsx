import clsx from "clsx";

export type SpinnerProps = {
	size?: "large" | "medium" | "small";
	variant?: "primary" | "secondary";
};

const Spinner = ({ size = "large", variant = "primary" }: SpinnerProps) => {
	return (
		<div
			className={clsx(
				"flex items-center justify-center",
				{ "h-[var(--size-large)] w-[var(--size-large)]": size === "large" },
				{ "h-[var(--size-medium)] w-[var(--size-medium)]": size === "medium" },
				{ "h-[var(--size-small)] w-[var(--size-small)]": size === "small" }
			)}
		>
			<div className="relative flex h-full w-full items-center justify-center">
				<div
					className={clsx(
						"animate-spin rounded-full h-4/5 w-4/5 border-4",
						{
							"border-slate-300 border-t-primary-500": variant === "primary",
						},
						{ "border-slate-400 border-t-gray-100": variant === "secondary" }
					)}
				/>
			</div>
		</div>
	);
};

export default Spinner;
