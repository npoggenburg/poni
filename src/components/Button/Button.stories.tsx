import {Meta, StoryObj} from '@storybook/react';
import Button, {ColorTypes, IconPositionTypes, SizeTypes, VariantTypes} from './Button';
import {IconTypes} from '../Icon/Icon';

const meta: Meta<typeof Button> = {
    title: 'Elements/Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: {type: 'text'},
            description: 'The content of the button. Can be a Text or more complex HTML.',
        },
        variant: {
            options: VariantTypes,
            control: {type: 'radio'},
            description: 'Variant of the button. Like different color, borders etc.',
        },
        size: {
            options: SizeTypes,
            control: {type: 'radio'},
            description: 'Button sizes.',
        },
        color: {
            options: ColorTypes,
            control: {type: 'select'},
            description: 'Available colors.',
        },
        icon: {
            options: ['', ...IconTypes],
            control: {type: 'select'},
            description: 'Available Icons to display inside the button.',
        },
        iconPosition: {
            options: IconPositionTypes,
            control: {type: 'radio'},
            description: 'Position of the icon inside a button',
            if: {arg: 'icon', neq: ''},
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    name: 'Variant/Default',
    args: {
        children: 'Default button',
        variant: 'filled',
    },
};

export const Primary: Story = {
    name: 'Variant/Primary',
    args: {
        children: 'Primary button',
        variant: 'filled',
    },
};

export const Secondary: Story = {
    name: 'Variant/Secondary',
    args: {
        children: 'Secondary button',
        variant: 'outlined',
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
        icon: 'ChevronRight',
    },
};

export const IconBefore: Story = {
    name: 'Icon/Before',
    args: {
        children: 'Icon button',
        icon: 'ChevronRight',
        iconPosition: 'before',
    },
};

export const IconAfter: Story = {
    name: 'Icon/After',
    args: {
        children: 'Icon button',
        icon: 'ChevronRight',
        iconPosition: 'after',
    },
};

export const IconOnly: Story = {
    name: 'Icon Only',
    args: {
        children: '',
        icon: 'ChevronRight',
    },
};
