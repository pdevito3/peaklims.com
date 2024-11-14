import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/docs/_docs-layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /docs/!'
}
