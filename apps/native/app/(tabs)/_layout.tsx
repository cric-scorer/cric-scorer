import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useThemeColor } from "heroui-native";

import { tabIconSources } from "@/components/ui/icons";

type TabConfig = {
	name: string;
	label: string;
	icon: (typeof tabIconSources)[keyof typeof tabIconSources];
};

const tabs: TabConfig[] = [
	{ name: "matches", label: "Matches", icon: tabIconSources.matches },
	{ name: "stats", label: "Stats", icon: tabIconSources.stats },
	{ name: "compare", label: "Compare", icon: tabIconSources.compare },
	{ name: "teams", label: "Teams", icon: tabIconSources.teams },
	{ name: "players", label: "Players", icon: tabIconSources.players },
];

export default function TabsLayout() {
	const accent = useThemeColor("accent");
	const background = useThemeColor("background");
	const foreground = useThemeColor("foreground");

	return (
		<NativeTabs
			backgroundColor={background}
			labelVisibilityMode="labeled"
			indicatorColor={accent}
			rippleColor={accent}
			labelStyle={{
				color: foreground,
				fontSize: 14,
				fontWeight: "500",
				fontFamily: "Outfit_500Regular",
			}}
		>
			{tabs.map((tab) => (
				<NativeTabs.Trigger key={tab.name} name={tab.name} contentStyle={{ backgroundColor: background, paddingBottom: 8 }}>
					<NativeTabs.Trigger.Icon src={tab.icon} />
					<NativeTabs.Trigger.Label>{tab.label}</NativeTabs.Trigger.Label>
				</NativeTabs.Trigger>
			))}
		</NativeTabs>
	);
}
