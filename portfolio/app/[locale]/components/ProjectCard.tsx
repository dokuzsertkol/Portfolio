import type { project } from '@/data/projects';
import { useTheme } from "next-themes";
import Link from "next/link";

export default function ProjectCard ({title, keywords, imageUrl, href}: project) {
    const { resolvedTheme } = useTheme();
    return (
        <Link href={href}>
            <div className="rounded-2xl h-full shadow-md border-l_base dark:border-d_base border-4 hover:bg-l_base hover:dark:bg-d_base bg-white dark:bg-black overflow-hidden hover:shadow-xl transition p-6">
                <div className="w-full aspect-[16/9] overflow-hidden border-2 rounded-xl shadow-md flex items-center justify-center bg-gray-100">
                    <img src={imageUrl} alt={title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-semibold mt-2 mb-2">{title}</h3>
                <p className="italic">{keywords}</p>
            </div>
        </Link>
    );
};
