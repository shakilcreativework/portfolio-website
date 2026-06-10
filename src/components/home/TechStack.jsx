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
import WovenBackground from "../effects/WovenLightHero";

const techSkills = [
  {
    title: "Frontend Development",
    description:
      "Building fast, responsive, and modern user interfaces.",
    skills: [
      {
        name: "HTML5",
        subtitle: "Semantic Markup",
        icon: SiHtml5,
        color: "text-[#E34F26]",
      },
      {
        name: "CSS3",
        subtitle: "Responsive Design",
        icon: FaCss3Alt,
        color: "text-[#1572B6]",
      },
      {
        name: "JavaScript",
        subtitle: "ES6+",
        icon: SiJavascript,
        color: "text-[#F7DF1E]",
      },
      {
        name: "React",
        subtitle: "Component Based",
        icon: SiReact,
        color: "text-[#61DAFB]",
      },
      {
        name: "Next.js",
        subtitle: "Full Stack Framework",
        icon: SiNextdotjs,
        color: "text-foreground",
      },
      {
        name: "Tailwind CSS",
        subtitle: "CSS Framework",
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
        subtitle: "Server Runtime",
        icon: SiNodedotjs,
        color: "text-[#5FA04E]",
      },
      {
        name: "Express.js",
        subtitle: "Web Framework",
        icon: SiExpress,
        color: "text-foreground",
      },
      {
        name: "Better Auth",
        subtitle: "Authentication",
        icon: MdSecurity,
        color: "text-violet-500",
      },
      {
        name: "Firebase",
        subtitle: "Backend Platform",
        icon: SiFirebase,
        color: "text-[#FFCA28]",
      },
    ],
  },

  {
    title: "Database & Cloud",
    description:
      "Managing data storage and application scalability.",
    skills: [
      {
        name: "MongoDB",
        subtitle: "NoSQL Database",
        icon: SiMongodb,
        color: "text-[#47A248]",
      },
      {
        name: "Firebase",
        subtitle: "Cloud Services",
        icon: SiFirebase,
        color: "text-[#FFCA28]",
      },
    ],
  },

  {
    title: "Tools & Workflow",
    description:
      "Version control and modern development workflow.",
    skills: [
      {
        name: "Git",
        subtitle: "Version Control",
        icon: SiGit,
        color: "text-[#F05032]",
      },
      {
        name: "GitHub",
        subtitle: "Code Hosting",
        icon: SiGithub,
        color: "text-foreground",
      },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-20 md:py-24">
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
            <WovenBackground as="div"
              key={category.title}
              className="group rounded-3xl border border-border bg-card p-4 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-600/30"
            >
              <h3 className="text-2xl font-semibold text-foreground">
                {category.title}
              </h3>

              <p className="mt-2 text-muted">
                {category.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 lg:gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group/skill rounded-2xl border border-purple-600/20 bg-background/30 p-4 sm:p-6 lg:gap-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30"
                    >
                      <Icon
                        className={`mx-auto mb-3 text-4xl ${skill.color}`}
                      />

                      <h4 className="text-sm font-medium text-foreground">
                        {skill.name}
                      </h4>

                      <p className="mt-1 text-xs text-muted">
                        {skill.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>
            </WovenBackground>
          ))}
        </div>
      </Container>
    </section>
  );
}