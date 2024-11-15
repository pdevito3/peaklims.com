import { createFileRoute } from "@tanstack/react-router";
import { DocsMdxPage } from "~/components/mdx/docs-mdx-page";
import Markdown, { headings } from "./-index.mdx";

export const Route = createFileRoute("/docs/_docs-layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <DocsMdxPage headings={headings}>
      <Markdown />
    </DocsMdxPage>
  );
}
