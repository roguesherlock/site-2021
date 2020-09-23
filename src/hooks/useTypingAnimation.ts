import { useEffect, useState } from "react";

const MAX_WAIT_COUNT = 50;

export default function useTypingAnimation(words: Array<string>) {
  const [state, setState] = useState({
    text: "",
    textIndex: 0,
    wordIndex: 0,
    deleteWord: false,
    wait: false,
    waitCount: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setState((state) => {
        const {
          text,
          textIndex,
          wordIndex,
          deleteWord,
          wait,
          waitCount,
        } = state;

        // are we waiting for a while?
        if (wait) {
          // we are done waiting.
          if (waitCount === MAX_WAIT_COUNT)
            return { ...state, wait: false, waitCount: 0 };
          return { ...state, waitCount: waitCount + 1 };
        }

        // are we deleting words ?
        if (deleteWord) {
          // we are done deleting at this point. Move to next word
          if (textIndex === 0)
            return {
              ...state,
              deleteWord: false,
              wordIndex: (wordIndex + 1) % words.length,
            };
          // delete a character
          const i = textIndex - 1;
          return { ...state, textIndex: i, text: text.substr(0, i) };
        }

        // are we at the end of a word? Let's wait and then start deleting the current word
        if (textIndex === words[wordIndex].length)
          return {
            ...state,
            wait: true,
            deleteWord: true,
            textIndex: textIndex - 1,
          };

        const newText = text + words[wordIndex][textIndex];
        return {
          ...state,
          text: newText,
          textIndex: textIndex + 1,
          wordIndex,
        };
      });
    }, 50);
    return () => clearInterval(intervalId);
  }, [words, setState]);
  return [state.text, state.wait] as const;
}
