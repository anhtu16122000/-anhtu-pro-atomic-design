import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MSButton from "./MSButton";
import { MdSave } from "react-icons/md";
import { TbDatabaseImport } from "react-icons/tb";
import { FiPlusCircle } from "react-icons/fi";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "atoms/MSButton",
  component: MSButton,
} satisfies Meta<typeof MSButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Create: Story = {
  args: {
    children: "Create",
    backgroundColor: "#4caf50",
    color: "white",
    hoverEffect: "scale-out",
    size: "md",
    loading: false,
    Icon: <FiPlusCircle size={16} />,
  },
};
export const Save: Story = {
  args: {
    children: "Save",
    backgroundColor: "#0989ff",
    color: "white",
    hoverEffect: "scale-out",
    size: "md",
    loading: false,
    Icon: <MdSave size={18} />,
  },
};
export const Edit: Story = {
  args: {
    children: "Edit",
    backgroundColor: "#d28923",
    color: "white",
    hoverEffect: "scale-out",
    size: "md",
    loading: false,
    Icon: <FaEdit size={17} />,
  },
};
export const Delete: Story = {
  args: {
    children: "Delete",
    backgroundColor: "#ff595e",
    color: "white",
    hoverEffect: "scale-out",
    size: "md",
    loading: false,
    Icon: <FaRegTrashAlt size={14} />,
  },
};
export const Import: Story = {
  args: {
    children: "Export",
    backgroundColor: "#f77f35",
    color: "white",
    hoverEffect: "scale-out",
    size: "md",
    loading: false,
    Icon: <TbDatabaseImport size={17} />,
  },
};
export const Export: Story = {
  args: {
    children: "Export",
    backgroundColor: "#1d8240",
    color: "white",
    hoverEffect: "scale-out",
    size: "md",
    loading: false,
    Icon: <PiMicrosoftExcelLogoFill size={18} />,
  },
};
