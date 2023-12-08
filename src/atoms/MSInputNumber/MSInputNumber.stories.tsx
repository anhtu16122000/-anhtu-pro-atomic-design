import type { Meta, StoryObj } from "@storybook/react";
import MSInputNumber from "./MSInputNumber";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "atoms/MSInputNumber",
  component: MSInputNumber,
  parameters: {},
} satisfies Meta<typeof MSInputNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Create: Story = {
  args: {},
};
