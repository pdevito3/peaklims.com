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
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
