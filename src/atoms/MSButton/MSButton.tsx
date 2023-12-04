import React from "react";
import styles from "./MSButton.module.scss";
import clsx from "clsx";

type MSButtonProps = {
  loading?: boolean;
  backgroundColor: string;
  color: string;
  Icon?: React.ReactNode;
  hoverEffect?: "opacity" | "scale-out" | "scale-in";
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

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
    Icon,
    className = "",
    children,
    backgroundColor = "#000000",
    hoverEffect = "opacity",
    type = "create",
    disabled = false,
    loading = false,
    color = "white",
    size = "md",
    ...restProps
  } = props;
  let CurrentIcon = Icon && Icon;
  if (loading) CurrentIcon = <LoadingComp />;

  return (
    <button
      className={clsx(
        styles.root,
        {
          [styles.sizeSm]: size === "sm",
          [styles.sizeMd]: size === "md",
          [styles.sizeLg]: size === "lg",
          [styles.hoverOpacity]: hoverEffect === "opacity",
          [styles.hoverScaleOut]: hoverEffect === "scale-out",
          [styles.hoverScaleIn]: hoverEffect === "scale-in",
        },
        className,
      )}
      style={{ backgroundColor, color }}
      {...restProps}
    >
      {CurrentIcon && CurrentIcon}
      {children}
    </button>
  );
};

export default MSButton;
