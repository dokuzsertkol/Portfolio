const config = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                l_base: "#BFECFF",
                d_base: "#070D12",
            },
            keyframes: {
                spinClockwise: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
                sway: { 
                    '0%, 100%': { transform: 'rotate(-5deg)' },
                    '50%': { transform: 'rotate(5deg)' },
                },
            },
            animation: {
                spinClockwise: "spinClockwise 0.5s linear infinite",
                "sway-05": "sway 0.5s ease-in-out infinite",
                "sway-2": "sway 2s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};

export default config;
