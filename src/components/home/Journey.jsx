"use client";

import Container from "../shared/Container";

const experiences = [
    {
        year: "2025 - Present",
        title: "Frontend Developer & Portfolio Builder",
        description:
            "Building modern web applications with React, Next.js, and Tailwind CSS while creating real-world portfolio projects focused on performance, responsiveness, and user experience.",
        skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
        year: "2024 - 2025",
        title: "MERN Stack Learner",
        description:
            "Expanded knowledge into full-stack development by learning Node.js, Express.js, and MongoDB while building practical applications and APIs.",
        skills: ["MongoDB", "Express.js", "Node.js"],
    },
    {
        year: "2023 - 2024",
        title: "Frontend Development Journey",
        description:
            "Focused on mastering modern frontend development, responsive design, JavaScript fundamentals, and component-based architecture.",
        skills: ["JavaScript", "HTML5", "CSS3"],
    },
    {
        year: "2022 - 2023",
        title: "Beginning My Coding Journey",
        description:
            "Started exploring web development, learning the fundamentals of programming, problem-solving, and building simple websites.",
        skills: ["HTML", "CSS", "JavaScript"],
    },
];

export default function Experience() {
    return (
        <section id="journey" className="py-20 md:py-24">
            <Container>

                {/* Section Header */}
                <div className="space-y-4 mb-20 max-w-3xl">
                    <div className="flex items-center gap-2">
                        <span className="inline-block h-3 w-3 rounded-full bg-linear-to-r from-purple-300 to-purple-600  animate-pulse"></span>
                        <span className="text-muted ">My Journey</span>
                    </div>
                    <h2 className="text-4xl font-bold lg:text-5xl leading-tight">
                        My Development <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Journey</span>
                    </h2>
                    <p className="mt-5 text-muted">
                        A timeline of my learning path, projects, and growth as a frontend and aspiring full-stack developer.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Vertical Line */}
                    <div className="absolute left-2.75 top-0 h-full w-0.5 bg-purple-600/30 md:left-1/2 md:-translate-x-1/2" />

                    <div className="space-y-8">

                        {experiences.map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col gap-4 md:flex-row ${index % 2 === 0
                                    ? "md:flex-row"
                                    : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-1 top-8 z-10 h-4 w-4 rounded-full border-4 border-purple-600 bg-black md:left-1/2 md:-translate-x-1/2" />

                                {/* Date */}
                                <div className="pl-10 md:w-1/2 md:pl-0">
                                    <div
                                        className={`${index % 2 === 0
                                            ? "md:pr-12 md:text-right"
                                            : "md:pl-12"
                                            }`}
                                    >
                                        <span className="text-sm font-medium text-purple-600">
                                            {item.year}
                                        </span>
                                    </div>
                                </div>

                                {/* Card */}
                                <div className="pl-10 md:w-1/2 md:pl-0">
                                    <div
                                        className={`rounded-3xl border border-border bg-card p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-600/30 shadow-xs ${index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                                            }`}
                                    >
                                        <h3 className="text-xl font-semibold text-foreground">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-muted">
                                            {item.description}
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {item.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted shadow-xs"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </Container>
        </section>
    );
}