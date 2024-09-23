"use client";

import React from "react";

const ButtonGo = ({ href = "#", buttonText = "Button Text",target="", rel="" }) => {
  return (
    <div className="flex justify-center ">
      <a
        href={href}
        target={target} 
        rel={rel}
        className=" w-32 group relative inline-flex items-center justify-center overflow-hidden rounded-full   border-4 border-primary p-4 px-5 py-2.5 font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out"
      >
        <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-primary text-white duration-300 group-hover:translate-x-0">
          {(
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          )}
        </span>
        <span className="absolute flex h-full w-full transform items-center justify-center text-primary transition-all duration-300 group-hover:translate-x-full">
          {buttonText}
        </span>
        <span className="invisible relative">{buttonText}</span>
      </a>
    </div>
  );
};

export default ButtonGo;