import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from "@tanstack/react-router";
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start";
import type { ReactNode } from "react";
import { DefaultCatchBoundary } from "~/components/DefaultCacheBoundary";
import { NotFound } from "~/components/NotFound";
import { heroDescription, tagLine } from "~/resources/marketing-copy";
import appCss from "~/styles/app.css?url";
import { seo } from "~/utils.seo";

export const Route = createRootRoute({
  meta: () => [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    ...seo({
      title: `Peak LIMS | ${tagLine}`,
      description: heroDescription,
    }),
  ],
  links: () => [
    { rel: "stylesheet", href: appCss },
    // {
    //   rel: "apple-touch-icon",
    //   sizes: "180x180",
    //   href: "/apple-touch-icon.png",
    // },
    // {
    //   rel: "icon",
    //   type: "image/png",
    //   sizes: "32x32",
    //   href: "/favicon-32x32.png",
    // },
    // {
    //   rel: "icon",
    //   type: "image/png",
    //   sizes: "16x16",
    //   href: "/favicon-16x16.png",
    // },
    // { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
    { rel: "icon", href: "/logo.svg" },
  ],
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  );
}
