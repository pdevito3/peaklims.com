import { createFileRoute } from "@tanstack/react-router";
import { DocsMdxPage } from "~/components/mdx/docs-mdx-page";
import Markdown, { headings } from "./-sustainable-use-license.mdx";

export const Route = createFileRoute(
  "/docs/_docs-layout/sustainable-use-license"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <DocsMdxPage headings={headings}>
      <Markdown />
    </DocsMdxPage>
  );
}
