import { InputNumber } from "antd";
import { InputNumberProps } from "antd/es/input-number";
import clsx from "clsx";
import React from "react";

type MSInputNumberProps = {
  size?: InputNumberProps["size"];
  status?: InputNumberProps["status"];
  disabled?: InputNumberProps["disabled"];
  display?: keyof typeof CLASS_DISPLAY;
} & InputNumberProps;

const CLASS_DISPLAY = {
  full: "w-full",
  fit: "",
};

const MSInputNumber: React.FC<MSInputNumberProps> = (props) => {
  const {
    size = "middle",
    display = "fit",
    className = "",
    status = "",
    disabled = false,
    ...rest
  } = props;
  const classDisplay = CLASS_DISPLAY?.[display] || "";

  return (
    <InputNumber
      className={clsx(className, classDisplay, status)}
      type="number"
      {...rest}
      disabled={disabled}
      status={status}
      size={size}
    />
  );
};

export default MSInputNumber;
