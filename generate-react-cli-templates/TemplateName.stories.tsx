/* eslint-disable */
import {Meta, StoryObj} from '@storybook/react';
import TemplateName from './TemplateName';
import React from 'react';

const meta: Meta<typeof TemplateName> = {
    title: 'Unsorted/TemplateName',
    component: TemplateName,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TemplateName>;

export const Default: Story = {
    name: 'default',
    args: {},
};
