import { ComponentMeta, ComponentStory } from "@storybook/react";

import Chevron from "./Chevron";

export default {
  title: "icons/Chevron",
  component: Chevron,
} as ComponentMeta<typeof Chevron>;

const Template: ComponentStory<typeof Chevron> = (args) => <Chevron {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 28,
};
