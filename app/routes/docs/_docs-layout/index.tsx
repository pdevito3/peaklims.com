import { createFileRoute } from "@tanstack/react-router";
import Markdown from "./-index.mdx";

export const Route = createFileRoute("/docs/_docs-layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Markdown />;
}
