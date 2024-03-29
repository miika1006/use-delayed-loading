import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import url from "@rollup/plugin-url";

import pkg from "./package.json" assert { type: "json" };

export default {
	input: "src/index.tsx",
	output: [
		{
			file: pkg.main,
			format: "cjs",
			exports: "named",
			sourcemap: true,
		},
		{
			file: pkg.module,
			format: "es",
			exports: "named",
			sourcemap: true,
		},
	],
	plugins: [
		external(),
		url({ exclude: ["**/*.svg"] }),
		resolve(),
		typescript({
			tsconfigOverride: {
				compilerOptions: {
					isolatedModules: false,
					declaration: true,
				},
			},
			rollupCommonJSResolveHack: false,
			clean: true,
		}),
		commonjs(),
	],
};
