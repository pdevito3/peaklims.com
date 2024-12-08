import { createFileRoute } from "@tanstack/react-router";

import { useState } from "react";
import { cn, headTextBuilder } from "~/utils";

export const Route = createFileRoute("/_marketing-layout/pricing/")({
  component: Pricing,
  meta: () => [
    { title: headTextBuilder({ pageHead: "Pricing" }) },
    { name: "description", content: "Pricing for Peak LIMS" },
  ],
});

const pricing = {
  frequencies: [
    { value: "monthly", label: "Monthly", priceSuffix: "/month" },
    { value: "annually", label: "Annually", priceSuffix: "/year" },
  ],
  tiers: [
    {
      name: "Hobby",
      id: "tier-hobby",
      href: "#",
      price: { monthly: "$19", annually: "$199" },
      description: "The essentials to provide your best work for clients.",
      features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
      mostPopular: false,
    },
    // {
    //   name: "Freelancer",
    //   id: "tier-freelancer",
    //   href: "#",
    //   price: { monthly: "$29", annually: "$299" },
    //   description: "The essentials to provide your best work for clients.",
    //   features: [
    //     "5 products",
    //     "Up to 1,000 subscribers",
    //     "Basic analytics",
    //     "48-hour support response time",
    //   ],
    //   mostPopular: false,
    // },
    // {
    //   name: "Startup",
    //   id: "tier-startup",
    //   href: "#",
    //   price: { monthly: "$59", annually: "$599" },
    //   description: "A plan that scales with your rapidly growing business.",
    //   features: [
    //     "25 products",
    //     "Up to 10,000 subscribers",
    //     "Advanced analytics",
    //     "24-hour support response time",
    //     "Marketing automations",
    //   ],
    //   mostPopular: true,
    // },
    // {
    //   name: "Enterprise",
    //   id: "tier-enterprise",
    //   href: "#",
    //   price: { monthly: "$99", annually: "$999" },
    //   description: "Dedicated support and infrastructure for your company.",
    //   features: [
    //     "Unlimited products",
    //     "Unlimited subscribers",
    //     "Advanced analytics",
    //     "1-hour, dedicated support response time",
    //     "Marketing automations",
    //     "Custom reporting tools",
    //   ],
    //   mostPopular: false,
    // },
  ],
};
const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

function Pricing() {
  const [frequency, setFrequency] = useState(pricing.frequencies[0]);

  return (
    <>
      {/* Pricing section */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-2xl/7 font-semibold text-emerald-600">Pricing</h1>
          {/* <h1 className="text-base/7 font-semibold text-emerald-600">
              Pricing
            </h1> */}
          {/* <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              Pricing that grows with you
            </p> */}
        </div>
        {/* <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
            Choose an affordable plan that’s packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </p> */}
        {/* <div className="mt-16 flex justify-center">
            <fieldset aria-label="Payment frequency">
              <RadioGroup
                value={frequency}
                onChange={setFrequency}
                className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-inset ring-gray-200"
              >
                {pricing.frequencies.map((option) => (
                  <Radio
                    key={option.value}
                    value={option}
                    className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-emerald-600 data-[checked]:text-white"
                  >
                    {option.label}
                  </Radio>
                ))}
              </RadioGroup>
            </fieldset>
          </div> */}
        {/* <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4"> */}
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-3 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                tier.mostPopular
                  ? "ring-2 ring-emerald-600"
                  : "ring-1 ring-gray-200",
                "rounded-3xl p-8",
                "col-start-2" // temp
              )}
            >
              Coming Soon
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 max-w-7xl sm:mt-56 "></div>

      {/* FAQ section */}
      {/* <div className="mx-auto my-24 max-w-7xl px-6 sm:my-56 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Frequently asked questions
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure key={faq.question} as="div" className="pt-6">
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base/7 font-semibold">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon
                          aria-hidden="true"
                          className="size-6 group-data-[open]:hidden"
                        />
                        <MinusSmallIcon
                          aria-hidden="true"
                          className="size-6 [.group:not([data-open])_&]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <p className="text-base/7 text-gray-600">{faq.answer}</p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div> */}
    </>
  );
}
