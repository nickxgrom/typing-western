/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#D1D0C5",
                "secondary": "#646669",
                "main": "#323437",
            },
        },
    },
    plugins: [],
}

