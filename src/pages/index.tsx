import React from "react";
import TypingAnimation from "../components/TypingAnimation";

export default function HomePage() {
  const words = ["singer", "songwritter"];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="mt-auto text-5xl text-center font-semibold tracking-wide uppercase">
        hello
      </h1>
      <TypingAnimation words={words} />
      <div className="mt-auto">
        <svg
          className="animate-bounce w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
}
