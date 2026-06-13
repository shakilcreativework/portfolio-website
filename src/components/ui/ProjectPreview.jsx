"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectPreview({ image, alt, priority = false }) {
	// 2. Validate string & ensure it isn't empty, otherwise switch to fallback immediately
	const validImageSrc = typeof image === "string" && image.trim() !== "" 
	&& image;
	
    return (
        <motion.div
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl shadow-sm w-full h-full bg-background/30"
        >
            {/* Browser Frame */}
            <div className="bg-background/80 backdrop-blur">
                <div className="flex items-center gap-2 px-4 py-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
            </div>

            {/* Screenshot Area */}
            <div className="relative aspect-16/10 overflow-hidden">
                <Image
                    src={image}
                    alt={alt || "Project Preview"}
                    priority={priority}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover object-top transition-all duration-500 ease-out lg:grayscale lg:opacity-75 lg:group-hover:grayscale-0 lg:group-hover:opacity-100"
                />

                {/* Premium Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out lg:group-hover:translate-x-full pointer-events-none" />
            </div>
        </motion.div>
    );
}