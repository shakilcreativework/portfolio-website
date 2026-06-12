"use client";

import {
    FaGraduationCap,
    FaCode,
    FaPalette,
} from "react-icons/fa";

import {
    HiOutlineAcademicCap,
} from "react-icons/hi";

import Container from "../shared/Container";
import Image from "next/image";

const education = [
    {
        title: "B.Sc in Computer Science & Engineering",
        year: "2019 - 2023",
        description:
            "Completed a Bachelor's degree in Computer Science & Engineering at European University of Bangladesh. Gained knowledge in software development, programming, databases, algorithms, and modern computing technologies.",
    },
    {
        title: "Diploma in Engineering",
        year: "2015 - 2019",
        description:
            "Completed a Diploma in Engineering at Sirajganj Polytechnic Institute. Developed technical skills through academic coursework, practical training, and hands-on industrial experience.",
    },
    {
        title: "Secondary School Certificate (SSC)",
        year: "2015",
        description:
            "Completed secondary education with a focus on General Electronics, building a strong foundation in technology, problem-solving, and technical learning.",
    },
];

const stats = [
    {
        value: "10+",
        label: "Projects Built",
    },
    {
        value: "7000+",
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
                        <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-4 sm:p-8 backdrop-blur-xl shadow-xs">

                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex h-16 w-16 items-center shrink-0 aspect-square justify-center rounded-2xl bg-linear-to-r from-orange-500 to-pink-500 text-2xl font-bold text-foreground overflow-hidden">
                                    <Image width={200} height={200} priority className="w-full h-full" src={'https://i.ibb.co.com/KcX3J2dy/386.jpg'} alt="Avatar" />
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-foreground">
                                        About Me
                                    </h3>
                                    <p className="text-muted text-xs sm:text-sm">
                                        Frontend Developer & Digital Creator
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-5 text-sm text-muted">

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

                                <div className="rounded-2xl bg-background p-4 text-center">
                                    <FaCode className="mx-auto mb-2 text-orange-400" />
                                    <p className="text-sm text-muted">
                                        Web Development
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-background p-4 text-center">
                                    <FaPalette className="mx-auto mb-2 text-purple-400" />
                                    <p className="text-sm text-muted">
                                        Digital Design
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-background p-4 text-center">
                                    <FaGraduationCap className="mx-auto mb-2 text-green-400" />
                                    <p className="text-sm text-muted">
                                        Continuous Learning
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="rounded-3xl border border-border bg-card p-4 sm:p-8 backdrop-blur-xl shadow-xs">

                            <div className="mb-8 flex items-center gap-3">
                                <HiOutlineAcademicCap
                                    size={28}
                                    className="text-purple-600"
                                />

                                <h3 className="text-2xl font-bold text-forground">
                                    Education
                                </h3>
                            </div>

                            <div className="space-y-6">

                                {education.map((item) => (
                                    <div
                                        key={item.title}
                                        className="relative border-l-2 border-purple-600/30 pl-6"
                                    >
                                        {/* Dot */}
                                        <div className="absolute -left-2 top-0 z-10 h-4 w-4 rounded-full border-4 border-purple-600 bg-background" />

                                        <span className="text-sm font-medium text-purple-600">
                                            {item.year}
                                        </span>

                                        <h4 className="mt-2 text-lg font-semibold text-forground">
                                            {item.title}
                                        </h4>

                                        <p className="mt-2 text-sm text-muted">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">

                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-2xl border border-border bg-card p-4 sm:p-6 text-center backdrop-blur-xl shadow-xs"
                            >
                                <h3 className="text-2xl font-bold text-foreground">
                                    {stat.value}
                                </h3>

                                <p className="mt-2 text-sm text-muted">
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