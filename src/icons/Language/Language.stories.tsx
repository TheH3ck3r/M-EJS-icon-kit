import { Meta, StoryFn } from "@storybook/react";

import Language from "./Language";

export default {
  title: "icons/Language",
  component: Language,
} as Meta<typeof Language>;

const Template: StoryFn<typeof Language> = (args) => <Language {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
