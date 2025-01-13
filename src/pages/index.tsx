import Spinner from "@/components/elements/spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Index() {
	const navigate = useNavigate();
	useEffect(() => {
		navigate("/a/dashboard");
	}, []);

	return (
		<div className="bg-grey-5 text-grey-90 flex h-screen w-full items-center justify-center">
			<Spinner />
		</div>
	);
}
