/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
    extend: {
        colors: {
            l_base: "#BFECFF",
            d_base: "#070D12",
        }
    },
};
export const plugins = [];

