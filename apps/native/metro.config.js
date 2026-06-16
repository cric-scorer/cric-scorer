const path = require("path");
const { createRequire } = require("module");

const { getDefaultConfig } = require("expo/metro-config");
const { withUniwindConfig } = require("uniwind/metro");
const { wrapWithReanimatedMetroConfig } = require("react-native-reanimated/metro-config");

const nativeRequire = createRequire(path.join(__dirname, "package.json"));

function packageRoot(name) {
	return path.dirname(nativeRequire.resolve(`${name}/package.json`));
}

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.nodeModulesPaths = [path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "../../node_modules")];
config.resolver.extraNodeModules = {
	...config.resolver.extraNodeModules,
	react: packageRoot("react"),
	"react-native": packageRoot("react-native"),
};
config.resolver.resolveRequest = (context, moduleName, platform) => {
	if (moduleName === "react" || moduleName.startsWith("react/")) {
		return {
			type: "sourceFile",
			filePath: nativeRequire.resolve(moduleName),
		};
	}

	if (moduleName === "@expo-google-fonts/outfit" || moduleName.startsWith("@expo-google-fonts/outfit/")) {
		return {
			type: "sourceFile",
			filePath: nativeRequire.resolve(moduleName),
		};
	}

	return context.resolveRequest(context, moduleName, platform);
};

const uniwindConfig = withUniwindConfig(wrapWithReanimatedMetroConfig(config), {
	cssEntryFile: "./global.css",
	dtsFile: "./uniwind-types.d.ts",
});

module.exports = uniwindConfig;
