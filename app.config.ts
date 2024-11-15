import mdx from "@mdx-js/rollup";
import { defineConfig } from "@tanstack/start/config";
// import path from "path";
import rehypeAddClasses from "rehype-add-classes";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
// import { fileURLToPath } from "url";
import tsConfigPaths from "vite-tsconfig-paths";
// import collectHeadings from "~/plugins/collect-headings";

import { visit } from "unist-util-visit";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

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
    // resolve: {
    //   alias: {
    //     "~": path.resolve(__dirname, "./app"),
    //   },
    // },
    plugins: [
      mdx({
        remarkPlugins: [collectHeadings],
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

function collectHeadings() {
  return (tree) => {
    const headings = [];

    visit(tree, "heading", (node) => {
      const depth = node.depth;
      const text = node.children
        .filter((child) => child.type === "text" || child.type === "inlineCode")
        .map((child) => child.value)
        .join("");

      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "");

      headings.push({ depth, text, id });
    });

    // Inject the headings as an export in the MDX content
    tree.children.unshift({
      type: "mdxjsEsm",
      value: `export const headings = ${JSON.stringify(headings)};`,
      data: {
        estree: {
          type: "Program",
          body: [
            {
              type: "ExportNamedDeclaration",
              declaration: {
                type: "VariableDeclaration",
                declarations: [
                  {
                    type: "VariableDeclarator",
                    id: { type: "Identifier", name: "headings" },
                    init: {
                      type: "Literal",
                      value: headings,
                      raw: JSON.stringify(headings),
                    },
                  },
                ],
                kind: "const",
              },
              specifiers: [],
              source: null,
            },
          ],
          sourceType: "module",
        },
      },
    });
  };
}
