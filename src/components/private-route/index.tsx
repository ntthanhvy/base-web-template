import { useMe } from "@/hooks/api/users";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../elements/spinner";

type PrivateRouteProps = {
	children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
	const { user, isLoading } = useMe();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user && !isLoading) {
			navigate("/login");
		}
	}, [isLoading, navigate, user]);

	if (user && !isLoading) {
		return <>{children}</>;
	}

	return (
		<div className="flex h-screen w-full items-center justify-center">
			<Spinner variant="secondary" />
		</div>
	);
};

export default PrivateRoute;
