"use client";

import { Suspense, lazy } from "react";

const Dithering = lazy(() => 
    import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

export default function ShaderBackground({ 
    children, 
    className = "", 
    colorFront = "#EC4E02", // #EC4E02
    speed = 0.15,
    as: Component = "section" // Dynamic HTML tag (defaults to section)
}) {
    return (
        <Component className={`relative overflow-hidden w-full ${className}`}>
            {/* The Shader Engine */}
            <Suspense fallback={<div className="absolute inset-0 bg-muted/5 pointer-events-none" />}>
                <div className="absolute inset-0 z-0 pointer-events-none opacity-30 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen">
                    <Dithering
                        colorBack="#00000000" 
                        colorFront={colorFront} // #EC4E02
                        shape="warp"
                        type="4x4"
                        speed={speed}
                        className="w-full h-full object-cover scale-105"
                        minPixelRatio={1}
                    />
                </div>
            </Suspense>

            {/* Content Container ensures content stacks above the z-0 canvas */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </Component>
    );
}