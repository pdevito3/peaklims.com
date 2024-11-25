import { cn } from "~/utils";

export function InfoCircle({ className, ...props }: { className?: string }) {
  return (
    // https://iconbuddy.com/mage/information-circle

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      viewBox="0 0 24 24"
      className={cn("w-4 h-4", className)}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          strokeWidth="1.5"
          d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19m.005-4.222v-6.333"
        />
        <path strokeWidth={2} d="M11.956 7.443h.01" />
      </g>
    </svg>
  );
}
