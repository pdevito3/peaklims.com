import { MDXProvider } from "@mdx-js/react";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/sidebar";
import { DocsSidebar } from "./_docs-layout/-docs-sidebar";

export const Route = createFileRoute("/docs/_docs-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  const components = {
    em: (props: any) => <i {...props} />,
  };
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <DocsSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          {/* <Separator orientation="vertical" className="mr-2 h-4" />
          Peak LIMS */}
        </header>
        <div className="px-4 max-w-7xl">
          <div className="prose">
            <MDXProvider components={components}>
              <Outlet />
            </MDXProvider>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
