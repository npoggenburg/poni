import {Meta, StoryObj} from '@storybook/react';
import Button, {IconPositionTypes, SizeTypes, VariantTypes} from './Button';
import { IconTypes } from '../Icon/Icon';

const meta: Meta<typeof Button> = {
    title: 'Elements/Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: { type: 'text' },
            description: 'The content of the button. Can be a Text or more complex HTML.'
        },
        variant: {
            options: VariantTypes,
            control: { type: 'radio' },
            description: 'Variant of the button. Like different color, borders etc.'
        },
        size: {
            options: SizeTypes,
            control: {type: 'radio'},
            description: 'Button sizes.'
        },
        icon: {
            options: ['', ...IconTypes],
            control: {type: 'select'},
            description: 'Available Icons to display inside the button.'
        },
        iconPosition: {
            options: IconPositionTypes,
            control: {type: 'radio'},
            description: 'Position of the icon inside a button',
            if: { arg: 'icon', neq: '' }
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    name: 'Variant/Default',
    args: {
        children: 'Default button',
        variant: 'primary',
    },
};

export const Primary: Story = {
    name: 'Variant/Primary',
    args: {
        children: 'Primary button',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    name: 'Variant/Secondary',
    args: {
        children: 'Secondary button',
        variant: 'secondary',
    },
};

export const Small: Story = {
    name: 'Size/Small',
    args: {
        children: 'Small button',
        size: 'sm',
    },
};

export const Medium: Story = {
    name: 'Size/Medium',
    args: {
        children: 'Medium button',
        size: 'md',
    },
};

export const Large: Story = {
    name: 'Size/Large',
    args: {
        children: 'Large button',
        size: 'lg',
    },
};

export const Icon: Story = {
    name: 'With Icon',
    args: {
        children: 'Icon button',
        icon: 'chevron-right',
    },
};

export const IconBefore: Story = {
    name: 'Icon/Before',
    args: {
        children: 'Icon button',
        icon: 'chevron-right',
        iconPosition: 'before',
    },
};

export const IconAfter: Story = {
    name: 'Icon/After',
    args: {
        children: 'Icon button',
        icon: 'chevron-right',
        iconPosition: 'after',
    },
};
