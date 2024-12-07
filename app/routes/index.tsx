// app/routes/index.tsx
import { createFileRoute } from "@tanstack/react-router";

import { useEffect, useId, useRef } from "react";
import peakLimsScreenshot from "~/assets/peaklims-screenshot.png";
import { WaitlistForm } from "~/components/waitlist-form";
import { tagLine } from "~/resources/marketing-copy";

export const Route = createFileRoute("/")({
  component: Home,
});

// <script async data-uid="3ad496dc0f" src="https://fragrant-firefly-3614.ck.page/3ad496dc0f/index.js"></script>

function useConvertKitEmbed({ dataUid }: { dataUid: string }) {
  const scriptContainerRef = useRef(null);

  useEffect(() => {
    // Check if the script is already present before appending it
    if (
      scriptContainerRef.current &&
      !scriptContainerRef.current.querySelector("script")
    ) {
      const script = document.createElement("script");
      script.src = `https://fragrant-firefly-3614.ck.page/${dataUid}/index.js`;
      script.async = true;
      script.setAttribute("data-uid", dataUid);
      scriptContainerRef.current.appendChild(script);

      return () => {
        if (scriptContainerRef.current) {
          scriptContainerRef.current.removeChild(script);
        }
      };
    }
  }, [dataUid]);

  return scriptContainerRef;
}

function Home() {
  const scriptContainerRef = useConvertKitEmbed({ dataUid: "3ad496dc0f" });
  const bottomScriptContainerRef = useConvertKitEmbed({
    dataUid: "3ad496dc0f",
  });

  return (
    <div className="bg-white">
      <div className="">
        <div className="relative isolate pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a680ff] to-[#10b981] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="py-24 sm:py-32 lg:pb-6">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-[44rem] text-center">
                <h4 className="uppercase font-semibold">
                  Introducing Peak LIMS
                </h4>
                <div className="pt-5">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl text-pretty">
                    {tagLine}
                  </h1>
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Peak LIMS lets you manage your laboratory data with ease and
                  delivers an experience that helps high performing teams accomplish
                  great things.
                </p>
              </div>
              <div className="mt-10 flex items-center justify-center w-full">
                <WaitlistForm
                  classNames={{
                    form: "justify-center",
                  }}
                />

                {/* <div
                  // className="[&_a:data-[element=powered-by]]:hidden"
                  ref={scriptContainerRef}
                  /> */}
              </div>
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 relative">
                  <img
                    alt="App screenshot"
                    src={peakLimsScreenshot}
                    width={2432}
                    height={1442}
                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div> */}
        </div>

        {/* <div className="px-8 pt-10 bg-slate-300"> */}
        <div className="px-8 pt-10">
          <div className="py-24">
            <div className="flex-col items-center justify-center w-full ">
              <div className="flex items-center justify-center">
                <h2 className="text-center text-3xl  max-w-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-pretty">
                  The experience you&apos;ve always expected from a LIMS.
                </h2>
              </div>
              <p className="text-slate-700 font-medium text-center pt-6 text-2xl">
                Built for effective day-to-day use
              </p>
            </div>

            <FeaturesSectionDemo />
          </div>
        </div>

        <div className="px-8 py-0 relative">
          {/* <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-slate-300 to-slate-400/10 h-10 py-10" /> */}
          <div className="absolute top-0 inset-x-0 h-10 py-10" />
          <div className="py-12 mt-5">
            <div className="rounded-xl shadow-md bg-white border-2 py-12 px-12 max-w-6xl mx-auto">
              <div className="w-full">
                <h2 className="text-slate-800 font-bold text-2xl">
                  Get Early Access to Peak LIMS
                </h2>
                <p className="text-slate-600 text-lg pt-3">
                  We&apos;re gathering feedback for our first release and
                  gradually opening up early access to a limited number of labs.
                </p>
                <div className="pt-8">
                  <WaitlistForm
                    classNames={{
                      root: "justify-start items-start",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSectionDemo() {
  return (
    <div className="py-12 lg:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="border-2 relative bg-gradient-to-b from-neutral-100 to-white p-6 rounded-xl overflow-hidden"
          >
            <Grid size={20} />
            {feature.icon && <div className="pb-3">{feature.icon()}</div>}
            <p className="text-base font-bold text-neutral-800 relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={200}
        height={200}
        viewBox="0 0 24 24"
        className="w-6 h-6 text-emerald-500"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m15.238 10.81l-.569 1.694a4.325 4.325 0 0 1-2.757 2.76l-1.713.569a.288.288 0 0 0 0 .548l1.713.569a4.318 4.318 0 0 1 2.736 2.738l.568 1.715a.287.287 0 0 0 .548 0l.59-1.694a4.323 4.323 0 0 1 2.735-2.738l1.714-.569a.288.288 0 0 0 0-.548l-1.692-.59a4.318 4.318 0 0 1-2.757-2.76l-.569-1.715a.289.289 0 0 0-.448-.126a.288.288 0 0 0-.099.148m-8.43-4.914l-.413 1.231a3.145 3.145 0 0 1-2.006 2.007l-1.246.414a.21.21 0 0 0 0 .398l1.246.415a3.14 3.14 0 0 1 1.99 1.99l.413 1.248a.21.21 0 0 0 .398 0l.43-1.232a3.145 3.145 0 0 1 1.99-1.99l1.245-.415a.21.21 0 0 0 0-.398l-1.23-.43A3.141 3.141 0 0 1 7.62 7.128l-.414-1.247a.21.21 0 0 0-.398.016m7.849-3.422l-.207.616a1.572 1.572 0 0 1-1.002 1.004l-.623.207a.104.104 0 0 0-.052.16a.104.104 0 0 0 .052.039l.623.207a1.57 1.57 0 0 1 .995.995l.206.624a.105.105 0 0 0 .2 0l.214-.616a1.573 1.573 0 0 1 .995-.995l.623-.207a.105.105 0 0 0 0-.2l-.615-.214a1.571 1.571 0 0 1-1.003-1.004l-.207-.624a.105.105 0 0 0-.199.008"
        />
      </svg>
    ),
    title: "A modern look and feel",
    description:
      "No more slow, archaic apps stuck in the past. Peak LIMS is designed to be intuitive and easy to use.",
  },
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={200}
        height={200}
        viewBox="0 0 24 24"
        className="w-6 h-6 text-emerald-500"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        >
          <path d="M17.252 12.49c-.284 2.365-1.833 3.31-2.502 3.996c-.67.688-.55.825-.505 1.834a.916.916 0 0 1-.916.971h-2.658a.918.918 0 0 1-.917-.971c0-.99.092-1.22-.504-1.834c-.76-.76-2.548-1.833-2.548-4.784a5.307 5.307 0 1 1 10.55.788" />
          <path d="M10.46 19.236v1.512c0 .413.23.752.513.752h2.053c.285 0 .514-.34.514-.752v-1.512m-2.32-10.54a2.227 2.227 0 0 0-2.226 2.227m10.338.981h1.834m-3.68-6.012l1.301-1.301M18.486 17l1.301 1.3M12 2.377V3.86m-6.76.73l1.292 1.302M4.24 18.3L5.532 17m-.864-5.096H2.835" />
        </g>
      </svg>
    ),
    title: "Rich documentation",
    description:
      "Documentation that is thorough and easy to understand, so you can always find what you need.",
  },
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={200}
        height={200}
        viewBox="0 0 14 14"
        className="w-6 h-6 text-emerald-500"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6.022 4.347a18.452 18.452 0 0 0-1.93 1.686C1.248 8.877-.192 12.046.874 13.113c1.066 1.066 4.236-.375 7.079-3.218a18.452 18.452 0 0 0 1.686-1.931" />
          <path d="M9.639 7.964c1.677 2.226 2.36 4.32 1.532 5.148c-1.067 1.067-4.236-.374-7.08-3.217C1.249 7.05-.191 3.882.875 2.815c.828-.827 2.922-.144 5.148 1.532" />
          <path d="M5.522 7.964a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0m2.51-4.354c-.315-.055-.315-.506 0-.56a2.843 2.843 0 0 0 2.29-2.193L10.34.77c.068-.31.51-.312.58-.003l.024.101a2.858 2.858 0 0 0 2.296 2.18c.316.055.316.509 0 .563a2.858 2.858 0 0 0-2.296 2.18l-.024.101c-.07.31-.512.308-.58-.002l-.02-.087A2.843 2.843 0 0 0 8.03 3.61Z" />
        </g>
      </svg>
    ),
    title: "For laboratory professionals",
    description:
      "Designed to streamline your workflow, allowing you to focus on what you do best.",
  },
  {
    icon: () => (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <rect
          x="0.5"
          y="0.5"
          width={23}
          height={23}
          rx="3.5"
          className="stroke-emerald-500"
        />
        <path
          d="M9.44531 16.9801C10.6882 16.9801 11.7124 15.9609 11.7124 14.7031V13.7287H13.0795V14.7031C13.0795 15.9609 14.0938 16.9801 15.3565 16.9801C16.5994 16.9801 17.6186 15.9609 17.6236 14.7031C17.6335 13.4503 16.5994 12.4361 15.3565 12.4361H14.3771V11.0639H15.3565C16.5994 11.0639 17.6186 10.0497 17.6236 8.78693C17.6335 7.53906 16.5994 6.51989 15.3565 6.51989C14.0938 6.51989 13.0795 7.53906 13.0795 8.78693V9.77131H11.7124V8.78693C11.7124 7.53906 10.6882 6.51989 9.44531 6.51989C8.17756 6.51989 7.15838 7.53906 7.16335 8.78693C7.1733 10.0497 8.17756 11.0639 9.44531 11.0639H10.4148V12.4361H9.44531C8.17756 12.4361 7.15838 13.4503 7.16335 14.7031C7.1733 15.9609 8.17756 16.9801 9.44531 16.9801ZM9.44531 9.77131C8.89347 9.77131 8.45597 9.33381 8.46094 8.78693C8.46591 8.25497 8.89347 7.81747 9.44531 7.81747C9.9723 7.81747 10.4148 8.25497 10.4148 8.78693V9.77131H9.44531ZM9.44531 15.6825C8.89347 15.6825 8.45597 15.245 8.46094 14.7031C8.46591 14.1662 8.89347 13.7287 9.44531 13.7287H10.4148V14.7031C10.4098 15.245 9.9723 15.6825 9.44531 15.6825ZM14.3771 9.77131V8.78693C14.3722 8.25497 14.8097 7.81747 15.3565 7.81747C15.8835 7.81747 16.321 8.25497 16.331 8.78693C16.3359 9.33381 15.8835 9.77131 15.3565 9.77131H14.3771ZM15.3565 15.6825C14.8097 15.6825 14.3771 15.245 14.3771 14.7031V13.7287H15.3565C15.8835 13.7287 16.321 14.1662 16.331 14.7031C16.3359 15.245 15.8835 15.6825 15.3565 15.6825ZM11.7124 12.4361V11.0639H13.0795V12.4361H11.7124Z"
          className="fill-emerald-500"
        />
      </svg>
    ),
    title: "Use the keyboard for everything",
    description: "Optimized for efficiency with extensive keyboard shortcuts.",
  },
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={200}
        height={200}
        viewBox="0 0 24 24"
        className="w-6 h-6 text-emerald-500"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <rect width={16} height={6} x={2} y={2} rx={2} />
          <path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          <rect width={4} height={6} x={8} y={16} rx={1} />
        </g>
      </svg>
    ),
    title: "Easy customization",
    description:
      "Built with modern software practices, customize Peak LIMS to fit your lab's unique needs with confidence.",
  },
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={200}
        height={200}
        viewBox="0 0 640 512"
        className="w-6 h-6 text-emerald-500"
      >
        <path
          fill="currentColor"
          d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3l89.3 89.4l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
        />
      </svg>
    ),
    title: "Built for the long term",
    description:
      "Keeping engineering in mind, Peak LIMS is designed for seamless maintenance and customization with a modern stack.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-100/30 to-zinc-300/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay  stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
