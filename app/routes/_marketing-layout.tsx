import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

import { useState } from "react";
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
  // company: [
  //   { name: "About", href: "#" },
  //   { name: "Blog", href: "#" },
  //   { name: "Jobs", href: "#" },
  //   { name: "Press", href: "#" },
  // ],
  // legal: [
  //   { name: "Terms of service", href: "#" },
  //   { name: "Privacy policy", href: "#" },
  //   { name: "License", href: "#" },
  // ],
};

function RouteComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [frequency, setFrequency] = useState(pricing.frequencies[0]);
  return (
    <div className="bg-white h-dvh">
      <header>
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Peak LIMS</span>
            <img alt="Peak LIMS logo" src={logo} className="h-8 w-auto" />
          </Link>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              {/* <Bars3Icon aria-hidden="true" className="size-6" /> */}
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
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
        {/* <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=emerald&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog> */}
      </header>

      <main className="min-h-[80dvh]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <img alt="Peak LIMS" src={logo} className="h-9" />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  {/* <h3 className="text-sm/6 font-semibold text-white">
                    Solutions
                  </h3> */}
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation?.solutions?.map((item) => (
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
                  {/* <h3 className="text-sm/6 font-semibold text-white">
                    Support
                  </h3> */}
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation?.support?.map((item) => (
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
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  {/* <h3 className="text-sm/6 font-semibold text-white">
                    Company
                  </h3> */}
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
                  <ul role="list" className="mt-6 space-y-4">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
