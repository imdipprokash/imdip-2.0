import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex relative h-screen text-center md:text-left md:flex-row md:px-10 justify-evenly mx-auto items-center">
      <h1 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        About
      </h1>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        // viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        src="https://firebasestorage.googleapis.com/v0/b/imdip-2-updated.appspot.com/o/User.png?alt=media&token=00e52c7f-4088-43d4-be8e-433dba33f223"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover"
      />
    </div>
  );
};

export default About;
