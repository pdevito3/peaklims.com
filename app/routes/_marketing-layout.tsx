import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

import logoWhite from "~/assets/logo-with-name-white.svg";
import logo from "~/assets/logo-with-name.svg";

export const Route = createFileRoute("/_marketing-layout")({
  component: RouteComponent,
});

const navigation = [{ name: "Docs", href: "/docs" }];
const footerNavigation = {
  // solutions: [
  //   { name: "Marketing", href: "#" },
  //   { name: "Analytics", href: "#" },
  //   { name: "Automation", href: "#" },
  //   { name: "Commerce", href: "#" },
  //   { name: "Insights", href: "#" },
  // ],
  // support: [
  //   { name: "Submit ticket", href: "#" },
  //   { name: "Documentation", href: "#" },
  //   { name: "Guides", href: "#" },
  // ],
  company: [
    // { name: "About", href: "#" },
    // { name: "Blog", href: "#" },
    // { name: "Jobs", href: "#" },
    // { name: "Press", href: "#" },
    { name: "Contact Us", href: "mailto:support@peaklims.com" },
  ],
  // legal: [
  //   { name: "Terms of service", href: "#" },
  //   { name: "Privacy policy", href: "#" },
  //   { name: "License", href: "#" },
  // ],
};

function RouteComponent() {
  return (
    <div className="bg-white h-dvh">
      <header>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 ">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Peak LIMS</span>
            <img alt="Peak LIMS logo" src={logo} className="h-8 w-auto" />
          </Link>
          <div className="hidden md:flex md:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm/6 font-semibold text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main className="min-h-[80dvh]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <img alt="Peak LIMS" src={logoWhite} className="h-9" />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-white">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation?.company?.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-400 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  {/* <h3 className="text-sm/6 font-semibold text-white">Legal</h3> */}
                  {/* <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation?.legal?.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-400 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
