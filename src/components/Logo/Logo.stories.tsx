import {Meta, StoryObj} from '@storybook/react';
import Logo from './Logo';
import React from 'react';

const meta: Meta<typeof Logo> = {
    title: 'Elements/Atoms/Logo',
    component: Logo,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
    name: 'default',
    args: {},
};
