import {Meta, StoryObj} from '@storybook/react';
import StageSlider from './StageSlider';

const meta: Meta<typeof StageSlider> = {
    title: 'Elements/Components/StageSlider',
    component: StageSlider,
    tags: ['autodocs'],
    argTypes: {
        items: {
            description: 'Switch pages for change to become active!',
        },
    },
};

export default meta;

type Story = StoryObj<typeof StageSlider>;

export const DefaultStageSlider: Story = {
    name: 'Stage Slider with 10 items',
    args: {
        items: 10,
    },
};

export const SingleItemStageSlider: Story = {
    name: 'Stage Slider with 1 item',
    args: {
        items: 1,
    },
};
