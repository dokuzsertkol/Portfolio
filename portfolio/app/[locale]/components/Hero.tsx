"use client";

type Props = {
    t: any,
    heroPath: string
};

export default function Hero({ t, heroPath }: Props) {
    return (
        <section className="flex flex-col items-center justify-center text-center mb-5">
            <div className="w-24 h-24 rounded-full border-4 border-l_base dark:border-d_base flex items-center justify-center">
                <img src={heroPath} alt="Emre E." className="hover:animate-spinClockwise w-24 h-24 mb-5 rounded-full mt-4 shadow-md"/>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.name}</h1>
            <p className="text-lg md:text-xl max-w-2xl">{t.title}</p>
        </section>
    );
}