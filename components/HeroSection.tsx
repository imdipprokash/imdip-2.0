import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
type Props = {};

const HeroSection = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Software Devloper", "Freelancer"],
    loop: true,
    delaySpeed: 300,
  });
  return (
    <div className="h-screen flex overflow-hidden  tracking-[5px] text-2xl items-center justify-center">
      <div className="text-white text-lg">
        I'm a {text}
        <Cursor cursorColor="#F4AB0A" />
      </div>
    </div>
  );
};

export default HeroSection;
