"use client";

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import Container from '../shared/Container';
import BaseButton from '../ui/BaseButton';
import Link from 'next/link';

// Component for handling the smart scroll tracking on mobile + hover on desktop
const ProjectCard = ({ project, index, children }) => {
    const cardRef = useRef(null);
    const [isCentered, setIsCentered] = useState(false);

    useEffect(() => {
        // Only track viewport center on mobile/tablet screens (< 1024px)
        if (window.innerWidth >= 1024) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Triggers when the card occupies the middle zone of the screen
                setIsCentered(entry.isIntersecting);
            },
            {
                // rootMargin creates a narrow horizontal lens right across the middle of the screen
                rootMargin: '-30% 0px -30% 0px',
                threshold: 0.2,
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const isFeatured = index < 2;
    const isSecondCard = index === 1;

    // Core layout structure logic
    if (isFeatured) {
        return (
            <div
                ref={cardRef}
                className={`group relative flex flex-col lg:flex-row lg:col-span-3 col-span-1 md:col-span-1 bg-card border border-border rounded-3xl p-6 overflow-hidden transition-all duration-500 gap-6 lg:hover:-translate-y-1 lg:hover:border-purple-600/30 lg:hover:shadow-2xl lg:hover:shadow-purple-950/20 active:scale-[0.99] active:bg-neutral-500/5 ${
                    isCentered ? 'border-purple-600/30 shadow-xl shadow-purple-950/10' : ''
                }`}
            >
                <div className={`flex flex-col lg:w-full justify-between gap-6 ${isSecondCard ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                    
                    {/* Image Container */}
                    <div className="relative w-full lg:w-[60%] aspect-4/2.5 sm:aspect-4/2 md:aspect-4/2.5 lg:aspect-4/2 rounded-2xl overflow-hidden bg-background/30 border border-border flex items-center justify-center shrink-0">
                        <Image
                            width={500}
                            height={300}
                            priority={index === 0}
                            src={project.image}
                            alt={project.title}
                            /* Mobile active status via JS class, desktop via Tailwind group-hover */
                            className={`w-full h-full object-cover transition-all duration-700 ease-out 
                                ${isCentered ? 'grayscale-0 scale-105 opacity-100' : 'grayscale opacity-60 scale-100'} 
                                lg:grayscale lg:opacity-75 lg:scale-100 lg:group-hover:grayscale-0 lg:group-hover:scale-105 lg:group-hover:opacity-100`
                            }
                        />
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-col justify-between w-full lg:w-[40%] grow">
                        {children}
                    </div>
                </div>
            </div>
        );
    }

    // Regular Grid Items Logic (Cards 3, 4, 5...)
    return (
        <div
            ref={cardRef}
            className={`group relative flex flex-col justify-between bg-card border border-border rounded-3xl p-6 overflow-hidden transition-all duration-500 lg:col-span-2 col-span-1 md:col-span-1 lg:hover:-translate-y-1 lg:hover:border-purple-600/30 lg:hover:shadow-2xl lg:hover:shadow-purple-950/20 active:scale-[0.99] active:bg-neutral-500/5 ${
                isCentered ? 'border-purple-600/30 shadow-xl shadow-purple-950/10' : ''
            }`}
        >
            <div>
                <div className="relative w-full aspect-4/2.5 sm:aspect-4/2 md:aspect-4/2.5 rounded-2xl overflow-hidden mb-6 bg-background border border-border flex items-center justify-center">
                    <Image
                        width={500}
                        height={300}
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-all duration-700 ease-out 
                            ${isCentered ? 'grayscale-0 scale-105 opacity-100' : 'grayscale opacity-60 scale-100'} 
                            lg:grayscale lg:opacity-75 lg:scale-100 lg:group-hover:grayscale-0 lg:group-hover:scale-105 lg:group-hover:opacity-100`
                        }
                    />
                </div>
                {children}
            </div>
        </div>
    );
};

const FeaturedProjects = () => { 
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
        <section id='journey' className="py-20 md:py-24">
            <Container>

                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
                    <div>
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
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index}>
                            {/* Inner Details Content injected cleanly into the wrapper */}
                            <div className="flex flex-col justify-between h-full grow">
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

                                <div className="flex items-center justify-between pt-4 border-border mt-auto">
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
                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border text-foreground transition-all duration-300 shrink-0 lg:group-hover:border-purple-600"
                                    >
                                        <FiArrowUpRight className="text-lg transition-transform duration-300 lg:group-hover:rotate-45" />
                                    </Link>
                                </div>
                            </div>
                        </ProjectCard>
                    ))}
                </div>

            </Container>
        </section>
    );
};

export default FeaturedProjects;