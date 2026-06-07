"use client";

import { FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import Container from "../shared/Container";
import BaseButton from "../ui/BaseButton";
// import { IoMdPaperPlane } from "react-icons/io";

const Subscribe = () => {
    // const handleSubscribe = (e) => {
    //     e.preventDefault();
    //     console.log('Subscribe btn clicked!');
    // };

    return (
        <section className="py-20">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 rounded-3xl border border-border bg-card p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
                    {/* Left Content */}
                    <div className="flex flex-col items-center gap-4 text-center md:flex-row lg:flex-1">
                        <div className="shrink-0">
                            <FaEnvelopeOpenText className="text-5xl text-purple-600 sm:text-6xl" />
                        </div>

                        <div>
                            <h2 className="text-xl font-bold leading-tight md:text-start sm:text-2xl lg:text-3xl">
                                {/* Tech Insights & Project Updates */}
                                Ready to work together?
                            </h2>

                            <p className="mt-2 text-sm text-muted sm:text-base">
                                {/* Subscribe to receive updates about my latest projects, articles, and development insights. */}
                                Have a project in mind? Let&apos;s discuss how I can help bring it to life.
                            </p>
                        </div>
                    </div>
                    <div>
                        <BaseButton
                            animated
                            type="submit"
                            leftIcon={<FaRegClock />}
                            text="Start Your Project"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Subscribe;