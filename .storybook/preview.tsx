import {Preview} from '@storybook/react';
import '../src/index.css';
import React from 'react';
import HTMLComment from 'react-html-comment';

/** @type { import('@storybook/react').Preview } */
const preview: Preview = {
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
    decorators: [
        (Story, context) => {
            const componentId = context.componentId;
            const componentName = context.component?.name ? ' | ' + context.component?.name : '';
            const storyName = ' - ' + context.name;
            return (
                <>
                    <HTMLComment text={`@component: ${componentId}${componentName}${storyName}`} />
                    <Story />
                </>
            );
        },
    ],
};

export default preview;
