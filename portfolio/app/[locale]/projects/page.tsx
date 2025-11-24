"use client";

import { type project, projects } from '@/data/projects'
import { useMessages } from "../components/MessageProvider";;
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage() {
    const messages = useMessages();
    const t = messages.ProjectsPage;
    const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

    return (
        <main className="pt-10">
            <h1 className="text-center text-4xl md:text-5xl font-bold mt-5 mb-10">{t.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(projects).map(([slug, project]) => (
                <ProjectCard
                    key={slug}
                    title={project.title}
                    keywords={project.keywords}
                    imageUrl={basePath + project.imageUrl}
                    href={project.href}
                />
            ))}
            </div>
        </main>
    );
}
