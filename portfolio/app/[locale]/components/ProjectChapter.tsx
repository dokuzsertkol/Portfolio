import { chapter } from "@/data/projects";

export default function ProjectChapter({ chapter, level = 2 }: { chapter: chapter; level?: number }) {
    const { contentType } = chapter;

    switch (contentType) {
        case "text":
            return (
                <p className=" text-justify">{chapter.description}</p>
            );

        case "code":
            return (
                <div className="w-[calc(100vw-2rem)] md:w-full md:max-w-7xl bg-l_base dark:bg-d_base rounded-md px-4 z-10 my-5">
                    <div className="overflow-auto bg-l_base dark:bg-d_base py-4">
                        <pre>
                            <code>
                                {chapter.description?.replace(/^```[a-z]*\n|```$/g, "")}
                            </code>
                        </pre>
                    </div>
                </div>
            );

        case "image":
            return (
                <figure className="my-6">
                    <img
                        src={chapter.title}
                        alt={chapter.description ?? ""}
                        className="w-full rounded-lg shadow-md border-l_base dark:border-d_base border-4 object-cover"
                    />
                </figure>
            );

        case "link":
            return (
                <div className="my-3">
                    <a
                        href={chapter.description}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline break-words"
                    >
                        {chapter.title ?? chapter.description}
                    </a>
                </div>
            );

        case "list":
            return (
                <ul className="list-disc ml-6 mb-2 space-y-1">
                    {chapter.content?.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">
                        {item.contentType === "text" ? (
                            <span className="whitespace-pre-wrap">{item.description}</span>
                        ) : (
                            <ProjectChapter chapter={item} />
                        )}
                        </li>
                    ))}
                </ul>
            );

        case "table":
            return (
                <div className="w-[calc(100vw-2rem)] md:w-full md:max-w-7xlpx-4 z-10 my-5">
                    <div className="overflow-auto py-4">
                        <table className="min-w-full border-collapse">
                            <tbody>
                            {chapter.content?.map((row, rowIdx) => {
                                const cells =
                                typeof row.description === "string"
                                    ? row.description.split("|").map((c) => c.trim())
                                    : [row.title ?? ""];
                                return (
                                <tr key={rowIdx} className="border-b last:border-b-0">
                                    {cells.map((cell, cellIdx) => (
                                    <td key={cellIdx} className="p-2 align-top">
                                        <div className="whitespace-pre-wrap text-sm">{cell}</div>
                                    </td>
                                    ))}
                                </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            );

        case "chapter":
            return level === 2 ? (
                <section>
                    {chapter.title && (
                        <>
                            <h2 className="text-3xl font-bold mt-10 mb-2">&gt; {chapter.title}</h2>
                            <hr className="border-gray-300 mb-2" />
                        </>
                    )}
                    {chapter.description && <p className="text-justify">{chapter.description}</p>}
                    {chapter.content?.map((child, idx) => (
                        <ProjectChapter key={idx} chapter={child} level={level + 1} />
                    ))}
                </section>
            ) : (
                <>
                    {chapter.title && <h3 className="text-2xl font-bold mt-5 mb-2">{chapter.title}</h3>}
                    {chapter.description && <p className="text-justify">{chapter.description}</p>}
                    {chapter.content?.map((child, idx) => (
                        <ProjectChapter key={idx} chapter={child} level={level + 1} />
                    ))}
                </>
            );

        default:
            return null;
    }
}