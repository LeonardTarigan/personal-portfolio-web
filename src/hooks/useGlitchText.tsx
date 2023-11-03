/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useGlitchText = (initial: string): string => {
  const initialText = initial;

  const [text, setText] = useState<string>(initialText);

  const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval: NodeJS.Timeout | null = null;

  const startGlitchEffect = () => {
    let iteration = 0;

    clearInterval(interval as NodeJS.Timeout);

    interval = setInterval(() => {
      setText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return initialText[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join(""),
      );

      if (iteration >= initialText.length) {
        clearInterval(interval as NodeJS.Timeout);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    const element = document.getElementById("glitch-text");

    if (element) {
      element.addEventListener("mouseover", startGlitchEffect);
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseover", startGlitchEffect);
      }
      clearInterval(interval as NodeJS.Timeout);
    };
  }, []);

  return text;
};
