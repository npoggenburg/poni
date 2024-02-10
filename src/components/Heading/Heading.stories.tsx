import { Meta, StoryObj } from "@storybook/react";
import Heading, { AsTypes, VariantTypes } from "./Heading";

const meta: Meta<typeof Heading> = {
    title: 'Elements/Atoms/Heading',
    component: Heading,
    tags: ['autodocs'],
  argTypes: {
        children: {
            control: { type: 'text' },
            description: 'The content of the heading. Can be a Text or more complex HTML.'
        },
        variant: {
            options: VariantTypes,
            control: { type: 'select' },
            description: 'Variant of the heading.'
        },
        as: {
            options: AsTypes,
            control: { type: 'select' },
            description: 'Tag of the heading.'
        },}
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const VariantH1: Story = {
    name: 'Variant/H1',
    args: {
      children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, quaerat',
      variant: 'h1'
    },
};

export const VariantH2: Story = {
    name: 'Variant/H2',
    args: {
      children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, quaerat',
      variant: 'h2'
    },
};

export const VariantH3: Story = {
    name: 'Variant/H3',
    args: {
      children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, quaerat',
      variant: 'h3'
    },
};

export const VariantH4: Story = {
    name: 'Variant/H4',
    args: {
      children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, quaerat',
      variant: 'h4'
    },
};

export const VariantH5: Story = {
    name: 'Variant/H5',
    args: {
      children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, quaerat',
      variant: 'h5'
    },
};

export const VariantH6: Story = {
    name: 'Variant/H6',
    args: {
      children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, quaerat',
      variant: 'h6'
    },
};