import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function headTextBuilder({ pageHead }: { pageHead: string }) {
  return pageHead ? `${pageHead} | Peak LIMS` : "Peak LIMS";
}
