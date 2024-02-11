# Storybook Design System Boilerplate

This is an example project to showcase the basics of a design system with storybook.

One important feature is to export all necessary assts `Css` `Js` `Icons` without the React Application for further use in the Content Management System.

---

## Table of contents

-   [Install](#install)
-   [Commands](#commands)
-   [Get Help](#get-help)
-   [Best Practice](#best-practice)

---

## Install

Clone the Repository:

`git clone git@github.com:npoggenburg/poni.git`

Install NPM Dependencies

`npm i`

Do a "First build" to setup the folders

`npm run build`

Run the Storybook

`npm run storybook`

---

## Commands

Important commands. Find more in `package.json`

-   Run storybook
    `npm run storybook`

-   Run React Application
    `npm run dev`

-   Build for production
    `npm run build`

-   Generate Icon Components from SVG files
    `npm run generateIconComponents`

-   Generate a new Component
    `npx generate-react-cli component MyComponent --type=component`
    `npx generate-react-cli component MyLayout --type=layout`
    `npx generate-react-cli component MyPage --type=page`

---

## Best Practice

### npx generate-react-cli

Use the `npx generate-react-cli` command from the [Commands Section](#commands) to generate a new component.

### Use clsx to map classes in useful chunks

In this example we have one array for every type of classes.

-   Line 2-6: Set classes depending on variable states
-   Line 7: Classes that change how the element looks
-   Line 8-11: State classes. For example hover or focus
-   Line 12: Classes that change how the element behaves / required classes

```
const variantClasses = clsx(
        [variant === 'primary' && 'bg-blue-500 text-white shadow-blue-500/20'],
        [variant === 'secondary' && 'bg-red-500 text-white shadow-red-500/20'],
        [size === 'sm' && 'gap-2 px-4 py-2 text-xs'],
        [size === 'md' && 'gap-2 px-6 py-3 text-sm'],
        [size === 'lg' && 'gap-4 px-10 py-6'],
        ['select-none rounded-lg text-center align-middle font-sans font-bold uppercase shadow-md transition-all'],
        ['active:opacity-[0.85] active:shadow-none'],
        ['focus:opacity-[0.85] focus:shadow-none'],
        ['hover:shadow-lg hover:shadow-blue-500/40'],
        ['disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'],
        ['inline-flex items-center'],
    );
```

---

## Get Help

-   [Storybook Documentation](https://storybook.js.org/docs/)

-   [React Documentation](https://react.dev/reference/react)

-   [Tailwind Documentation](https://react.dev/reference/react)

-   [CLSX](https://github.com/lukeed/clsx)

-   [Generate React CLI](https://github.com/arminbro/generate-react-cli)

-   [Chat GPT](https://chat.openai.com)

---
