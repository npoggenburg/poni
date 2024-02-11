/* eslint-disable */
import {Meta, StoryObj} from '@storybook/react';
import Header from './Header';
import React from 'react';

const meta: Meta<typeof Header> = {
    title: 'Unsorted/Header',
    component: Header,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
    name: 'default',
    args: {},
};
