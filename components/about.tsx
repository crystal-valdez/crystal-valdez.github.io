"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello! I am a master's student interested in using my skills to develop data and AI solutions within the healthcare industry.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy listening to music and discovering art! I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I'm currently
        exploring{" "}
        <span className="font-medium">web design</span>. 
      </p>
    </motion.section>
  );
}
