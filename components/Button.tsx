import React from "react";

function Button(props: any) {
  const { children } = props;
  return (
    <button className="text-2xl rounded-full border-none hover:opacity-60 font-montserrat  transition duration-200 p-2 pl-10 pr-10 m-5 ml-0 bg-gradient-to-r from-red-500 to-pink-600  text-white">
      {children}
    </button>
  );
}

export default Button;
