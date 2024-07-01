import { Meta, StoryFn } from "@storybook/react";

import Hotfix from "./Hotfix";

export default {
  title: "icons/Hotfix",
  component: Hotfix,
} as Meta<typeof Hotfix>;

const Template: StoryFn<typeof Hotfix> = (args) => <Hotfix {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
