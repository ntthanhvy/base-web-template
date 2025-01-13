import PrivateRoute from "@/components/private-route";
import { Route, Routes } from "react-router";

export default function DashboardPages() {
	return (
		<PrivateRoute>
			<DashboardRoutes />
		</PrivateRoute>
	);
}

function DashboardRoutes() {
	return (
		<Routes>
			<Route path="dashboard" element={<>Dashboard</>} />
			<Route path="*" element={<h1 className="prose">404 Not Found</h1>} />
		</Routes>
	);
}
