import Spinner from "@/components/elements/spinner";
import Providers from "@/providers/providers";
import { lazy, Suspense } from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

const Login = lazy(() => import("@/pages/login"));
const Index = lazy(() => import("@/pages"));
const Dashboard = lazy(() => import("@/pages/a"));

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Index />} />
			<Route path="a/*" element={<Dashboard />} />
			<Route path="login" element={<Login />} />
			<Route path="*" element={<>404 Not Found</>} />
		</>
	)
);

const Loading = () => {
	return (
		<div className="bg-gray-50 text-gray-900 flex h-screen w-full items-center justify-center">
			<Spinner />
		</div>
	);
};

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Providers>
				<RouterProvider router={router} />
			</Providers>
		</Suspense>
	);
}

export default App;
