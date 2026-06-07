"use client";

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
import BaseButton from "../ui/BaseButton";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";


const technologies = [
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
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-[#00BCFF]",
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "text-[#5FA04E]",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-[#47A248]",
    },
];

export default function Hero() {
    return (
        <section>
            <Container>
                <div
                    id="home"
                    className="relative py-20 md:py-24"
                >
                    {/* Background Glow */}
                    <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

                    <div>
                        <div className="grid items-center gap-20 lg:grid-cols-2">

                            {/* Left Content */}
                            <div className="space-y-6">

                                {/* Status */}
                                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/10 px-4 py-2 text-sm text-purple-600 shadow-xs">
                                    <span className="inline-block h-3 w-3 rounded-full bg-linear-to-r from-purple-300 to-purple-600  animate-pulse"></span>
                                    Open for Freelance Opportunities
                                </div>

                                {/* Heading */}
                                <div className="space-y-4">
                                    <h2 className=" font-medium text-muted">
                                        👋 Hi, I&apos;m Shakil
                                    </h2>

                                    <h1 className="max-w-3xl text-5xl font-bold text-foreground md:text-5xl lg:text-6xl">
                                        Creative{" "}
                                        <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text font-bold text-transparent">
                                            Frontend
                                        </span>{" "}
                                        Developer
                                    </h1>

                                    <p className="max-w-2xl text-muted">
                                        Building beautiful digital experiences with modern web
                                        technologies. Passionate about creating responsive,
                                        user-friendly, and high-performance applications using React,
                                        Next.js, and modern UI systems.
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-3">
                                    {technologies.map(({ name, icon: Icon, color }) => (
                                        <span
                                            key={name}
                                            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/5 px-4 py-1.5 text-sm text-muted backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:bg-surface-hover/10 hover:text-foreground shadow-xs"
                                        >
                                            <Icon className={`text-base ${color}`} />
                                            {name}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-3 sm:gap-4 mt-12">
                                    <div>
                                        <BaseButton className={'px-4 sm:px-5 md:px-6 '} animated text={'View Projects'} leftIcon={<FaFolderOpen />} />
                                    </div>
                                    <div>
                                        <BaseButton className="px-4 sm:px-5 md:px-6 hover:bg-transparent" text={'Download CV'} variant="outline" rightIcon={<MdOutlineFileDownload className="text-2xl" />} />
                                    </div>
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="relative flex items-center justify-center">

                                {/* Main Card */}
                                <div className="relative max-w-xs sm:max-w-md rounded-3xl border border-border bg-card p-6 sm:p-8 backdrop-blur-xl shadow-xs">

                                    <div className="space-y-6">

                                        <div className="flex items-center gap-4">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-orange-500 to-pink-500 text-2xl font-bold text-white overflow-hidden">
                                                <Image width={200} height={200} priority className="w-full h-full" src={'https://i.ibb.co.com/KcX3J2dy/386.jpg'} alt="Avatar" />
                                            </div>

                                            <div>
                                                <h3 className="font-medium text-lg text-foreground">
                                                    Md Shakil Ahmed
                                                </h3>
                                                <p className="text-muted">
                                                    Frontend Developer
                                                </p>
                                            </div>
                                        </div>

                                        <div className="rounded-2xl bg-background shadow-xs p-4">
                                            <p className="text-sm text-muted">
                                                Currently building scalable web applications and learning
                                                full-stack development with modern technologies.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="rounded-xl bg-background shadow-xs p-4 text-center">
                                                <h4 className="text-2xl font-bold text-foreground">
                                                    10+
                                                </h4>
                                                <p className="text-sm text-muted">
                                                    Projects
                                                </p>
                                            </div>

                                            <div className="rounded-xl bg-background shadow-xs p-4 text-center">
                                                <h4 className="text-2xl font-bold text-foreground">
                                                    100%
                                                </h4>
                                                <p className="text-sm text-muted">
                                                    Responsive
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Badges */}
                                    <div className="absolute flex items-center gap-2 -left-5 sm:-left-8 top-22 rounded-xl text-foreground border border-purple-500/20 bg-background px-4 py-2 text-sm backdrop-blur-xl">
                                        <SiReact className="text-purple-600" /> React
                                    </div>

                                    <div className="absolute flex items-center gap-2 -right-5 sm:-right-8 -top-4 sm:top-10 rounded-xl text-foreground border border-purple-500/20 bg-background px-4 py-2 text-sm backdrop-blur-xl">
                                        <SiNextdotjs /> Next.js
                                    </div>

                                  <div className="absolute flex items-center gap-2 -bottom-5 left-10 rounded-xl text-foreground border border-purple-500/20 bg-background px-4 py-2 text-sm backdrop-blur-xl">
                                        <SiTailwindcss className="text-[#00BCFF]" /> Tailwind CSS
                                    </div>

                                    <div className="absolute flex items-center gap-2 bottom-28 sm:bottom-10 -right-5 sm:-right-10 rounded-xl text-foreground border border-purple-500/20 bg-background px-4 py-2 text-sm backdrop-blur-xl">
                                        <SiMongodb className="text-[#00e360] text-xs" /> MongoDB
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