import { Select, SelectProps } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import clsx from "clsx";
import React from "react";
import { convertToPlain } from "../../utils/stringHander";

type OptionType = {
  label: string;
  value: any;
};

type MSSelectProps = {
  className?: string;
  size?: SizeType;
  allowClear?: boolean;
  options?: OptionType[];
  loading?: SelectProps["loading"];
  disabled?: SelectProps["disabled"];
  status?: SelectProps["status"];
  showSearch?: boolean;
} & Omit<SelectProps, "allowClear" | "showSearch" | "options">;

const CLASS_SIZE: Record<string, SizeType> = {
  small: "small",
  middle: "middle",
  large: "large",
};

const MSSelect: React.FC<MSSelectProps> = (props) => {
  const {
    className = "",
    showSearch = false,
    allowClear = false,
    disabled = false,
    loading = false,
    size = "middle",
    options = [],
    status = "",
    style,
    ...rest
  } = props;

  const sizeDisplay: SizeType = CLASS_SIZE?.[size] || "middle";

  return (
    <Select
      style={{ width: "100%", ...style }}
      loading={loading}
      status={status}
      size={sizeDisplay}
      allowClear={allowClear}
      disabled={disabled}
      options={options}
      // filterOption={(input, option) =>
      //   convertToPlain((option?.label as string) ?? "").includes(
      //     convertToPlain(input),
      //   )
      // }
      showSearch={showSearch}
      className={clsx(className)}
      {...rest}
    />
  );
};

export default MSSelect;
