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
        <div className="relative flex justify-center items-start">
            <img
            src={leftFillerPath}
            alt="left filler"
            className="pointer-events-none select-none hidden md:block absolute left-0 top-0 w-[400px] h-[660px] object-cover"
            />
            <img
            src={rightFillerPath}
            alt="right filler"
            className="pointer-events-none select-none hidden md:block absolute right-0 top-0 w-[400px] h-[660px] object-cover"
            />
            <div className="max-w-4xl px-4 py-16 text-center"> 
                {children}
            </div>
        </div>
    );
}