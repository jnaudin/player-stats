import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select } from "./Select";

export default {
  title: "Example/Select",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Select>;

const OPTIONS = [
  { label: "Red", value: "red" },
  { label: "Yellow", value: "yellow" },
  { label: "Purple", value: "purple" },
  { label: "Blue", value: "blue" },
];

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args} options={OPTIONS} defaultValue="red" />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Select",
};
