import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

const Header = ({}: Props) => {
  return (
    <div className=" mx-auto justify-between flex sticky top-0 p-4 z-10">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className=" hidden md:flex space-x-2 md:space-x-4 "
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://github.com/imdipprokash"
          bgColor="#666"
          style={{
            width: 40,
            height: 40,
          }}
        />
        <SocialIcon
          url="https://www.facebook.com/iamdipprokash"
          bgColor="#666"
          style={{
            width: 40,
            height: 40,
          }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/dipprokash"
          bgColor="#666"
          style={{
            width: 40,
            height: 40,
          }}
        />
        <SocialIcon
          network="email"
          bgColor="#666"
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
          }}
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className=" flex space-x-4 justify-end  items-center  "
      >
        {/* Get In Touch / */}

        {/* <h1 className="hidden md:flex hover:text-gray-400 cursor-pointer">
          GET IN TOUCH
        </h1> */}
        <Link href="#hero">
          <button className="buttonSection">Home</button>
        </Link>
        <Link href="#about">
          <button className="buttonSection">About</button>
        </Link>
        <Link href="#experience">
          <button className="buttonSection">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="buttonSection">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="buttonSection">Projects</button>
        </Link>
      </motion.div>
    </div>
  );
};
export default Header;
