import React from "react";
import useTypingAnimation from "../hooks/useTypingAnimation";

export default function TypingAnimation({ words }: { words: Array<string> }) {
  const [text] = useTypingAnimation(words);
  return (
    <div className="flex">
      <div>{text}</div>
      <div></div>
    </div>
  );
}
