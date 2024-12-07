import { createFileRoute } from "@tanstack/react-router";
import Logo from "~/assets/logo-with-name.svg";

export const Route = createFileRoute("/email-subscription-confirmed")({
  component: RouteComponent,
});

function RouteComponent() {
  //   Subscription confirmed!
  // Boom! You're officially confirmed and on the list. Expect some great emails headed your way very soon.
  return (
    <div className="w-full h-svh flex flex-col items-center justify-center">
      <img src={Logo} alt="Peak LIMS" className="h-16" />
      <div className="mt-6 md:border-2 md:border-emerald-600 rounded-lg p-10 max-w-2xl md:bg-emerald-300/50">
        <h1 className="text-3xl font-bold">Subscription Confirmed!</h1>
        <p className="text-lg mt-4">
          Boom! You're officially confirmed and on the list. Expect some great
          emails headed your way very soon.
        </p>
      </div>
    </div>
  );
}
