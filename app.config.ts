import mdx from "@mdx-js/rollup";
import { defineConfig } from "@tanstack/start/config";
import rehypeAddClasses from "rehype-add-classes";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
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
      mdx({
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAddClasses,
            {
              h1: "group",
              h2: "group",
              h3: "group",
              h4: "group",
              h5: "group",
              h6: "group",
            },
          ],
          [
            rehypeAutolinkHeadings,
            {
              behavior: "append",
              properties: {
                className:
                  "ml-2 opacity-0 transition-all duration-400 group-hover:opacity-100",
              },
              content: {
                type: "element",
                tagName: "span",
                children: [{ type: "text", value: "#" }],
              },
            },
          ],
        ],
      }),
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
  },
});
