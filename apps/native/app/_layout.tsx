import "@/global.css";

import { Text as NativeText } from "react-native";
import { Stack } from "expo-router";
import {
	Outfit_400Regular,
	Outfit_500Medium,
	Outfit_600SemiBold,
	Outfit_700Bold,
	Outfit_800ExtraBold,
	useFonts,
} from "@expo-google-fonts/outfit";
import { ConvexProviderWithAuth, ConvexReactClient } from "convex/react";
import { HeroUINativeProvider } from "heroui-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { Uniwind } from "uniwind";

import { env } from "@cric-scorer/env/native";

import { useAuth } from "@/lib/auth";

Uniwind.setTheme("dark");

const nativeText = NativeText as typeof NativeText & {
	defaultProps?: {
		style?: unknown;
	};
};

nativeText.defaultProps = nativeText.defaultProps ?? {};
nativeText.defaultProps.style = [{ fontFamily: "Outfit_400Regular" }, nativeText.defaultProps.style];

export const unstable_settings = {
	initialRouteName: "index",
};

const convex = new ConvexReactClient(env.EXPO_PUBLIC_CONVEX_URL, {
	unsavedChangesWarning: false,
});

function StackLayout() {
	return (
		<Stack
			screenOptions={{
				contentStyle: { backgroundColor: "#07110b" },
				headerShadowVisible: false,
				headerTintColor: "#f6f7ef",
				headerStyle: { backgroundColor: "#07110b" },
			}}
		>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="login" options={{ headerShown: false }} />
		</Stack>
	);
}

export default function Layout() {
	const [fontsLoaded] = useFonts({
		Outfit_400Regular,
		Outfit_500Medium,
		Outfit_600SemiBold,
		Outfit_700Bold,
		Outfit_800ExtraBold,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<ConvexProviderWithAuth client={convex} useAuth={useAuth}>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<KeyboardProvider>
					<HeroUINativeProvider>
						<StackLayout />
					</HeroUINativeProvider>
				</KeyboardProvider>
			</GestureHandlerRootView>
		</ConvexProviderWithAuth>
	);
}
