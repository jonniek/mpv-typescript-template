import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scriptName = __dirname.split("/").at(-1) ?? "script.js";

export default defineConfig({
  input: "src/index.ts",
  output: {
    file: `${scriptName}.js`,
    format: "cjs",
  },
  plugins: [typescript()],
});
