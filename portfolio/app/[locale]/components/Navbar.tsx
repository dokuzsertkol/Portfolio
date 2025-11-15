"use client";

import Link from "next/link";
import {useParams} from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";

type Props = {
    t: any;
}

export default function Navbar({t}: Props) {
    const {locale} = useParams();

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
                    <ul className="hidden md:flex space-x-6">
                        <li><LocaleSwitcher /></li>
                        <li><ThemeToggle /></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
