"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Hero from "./components/Hero";
import Links from "./components/Links";
import { useMessages } from "./components/MessageProvider";


export default function HomePage() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const messages = useMessages();
    const t = messages.HomePage;

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
    const heroPath = basePath + "/hero.png";
    const linkedinPath = resolvedTheme === "dark" ? `${basePath}/d_linkedin.svg` : `${basePath}/l_linkedin.svg`;
    const githubPath = resolvedTheme === "dark" ? `${basePath}/d_github.svg` : `${basePath}/l_github.svg`;

    return (
        <main >
            <Hero heroPath={heroPath} t={t}/>
            <Links linkedinPath={linkedinPath} githubPath={githubPath}/>
        </main>
    );
}
