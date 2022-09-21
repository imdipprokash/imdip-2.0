import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
type Props = {};

const HeroSection = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Software Devloper", "Youtuber"],
    loop: true,
    delaySpeed: 300,
  });
  return (
    <div className="text-white text-lg">
      {text}
      <Cursor cursorColor="#F4AB0A" />
    </div>
  );
};

export default HeroSection;
