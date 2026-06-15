import "@/global.css";

import { Stack } from "expo-router";
import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { ConvexReactClient } from "convex/react";
import { HeroUINativeProvider } from "heroui-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { Uniwind } from "uniwind";

import { env } from "@cric-scorer/env/native";

import { authClient } from "@/lib/auth-client";

Uniwind.setTheme("dark");

export const unstable_settings = {
	initialRouteName: "(drawer)"
};

const convex = new ConvexReactClient(env.EXPO_PUBLIC_CONVEX_URL, {
	unsavedChangesWarning: false
});

function StackLayout() {
	return (
		<Stack screenOptions={{}}>
			<Stack.Screen name="(drawer)" options={{ headerShown: false }} />
			<Stack.Screen name="modal" options={{ title: "Modal", presentation: "modal" }} />
		</Stack>
	);
}

export default function Layout() {
	return (
		<ConvexBetterAuthProvider client={convex} authClient={authClient}>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<KeyboardProvider>
					<HeroUINativeProvider>
						<StackLayout />
					</HeroUINativeProvider>
				</KeyboardProvider>
			</GestureHandlerRootView>
		</ConvexBetterAuthProvider>
	);
}
