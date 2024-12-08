import { createFileRoute } from "@tanstack/react-router";
import { cn, headTextBuilder } from "~/utils";

export const Route = createFileRoute("/_marketing-layout/forking/")({
  component: Forking,
  meta: () => [
    { title: headTextBuilder({ pageHead: "Forking" }) },
    {
      name: "description",
      content: "Information on the Forking program for Peak LIMS",
    },
  ],
});

function Forking() {
  return (
    <>
      {/* Forking section */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-2xl/7 font-semibold text-emerald-600">Forking</h1>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-3 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
            <div
              className={cn(
                "ring-1 ring-gray-200",
                "rounded-3xl p-8",
                "col-start-2" // temp
              )}
            >
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
