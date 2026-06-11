"use client";

import Link from "next/link";
import Container from "./Container";
import { navLinks } from "@/lib/actions";
import { ThemeSwitch } from "../ui/ThemeSwitch";
import BaseButton from "../ui/BaseButton";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import Logo from "../ui/Logo";
import ShaderBackground from "../effects/ShaderBackground";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links = navLinks;

    const handleMenu = () => {
        setOpen(!open);
    };

    const handleDownloadCV = () => {
        setOpen(false);
    };

    return (
        /* 1. THE FIX: Wrap everything inside a native HTML <header> element.
             This permanently binds the structural "sticky top-0" real estate to the window,
             preventing it from lifting up, jumping, or resizing on mobile scroll.
        */
        <header className="sticky top-0 left-0 w-full z-50 backdrop-blur-lg bg-background/60 lg:shadow-2xs">

            {/* 2. Shader background sits inside, handling only visual styling and the canvas */}
            <ShaderBackground
                as="div"
                colorFront="#8B5CF6"
                className="w-full py-3"
            >
                <Container>
                    <nav>

                        {/* Main Navbar Row (Logo & Interaction Controls) */}
                        <div className="flex items-center justify-between w-full lg:w-auto">
                            <div>
                                <Logo />
                            </div>

                            {/* Desktop Navigation Links */}
                            <ul className="hidden lg:flex lg:gap-10 items-center">
                                {links.map((nav) => (
                                    <li key={nav.name}>
                                        <Link
                                            href={nav.path}
                                            className="text-muted text-sm font-medium hover:text-accent"
                                        >
                                            {nav.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center gap-5">
                                <ThemeSwitch />
                                <BaseButton animated className={'hidden md:inline-flex'} text={'Download CV'} rightIcon={<MdOutlineFileDownload className="text-2xl" />} />
                                <button
                                    aria-label={open ? "Close Menu" : "Open Menu"}
                                    aria-expanded={open}
                                    onClick={handleMenu}
                                    className="block lg:hidden rounded-full bg-card hover:text-accent p-2"
                                >
                                    <div className="relative w-6 h-6 flex justify-center items-center rounded-full shadow-2xs">
                                        {open ? (
                                            <IoClose className="absolute text-xl" />
                                        ) : (
                                            <AiOutlineMenu className="absolute text-xl" />
                                        )}
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Mobile Collapsible Dropdown Drawer (Using dynamic smooth grid scaling) */}
                        <div className={`grid transition-all duration-300 ease-in-out lg:hidden w-full
                            ${open
                                ? "grid-rows-[1fr] opacity-100 mt-4 pb-2"
                                : "grid-rows-[0fr] opacity-0 pointer-events-none"
                            }`}
                        >
                            <div className="overflow-hidden">
                                <ul className="space-y-5 flex flex-col pt-2 border-muted/10">
                                    {links.map((nav) => (
                                        <li key={nav.name}>
                                            <Link
                                                onClick={() => setOpen(false)}
                                                href={nav.path}
                                                className="text-muted text-sm font-medium hover:text-accent w-full block"
                                            >
                                                {nav.name}
                                            </Link>
                                        </li>
                                    ))}
                                    <BaseButton onClick={handleDownloadCV} animated className={'md:hidden inline-flex w-full justify-center'} text={'Download CV'} rightIcon={<MdOutlineFileDownload className="text-2xl" />} />
                                </ul>
                            </div>
                        </div>

                    </nav>
                </Container>
            </ShaderBackground>
        </header>
    );
};

export default Navbar;