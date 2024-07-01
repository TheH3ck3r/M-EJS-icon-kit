import { ComponentMeta, ComponentStory } from "@storybook/react";

import Cross from "./Cross";

export default {
  title: "icons/Cross",
  component: Cross,
} as ComponentMeta<typeof Cross>;

const Template: ComponentStory<typeof Cross> = (args) => <Cross {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
