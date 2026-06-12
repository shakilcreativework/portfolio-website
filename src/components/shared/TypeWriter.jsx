"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function Typewriter({
    text,
    speed = 80,
    initialDelay = 0,
    waitTime = 2000,
    deleteSpeed = 40,
    loop = true,
    className = "",
    showCursor = true,
    hideCursorOnType = false,
    cursorChar = "|",
    cursorClassName = "ml-1",
}) {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const texts = useMemo(
        () => (Array.isArray(text) ? text : [text]),
        [text]
    );

    useEffect(() => {
        let timeout;

        const currentText = texts[currentTextIndex];

        const type = () => {
            if (isDeleting) {
                if (displayText === "") {
                    setIsDeleting(false);

                    if (
                        currentTextIndex === texts.length - 1 &&
                        !loop
                    ) {
                        return;
                    }

                    setCurrentTextIndex(
                        (prev) => (prev + 1) % texts.length
                    );

                    setCurrentIndex(0);
                } else {
                    timeout = setTimeout(() => {
                        setDisplayText((prev) =>
                            prev.slice(0, -1)
                        );
                    }, deleteSpeed);
                }
            } else {
                if (currentIndex < currentText.length) {
                    timeout = setTimeout(() => {
                        setDisplayText(
                            (prev) =>
                                prev + currentText[currentIndex]
                        );

                        setCurrentIndex((prev) => prev + 1);
                    }, speed);
                } else if (texts.length > 1) {
                    timeout = setTimeout(() => {
                        setIsDeleting(true);
                    }, waitTime);
                }
            }
        };

        if (
            currentIndex === 0 &&
            !isDeleting &&
            displayText === ""
        ) {
            timeout = setTimeout(type, initialDelay);
        } else {
            type();
        }

        return () => clearTimeout(timeout);
    }, [
        currentIndex,
        currentTextIndex,
        deleteSpeed,
        displayText,
        initialDelay,
        isDeleting,
        loop,
        speed,
        texts,
        waitTime,
    ]);

    return (
        <span
            className={`inline whitespace-pre-wrap tracking-tight ${className}`}
        >
            <span>{displayText}</span>

            {showCursor && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            duration: 0.01,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 0.4,
                        },
                    }}
                    className={`${cursorClassName} ${
                        hideCursorOnType &&
                        (currentIndex <
                            texts[currentTextIndex]?.length ||
                            isDeleting)
                            ? "hidden"
                            : ""
                    }`}
                >
                    {cursorChar}
                </motion.span>
            )}
        </span>
    );
}