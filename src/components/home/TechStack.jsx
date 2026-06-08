"use client";

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

import Container from "@/components/shared/Container";

const techSkills = [
  {
    title: "Frontend Development",
    description:
      "Building fast, responsive, and modern user interfaces.",
    skills: [
      {
        name: "React",
        icon: SiReact,
        color: "text-[#61DAFB]",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-foreground",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-[#F7DF1E]",
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "text-[#E34F26]",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-[#1572B6]",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-[#06B6D4]",
      },
    ],
  },

  {
    title: "Backend Development",
    description:
      "Creating secure APIs, authentication systems, and server-side logic.",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "text-[#5FA04E]",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-foreground",
      },
      {
        name: "Better Auth",
        icon: MdSecurity,
        color: "text-violet-500",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "text-[#FFCA28]",
      },
    ],
  },

  {
    title: "Database & Cloud",
    description:
      "Managing data storage, real-time services, and application scalability.",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-[#47A248]",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "text-[#FFCA28]",
      },
    ],
  },

  {
    title: "Tools & Workflow",
    description:
      "Collaborative development and project management workflows.",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        color: "text-[#F05032]",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "text-foreground",
      },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24">
      <Container>
        {/* Header */}
        <div className="space-y-4 mb-10">
          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-linear-to-r from-purple-300 to-purple-600  animate-pulse"></span>
            <span className="text-muted ">Tech Stack & Skills</span>
            {/* <span className="text-muted ">Open for Freelance Opportunities</span> */}
          </div>
          <h2 className="text-4xl font-bold lg:text-5xl leading-tight">
            Technologies I Use to <br className="hidden sm:inline-flex" />
            <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              {" "}
              Build Modern
            </span>
            {" "}
            Web Apps
          </h2>
          <p className="mt-5 text-muted">
            A carefully selected stack of technologies that helps me create
            responsive, <br className="hidden sm:inline-flex" /> scalable, and high-performance digital experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {techSkills.map((category) => (
            <div
              key={category.title}
              className="group rounded-3xl border border-border bg-card p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-600/30"
            >
              <h3 className="text-2xl text-foreground font-semibold">
                {category.title}
              </h3>

              <p className="mt-2 text-muted">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-2 text-sm transition-all duration-300 hover:scale-105 hover:border-purple-600/30 hover:bg-transparent"
                    >
                      <Icon className={`text-base ${skill.color}`} />
                      <span className="text-muted">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}