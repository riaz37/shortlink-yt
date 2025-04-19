import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return 'http://localhost:3000'; // fallback for SSR
}

export function isValidUrl(url:string):boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === "http:" || urlObj.protocol === "https:";
  } catch (error) {
    return false;
  }
}

export function ensureHttps(url:string):string {
  if(!url.startsWith("https://") && !url.startsWith("http://")) {
    return `https://${url}`;
  }

  if(url.startsWith("http://")) {
    return url.replace("http://", "https://");
  }

  return url;
}
