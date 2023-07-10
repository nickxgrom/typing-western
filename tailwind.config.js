/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "var(--text-primary)",
                "secondary": "var(--text-secondary)",
                "main": "var(--background-main)",
            },
        },
    },
    plugins: [],
}

