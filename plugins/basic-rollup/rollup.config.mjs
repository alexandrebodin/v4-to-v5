import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import babel from "@rollup/plugin-babel";

export default defineConfig([
  {
    input: "admin/index.js",
    output: {
      file: "dist/admin/index.js",
      format: "cjs",
    },
    plugins: [
      resolve({
        extensions: [".js", ".jsx"],
      }),
      replace({
        preventAssignment: false,
        "process.env.NODE_ENV": '"development"',
      }),
      babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-react"],
        extensions: [".js", ".jsx"],
      }),
      commonjs(),
    ],
  },
  {
    input: "server/index.js",
    output: {
      file: "dist/server/index.js",
      format: "cjs",
    },
    plugins: [
      resolve({
        extensions: [".js"],
      }),
      commonjs(),
    ],
  },
]);
