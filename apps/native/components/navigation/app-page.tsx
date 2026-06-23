import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Button, Typography } from "heroui-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type AppPageProps = {
	title: string;
};

export function AppPage({ title }: AppPageProps) {
	const insets = useSafeAreaInsets();

	return (
		<View className="flex-1 bg-background">
			<View className="flex-1">
				<View className="flex-row items-center gap-4">
					<Button variant="ghost" style={{ width: 48, height: 48, borderRadius: 6 }} isIconOnly>
						<Feather name="menu" size={20} color="white" />
					</Button>

					<Typography type="h3">{title}</Typography>
				</View>

				<View className="flex-1" />
			</View>
		</View>
	);
}
