"use client";

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import React from "react";

type Props = {
    children: React.ReactNode
};

export default function FillerImage({ children } : Props) {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
    
    const leftFillerPath = resolvedTheme === "dark" ? `${basePath}/filler/d_filler_left.png` : `${basePath}/filler/l_filler_left.png`;
    const rightFillerPath = resolvedTheme === "dark" ? `${basePath}/filler/d_filler_right.png` : `${basePath}/filler/l_filler_right.png`;

    return (
        <div className="relative flex justify-center items-center min-h-screen">
        <img
            src={leftFillerPath}
            alt="left filler"
            className="pointer-events-none select-none hidden md:block fixed left-0 top-1/2 -translate-y-1/2 w-[400px] h-[660px] object-cover z-0"
        />
        <img
            src={rightFillerPath}
            alt="right filler"
            className="pointer-events-none select-none hidden md:block fixed right-0 top-1/2 -translate-y-1/2 w-[400px] h-[660px] object-cover z-0"
        />
        <div className="w-4/6 max-w-7xl px-4 py-10 z-10 bg-white dark:bg-black transition">
            {children}
        </div>
    </div>
    );
}