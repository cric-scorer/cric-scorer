/** @type {import("prettier").Config & import("@ianvs/prettier-plugin-sort-imports").PluginConfig & import("prettier-plugin-tailwindcss").PluginOptions} */
const config = {
	plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
	tabWidth: 2,
	useTabs: true,
	printWidth: 140,
	singleQuote: false,
	trailingComma: "all",
	jsxSingleQuote: false,
	importOrder: [
		"^(react/(.*)$)|^(react$)",
		"^(react-native/(.*)$)|^(react-native$)",
		"^(expo/(.*)$)|^(expo$)|^(expo-.*$)",
		"<THIRD_PARTY_MODULES>",
		"",
		"^@cric-scorer/(.*)$",
		"",
		"^@/lib/(.*)$",
		"^@/contexts/(.*)$",
		"^@/components/(.*)$",
		"^@/routes/(.*)$",
		"",
		"^[./]"
	],
	importOrderTypeScriptVersion: "6.0.0",
	importOrderCaseSensitive: false,
	tailwindFunctions: ["cn", "clsx", "cva"],
	tailwindStylesheet: "./packages/ui/src/styles/globals.css",
	overrides: [
		{
			files: ["apps/native/**/*.{js,jsx,ts,tsx}", "apps/native/global.css"],
			options: {
				tailwindStylesheet: "./apps/native/global.css"
			}
		}
	]
};

export default config;
