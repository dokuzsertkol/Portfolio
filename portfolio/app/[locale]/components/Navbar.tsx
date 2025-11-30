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

    const hamburgerPath = resolvedTheme === "dark" ? `${basePath}/navbar/d_hamburger.svg` : `${basePath}/navbar/l_hamburger.svg`;
    const closePath = resolvedTheme === "dark" ? `${basePath}/navbar/d_close.svg` : `${basePath}/navbar/l_close.svg`;

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <nav className="bg-l_base dark:bg-d_base shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center">
                        <div className="flex-shrink-0 text-xl font-bold mr-12">
                            <Link href={`/${locale}`} className="hover:text-white dark:hover:text-l_base transition">{t.name}</Link>
                        </div>
                        <ul className="hidden md:flex space-x-6 mr-auto mt-0.5">
                            <li><Link href={`/${locale}`} className="hover:text-white dark:hover:text-l_base transition">
                                {t.home}</Link>
                            </li>
                            <li><Link href={`/${locale}/about`} className="hover:text-white dark:hover:text-l_base transition">
                                {t.about}</Link>
                            </li>
                            <li><Link href={`/${locale}/projects`} className="hover:text-white dark:hover:text-l_base transition">
                                {t.projects}</Link>
                            </li>
                            <li><Link href={`/${locale}/contact`} className="hover:text-white dark:hover:text-l_base transition">
                                {t.contact}</Link>
                            </li>
                        </ul>
                        <ul className="ml-auto flex">
                            <li><LocaleSwitcher /></li>
                            <li><ThemeToggle /></li>
                            <li>
                                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 ml-auto">
                                    <img src={isOpen ? closePath : hamburgerPath} alt="menu" className="w-4 h-4"/>
                                </button>
                            </li>
                        </ul>
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
        </div>
    );
}
