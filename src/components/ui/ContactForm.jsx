"use client";

import { FieldError, Form, Input, TextArea, TextField } from "@heroui/react";
import BaseButton from "./BaseButton";
import { IoMdPaperPlane } from "react-icons/io";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ShaderBackground from "../effects/ShaderBackground";


const ContactForm = () => {
    const [loading, setLoading] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(
            new FormData(e.currentTarget)
        )
        console.log(data);
        setLoading(false);
    };

    return (
        <section>
            <div
                className={cn("w-full rounded-4xl bg-card p-6 border border-border hover:border-purple-600/30 shadow-card sm:p-8")}
            >

                {/* -------------------------------------------------------------- */}
                {/*                             FORM                               */}
                {/* -------------------------------------------------------------- */}
                <Form className="flex flex-col gap-6 lg:gap-8" onSubmit={onSubmit}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {/* ================= USER NAME INPUT ================= */}
                        <TextField
                            aria-label="Your Name"
                            isRequired
                            name="name"
                            className="w-full "
                        >

                            <Input
                                placeholder="Your Name"
                                className={cn(
                                    "w-full rounded-lg border border-purple-600/20 px-3 py-3",
                                    "text-sm placeholder:text-muted",
                                    "focus:outline-none focus:ring-0"
                                )}
                            />

                            {/* Validation Error */}
                            <FieldError />
                        </TextField>

                        {/* ================= EMAIL INPUT ================= */}
                        <TextField
                            aria-label="Your Email"
                            isRequired
                            name="email"
                            type="email"
                            className="w-full "
                        >

                            <Input
                                placeholder="Your Email"
                                className={cn(
                                    "w-full rounded-lg border border-purple-600/20 px-3 py-3",
                                    "text-sm placeholder:text-muted",
                                    "focus:outline-none focus:ring-0"
                                )}
                            />

                            <FieldError />
                        </TextField>
                    </div>

                    {/* ================= SUBJECT INPUT ================= */}
                    <TextField
                        aria-label="Subject"
                        isRequired
                        name="subject"
                        type="text"
                        className="w-full "
                    >

                        <Input
                            placeholder="Subject"
                            className={cn(
                                "w-full rounded-lg border border-purple-600/20 px-3 py-3",
                                "text-sm placeholder:text-muted",
                                "focus:outline-none focus:ring-0"
                            )}
                        />

                        <FieldError />
                    </TextField>

                    {/* ================= MESSAGE INPUT ================= */}
                    <TextField
                        aria-label="Your Message"
                        isRequired
                        name="message"
                        className="w-full "
                    >
                        <TextArea
                            placeholder="Your Message"
                            rows={6}
                            className={cn(
                                "w-full rounded-lg border border-purple-600/20 px-3 py-3",
                                "text-sm placeholder:text-muted",
                                "focus:outline-none focus:ring-0"
                            )}
                        />

                        <FieldError />
                    </TextField>

                    <BaseButton
                        animated
                        type="submit"
                        rightIcon={
                            loading ? (
                                <span className="animate-spin">
                                    ⏳
                                </span>
                            ) : (
                                <IoMdPaperPlane className="text-xl" />
                            )
                        }
                        aria-label="Create account"
                        disabled={loading}
                        className="rounded-lg"
                        animatedSpanOne={'rounded-lg animate-ping'}
                        animatedSpanTwo={'rounded-lg'}
                    >

                        {/* Show loading text while submitting */}
                        {loading ? "Sending Message..." : "Send Message"}

                    </BaseButton>
                </Form>
            </div>
        </section>
    );
};

export default ContactForm;