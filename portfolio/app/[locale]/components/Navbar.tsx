'use client';

import Link from 'next/link';
import {useParams} from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const {locale} = useParams();

    return (
        <nav>
                <ul>
                    <li><Link href={`/${locale}`}>Home</Link></li>
                    <li><Link href={`/${locale}/about`}>About</Link></li>
                    <li><Link href={`/${locale}/projects`}>Projects</Link></li>
                    <li><Link href={`/${locale}/contact`}>Contact</Link></li>
                    <li><Link href={`/${locale}/cv`}>CV</Link></li>
                </ul>
                <ThemeToggle />
        </nav>
    );
}
