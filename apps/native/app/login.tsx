import { ImageBackground, Pressable, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { GoogleIcon } from "@/components/ui/icons";

const cricketBackground = {
	uri: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1400&q=85",
};

export default function Login() {
	return (
		<ImageBackground source={cricketBackground} resizeMode="cover" className="flex-1 bg-background">
			<StatusBar hidden />
			<View className="flex-1 bg-black/55 px-5 pt-16 pb-10">
				<View className="flex-1 justify-between">
					<View className="gap-3">
						<Text className="text-sm font-semibold tracking-[3px] text-white/75 uppercase">Cric Scorer</Text>
						<Text className="max-w-76 text-5xl leading-tight font-semibold text-white">Score every ball from the ground.</Text>
						<Text className="max-w-75 text-base leading-6 text-white/75">
							Sign in to manage your cricket circle, record matches, and keep the score live.
						</Text>
					</View>

					<Pressable
						accessibilityRole="button"
						accessibilityLabel="Continue with Google"
						className="h-14 flex-row items-center justify-center gap-3 rounded-full bg-white px-5 active:opacity-85"
					>
						<GoogleIcon size={22} />
						<Text className="text-base font-semibold text-[#1f1f1f]">Continue with Google</Text>
					</Pressable>
				</View>
			</View>
		</ImageBackground>
	);
}
