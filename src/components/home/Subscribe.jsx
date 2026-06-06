"use client";

import { FaEnvelopeOpenText } from "react-icons/fa";
import Container from "../shared/Container";
import BaseButton from "../ui/BaseButton";
import { IoMdPaperPlane } from "react-icons/io";

const Subscribe = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log('Subscribe btn clicked!');
    };

    return (
        <section className="py-20">
            <Container>
                <div className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
                    {/* Left Content */}
                    <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left lg:flex-1">
                        <div className="shrink-0">
                            <FaEnvelopeOpenText className="text-5xl text-danger sm:text-6xl" />
                        </div>

                        <div>
                            <h2 className="font-jakarta text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
                                Tech Insights & Project Updates
                            </h2>

                            <p className="mt-2 text-sm text-muted sm:text-base">
                                Subscribe to receive updates about my latest projects, articles, and development insights.
                            </p>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="w-full lg:max-w-lg">
                        <form
                            onSubmit={handleSubscribe}
                            className="flex flex-col overflow-hidden rounded-xl border border-border bg-background sm:flex-row"
                        >
                            <input
                                type="email"
                                name="email"
                                required
                                autoComplete="email"
                                placeholder="Enter your email address"
                                className="w-full flex-1 border-0 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-muted"
                            />

                            <BaseButton
                            animated
                            animatedSpanOne="animate-ping"
                                type="submit"
                                className="rounded-none border-t border-border px-6 py-3 sm:border-t-0 sm:border-l"
                                leftIcon={<IoMdPaperPlane className="text-xl" />}
                            >
                                Subscribe
                            </BaseButton>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Subscribe;