import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

async function enableMocking() {
	if (
		import.meta.env.MODE !== "development" ||
		import.meta.env.VITE_ENABLE_MOCKING !== "true"
	) {
		return;
	}

	const { worker } = await import("./mocks/server");

	return worker.start({
		onUnhandledRequest: "warn",
	});
}

enableMocking().then(() => {
	ReactDOM.createRoot(document.getElementById("root")!).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
});
