"use client";
import React, { useEffect, useRef } from "react";

// 1. Import the icons exactly like your techSkills schema
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

// 2. Your integrated techSkills data layout structure
const techSkills = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" }, // Replaced text-foreground with white hex
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" }, // Replaced text-foreground with white hex
      { name: "Better Auth", icon: MdSecurity, color: "#8B5CF6" }, // Replaced text-violet-500 with violet hex
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" }, // Replaced text-foreground with white hex
    ],
  },
];

// Flatten the nested categories into a unified list of skills for the cursor canvas
const extractedIcons = techSkills.flatMap((category) => category.skills);

const TechCursor = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const techImagesRef = useRef([]);

  useEffect(() => {
    let animationFrameId;

    // Converts React-Icon components into standard canvas image resources
    const convertIconsToImages = async () => {
      techImagesRef.current = await Promise.all(
        extractedIcons.map((skill) => {
          return new Promise((resolve) => {
            // Create a temporary hidden SVG element to compute the React-Icon vector data
            const svgNamespace = "http://www.w3.org/2000/svg";
            const svgElement = document.createElementNS(svgNamespace, "svg");
            svgElement.setAttribute("width", "32");
            svgElement.setAttribute("height", "32");
            svgElement.setAttribute("viewBox", "0 0 24 24");
            svgElement.setAttribute("fill", skill.color); // Apply the exact color tracking property

            // Grab raw vector paths out of the React Icon configuration reference
            const iconData = skill.icon({});
            if (iconData && iconData.props && iconData.props.children) {
              const children = Array.isArray(iconData.props.children)
                ? iconData.props.children
                : [iconData.props.children];

              children.forEach((child) => {
                if (child.type === "path") {
                  const path = document.createElementNS(svgNamespace, "path");
                  Object.keys(child.props).forEach((key) => {
                    path.setAttribute(key, child.props[key]);
                  });
                  svgElement.appendChild(path);
                }
              });
            }

            // Convert raw SVG DOM elements to browser parseable data strings
            const svgString = new XMLSerializer().serializeToString(svgElement);
            const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
            const url = URL.createObjectURL(svgBlob);

            const img = new Image();
            img.src = url;
            img.onload = () => {
              resolve({ name: skill.name, image: img, color: skill.color });
            };
            img.onerror = () => resolve(null);
          });
        })
      );
      techImagesRef.current = techImagesRef.current.filter(Boolean);
    };

    convertIconsToImages().then(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      window.addEventListener("resize", handleResize);

      const particles = particlesRef.current;

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.update();
          p.draw(ctx);
          if (p.alpha <= 0) {
            particles.splice(i, 1);
          }
        }
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      const onMove = (e) => {
        if (techImagesRef.current.length === 0) return;

        const randomIcon =
          techImagesRef.current[
            Math.floor(Math.random() * techImagesRef.current.length)
          ];

        const size = 24 + Math.random() * 8;

        const particle = {
          x: e.clientX,
          y: e.clientY,
          alpha: 1,
          image: randomIcon.image,
          size,
          update() {
            this.y -= 0.4;
            this.alpha -= 0.02;
          },
          draw(ctx) {
            ctx.globalAlpha = this.alpha;
            ctx.drawImage(
              this.image,
              this.x - this.size / 2,
              this.y - this.size / 2,
              this.size,
              this.size
            );
            ctx.globalAlpha = 1;
          },
        };

        particles.push(particle);
      };

      window.addEventListener("mousemove", onMove);

      return () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
      };
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
};

export default TechCursor;