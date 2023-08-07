"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypingText({ words }) {
  return (
    <span className="sm:text-[35px] text-[25px] text-centertext-white sm:leading-[84px] leading-[40px] font-poppins font-thin">
      <Typewriter words={words} loop={false} typeSpeed={120}
        deleteSpeed={50} /></span>);
}
