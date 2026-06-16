import { ConvexProviderWithAuth, ConvexReactClient } from "convex/react";

import { env } from "@cric-scorer/env/native";

import { useAuth } from "@/lib/auth";

const convex = new ConvexReactClient(env.EXPO_PUBLIC_CONVEX_URL, {
	unsavedChangesWarning: false,
});

export function ConvexProvider({ children }: { children: React.ReactNode }) {
	return (
		<ConvexProviderWithAuth client={convex} useAuth={useAuth}>
			{children}
		</ConvexProviderWithAuth>
	);
}
