import React, { FC } from "react";

type SearchBarProps = {
  handleFocus: () => void;
  handleBlur: () => void;
};

const SearchBar: FC<SearchBarProps> = ({ handleFocus, handleBlur }) => {
  return (
    <form action="" className="relative mx-auto w-max">
      <input
        type="search"
        className="peer relative z-10 h-12 w-12 cursor-pointer rounded-full border bg-transparent pr-12 outline-none focus:w-full focus:cursor-text focus:border-pink-500 focus:pr-4 focus:pl-12"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-y-0 right-0 my-auto h-8 w-12 border-transparent  px-3.5 peer-focus:border-pink-500 peer-focus:stroke-pink-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </form>
  );
};

export default SearchBar;
