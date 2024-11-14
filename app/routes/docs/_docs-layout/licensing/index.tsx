import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/_docs-layout/licensing/")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /docs/_docs-layout/licensing/!";
}
