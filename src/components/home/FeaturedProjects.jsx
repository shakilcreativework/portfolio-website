"use client";

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import Container from '../shared/Container';
import BaseButton from '../ui/BaseButton';
import Link from 'next/link';
import ProjectPreview from '../ui/ProjectPreview';

// Move static data OUTSIDE the component to avoid dependency array tracking
const PROJECTS_DATA = [
    {
        id: 1,
        title: "VisionCart",
        category: "E-commerce",
        description: "A modern e-commerce platform with seamless shopping experience and secure payments.",
        tags: ["React", "Node.js", "MongoDB"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop",
        displayUrl: "",
        link: "#"
    },
    {
        id: 2,
        title: "StockFlow AI",
        category: "AI / Finance",
        description: "AI-powered stock market insights and analytics platform for smart investments.",
        tags: ["React", "Express.js", "MongoDB"],
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=500&auto=format&fit=crop",
        displayUrl: "https://creativedesign-assets.netlify.app",
        link: "#"
    },
    {
        id: 3,
        title: "ShadowTrace",
        category: "Cybersecurity",
        description: "A cybersecurity platform for threat detection and real-time monitoring.",
        tags: ["React", "Node.js", "Socket.io"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500&auto=format&fit=crop",
        displayUrl: "",
        link: "#"
    },
    {
        id: 4,
        title: "PinBoost",
        category: "Marketing",
        description: "Pinterest marketing automation tool to boost reach and engagement.",
        tags: ["React", "Tailwind CSS", "Firebase"],
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=500&auto=format&fit=crop",
        displayUrl: "",
        link: "#"
    },
    {
        id: 5,
        title: "Crown Studio",
        category: "Design / Agency",
        description: "Creative agency website for a modern digital experience.",
        tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=500&auto=format&fit=crop",
        displayUrl: "",
        link: "#"
    }
];

const FeaturedProjects = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [scrollPositions, setScrollPositions] = useState({});
    const cardRefs = useRef({});

    useEffect(() => {
        // Defering state mutation prevents the synchronous layout rendering cascade error
        const mountTimeout = setTimeout(() => {
            setIsMounted(true);
        }, 0);

        const handleScrollAndResize = () => {
            const currentWidth = window.innerWidth;
            setWindowWidth(currentWidth);
            
            if (currentWidth >= 1024) return;

            const newProgressions = {};
            PROJECTS_DATA.forEach((project) => {
                const element = cardRefs.current[project.id];
                if (!element) return;

                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const elementCenter = rect.top + rect.height / 2;
                const viewportCenter = windowHeight / 2;

                const maxDistance = windowHeight * 0.45;
                const distanceFromCenter = Math.abs(viewportCenter - elementCenter);

                if (distanceFromCenter >= maxDistance) {
                    newProgressions[project.id] = 0;
                } else {
                    const linearProgress = 1 - (distanceFromCenter / maxDistance);
                    const easeInOutProgress = 3 * Math.pow(linearProgress, 2) - 2 * Math.pow(linearProgress, 3);
                    newProgressions[project.id] = easeInOutProgress;
                }
            });
            setScrollPositions(newProgressions);
        };

        handleScrollAndResize();
        
        window.addEventListener('scroll', handleScrollAndResize, { passive: true });
        window.addEventListener('resize', handleScrollAndResize);

        return () => {
            clearTimeout(mountTimeout);
            window.removeEventListener('scroll', handleScrollAndResize);
            window.removeEventListener('resize', handleScrollAndResize);
        };
    }, []); // Empty array is completely valid now since PROJECTS_DATA is externalized

    return (
        <section id="projects" className="py-20 md:py-24">
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

                {/* Dynamic Responsive Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                    {PROJECTS_DATA.map((project, index) => {
                        const isFeatured = index < 2;
                        const isSecondCard = index === 1;
                        const progress = scrollPositions[project.id] || 0;

                        const dynamicMobileStyles = isMounted && windowWidth < 1024 ? {
                            opacity: 0.35 + (progress * 0.65),
                            filter: `grayscale(${100 - (progress * 100)}%)`,
                            transform: `scale(${0.96 + (progress * 0.04)})`,
                            borderColor: `rgba(147, 51, 234, ${progress * 0.3})`,
                            boxShadow: `0 20px 25px -5px rgba(88, 28, 135, ${progress * 0.12})`
                        } : {};

                        const cardInnerContent = (
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
                        );

                        if (isFeatured) {
                            return (
                                <div
                                    key={project.id}
                                    ref={(el) => (cardRefs.current[project.id] = el)}
                                    style={dynamicMobileStyles}
                                    className="group relative flex flex-col lg:flex-row lg:col-span-3 col-span-1 md:col-span-1 bg-card border border-border rounded-3xl p-6 overflow-hidden transition-all duration-300 ease-out gap-6 lg:hover:-translate-y-1 lg:hover:border-purple-600/30 lg:hover:shadow-2xl lg:hover:shadow-purple-950/20 active:scale-[0.99] active:bg-neutral-500/5 lg:opacity-100! lg:filter-none! lg:scale-100!"
                                >
                                    <div className={`flex flex-col lg:w-full justify-between gap-6 ${isSecondCard ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                                        {/* Image Container */}
                                        <div className="relative w-full lg:w-[60%] aspect-4/2.5 sm:aspect-4/1.5 md:aspect-4/2.5 lg:aspect-4/2 rounded-2xl overflow-hidden flex items-center justify-center shrink-0">
                                            <ProjectPreview image={project.image} alt={project.title} priority={index === 0} website={project?.displayUrl} />
                                        </div>
                                        {/* Content Container */}
                                        <div className="flex flex-col justify-between w-full lg:w-[40%] grow">
                                            {cardInnerContent}
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div
                                key={project.id}
                                ref={(el) => (cardRefs.current[project.id] = el)}
                                style={dynamicMobileStyles}
                                className="group relative flex flex-col bg-card border border-border rounded-3xl p-6 overflow-hidden transition-all duration-300 ease-out lg:col-span-2 col-span-1 md:col-span-1 lg:hover:-translate-y-1 lg:hover:border-purple-600/30 lg:hover:shadow-2xl lg:hover:shadow-purple-950/20 active:scale-[0.99] active:bg-neutral-500/5 lg:opacity-100! lg:filter-none! lg:scale-100!"
                            >
                                <div className="relative w-full aspect-4/2.5 sm:aspect-4/1.5 md:aspect-4/2.5 rounded-2xl overflow-hidden mb-6 flex items-center justify-center shrink-0">
                                    <ProjectPreview 
                                        image={project.image} 
                                        alt={project.title} 
                                        priority={false} 
                                    />
                                </div>
                                <div className="flex flex-col flex-1">
                                    {cardInnerContent}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default FeaturedProjects;