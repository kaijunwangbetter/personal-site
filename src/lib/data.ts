import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/../public/corpcomment.png";
import rmtdevImg from "@/../public/rmtdev.png";
import wordanalyticsImg from "@/../public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Undergraduate",
    location: "Shanghai, China",
    description:
      "I major in  computer science at Shanghai Jiao Tong University.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
  },
  {
    title: "Undergraduate Researcher",
    location: "Shanghai, China",
    description:
      "I worked as a research assistant in the computer science department, supervised by Prof. Yanyan Shen.",
    icon: React.createElement(CgWorkAlt),
    date: "2023.02 - 2023.08",
  },
  {
    title: "Research Intern",
    location: "Singapore",
    description:
      "I worked as a research intern at the National University of Singapore, supervised by Prof. He Bingsheng.",
      icon: React.createElement(CgWorkAlt),
    date: "2023.08 - 2024.02",
  },
  {
    title: "Research Assistant",
    location: "Singapore",
    description:
      "I worked as a research assistant at the National University of Singapore, supervised by Prof. Yi-Chieh Lee.",
    icon: React.createElement(CgWorkAlt),
    date: "2024.09 - Present",
  }
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;