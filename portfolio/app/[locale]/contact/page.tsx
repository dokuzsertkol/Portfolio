"use client";

import { useMessages } from "../components/MessageProvider";
import Links from "../components/Links";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const { resolvedTheme } = useTheme();
    const messages = useMessages();
    const t = messages.ContactPage;

    const FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSegbC5laVBrELKjRRZk7zHzngM9cRCLamH0YFGkrnFMUYf-Uw/formResponse";
    const EMAIL = "emreeydev@gmail.com";
    
    const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
    const linkedinPath = resolvedTheme === "dark" ? `${basePath}/homepage/d_linkedin.svg` : `${basePath}/homepage/l_linkedin.svg`;
    const githubPath = resolvedTheme === "dark" ? `${basePath}/homepage/d_github.svg` : `${basePath}/homepage/l_github.svg`;
    
    return (
        <section className="pt-10">
            <h1 className="text-4xl md:text-5xl font-bold mt-5 mb-5">{t.title}</h1>
            <p className="mt-4 text-justify">
                {t.description.split("{email}")[0]}
                <a href={`mailto:${t.email}`} className="text-blue-600 hover:underline">
                    {EMAIL}
                </a>
                {t.description.split("{email}")[1]}
            </p>
            <hr className="my-5"/>
            <div className="my-5">
                <Links linkedinPath={linkedinPath} githubPath={githubPath}/>
            </div>
            <hr className="my-5"/>
            <form
                action={FORM_URL}
                method="POST"
                target="_blank"
                className="space-y-4 p-6 rounded-xl shadow border-l_base dark:border-d_base border-2 mt-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    setStatus("success");
                    setTimeout(() => setStatus("idle"), 5000);

                    const formData = new FormData(e.currentTarget);
                    const params = new URLSearchParams();
                    formData.forEach((value, key) => params.append(key, value.toString()));

                    fetch(FORM_URL, {
                        method: "POST",
                        body: params,
                        mode: "no-cors",
                    }).catch((e) => {

                    });
                }}
            >
                <div>
                    <label className="text-sm font-medium">{t.namelabel}</label>
                    <input
                        required
                        name="entry.149990943"
                        placeholder={t.nameplaceholder}
                        className="w-full mt-1 border rounded-lg p-2 dark:bg-black"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium">{t.emaillabel}</label>
                    <input
                        required
                        type="email"
                        name="entry.1362519247"
                        placeholder={t.emailplaceholder}
                        className="w-full mt-1 border rounded-lg p-2 dark:bg-black"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium">{t.subjectlabel}</label>
                    <input
                        required
                        name="entry.443968910"
                        placeholder={t.subjectplaceholder}
                        className="w-full mt-1 border rounded-lg p-2 dark:bg-black"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium">{t.messagelabel}</label>
                    <textarea
                        required
                        name="entry.740331974"
                        placeholder={t.messageplaceholder}
                        className="w-full mt-1 border rounded-lg p-2 min-h-[120px] dark:bg-black"
                    />
                </div>

                <button type="submit" className="bg-l_base dark:bg-d_base py-2 px-4 rounded-lg w-full">
                    {t.submitbutton}
                </button>

                {status === "success" && (
                    <p className="text-green-600 text-sm mt-2">
                        {t.submitmessage}
                    </p>
                )}
            </form>
        </section>
    );
}