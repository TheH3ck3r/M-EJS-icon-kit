import { Meta, StoryFn } from "@storybook/react";

import Equalizer from "./Equalizer";

export default {
  title: "icons/Equalizer",
  component: Equalizer,
} as Meta<typeof Equalizer>;

const Template: StoryFn<typeof Equalizer> = (args) => <Equalizer {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
