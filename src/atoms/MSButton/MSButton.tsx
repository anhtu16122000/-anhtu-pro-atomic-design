import React from "react";

export interface MSButtonProps {
  children: React.ReactNode;
}

const MSButton: React.FC<MSButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default MSButton;
