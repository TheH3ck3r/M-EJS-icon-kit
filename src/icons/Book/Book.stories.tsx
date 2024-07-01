import { Meta, StoryFn } from "@storybook/react";

import Book from "./Book";

export default {
  title: "icons/Book",
  component: Book,
} as Meta<typeof Book>;

const Template: StoryFn<typeof Book> = (args) => <Book {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  width: 48,
  height: 48,
};
