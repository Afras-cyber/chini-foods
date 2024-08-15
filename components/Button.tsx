import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className = "" }: ButtonProps) => {
  return (
    <button
      className={`bg-pink-500 text-white py-3 px-4 rounded-full hover:opacity-60 font-montserrat  transition duration-200 font-semibold shadow-md hover:bg-pink-600 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
