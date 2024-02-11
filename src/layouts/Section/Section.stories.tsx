/* eslint-disable */
import {Meta, StoryObj} from '@storybook/react';
import Section from './Section';
import React from 'react';

const meta: Meta<typeof Section> = {
    title: 'Layouts/Section',
    component: Section,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
    name: 'default',
    args: {},
};
