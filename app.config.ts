import mdx from "@mdx-js/rollup";
import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  routers: {
    ssr: {
      entry: "./app/entry-ssr.tsx",
    },
    client: {
      entry: "./app/entry-client.tsx",
    },
  },
  vite: {
    plugins: [
      mdx(),
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
  },
});
