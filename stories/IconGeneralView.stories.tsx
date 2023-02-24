import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { IconGeneralView } from "../src";

export default {
    title: 'IconGeneralView',
    component: IconGeneralView
} as ComponentMeta<typeof IconGeneralView>

const Template: ComponentStory<typeof IconGeneralView> = (args) => (
    <IconGeneralView {...args} />
)

export const Default = Template.bind({})
Default.args = {
    fontSize: '1em'
}
