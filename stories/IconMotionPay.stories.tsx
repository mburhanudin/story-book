import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { IconMotionPay } from "../src";

export default {
    title: 'IconMotionPay',
    component: IconMotionPay
} as ComponentMeta<typeof IconMotionPay>

const Template: ComponentStory<typeof IconMotionPay> = (args) => (
    <IconMotionPay {...args} />
)

export const Default = Template.bind({})
Default.args = {
    width: '1em'
}
