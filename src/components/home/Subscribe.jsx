"use client";

import { FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import Container from "../shared/Container";
import BaseButton from "../ui/BaseButton";
import ShaderBackground from "../effects/ShaderBackground";

const Subscribe = () => {
    return (
        <section className="py-20 md:py-24">
            <Container>
                <ShaderBackground
                    colorFront="#8B5CF6"
                    as="div"
                    className="relative overflow-hidden w-full rounded-3xl border border-border bg-card"
                >

                    {/* NEW FORCED INNER CONTAINER: This bypasses any custom layout logic inside ShaderBackground */}
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 p-6 sm:p-8 lg:p-10">

                        {/* Left Content Column */}
                        <div className="flex flex-col items-center text-center gap-4 md:flex-row md:text-left">
                            <div className="shrink-0 flex items-center justify-center">
                                <FaEnvelopeOpenText className="text-5xl text-purple-600 sm:text-6xl" />
                            </div>

                            <div className="space-y-1.5 sm:space-y-2">
                                <h2 className="text-xl font-bold leading-tight sm:text-2xl lg:text-3xl text-foreground">
                                    Ready to work together?
                                </h2>
                                <p className="text-sm text-muted sm:text-base max-w-md md:max-w-xl">
                                    Have a project in mind? Let&apos;s discuss how I can help bring it to life.
                                </p>
                            </div>
                        </div>

                        {/* Right Content Button Column */}
                        <div className="w-full md:w-auto flex justify-center md:justify-end items-center shrink-0">
                            <BaseButton
                                animated
                                type="submit"
                                leftIcon={<FaRegClock />}
                                text="Start Your Project"
                            />
                        </div>

                    </div>
                </ShaderBackground>
            </Container>
        </section>
    );
};

export default Subscribe;