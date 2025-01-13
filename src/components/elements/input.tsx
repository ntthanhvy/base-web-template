import clsx from "clsx";
import { forwardRef } from "react";

type InputProps = {
	label?: string;
	error?: string;
	inputClassname?: string;
	className?: string;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
	helpText?: string;
	layout?: "horizontal" | "vertical";
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) {
	const {
		label,
		error,
		inputClassname,
		className,
		prefix = null,
		suffix = null,
		helpText,
		layout = "horizontal",
		...inputProps
	} = props;

	return (
		<div
			className={clsx(
				"w-full gap-x-3 gap-y-2",
				{ "flex flex-col": layout === "vertical" },
				{ "grid grid-cols-5 items-center gap-x-4": layout === "horizontal" }
			)}
		>
			{label && (
				<label
					htmlFor={inputProps.id}
					className={clsx("text-sm", { [""]: layout === "horizontal" })}
				>
					{label}
					{inputProps.required && <span className="text-red-500">*</span>}
				</label>
			)}

			<div
				className={clsx(
					"relative flex-1",
					{ ["col-span-4"]: layout === "horizontal" },
					className
				)}
			>
				{prefix}

				<input
					{...inputProps}
					ref={ref}
					className={clsx(
						"w-full py-2 border rounded-md text-sm",
						error ? "border-red-500" : "border-gray-300",
						prefix ? "pl-10" : "pl-3",
						suffix ? "pr-10" : "pr-3",
						inputClassname
					)}
				/>

				{suffix}
			</div>
		</div>
	);
}

export default forwardRef<HTMLInputElement, InputProps>(Input);
