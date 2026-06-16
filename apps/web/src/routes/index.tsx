import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: HomeRoute,
});

function HomeRoute() {
	return (
		<main className="flex h-dvh w-full items-center justify-center">
			<h1 className="text-4xl font-bold">CRIC SCORER</h1>
		</main>
	);
}
