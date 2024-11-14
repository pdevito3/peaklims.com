import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import * as React from "react";
import logoWithName from "~/assets/logo-with-name.svg";
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
  SidebarMenuLink,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarMenuSubLink,
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
  collapsible?: boolean;
  collapsed?: boolean;
  href?: string;
  items: Item[];
}

type Item = LinkItem | HtmlItem | CategoryItem;

interface Docs {
  docs: Item[];
}

const docs: Docs = {
  docs: [
    {
      type: "link",
      label: "Introduction",
      href: "/docs",
    },
    {
      type: "category",
      label: "Licensing",
      collapsible: true,
      collapsed: false,
      href: "/docs/licensing",
      items: [
        {
          type: "link",
          label: "Sustainable Use License",
          href: "/docs/licensing/sustainable-use-license",
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
            <SidebarMenuLink size="lg" asChild>
              <Link to="/" className="flex justify-start">
                <img src={logoWithName} alt="Logo" className="h-8 w-auto" />
              </Link>
            </SidebarMenuLink>
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

function renderCategoryLabel(item: CategoryItem, isTopLevelCategory: boolean) {
  const ButtonComponent = isTopLevelCategory
    ? SidebarMenuButton
    : SidebarMenuSubButton;

  if (item.href) {
    return (
      <ButtonComponent asChild>
        <Link to={item.href} className="font-medium">
          {item.label}
        </Link>
      </ButtonComponent>
    );
  } else {
    return (
      <ButtonComponent className="font-medium">{item.label}</ButtonComponent>
    );
  }
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
            <Link to={item.href} className="font-medium">
              {item.label}
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      );
    }

    return (
      <SidebarMenuSubItem key={item.href}>
        <SidebarMenuSubButton asChild>
          <Link to={item.href}>{item.label}</Link>
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    );
  } else if (item.type === "category") {
    const isCollapsible = item.collapsible ?? true;
    const isCollapsed = item.collapsed ?? true;
    const isTopLevelCategory = level === 0;

    const CollapsibleComponent = isTopLevelCategory
      ? SidebarMenuItem
      : SidebarMenuSubItem;
    const ButtonComponent = isTopLevelCategory
      ? SidebarMenuButton
      : SidebarMenuSubButton;
    const LinkComponent = isTopLevelCategory
      ? SidebarMenuLink
      : SidebarMenuSubLink;

    if (isCollapsible) {
      return (
        <Collapsible key={item.label} defaultOpen={!isCollapsed}>
          <CollapsibleComponent>
            <CollapsibleTrigger asChild>
              <ButtonComponent className="group/collapsible select-none">
                {item.href ? (
                  <LinkComponent href={item.href} className="font-medium">
                    {item.label}
                  </LinkComponent>
                ) : (
                  <span className="font-medium">{item.label}</span>
                )}
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </ButtonComponent>
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

    // Handle non-collapsible categories
    if (isTopLevelCategory) {
      return (
        <SidebarMenuItem key={item.label}>
          {item.href ? (
            <LinkComponent href={item.href} className="font-medium">
              {item.label}
            </LinkComponent>
          ) : (
            <ButtonComponent className="font-medium">
              {item.label}
            </ButtonComponent>
          )}
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
        {item.href ? (
          <LinkComponent href={item.href} className="font-medium">
            {item.label}
          </LinkComponent>
        ) : (
          <ButtonComponent className="font-medium">
            {item.label}
          </ButtonComponent>
        )}
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
