"use client";

import {
    FaGraduationCap,
    FaCode,
    FaPalette,
    FaLaptopCode,
} from "react-icons/fa";

import {
    HiOutlineAcademicCap,
} from "react-icons/hi";

import Container from "../shared/Container";

const education = [
    {
        title: "B.Sc in Computer Science & Engineering",
        year: "2025 - Present",
        description:
            "Currently pursuing a degree in Computer Science & Engineering with a focus on software development, databases, and modern web technologies.",
    },
    {
        title: "Diploma in Computer Science & Technology",
        year: "2021 - 2025",
        description:
            "Built a strong foundation in programming, web development, networking, and software engineering through academic and practical projects.",
    },
    {
        title: "Secondary School Certificate (SSC)",
        year: "2019 - 2021",
        description:
            "Completed secondary education while developing a growing passion for technology, design, and software development.",
    },
];

const stats = [
    {
        value: "10+",
        label: "Projects Built",
    },
    {
        value: "500+",
        label: "Creative Assets",
    },
    {
        value: "React",
        label: "Next.js Focused",
    },
    {
        value: "Open",
        label: "For Freelance Work",
    },
];

export default function MyStory() {
    return (
        <section id="about" className="py-24">
            <Container>
                <div className="space-y-16">
                    <div className="space-y-4 mb-10 max-w-3xl">
                        <div className="flex items-center gap-2">
                            <span className="inline-block h-3 w-3 rounded-full bg-linear-to-r from-purple-300 to-purple-600  animate-pulse"></span>
                            <span className="text-muted ">My Story & Education</span>
                            {/* <span className="text-muted ">Open for Freelance Opportunities</span> */}
                        </div>
                        <h2 className="text-4xl font-bold lg:text-5xl leading-tight">
                            Developer, Designer &
                            <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                                {" "} Digital Creator
                            </span>
                        </h2>
                        <p className="mt-5 text-muted">
                            My journey started with creativity and digital design before
                            moving into modern web development. Today, I combine both
                            design thinking and development skills to build engaging,
                            user-focused digital experiences.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* About Card */}
                        <div className="rounded-3xl border border-border bg-card p-8 backdrop-blur-xl">

                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-orange-500 to-pink-500 text-white">
                                    <FaLaptopCode size={24} />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white">
                                        About Me
                                    </h3>

                                    <p className="text-sm text-gray-400">
                                        Frontend Developer & Digital Creator
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-5 text-gray-300 leading-relaxed">

                                <p>
                                    I&apos;m a passionate Frontend Developer focused on
                                    building modern, responsive, and user-friendly
                                    web applications with React, Next.js and Tailwind CSS.
                                </p>

                                <p>
                                    Before development, I spent years creating digital
                                    assets and vector artwork as a contributor to
                                    Adobe Stock and Shutterstock. That creative
                                    background helps me build interfaces that are both
                                    functional and visually engaging.
                                </p>

                                <p>
                                    Currently expanding my full-stack skills with
                                    Node.js, Express.js, MongoDB and real-world
                                    projects while continuously improving my craft.
                                </p>
                            </div>

                            {/* Mini Features */}
                            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

                                <div className="rounded-2xl bg-black/30 p-4 text-center">
                                    <FaCode className="mx-auto mb-2 text-orange-400" />
                                    <p className="text-sm text-gray-300">
                                        Web Development
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-black/30 p-4 text-center">
                                    <FaPalette className="mx-auto mb-2 text-purple-400" />
                                    <p className="text-sm text-gray-300">
                                        Digital Design
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-black/30 p-4 text-center">
                                    <FaGraduationCap className="mx-auto mb-2 text-green-400" />
                                    <p className="text-sm text-gray-300">
                                        Continuous Learning
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-xl">

                            <div className="mb-8 flex items-center gap-3">
                                <HiOutlineAcademicCap
                                    size={28}
                                    className="text-purple-400"
                                />

                                <h3 className="text-2xl font-bold text-white">
                                    Education
                                </h3>
                            </div>

                            <div className="space-y-6">

                                {education.map((item) => (
                                    <div
                                        key={item.title}
                                        className="relative border-l border-purple-500/30 pl-6"
                                    >
                                        <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-purple-500" />

                                        <span className="text-sm font-medium text-purple-400">
                                            {item.year}
                                        </span>

                                        <h4 className="mt-2 text-lg font-semibold text-white">
                                            {item.title}
                                        </h4>

                                        <p className="mt-2 text-sm leading-relaxed text-gray-400">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-2xl border border-white/10 bg-white/3 p-6 text-center backdrop-blur-xl"
                            >
                                <h3 className="text-2xl font-bold text-white">
                                    {stat.value}
                                </h3>

                                <p className="mt-2 text-sm text-gray-400">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
}