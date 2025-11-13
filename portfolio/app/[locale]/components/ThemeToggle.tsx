"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export default function ThemeToggle() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="flex items-center gap-1 px-2 py-1 text-sm">
            <img src={theme === "light" ? "/moon.svg" : "/sun.svg"} alt={theme === "light" ? "Dark Mode" : "Light Mode"} className="w-6 h-6"/>
        </button>
    );
}
