import { useEffect, useState } from "react";

interface AnimatedLettersProps {
  textAnimated: string;
}

const AnimatedLetters = ({ textAnimated }: AnimatedLettersProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const typeLetter = () => {
      if (index < textAnimated.length) {
        setDisplayedText((prev) => prev + textAnimated.charAt(index));
        index++;
        setTimeout(typeLetter, 100);
      }
    };

    typeLetter();
    return () => {
      index = textAnimated.length;
    };
  }, [textAnimated]);

  return <h1 className="text-principal">{displayedText}</h1>;
};

export default AnimatedLetters;
