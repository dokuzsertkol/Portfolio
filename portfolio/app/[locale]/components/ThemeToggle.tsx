"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export default function ThemeToggle() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    
    const imagePath = theme === "dark" ? `${basePath}/sun.svg` : `${basePath}/moon.svg`;

    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="flex items-center gap-1 px-2 py-1 text-sm">
            <img src={imagePath} alt={theme === "light" ? "Dark Mode" : "Light Mode"} className="w-6 h-6"/>
        </button>
    );
}
