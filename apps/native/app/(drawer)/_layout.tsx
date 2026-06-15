import { Pressable, Text } from "react-native";
import { Link } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useThemeColor } from "heroui-native";

function DrawerLayout() {
	const themeColorForeground = useThemeColor("foreground");
	const themeColorBackground = useThemeColor("background");

	return (
		<Drawer
			screenOptions={{
				headerTintColor: themeColorForeground,
				headerStyle: { backgroundColor: themeColorBackground },
				headerTitleStyle: {
					fontWeight: "600",
					color: themeColorForeground
				},
				drawerStyle: { backgroundColor: themeColorBackground }
			}}
		>
			<Drawer.Screen
				name="index"
				options={{
					headerTitle: "Home",
					drawerLabel: ({ color, focused }) => <Text style={{ color: focused ? color : themeColorForeground }}>Home</Text>,
					drawerIcon: ({ size, color, focused }) => (
						<Ionicons name="home-outline" size={size} color={focused ? color : themeColorForeground} />
					)
				}}
			/>
			<Drawer.Screen
				name="(tabs)"
				options={{
					headerTitle: "Tabs",
					drawerLabel: ({ color, focused }) => <Text style={{ color: focused ? color : themeColorForeground }}>Tabs</Text>,
					drawerIcon: ({ size, color, focused }) => (
						<MaterialIcons name="border-bottom" size={size} color={focused ? color : themeColorForeground} />
					),
					headerRight: () => (
						<Link href="/modal" asChild>
							<Pressable className="mr-4">
								<Ionicons name="add-outline" size={24} color={themeColorForeground} />
							</Pressable>
						</Link>
					)
				}}
			/>
		</Drawer>
	);
}

export default DrawerLayout;
