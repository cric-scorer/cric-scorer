import { ImageBackground, Pressable, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { GoogleIcon } from "@/components/ui/icons";

const cricketBackground = require("@/assets/login_background.png");

export default function Login() {
	return (
		<ImageBackground source={cricketBackground} resizeMode="cover" className="flex-1 bg-background">
			<StatusBar hidden />
			<View className="flex-1 bg-black/50 px-5 pt-16 pb-10">
				<View className="flex-1 justify-between">
					<View className="gap-3">
						<Text className="font-semibold text-sm tracking-[3px] text-white/75 uppercase">Cric Scorer</Text>
						<Text className="max-w-76 font-semibold text-5xl leading-tight text-white">Score every ball from the ground.</Text>
						<Text className="max-w-75 text-base leading-6 text-white/75">
							Sign in to manage your cricket circle, record matches, and keep the score live.
						</Text>
					</View>

					<Pressable
						accessibilityRole="button"
						accessibilityLabel="Continue with Google"
						className="h-15 flex-row items-center justify-center gap-3 rounded-full bg-foreground px-5 transition-all duration-200 active:opacity-90"
					>
						<GoogleIcon size={24} />
						<Text className="font-semibold text-lg text-background">Continue with Google</Text>
					</Pressable>
				</View>
			</View>
		</ImageBackground>
	);
}
