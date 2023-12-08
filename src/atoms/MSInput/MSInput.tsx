import { Input } from "antd";
import React from "react";
import { InputProps } from "antd/es/input";

type MSInputProps = {
  size?: InputProps["size"];
  status?: InputProps["status"];
  disabled?: InputProps["disabled"];
} & InputProps;

const MSInput: React.FC<MSInputProps> = (props) => {
  const { size = "middle", status = "", disabled = false, ...rest } = props;

  return <Input {...rest} disabled={disabled} status={status} size={size} />;
};

export default MSInput;
