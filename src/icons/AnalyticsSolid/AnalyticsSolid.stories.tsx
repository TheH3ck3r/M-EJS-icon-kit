import { Meta, StoryFn } from "@storybook/react";

import AnalyticsSolid from "./AnalyticsSolid";

export default {
  title: "icons/AnalyticsSolid",
  component: AnalyticsSolid,
} as Meta<typeof AnalyticsSolid>;

const Template: StoryFn<typeof AnalyticsSolid> = (args) => (
  <AnalyticsSolid {...args} />
);
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
