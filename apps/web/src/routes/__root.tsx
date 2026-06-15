import { createRootRouteWithContext, HeadContent, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Toaster } from "@cric-scorer/ui/components/sonner";

import Header from "@/components/header";

import "../index.css";

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
	component: RootComponent,
	head: () => ({
		meta: [
			{
				title: "cric-scorer"
			},
			{
				name: "description",
				content: "cric-scorer is a web application"
			}
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.ico"
			}
		]
	})
});

function RootComponent() {
	return (
		<>
			<HeadContent />
			<div className="grid h-svh grid-rows-[auto_1fr]">
				<Header />
				<Outlet />
			</div>
			<Toaster richColors />
			<TanStackRouterDevtools position="bottom-left" />
		</>
	);
}
