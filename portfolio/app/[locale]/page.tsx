"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

import Hero from "./components/Hero";
import Links from "./components/Links";
import { useMessages } from "./components/MessageProvider";
import { useParams } from "next/navigation";


export default function HomePage() {
    const { resolvedTheme } = useTheme();
    const { locale } = useParams();
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
        <main className="text-center">
            <p className="animate-sway-2 text-lg md:text-xl font-bold mb-10">{t.welcome}</p>
            
            <Hero heroPath={heroPath} t={t}/>
            <hr className="mb-5"/>
            <Link href={`/${locale}/about`}>
                <button  className="w-[250px] md:w-[450px] px-4 py-2 rounded-full bg-l_base dark:bg-d_base 
                hover:bg-l_base_hover dark:hover:bg-d_base_hover transition mb-5 shadow-md">
                    {t.about}
                </button>
            </Link>
            <br/>
            <Link href={`/${locale}/projects`}>
                <button  className="w-[200px] md:w-[400px] px-4 py-2 rounded-full bg-l_base dark:bg-d_base 
                hover:bg-l_base_hover dark:hover:bg-d_base_hover transition mb-5 shadow-md">
                    {t.projects}
                </button>
            </Link>
            <br/>
            <Link href={`/${locale}/contact`}>
                <button  className="w-[250px] md:w-[450px] px-4 py-2 rounded-full bg-l_base dark:bg-d_base 
                hover:bg-l_base_hover dark:hover:bg-d_base_hover transition mb-5 shadow-md">
                    {t.contact}
                </button>
            </Link>
            <hr className="mb-5"/>
            <Links linkedinPath={linkedinPath} githubPath={githubPath}/>
        </main>
    );
}
