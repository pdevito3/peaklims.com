import { ChevronRight, GalleryVerticalEnd } from "lucide-react";
import * as React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/collapsible";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "~/components/sidebar";

interface LinkItem {
  type: "link";
  label: string;
  href: string;
}

interface HtmlItem {
  type: "html";
  value: React.ReactElement;
}

interface CategoryItem {
  type: "category";
  label: string;
  collapsible: boolean;
  collapsed: boolean;
  items: Item[];
}

type Item = LinkItem | HtmlItem | CategoryItem;

interface Docs {
  docs: Item[];
}

const docs: Docs = {
  docs: [
    {
      type: "html",
      value: (
        <div className="flex items-center justify-center px-4 py-2 border rounded-lg shadow-md bg-rose-500 text-rose-900">
          <p>🫀 Sponsor Me</p>
        </div>
      ),
    },
    {
      type: "link",
      label: "Home",
      href: "/",
    },
    {
      type: "category",
      label: "Guides",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Getting Started",
          href: "/docs/getting-started",
        },
        {
          type: "link",
          label: "Installation",
          href: "/docs/installation",
        },
        {
          type: "category",
          label: "Building Your Application",
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: "link",
              label: "Routing",
              href: "/docs/routing",
            },
            {
              type: "link",
              label: "Data Fetching",
              href: "/docs/data-fetching",
            },
            {
              type: "link",
              label: "Rendering",
              href: "/docs/rendering",
            },
            {
              type: "link",
              label: "Caching",
              href: "/docs/caching",
            },
            {
              type: "link",
              label: "Styling",
              href: "/docs/styling",
            },
            {
              type: "link",
              label: "Optimizing",
              href: "/docs/optimizing",
            },
            {
              type: "link",
              label: "Configuring",
              href: "/docs/configuring",
            },
            {
              type: "link",
              label: "Testing",
              href: "/docs/testing",
            },
            {
              type: "link",
              label: "Authentication",
              href: "/docs/authentication",
            },
            {
              type: "link",
              label: "Deploying",
              href: "/docs/deploying",
            },
            {
              type: "link",
              label: "Upgrading",
              href: "/docs/upgrading",
            },
            {
              type: "link",
              label: "Examples",
              href: "/docs/examples",
            },
          ],
        },
      ],
    },
  ],
};

export function DocsSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Documentation</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {docs.docs.map((item) => renderDocsItem(item))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function renderDocsItem(item: Item, level = 0) {
  if (item.type === "html") {
    return (
      <SidebarMenuItem key="html">
        <SidebarMenuButton asChild>{item.value}</SidebarMenuButton>
      </SidebarMenuItem>
    );
  } else if (item.type === "link") {
    const isTopLevelLink = level === 0;
    if (isTopLevelLink) {
      return (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton asChild>
            <a href={item.href} className="font-medium">
              {item.label}
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      );
    }

    return (
      <SidebarMenuSubItem key={item.href}>
        <SidebarMenuSubButton asChild>
          <a href={item.href}>{item.label}</a>
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    );
  } else if (item.type === "category") {
    const isCollapsible = item.collapsible ?? true;
    const isCollapsed = item.collapsed ?? true;
    const isTopLevelCategory = level === 0;

    if (isCollapsible) {
      const CollapsibleComponent = isTopLevelCategory
        ? SidebarMenuItem
        : SidebarMenuSubItem;
      const CollapsibleButton = isTopLevelCategory
        ? SidebarMenuButton
        : SidebarMenuSubButton;

      return (
        <Collapsible key={item.label} defaultOpen={!isCollapsed}>
          <CollapsibleComponent>
            <CollapsibleTrigger asChild>
              <CollapsibleButton className="group/collapsible select-none">
                {item.label}
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {item.items?.length ? (
                isTopLevelCategory ? (
                  <SidebarMenuSub>
                    {item.items.map((subItem) =>
                      renderDocsItem(subItem, level + 1)
                    )}
                  </SidebarMenuSub>
                ) : (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((subItem) =>
                      renderDocsItem(subItem, level + 1)
                    )}
                  </SidebarMenuSub>
                )
              ) : null}
            </CollapsibleContent>
          </CollapsibleComponent>
        </Collapsible>
      );
    }

    if (isTopLevelCategory) {
      return (
        <SidebarMenuItem key={item.label}>
          <SidebarMenuButton asChild>
            <span className="font-medium">{item.label}</span>
          </SidebarMenuButton>
          {item.items?.length ? (
            <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
              {item.items.map((subItem) => renderDocsItem(subItem, level + 1))}
            </SidebarMenuSub>
          ) : null}
        </SidebarMenuItem>
      );
    }

    return (
      <SidebarMenuSubItem key={item.label}>
        <SidebarMenuSubButton asChild>
          <span>{item.label}</span>
        </SidebarMenuSubButton>
        {item.items?.length ? (
          <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
            {item.items.map((subItem) => renderDocsItem(subItem, level + 1))}
          </SidebarMenuSub>
        ) : null}
      </SidebarMenuSubItem>
    );
  } else {
  }
}
