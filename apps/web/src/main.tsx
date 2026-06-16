import { createRouter, RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";

import { routeTree } from "./routeTree.gen";

// import { ConvexReactClient, ConvexProviderWithAuth } from "convex/react";
// import { env } from "@cric-scorer/env/web";
// const convex = new ConvexReactClient(env.VITE_CONVEX_URL);

const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	scrollRestoration: true,
	context: {},
	// Wrap: function WrapComponent({ children }: { children: React.ReactNode }) {
	// 	return <ConvexProviderWithAuth client={convex}>{children}</ConvexProviderWithAuth>;
	// },
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById("app");

if (!rootElement) {
	throw new Error("Root element not found");
}

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(<RouterProvider router={router} />);
}
