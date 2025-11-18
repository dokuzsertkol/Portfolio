"use client";

type Props = {
    linkedinPath: string,
    githubPath: string
};

export default function Links({ linkedinPath, githubPath }: Props) {
    return (
        <section className="flex flex-col items-center justify-center text-center mt-10 mb-5">
            <ul className="flex space-x-6">
                <li>
                    <a href="https://www.linkedin.com/in/emreey/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinPath} alt="LinkedIn" className="hover:animate-sway-05 w-16 h-16"/>
                    </a>
                </li>
                <li className="flex items-center">
                    <div className="w-px h-12 bg-gray-400"></div>
                </li>
                <li>
                    <a href="https://www.github.com/dokuzsertkol" target="_blank" rel="noopener noreferrer">
                        <img src={githubPath} alt="Github" className="hover:animate-sway-05 w-16 h-16"/>
                    </a>
                </li>
            </ul>
        </section>
    );
}