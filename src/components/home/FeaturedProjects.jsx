import Image from 'next/image';
import React from 'react';
// Note: Make sure to install react-icons using: npm install react-icons
import { FiArrowUpRight } from 'react-icons/fi';
import Container from '../shared/Container';
import BaseButton from '../ui/BaseButton';
import Link from 'next/link';

const FeaturedProjects = () => { 
    // If you add pagination, the first 2 items of the *current page* will automatically get the featured style.
    const projects = [
        {
            id: 1,
            title: "VisionCart",
            category: "E-commerce",
            description: "A modern e-commerce platform with seamless shopping experience and secure payments.",
            tags: ["React", "Node.js", "MongoDB"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop",
            link: "#"
        },
        {
            id: 2,
            title: "StockFlow AI",
            category: "AI / Finance",
            description: "AI-powered stock market insights and analytics platform for smart investments.",
            tags: ["React", "Express.js", "MongoDB"],
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=500&auto=format&fit=crop",
            link: "#"
        },
        {
            id: 3,
            title: "ShadowTrace",
            category: "Cybersecurity",
            description: "A cybersecurity platform for threat detection and real-time monitoring.",
            tags: ["React", "Node.js", "Socket.io"],
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500&auto=format&fit=crop",
            link: "#"
        },
        {
            id: 4,
            title: "PinBoost",
            category: "Marketing",
            description: "Pinterest marketing automation tool to boost reach and engagement.",
            tags: ["React", "Tailwind CSS", "Firebase"],
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=500&auto=format&fit=crop",
            link: "#"
        },
        {
            id: 5,
            title: "Crown Studio",
            category: "Design / Agency",
            description: "Creative agency website for a modern digital experience.",
            tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=500&auto=format&fit=crop",
            link: "#"
        }
    ];

    return (
        <section className="py-20 md:py-24">
            <Container>

                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
                    <div>
                        {/* Status */}
                        <div className="flex items-center gap-2 mb-2">
                            <span className="inline-block h-3 w-3 rounded-full bg-linear-to-r from-purple-300 to-purple-600 animate-pulse"></span>
                            <span className="text-muted">My Work</span>
                        </div>
                        <h2 className="text-4xl font-bold lg:text-5xl leading-tight text-foreground">
                            Featured{" "}
                            <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h2>
                    </div>
                    <BaseButton
                        as='link'
                        href="/"
                        className="rounded-xl bg-none hover:bg-transparent"
                        variant='outline'
                    >
                        View All Projects <FiArrowUpRight className="text-lg" />
                    </BaseButton>
                </div>

                {/* Dynamic Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                    {projects.map((project, index) => {
                        // Dynamically determine layout features based on current array position
                        if (index < 2) {
                            const isSecondCard = index === 1;
                            return (
                                <div
                                    key={project.id}
                                    className="group relative flex flex-col lg:flex-row lg:col-span-3 col-span-1 md:col-span-1 bg-card border border-border rounded-3xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-purple-600/30 hover:shadow-2xl hover:shadow-purple-950/20 gap-6"
                                >
                                    {/* Wrapper to switch layout direction on wide screens */}
                                    <div className={`flex flex-col lg:w-full justify-between gap-6 ${isSecondCard ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                                        {/* Image Box - Precise 60% on desktop */}
                                        <div className="relative w-full lg:w-[60%] aspect-4/2.5 sm:aspect-4/2 md:aspect-4/2.5 lg:aspect-4/2 rounded-2xl overflow-hidden bg-background/30 border border-border flex items-center justify-center shrink-0">
                                            <Image
                                                width={500}
                                                height={300}
                                                priority
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                            />
                                            {/* Removed absolute gradient overlay completely */}
                                        </div>

                                        {/* Content Box - Precise 40% on desktop */}
                                        <div className="flex flex-col justify-between w-full lg:w-[40%] grow">
                                            <div>
                                                <span className="inline-block text-xs font-medium px-3 py-1 text-purple-600 border border-purple-600/30 rounded-full mb-3">
                                                    {project.category}
                                                </span>
                                                <h3 className="text-xl font-medium text-foreground mb-2 tracking-wide">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-muted leading-relaxed mb-6">
                                                    {project.description}
                                                </p>
                                            </div>

                                            {/* Action Items Footer */}
                                            <div className="flex items-center justify-between pt-4  border-border mt-auto">
                                                <div className="flex flex-wrap gap-2 max-w-[75%]">
                                                    {project.tags.map((tag, tIndex) => (
                                                        <span
                                                            key={tIndex}
                                                            className="text-[11px] font-medium text-muted bg-background border border-border/40 px-2 py-0.5 rounded-md"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <Link
                                                    href={project.link}
                                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border text-foreground group-hover:bg-background group-hover:text-foreground group-hover:border-purple-600 transition-all duration-300 shrink-0"
                                                >
                                                    <FiArrowUpRight className="text-lg group-hover:rotate-45 transition-transform duration-300" />
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            );
                        } else {
                            // Standard styling for all items from the 3rd card onwards
                            return (
                                <div
                                    key={project.id}
                                    className="group relative flex flex-col justify-between bg-card border border-border rounded-3xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-purple-600/30 hover:shadow-2xl hover:shadow-purple-950/20 lg:col-span-2 col-span-1 md:col-span-1"
                                >
                                    <div>
                                        <div className="relative w-full aspect-4/2.5 sm:aspect-4/2 md:aspect-4/2.5 rounded-2xl overflow-hidden mb-6 bg-background border border-border flex items-center justify-center">
                                            <Image
                                                width={500}
                                                height={300}
                                                priority
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                            />
                                            {/* Removed absolute gradient overlay completely */}
                                        </div>

                                        <span className="inline-block text-xs font-medium px-3 py-1 text-purple-600 border border-purple-600/30 rounded-full mb-3">
                                            {project.category}
                                        </span>

                                        <h3 className="text-xl font-medium text-foreground mb-2 tracking-wide">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm text-muted leading-relaxed mb-6">
                                            {project.description}
                                        </p>
                                    </div>


                                    <div className="flex items-center justify-between mt-auto pt-4  border-border">
                                        <div className="flex flex-wrap gap-2 max-w-[75%]">
                                            {project.tags.map((tag, tIndex) => (
                                                <span
                                                    key={tIndex}
                                                    className="text-[11px] font-medium text-muted bg-background border border-border/40 px-2 py-0.5 rounded-md"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <Link
                                            href={project.link}
                                            className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border text-foreground group-hover:bg-background group-hover:text-foreground group-hover:border-purple-600 transition-all duration-300"
                                        >
                                            <FiArrowUpRight className="text-lg group-hover:rotate-45 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>

            </Container>
        </section>
    );
};

export default FeaturedProjects;