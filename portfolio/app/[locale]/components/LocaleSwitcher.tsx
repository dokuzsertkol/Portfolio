"use client";

import { useState, useRef, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTheme } from "next-themes";

export default function LocaleSwitcher() {
    const { resolvedTheme } = useTheme();
    const router = useRouter();
    const params = useParams();
    const currentLocale = params.locale as string ?? "en";
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

    useEffect(() => setMounted(true), []);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!mounted) return null;

    const switchLocale = (locale: string) => {
        const pathname = window.location.pathname;
        const pathWithoutBase = pathname.replace(/^\/portfolio/, ""); // necessary for github pages
        const newPath = pathWithoutBase.replace(`/${currentLocale}`, `/${locale}`);
        router.push(newPath);
        setOpen(false);
    };

    const trPath = basePath + "/tr.svg";
    const enPath = basePath + "/uk.svg";
    const worldPath = resolvedTheme === "dark" ? `${basePath}/d_world.svg` : `${basePath}/l_world.svg`;

    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={() => setOpen(!open)} className="flex items-center gap-1 px-2 py-1 hover:text-white dark:hover:text-l_base transition">
                <img src={worldPath} alt={currentLocale === "en" ? "Language" : "Dil"} className="w-5 h-5" />
                {currentLocale.toUpperCase()}
                <svg
                    className={`w-6 h-6 transition-transform ${open ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {open && (
                <div className="absolute right-0 mt-2 w-28 bg-white dark:bg-gray-800 border rounded-lg shadow-md z-50">
                    <button
                        onClick={() => switchLocale("en")}
                        className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                        <img src={enPath} alt="English" className="w-4 h-4" />
                        <span>English</span>
                    </button>
                    <button
                        onClick={() => switchLocale("tr")}
                        className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                        <img src={trPath} alt="Türkçe" className="w-4 h-4" />
                        <span>Türkçe</span>
                    </button>
                </div>
            )}
        </div>
    );
}
