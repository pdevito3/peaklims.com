import { createFileRoute } from "@tanstack/react-router";
import Markdown from "./-sustainable-use-license.mdx";

export const Route = createFileRoute(
  "/docs/_docs-layout/sustainable-use-license"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <Markdown />;
}
