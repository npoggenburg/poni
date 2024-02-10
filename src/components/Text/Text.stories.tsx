import {Meta, StoryObj} from '@storybook/react';
import Text, {AsTypes, VariantTypes} from './Text';

const meta: Meta<typeof Text> = {
    title: 'Elements/Atoms/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: {type: 'text'},
            description: 'The content of the text. Can be a Text or more complex HTML.',
        },
        as: {
            options: AsTypes,
            control: {type: 'select'},
            description: 'Tag of the text.',
        },
        variant: {
            options: VariantTypes,
            control: {type: 'select'},
            description: 'Variant of the text.',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const TextTiny: Story = {
    name: 'Text/Tiny',
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, quaerat',
        variant: 'tiny',
    },
};

export const TextSmall: Story = {
    name: 'Text/Small',
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, quaerat',
        variant: 'small',
    },
};

export const TextDefault: Story = {
    name: 'Text/Default',
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, quaerat',
    },
};

export const TextLead: Story = {
    name: 'Text/Lead',
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, quaerat',
        variant: 'lead',
    },
};

export const TextAsP: Story = {
    name: 'Text/Paragraph',
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, quaerat',
        as: 'p',
    },
};

export const TextAsSpan: Story = {
    name: 'Text/Span',
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, quaerat',
        as: 'span',
    },
};

export const TextAsDiv: Story = {
    name: 'Text/Div',
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, quaerat',
        as: 'div',
    },
};
