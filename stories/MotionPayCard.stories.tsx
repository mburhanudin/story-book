import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { MotionPayCard } from "../src";

export default {
    title: 'MotionPayCard',
    component: MotionPayCard
} as ComponentMeta<typeof MotionPayCard>

const Template: ComponentStory<typeof MotionPayCard> = (args) => (
    <MotionPayCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
    id: '',
    testId: 'motionPayCard',
    width: '220px',
    height: '121px',
    padding: '20px',
    isLogin: false,
    balance: 0,
    iconSize: '95px',
    onClickLogin: () => {}
}
