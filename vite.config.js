import { defineConfig } from "vite";
import compileTime from "vite-plugin-compile-time";

export default defineConfig({
  plugins: [compileTime()],
});
