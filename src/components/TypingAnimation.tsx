import React from "react";
import useTypingAnimation from "../hooks/useTypingAnimation";

export default function TypingAnimation({
  words,
  staticString = "",
}: {
  words: Array<string>;
  staticString?: string;
}) {
  const [text, waiting] = useTypingAnimation(words);
  return (
    <div className="flex">
      <p className="font-medium text-lg tracking-wide leading-loose">
        {staticString}
        {text}
        <span className={waiting ? "animate-blink" : ""}>|</span>
      </p>
    </div>
  );
}
