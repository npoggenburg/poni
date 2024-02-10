/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
    safelist: [
        {
            pattern: /grid-cols-(?:[1-9]|1[0-2])/,
            variants: ['sm', 'md', 'lg', 'xl', '2xl'],
        },
    ],
};
