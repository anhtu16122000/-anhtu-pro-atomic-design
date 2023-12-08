import type { Meta, StoryObj } from "@storybook/react";
import MSInput from "./MSInput";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "atoms/MSInput",
  component: MSInput,
  parameters: {},
} satisfies Meta<typeof MSInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Create: Story = {
  args: {},
};
