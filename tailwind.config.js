/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                pink: {
                    50: 'hsl(356, 100%, 97%)',
                    100: 'hsl(353, 100%, 95%)',
                    200: 'hsl(349, 100%, 90%)',
                    300: 'hsl(351, 100%, 81%)',
                    400: 'hsl(349, 100%, 71%)',
                    500: 'hsl(348, 98%, 60%)',
                    600: 'hsl(345, 85%, 52%)',
                    700: 'hsl(344, 91%, 41%)',
                    800: 'hsl(341, 88%, 35%)',
                    900: 'hsl(340, 83%, 30%)',
                    950: 'hsl(342, 98%, 16%)',
                },
                slate: {
                    50: 'hsl(180, 37%, 97%)',
                    100: 'hsl(178, 43%, 89%)',
                    200: 'hsl(180, 40%, 78%)',
                    300: 'hsl(182, 35%, 64%)',
                    400: 'hsl(184, 27%, 50%)',
                    500: 'hsl(185, 38%, 40%)',
                    600: 'hsl(186, 41%, 32%)',
                    700: 'hsl(188, 35%, 26%)',
                    800: 'hsl(186, 29%, 22%)',
                    900: 'hsl(189, 22%, 19%)',
                    950: 'hsl(190, 65%, 9%)',
                },
                gray: {
                    50: 'hsl(204, 26%, 96%)',
                    100: 'hsl(196, 22%, 90%)',
                    200: 'hsl(196, 20%, 82%)',
                    300: 'hsl(197, 20%, 69%)',
                    400: 'hsl(196, 18%, 53%)',
                    500: 'hsl(198, 21%, 43%)',
                    600: 'hsl(202, 20%, 36%)',
                    700: 'hsl(201, 18%, 31%)',
                    800: 'hsl(202, 16%, 27%)',
                    900: 'hsl(208, 14%, 24%)',
                    950: 'hsl(206, 17%, 18%)',
                },
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
