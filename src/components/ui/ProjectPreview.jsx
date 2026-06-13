"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function ProjectPreview({
    image,
    website,
    alt,
    priority = false,
}) {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(0.25); // Safe fallback scale

    const validImageSrc =
        typeof image === "string" && image.trim() !== "" ? image : null;

    const hasLiveWebsite =
        typeof website === "string" && website.trim() !== "";

    // Dynamically calculate the perfect scale based on the actual card width
    useEffect(() => {
        if (!hasLiveWebsite || !containerRef.current) return;

        const calculateScale = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                // Force a fixed 1440px desktop width baseline inside the iframe
                const targetDesktopWidth = 1440; 
                const newScale = containerWidth / targetDesktopWidth;
                setScale(newScale);
            }
        };

        // Run instantly on mount
        calculateScale();

        // Recalculate on screen resize or orientation change
        window.addEventListener("resize", calculateScale);
        return () => window.removeEventListener("resize", calculateScale);
    }, [hasLiveWebsite]);

    return (
        <motion.div
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-t-2xl shadow-sm w-full h-full bg-background/30 group "
        >
            {/* Browser Frame */}
            <div className="bg-background/80 backdrop-blur">
                <div className="flex items-center gap-2 px-4 py-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />

                    {/* URL Bar */}
                    {hasLiveWebsite && (
                        <div className="ml-2 text-[10px] text-muted-foreground bg-background/50 px-2.5 py-0.5  truncate max-w-45">
                            {website
                                .replace("https://", "")
                                .replace("http://", "")
                                .replace("www.", "")}
                        </div>
                    )}
                </div>
            </div>

            {/* Content Area */}
            <div 
                ref={containerRef}
                className="relative aspect-16/10 overflow-hidden w-full bg-neutral-950"
            >
                {hasLiveWebsite ? (
                    <>
                        {/* 100% Desktop Locked Window */}
                        <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
                            <iframe
                                src={website}
                                title={alt || "Live Project Preview"}
                                className="absolute top-0 left-0 border-0 pointer-events-none origin-top-left"
                                style={{
                                    width: "1440px",  // Hardcoded desktop width trick
                                    height: "900px",  // Hardcoded desktop height trick
                                    transform: `scale(${scale})`,
                                }}
                                loading="lazy"
                                sandbox="allow-scripts allow-same-origin"
                            />
                        </div>

                        {/* Guard layer */}
                        <div className="absolute inset-0 bg-transparent z-10" />
                    </>
                ) : (
                    validImageSrc && (
                        <Image
                            src={validImageSrc}
                            alt={alt || "Project Preview"}
                            priority={priority}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover object-top transition-all duration-500 ease-out lg:grayscale lg:opacity-75 lg:group-hover:grayscale-0 lg:group-hover:opacity-100"
                        />
                    )
                )}

                {/* Premium linear Shadow Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-90 pointer-events-none z-20" />

                {/* Shine Effect */}
                {!hasLiveWebsite && (
                    <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out lg:group-hover:translate-x-full pointer-events-none z-20" />
                )}
            </div>
        </motion.div>
    );
}