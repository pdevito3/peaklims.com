import { visit } from "unist-util-visit";

export default function collectHeadings() {
  return (tree, file) => {
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

    // Add an export statement to the MDX file
    tree.children.push({
      type: "export",
      value: `export const headings = ${JSON.stringify(headings)};`,
    });
  };
}
