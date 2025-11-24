"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export default function ThemeToggle() {
    const {resolvedTheme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    
    const imagePath = resolvedTheme === "dark" ? `${basePath}/navbar/sun.svg` : `${basePath}/navbar/moon.svg`;

    return (
        <button onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")} className="flex items-center gap-1 px-2 py-1 text-sm">
            <img src={imagePath} alt={resolvedTheme === "light" ? "Dark Mode" : "Light Mode"} className="w-6 h-6"/>
        </button>
    );
}
