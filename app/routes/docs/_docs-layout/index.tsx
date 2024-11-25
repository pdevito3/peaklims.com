import { createFileRoute } from "@tanstack/react-router";
import { DocsMdxPage } from "~/components/mdx/docs-mdx-page";
import Markdown, { headings } from "./-index.mdx";

export const Route = createFileRoute("/docs/_docs-layout/")({
  component: RouteComponent,
  meta: () => [
    { title: "Peak LIMS Docs" },
    {
      name: "description",
      content: "Documentation for Peak LIMS",
    },
  ],
});

function RouteComponent() {
  return (
    <DocsMdxPage headings={headings}>
      <Markdown />
    </DocsMdxPage>
  );
}
