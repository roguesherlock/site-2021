import { useEffect, useState } from "react";

export default function useTypingAnimation(words: Array<string>) {
  const [text, setText] = useState("");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const newText = "";
      setText((t) => (t += newText));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [words]);
  return [text] as const;
}
