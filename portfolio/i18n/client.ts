"use client";

import { routing } from "./routing";

export function getClientLocale() {
    if (typeof window === "undefined") return routing.defaultLocale;

    const browser = navigator.language.split("-")[0];
    return routing.locales.includes(browser) ? browser : routing.defaultLocale;
}
