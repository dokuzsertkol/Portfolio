"use client";
import { useMessages } from "../components/MessageProvider";

export default function AboutPage() {
    const messages = useMessages();
    const t = messages.AboutPage;

    return (
        <main className="pt-10">
            <section>
                <h1 className="text-4xl md:text-5xl font-bold mt-5 mb-5">{t.title}</h1>
                <div className="space-y-3 mb-5">
                    {t.content.split("\n").map((p: string, i: number) => (
                        <p key={i} className="whitespace-pre-line text-justify">
                            {p.split(/(\*\*.*?\*\*)/g).map((part: string, j: number) =>
                                part.startsWith("**") ? (
                                <strong key={j}>{part.replace(/\*\*/g, "")}</strong>
                                ) : ( part )
                            )}
                        </p>
                    ))}
                </div>
            </section>
            <hr/>
            <section className="mb-5">
                <h2 className="text-2xl md:text-3xl font-bold mt-5 mb-5">{t.skillsTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    <div>
                        <h3 className="text-1xl font-bold">{t.skillsLanguage}</h3>
                        <p className="mb-5 text-justify">C# • JavaScript • TypeScript • SQL • HTML • CSS</p>
                    </div>
                    <div>
                        <h3 className="text-1xl font-bold">{t.skillsBackend}</h3>
                        <p className="mb-5 text-justify">ASP.NET Core • ASP.NET Core Web API • ASP.NET MVC • Node.js</p>
                    </div>
                    <div>
                        <h3 className="text-1xl font-bold">{t.skillsFrontend}</h3>
                        <p className="mb-5 text-justify">React.js • Next.js • Tailwind CSS</p>
                    </div>
                    <div>
                        <h3 className="text-1xl font-bold">{t.skillsDatabase}</h3>
                        <p className="mb-5 text-justify">SQL Server • MongoDB • Entity Framework Core • Mongoose • Redis</p>
                    </div>
                    <div>
                        <h3 className="text-1xl font-bold">{t.skillsDevOps}</h3>
                        <p className="mb-5 text-justify">AWS • Docker • Docker Compose • CI/CD Pipelines</p>
                    </div>
                    <div>
                        <h3 className="text-1xl font-bold">{t.skillsTools}</h3>
                        <p className="mb-5 text-justify">Git • Visual Studio • Visual Studio Code • Postman • SSMS</p>
                    </div>
                </div>
            </section>
            <hr/>
            <p className="italic mt-5 text-right">{t.lastUpdated}</p>
        </main>
    );
}