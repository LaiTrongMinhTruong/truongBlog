import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type SupportedLang = "vn" | "en";

export function isSupportedLang(value: string | undefined | null): value is SupportedLang {
  return value === "vn" || value === "en";
}
