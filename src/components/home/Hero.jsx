"use client";

import Link from "next/link";
import Container from "../shared/Container";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiGithub,
} from "react-icons/si";
import Image from "next/image";

const technologies = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
];

export default function Hero() {
    return (
        <section>
            <Container>
                <div
                    id="home"
                    className="relative overflow-hidden py-20 md:py-24"
                >
                    {/* Background Glow */}
                    <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

                    <div>
                        <div className="grid items-center gap-16 lg:grid-cols-2">

                            {/* Left Content */}
                            <div className="space-y-8">

                                {/* Status */}
                                <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-400">
                                    <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                                    Open for Freelance Opportunities
                                </div>

                                {/* Heading */}
                                <div className="space-y-4">
                                    <h2 className="text-lg font-medium text-gray-400">
                                        👋 Hi, I&apos;m Shakil
                                    </h2>

                                    <h1 className="max-w-3xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
                                        Creative{" "}
                                        <span className="bg-linear-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                                            Frontend
                                        </span>{" "}
                                        Developer
                                    </h1>

                                    <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
                                        Building beautiful digital experiences with modern web
                                        technologies. Passionate about creating responsive,
                                        user-friendly, and high-performance applications using React,
                                        Next.js, and modern UI systems.
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-3">
                                    {technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-white"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="#projects"
                                        className="rounded-xl bg-linear-to-r from-orange-500 to-pink-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
                                    >
                                        View Projects
                                    </Link>

                                    <Link
                                        href="/resume.pdf"
                                        className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                                    >
                                        Download CV
                                    </Link>
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="relative flex items-center justify-center">

                                {/* Main Card */}
                                <div className="relative max-w-xs sm:max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl">

                                    <div className="space-y-6">

                                        <div className="flex items-center gap-4">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-orange-500 to-pink-500 text-2xl font-bold text-white overflow-hidden">
                                                <Image width={200} height={200} priority className="w-full h-full" src={'https://i.ibb.co.com/KcX3J2dy/386.jpg'} alt="Avatar" />
                                            </div>

                                            <div>
                                                <h3 className="text-xl font-bold text-white">
                                                    Md Shakil Ahmed
                                                </h3>
                                                <p className="text-gray-400">
                                                    Frontend Developer
                                                </p>
                                            </div>
                                        </div>

                                        <div className="rounded-2xl bg-black/30 p-4">
                                            <p className="text-sm text-gray-300">
                                                Currently building scalable web applications and learning
                                                full-stack development with modern technologies.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="rounded-xl bg-black/30 p-4 text-center">
                                                <h4 className="text-2xl font-bold text-white">
                                                    10+
                                                </h4>
                                                <p className="text-sm text-gray-400">
                                                    Projects
                                                </p>
                                            </div>

                                            <div className="rounded-xl bg-black/30 p-4 text-center">
                                                <h4 className="text-2xl font-bold text-white">
                                                    100%
                                                </h4>
                                                <p className="text-sm text-gray-400">
                                                    Responsive
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Badges */}
                                    <div className="absolute flex items-center gap-2 -left-3 sm:-left-8 top-20 sm:top-10 rounded-xl border border-white/10 bg-black/60 px-4 py-2 text-sm text-white backdrop-blur-xl">
                                        {/* ⚛ React */}
                                        <SiReact className="text-purple-600" /> React
                                    </div>

                                    <div className="absolute flex items-center gap-2 -right-3 sm:-right-8 -top-4 sm:top-20 rounded-xl border border-white/10 bg-black/60 px-4 py-2 text-sm text-white backdrop-blur-xl">
                                        {/* ▲ Next.js */}
                                        <SiNextdotjs /> Next.js
                                    </div>

                                    <div className="absolute flex items-center gap-2 -bottom-5 left-10 rounded-xl border border-white/10 bg-black/60 px-4 py-2 text-sm text-white backdrop-blur-xl">
                                        {/* 🎨 Tailwind CSS */}
                                        <SiTailwindcss className="text-[#00BCFF]" /> Tailwind CSS
                                    </div>

                                    <div className="absolute flex items-center gap-2 bottom-28 sm:bottom-10 -right-3 sm:-right-10 rounded-xl border border-white/10 bg-black/60 px-4 py-2 text-sm text-white backdrop-blur-xl">
                                        {/* 🍃 MongoDB */}
                                        <span className="flex justify-center items-center w-5 h-5 rounded-full bg-[#001b29]"><SiMongodb className="text-[#00e360] text-xs" /></span> MongoDB
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}