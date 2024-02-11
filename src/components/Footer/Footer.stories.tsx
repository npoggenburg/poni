/* eslint-disable */
import {Meta, StoryObj} from '@storybook/react';
import Footer from './Footer';
import React from 'react';

const meta: Meta<typeof Footer> = {
    title: 'Elements/Components/Footer',
    component: Footer,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
    name: 'default',
    args: {},
};
