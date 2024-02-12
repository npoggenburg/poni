import {Meta, StoryObj} from '@storybook/react';
import Stack, {DirectionTypes, SpacingTypes} from './Stack';
import React from 'react';

const meta: Meta<typeof Stack> = {
    title: 'Layouts/Stack',
    component: Stack,
    tags: ['autodocs'],
    argTypes: {
        divider: {
            control: {type: 'boolean'},
            description: 'Tag of the text.',
        },
        direction: {
            control: {type: 'radio'},
            options: DirectionTypes,
            description: 'Tag of the text.',
        },
        spacing: {
            control: {type: 'radio'},
            options: SpacingTypes,
            description: 'Tag of the text.',
        },
    },
    args: {
        children: [<div>A</div>, <div>B</div>, <div>C</div>, <div>D</div>, <div>E</div>],
    },
};

export default meta;

type Story = StoryObj<typeof Stack>;

export const Default: Story = {
    name: 'Stack',
    args: {},
};

export const StackSpacingSm: Story = {
    name: 'Stack small spacing',
    args: {
        spacing: 'sm',
    },
};

export const StackSpacingMd: Story = {
    name: 'Stack medium spacing',
    args: {
        spacing: 'md',
    },
};

export const StackSpacingLG: Story = {
    name: 'Stack large spacing',
    args: {
        spacing: 'lg',
    },
};

export const StackRow: Story = {
    name: 'Stack Row',
    args: {
        direction: 'row',
    },
};

export const StackColumn: Story = {
    name: 'Stack Column',
    args: {
        direction: 'col',
    },
};
export const StackDividerRow: Story = {
    name: 'Stack Row with Divider',
    args: {
        direction: 'row',
        divider: true,
    },
};

export const StackDividerColumn: Story = {
    name: 'Stack Column with Divider',
    args: {
        direction: 'col',
        divider: true,
    },
};
