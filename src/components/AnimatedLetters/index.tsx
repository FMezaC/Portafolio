import { useEffect, useRef, useState } from "react";

interface AnimatedLettersProps {
  textAnimated: string;
}

const AnimatedLetters = ({ textAnimated }: AnimatedLettersProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    setDisplayedText("");
    indexRef.current = 0;

    const animate = () => {
      if (indexRef.current <= textAnimated.length) {
        setDisplayedText(textAnimated.substring(0, indexRef.current));
        indexRef.current += 1;
        animationRef.current = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationRef.current!);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current!);
  }, [textAnimated]);

  return <h1 className="text-principal">{displayedText}</h1>;
};

export default AnimatedLetters;
