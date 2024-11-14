import { Link, useRouter } from "@tanstack/react-router";
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
      label: "Core Concepts",
      collapsible: true,
      collapsed: false,
      items: [],
    },
    {
      type: "category",
      label: "Getting Started",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Initial Time Setup",
          collapsible: true,
          collapsed: false,
          items: [],
        },
      ],
    },
    {
      type: "category",
      label: "Accessioning",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      type: "category",
      label: "Licensing",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "link",
          label: "Sustainable Use License",
          href: "/docs/sustainable-use-license",
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
            {docs.docs.map((item, index) => (
              <DocsItem key={index} item={item} />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function isItemActive(item: Item, pathname: string): boolean {
  if (item.type === "link") {
    return item.href === pathname;
  } else if (item.type === "category") {
    return (
      item.items?.some((subItem) => isItemActive(subItem, pathname)) ?? false
    );
  } else {
    return false;
  }
}

function DocsItem({ item, level = 0 }: { item: Item; level?: number }) {
  const router = useRouter();
  const currentPath = router.parseLocation().pathname;

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
            <Link
              to={item.href}
              className="font-medium"
              activeOptions={{ exact: true }}
              activeProps={{
                className: "text-emerald-500 hover:text-emerald-400",
              }}
            >
              {item.label}
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      );
    }

    return (
      <SidebarMenuSubItem key={item.href}>
        <SidebarMenuSubButton asChild>
          <Link className="" activeOptions={{ exact: true }} to={item.href}>
            {item.label}
          </Link>
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    );
  } else if (item.type === "category") {
    const isCollapsible = item.collapsible ?? true;
    const isCollapsed = item.collapsed ?? true;
    const isTopLevelCategory = level === 0;

    const isActive = isItemActive(item, currentPath);

    const [isOpen, setIsOpen] = React.useState(() => !isCollapsed || isActive);

    React.useEffect(() => {
      if (isActive) {
        setIsOpen(true);
      }
    }, [isActive]);

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
        <Collapsible key={item.label} open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleComponent>
            <CollapsibleTrigger asChild>
              <ButtonComponent className="group/collapsible select-none">
                {item.href ? (
                  <LinkComponent
                    to={item.href}
                    className="font-medium"
                    activeOptions={{ exact: true }}
                    activeProps={{
                      className: "text-emerald-500 hover:text-emerald-400",
                    }}
                  >
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
                    {item.items.map((subItem, index) => (
                      <DocsItem key={index} item={subItem} level={level + 1} />
                    ))}
                  </SidebarMenuSub>
                ) : (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((subItem, index) => (
                      <DocsItem key={index} item={subItem} level={level + 1} />
                    ))}
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
            <LinkComponent
              to={item.href}
              className="font-medium"
              activeOptions={{ exact: true }}
              activeProps={{
                className: "text-emerald-500 hover:text-emerald-400",
              }}
            >
              {item.label}
            </LinkComponent>
          ) : (
            <ButtonComponent className="font-medium">
              {item.label}
            </ButtonComponent>
          )}
          {item.items?.length ? (
            <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
              {item.items.map((subItem, index) => (
                <DocsItem key={index} item={subItem} level={level + 1} />
              ))}
            </SidebarMenuSub>
          ) : null}
        </SidebarMenuItem>
      );
    }

    return (
      <SidebarMenuSubItem key={item.label}>
        {item.href ? (
          <LinkComponent
            to={item.href}
            className="font-medium"
            activeOptions={{ exact: true }}
          >
            {item.label}
          </LinkComponent>
        ) : (
          <ButtonComponent className="font-medium">
            {item.label}
          </ButtonComponent>
        )}
        {item.items?.length ? (
          <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
            {item.items.map((subItem, index) => (
              <DocsItem key={index} item={subItem} level={level + 1} />
            ))}
          </SidebarMenuSub>
        ) : null}
      </SidebarMenuSubItem>
    );
  }

  return null;
}
