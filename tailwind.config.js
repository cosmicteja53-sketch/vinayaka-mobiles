/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                black: "#080808",
                white: "#ffffff",
                "off-white": "#f5f5f5",
                teal: "#00D4FF",
                "gray-100": "#e5e5e5",
                "gray-200": "#cccccc",
                "gray-500": "#888888",
                "gray-800": "#222222",
            },
            fontFamily: {
                playfair: ["var(--font-playfair)", "Georgia", "serif"],
                inter: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            animation: {
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
        },
    },
    plugins: [],
};
