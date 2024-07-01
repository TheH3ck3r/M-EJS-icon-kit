import { Meta, StoryFn } from "@storybook/react";

import Zone from "./Zone";

export default {
  title: "icons/Zone",
  component: Zone,
} as Meta<typeof Zone>;

const Template: StoryFn<typeof Zone> = (args) => <Zone {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
