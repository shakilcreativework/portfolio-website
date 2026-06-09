"use client";
import React, { useEffect, useRef } from "react";

const icons = [
  {
    name: "HTML",
    src: "https://res.cloudinary.com/dz1fy2tof/image/upload/v1755012812/html_xbcdkj.png",
  },
  {
    name: "CSS",
    src: "https://res.cloudinary.com/dz1fy2tof/image/upload/v1755012862/css_1_irojyc.png",
  },
  {
    name: "JavaScript",
    src: "https://res.cloudinary.com/dz1fy2tof/image/upload/v1755012752/js_nocitj.png",
  },
  {
    name: "React",
    src: "https://res.cloudinary.com/dz1fy2tof/image/upload/v1755012941/react_ogt6ny.svg",
  },
  {
    name: "Next.js",
    src: "https://res.cloudinary.com/dz1fy2tof/image/upload/v1755012973/next_hrodnb.svg",
  },
  {
    name: "Tailwind CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Firebase",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

const TechCursor = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const techImagesRef = useRef([]);

  useEffect(() => {
    let animationFrameId;

    // Preload images safely with CORS clearance
    const loadImages = async () => {
      techImagesRef.current = await Promise.all(
        icons.map(({ name, src }) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = "anonymous"; // 🔥 FIX: Allows external CDN images to render on HTML5 Canvas
            img.src = src;
            img.onload = () => resolve({ name, src, image: img });
            img.onerror = () => {
              console.error(`Failed to load image: ${name}`);
              resolve(null); // Fallback: don't let one broken image crash everything
            };
          });
        }),
      );
      // Filter out any images that failed to load
      techImagesRef.current = techImagesRef.current.filter(Boolean);
    };

    loadImages().then(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Handle setup sizing
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Dynamic resize handler so icons don't warp if window resizes
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

        const size = 22 + Math.random() * 8;

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
              this.size,
            );
            ctx.globalAlpha = 1;
          },
        };

        particles.push(particle);
      };

      window.addEventListener("mousemove", onMove);

      // Clean up everything when component unmounts
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