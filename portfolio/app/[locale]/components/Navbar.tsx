"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";

type Props = {
    t: any
}

export default function Navbar({t}: Props) {
    const { resolvedTheme } = useTheme();
    const {locale} = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

    const hamburgerPath = resolvedTheme === "dark" ? `${basePath}/d_hamburger.svg` : `${basePath}/l_hamburger.svg`;
    const closePath = resolvedTheme === "dark" ? `${basePath}/d_close.svg` : `${basePath}/l_close.svg`;

    return (
        <nav className="bg-l_base dark:bg-d_base shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 text-xl font-bold">
                        <Link href={`/${locale}`}>{t.name}</Link>
                    </div>
                    <ul className="hidden md:flex space-x-6">
                        <li><Link href={`/${locale}`}>{t.home}</Link></li>
                        <li><Link href={`/${locale}/about`}>{t.about}</Link></li>
                        <li><Link href={`/${locale}/projects`}>{t.projects}</Link></li>
                        <li><Link href={`/${locale}/contact`}>{t.contact}</Link></li>
                        <li><Link href={`/${locale}/cv`}>{t.cv}</Link></li>
                    </ul>
                    <ul className="flex space-x-6">
                        <li><LocaleSwitcher /></li>
                        <li><ThemeToggle /></li>
                    </ul>
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
                        <img src={isOpen ? closePath : hamburgerPath} alt="menu" className="w-4 h-4"/>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-l_base dark:bg-d_base px-4 pb-4">
                    <ul className="flex flex-col space-y-4">
                        <li><Link href={`/${locale}`} onClick={() => setIsOpen(false)}>{t.home}</Link></li>
                        <li><Link href={`/${locale}/about`} onClick={() => setIsOpen(false)}>{t.about}</Link></li>
                        <li><Link href={`/${locale}/projects`} onClick={() => setIsOpen(false)}>{t.projects}</Link></li>
                        <li><Link href={`/${locale}/contact`} onClick={() => setIsOpen(false)}>{t.contact}</Link></li>
                        <li><Link href={`/${locale}/cv`} onClick={() => setIsOpen(false)}>{t.cv}</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
