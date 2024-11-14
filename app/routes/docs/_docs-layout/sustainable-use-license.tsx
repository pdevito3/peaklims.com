import { createFileRoute } from "@tanstack/react-router";
import { cn } from "~/utils";

export const Route = createFileRoute(
  "/docs/_docs-layout/sustainable-use-license"
)({
  component: RouteComponent,
});

const markdown = "# Hi, *Pluto*!";
function RouteComponent() {
  return (
    <div className="">
      <h1
        className={cn(
          "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          // dark
          // "dark:text-slate-200"
        )}
      >
        Sustainable Use License
      </h1>

      <div className="mt-4 p-6 bg-sky-500 text-sky-800 border rounded-md">
        Special text here
      </div>

      <h2 className="text-2xl font-bold mt-8">Special Thanks</h2>
      <p className="space-x-1 pt-1">
        <span>
          A special thanks to n8n for the foundation of this licensing model
          based on their own
        </span>
        <a
          href="https://docs.n8n.io/sustainable-use-license/"
          className="text-blue-500 inline-flex"
        >
          Sustainable Use License
        </a>
        <span>offering.</span>
      </p>
    </div>
  );
}
