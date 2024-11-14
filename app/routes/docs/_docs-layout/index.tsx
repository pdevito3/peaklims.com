import { createFileRoute } from "@tanstack/react-router";
import ctor from "~/assets/ctor.png";
import { cn } from "~/utils";

export const Route = createFileRoute("/docs/_docs-layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full">
      <h1
        className={cn(
          "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          // dark
          // "dark:text-slate-200"
        )}
      >
        Introduction
      </h1>

      <p className="pt-2 max-w-2xl">
        Our initial set of documentation is currently under construction, but we
        are working hard to get rich documentation available as we approach our
        first release.
      </p>

      <div className="pt-6 w-full flex items-center justify-start">
        <img src={ctor} alt="ctor" className="h-72 " />
      </div>
    </div>
  );
}
