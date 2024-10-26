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
      className="mb-28 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Now I&apos;m a <span className="font-medium">research assistant</span>
        in AI4SG Lab at School of Computing, National University of Singapore.
        I&apos;m working with{" "}
        <span className="font-medium">Dr. Yi-Chieh Lee</span>. Before that, I
        earned my bachelor&apos;s degree in Computer Science and Technology from
        Shanghai Jiao Tong University in 2024. During my undergraduate studies,
        I&apos;m fortunate to have the opportunity to work with{" "}
        <span className="font-medium">Dr. Yanyan Shen</span> and{" "}
        <span className="font-medium">Dr. Bingsheng He</span> on several
        research.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        watching videos, and listening to music. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">Music and Japanese</span>.
      </p>
    </motion.section>
  );
}
