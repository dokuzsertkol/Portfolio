"use client";

import { projects, chapter } from "@/data/projects";
import { notFound, useParams } from "next/navigation";
import { useMessages } from "../../components/MessageProvider";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import Link from "next/link";
import ProjectChapter from "../../components/ProjectChapter";

export default function ProjectDetail() {
    const { resolvedTheme } = useTheme();
    const { slug, locale: paramLocale } = useParams<{ slug: string; locale: string }>();

    const messages = useMessages();
    const t = messages.ProjectDetailPage;

    const project = projects[slug as string];
    const locale = paramLocale === "en" || paramLocale === "tr" ? paramLocale : null;

    const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
    const githubPath = resolvedTheme === "dark" ? `${basePath}/homepage/d_github.svg` : `${basePath}/homepage/l_github.svg`;
    const linkPath = resolvedTheme === "dark" ? `${basePath}/projectdetails/d_link.svg` : `${basePath}/projectdetails/l_link.svg`;

    if (!project || !locale) return notFound();

    return (
        <main className="pt-10">
            <h1 className="text-center text-4xl md:text-5xl font-bold mt-5 mb-5">
                {project.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center mb-10 gap-4">
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-2 rounded-full bg-l_base dark:bg-d_base 
                        hover:bg-l_base_hover dark:hover:bg-d_base_hover 
                        transition shadow-md flex items-center justify-center gap-2">
                        <img src={githubPath} alt="Github" className="w-6 h-6"/>
                        <span>GitHub Repository</span>
                    </button>
                </a>
                {project.liveUrl?.[locale]?.map((demo, index) => (
                    <a key={index} href={demo.url} target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 rounded-full bg-l_base dark:bg-d_base 
                            hover:bg-l_base_hover dark:hover:bg-d_base_hover 
                            transition shadow-md flex items-center justify-center gap-2">
                            <img src={linkPath} alt="Link" className="w-5 h-5"/>
                            <span>{demo.text}</span>
                        </button>
                    </a>
                ))}
            </div>

            {project.description?.[locale]?.map((chapter: chapter, index: number) => (
                <ProjectChapter chapter={chapter} key={index} />
            ))}

            <hr className="mt-16 mb-5"/>
            <div className="text-center">
                <Link href={`/${locale}/projects`}>
                    <button  className="w-[250px] md:w-[450px] px-4 py-2 rounded-full bg-l_base dark:bg-d_base 
                    hover:bg-l_base_hover dark:hover:bg-d_base_hover transition mb-5 shadow-md">
                        {t.footer}
                    </button>
                </Link>
            </div>
        </main>
    );
}