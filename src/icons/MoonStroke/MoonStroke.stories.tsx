import { Meta, StoryFn } from "@storybook/react";

import MoonStroke from "./MoonStroke";

export default {
  title: "icons/MoonStroke",
  component: MoonStroke,
} as Meta<typeof MoonStroke>;

const Template: StoryFn<typeof MoonStroke> = (args) => <MoonStroke {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
