import "@/global.css";

import { useEffect } from "react";
import { Text as NativeText } from "react-native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {
	Outfit_400Regular,
	Outfit_500Medium,
	Outfit_600SemiBold,
	Outfit_700Bold,
	Outfit_800ExtraBold,
	useFonts,
} from "@expo-google-fonts/outfit";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";

import { ConvexProvider } from "@/lib/providers/convex";
import { HeroUIProvider } from "@/lib/providers/hero-ui";

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

SplashScreen.preventAutoHideAsync();

function StackLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen
				name="login"
				options={{
					headerShown: false,
					statusBarHidden: true,
					statusBarTranslucent: true,
					contentStyle: { backgroundColor: "transparent" },
				}}
			/>
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

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hide();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<ConvexProvider>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<KeyboardProvider>
					<HeroUIProvider>
						<StackLayout />
					</HeroUIProvider>
				</KeyboardProvider>
			</GestureHandlerRootView>
		</ConvexProvider>
	);
}
