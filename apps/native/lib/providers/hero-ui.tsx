import { HeroUINativeProvider, type HeroUINativeConfig } from "heroui-native";
import { Uniwind } from "uniwind";

Uniwind.setTheme("dark");

const config: HeroUINativeConfig = {
	devInfo: {
		stylingPrinciples: true,
	},
};

export function HeroUIProvider({ children }: { children: React.ReactNode }) {
	return <HeroUINativeProvider config={config}>{children}</HeroUINativeProvider>;
}
