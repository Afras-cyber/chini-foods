import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className = "" }: ButtonProps) => {
  return (
    <button
      className={`bg-pink-500 text-white py-3 px-4 rounded-full hover:opacity-100 font-avenir font-Regular shadow-md  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
