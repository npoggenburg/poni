import '../src/index.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        options: {
            storySort: {
                order: ['Unsorted', 'General', 'Elements', 'Layouts', 'Pages', 'Example', '*'],
            },
        },
    },
};

export default preview;
