import type { Meta, StoryObj } from "@storybook/react";
import MSSelect from "./MSSelect";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "atoms/MSSelect",
  component: MSSelect,
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof MSSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Create: Story = {
  args: {
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
};
