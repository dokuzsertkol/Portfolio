"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const locales = ["en", "tr"];
const defaultLocale = "en";

export default function HomePage() {
    const router = useRouter();

    useEffect(() => {
        const browserLang = navigator.language.split("-")[0];
        const locale = locales.includes(browserLang) ? browserLang : defaultLocale;

        router.push(`/${locale}`);
    }, [router]);

    return null;
}
