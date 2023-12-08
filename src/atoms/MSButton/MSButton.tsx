import React from "react";
import styles from "./MSButton.module.scss";
import clsx from "clsx";
import { FiPlusCircle } from "react-icons/fi";
import { MdSave } from "react-icons/md";
import { TbDatabaseImport } from "react-icons/tb";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

type MSButtonProps = {
  loading?: boolean;
  type?: "create" | "save" | "import" | "export" | "edit" | "delete";
  hoverEffect?: "opacity" | "scale-out" | "scale-in";
  children?: React.ReactNode;
  showIcon?: boolean;
  size?: "sm" | "md" | "lg";
  display?: "full" | "fit" | "wide";
  bordered?: keyof typeof CLASS_BORDERED;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">;

const CLASS_DISPLAY = {
  full: "w-full",
  fit: "",
  wide: "!px-10",
};

const CLASS_BORDERED = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  xxl: "rounded-full",
};

function getTypes(type: string) {
  switch (type) {
    case "create":
      return {
        classColor: styles["btn-create"],
        icon: <FiPlusCircle size={16} />,
      };

    case "save":
      return {
        classColor: styles["btn-save"],
        icon: <MdSave size={18} />,
      };

    case "import":
      return {
        classColor: styles["btn-import"],
        icon: <TbDatabaseImport size={18} />,
      };

    case "export":
      return {
        classColor: styles["btn-export"],
        icon: <PiMicrosoftExcelLogoFill size={18} />,
      };

    case "edit":
      return {
        classColor: styles["btn-edit"],
        icon: <FaEdit size={18} />,
      };

    case "delete":
      return {
        classColor: styles["btn-delete"],
        icon: <FaRegTrashAlt size={15} />,
      };

    default:
      return {
        classColor: "",
        icon: null,
      };
  }
}

const LoadingComp: React.FC<{}> = () => (
  <svg
    className={clsx(styles.spinner, "text-white w-[15px] h-[15px]")}
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

const MSButton: React.FC<MSButtonProps> = (props) => {
  const {
    className = "",
    children,
    hoverEffect = "opacity",
    type = "create",
    disabled = false,
    loading = false,
    showIcon = true,
    color = "white",
    size = "md",
    display = "fit",
    bordered = "md",
    ...restProps
  } = props;
  const { classColor, icon: Icon } = getTypes(type);
  const classDisplay = CLASS_DISPLAY?.[display] || "";
  const classBordered = CLASS_BORDERED?.[bordered] || "";
  let CurrentIcon = Icon && Icon;
  if (loading) CurrentIcon = <LoadingComp />;

  return (
    <button
      className={clsx(
        styles.root,
        classColor,
        classDisplay,
        classBordered,
        {
          [styles.sizeSm]: size === "sm",
          [styles.sizeMd]: size === "md",
          [styles.sizeLg]: size === "lg",
          [styles.hoverOpacity]: !loading && hoverEffect === "opacity",
          [styles.hoverScaleOut]: !loading && hoverEffect === "scale-out",
          [styles.hoverScaleIn]: !loading && hoverEffect === "scale-in",
          [styles.loading]: loading,
        },
        className,
      )}
      {...restProps}
    >
      {CurrentIcon && showIcon && CurrentIcon}
      {children}
    </button>
  );
};

export default MSButton;
