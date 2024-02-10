import {Meta, StoryObj} from '@storybook/react';
import Button, {SizeTypes, VariantTypes} from './button';

const meta: Meta<typeof Button> = {
    title: 'Elements/Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: VariantTypes,
            control: {type: 'radio'},
        },
        size: {
            options: SizeTypes,
            control: {type: 'radio'},
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        label: 'Default button',
        variant: 'primary',
    },
};

export const Primary: Story = {
    args: {
        label: 'Primary button',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Secondary button',
        variant: 'secondary',
    },
};

export const Small: Story = {
    name: 'Size/Small',
    args: {
        label: 'Small button',
        size: 'small',
    },
};

export const Medium: Story = {
    args: {
        label: 'Medium button',
        size: 'medium',
    },
};

export const Large: Story = {
    args: {
        label: 'Large button',
        size: 'large',
    },
};
