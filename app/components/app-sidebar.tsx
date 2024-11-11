import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/sidebar";

const items = [
  {
    title: "Home",
    url: "#",
    icon: <></>,
  },
  {
    title: "Inbox",
    url: "#",
    icon: <></>,
  },
  {
    title: "Calendar",
    url: "#",
    icon: <></>,
  },
  {
    title: "Search",
    url: "#",
    icon: <></>,
  },
  {
    title: "Settings",
    url: "#",
    icon: <></>,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
