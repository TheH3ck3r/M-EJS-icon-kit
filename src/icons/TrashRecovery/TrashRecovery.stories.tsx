import { Meta, StoryFn } from "@storybook/react";

import TrashRecovery from "./TrashRecovery";

export default {
  title: "icons/TrashRecovery",
  component: TrashRecovery,
} as Meta<typeof TrashRecovery>;

const Template: StoryFn<typeof TrashRecovery> = (args) => (
  <TrashRecovery {...args} />
);
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
