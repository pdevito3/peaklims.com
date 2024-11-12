import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/docs/_docs-layout/sustainable-use-license',
)({
  component: RouteComponent,
})

const markdown = '# Hi, *Pluto*!'
function RouteComponent() {
  return (
    <div className="">
      <div className="prose">blah</div>

      <div className="p-6 bg-sky-500 text-sky-800 border rounded-md">
        Special text here
      </div>
    </div>
  )
}
