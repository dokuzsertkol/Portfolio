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
    
    const leftFillerPath = resolvedTheme === "dark" ? `${basePath}/d_filler_left.png` : `${basePath}/l_filler_left.png`;
    const rightFillerPath = resolvedTheme === "dark" ? `${basePath}/d_filler_right.png` : `${basePath}/l_filler_right.png`;

    return (
        <div className="relative flex justify-center items-start pt-10">
            <img
            src={leftFillerPath}
            alt="left filler"
            className="pointer-events-none select-none hidden md:block fixed left-0 top-0 w-[400px] h-[660px] object-cover pt-16"
            />
            <img
            src={rightFillerPath}
            alt="right filler"
            className="pointer-events-none select-none hidden md:block fixed right-0 top-0 w-[400px] h-[660px] object-cover pt-16"
            />
            <div className="max-w-4xl px-4 py-10 "> 
                {children}
            </div>
        </div>
    );
}