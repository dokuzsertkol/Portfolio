import {projects} from '@/data/projects';

interface Props {
    params: {
        slug: string,
        title: string,
        description: string,
        longDescription: string
    }
}

export async function generateStaticParams() {
    const projects = [
        { slug: 'project-1', locale: 'en' },
        { slug: 'project-2', locale: 'en' },
        { slug: 'proje-1', locale: 'tr' },
    ];

    return projects.map((project) => ({
        slug: project.slug,
        locale: project.locale,
    }));
}



export default function ProjectDetail({params}: Props) {
    // const project = projects.find((p) => p.slug === params.slug);

    // if (!project) return <div>Project not found</div>;

    return (
        <main>
            <h1> bu benim id bazlı proje sayfam</h1>
        </main>
    );
}
