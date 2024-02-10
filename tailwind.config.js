/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
    safelist: [
        {
            pattern: /grid-cols-(?:[1-9]|1[0-2])/,
            variants: ['sm', 'md', 'lg', 'xl', '2xl'],
        },
    ],
};
