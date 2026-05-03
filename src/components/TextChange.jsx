import React, { useEffect, useState } from "react";

const TEXTS = [
  "Frontend Developer",
  "UI Motion Designer",
  "React + Tailwind Specialist",
];

const TextChange = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (forward && subIndex === TEXTS[textIndex].length + 2) {
      setForward(false);
      return;
    }

    if (!forward && subIndex === 0) {
      setForward(true);
      setTextIndex((prev) => (prev + 1) % TEXTS.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, forward ? 70 : 40);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, textIndex]);

  return (
    <span className="typing-cursor">
      {TEXTS[textIndex].substring(0, subIndex)}
    </span>
  );
};

export default TextChange;