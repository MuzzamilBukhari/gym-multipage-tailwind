import React, { ReactNode } from "react";

type btn = "button" | "submit" | "reset";
const Button = ({
  children,
  className,
  type,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  type: btn;
  onClick?: () => {};
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex text-white font-medium bg-secondary border-0 py-2 px-4 focus:outline-none hover:bg-primary rounded-lg  duration-200 text-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
