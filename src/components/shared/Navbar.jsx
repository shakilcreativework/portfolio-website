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


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links = navLinks;

    const handleMenu = () => {
        setOpen(!open);
    };
    return (
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/60 py-2.5 lg:shadow-2xs">
            <Container>
                <nav className="flex items-center justify-between">
                    <div>
                        <Logo />
                    </div>

                    {/* for Desktop nav links */}
                    <ul className="hidden lg:flex gap-4 lg:gap-6 items-center">

                        {/* Loop through navigation links */}
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

                    {/* for Mobile nav links */}
                    <ul className={`absolute space-y-5 lg:hidden w-full left-0 top-full backdrop-blur-sm bg-background/80 shadow-2xs p-5 flex flex-col

                        ${open
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}>

                        {/* Loop through navigation links */}
                        {links.map((nav) => (

                            <li key={nav.name}>

                                <Link
                                    href={nav.path}
                                    className="text-muted text-sm font-medium hover:text-accent w-full block"
                                >
                                    {nav.name}
                                </Link>

                            </li>

                        ))}
                        <BaseButton className={'md:hidden inline-flex'} text={'Download CV'} rightIcon={<MdOutlineFileDownload className="text-2xl" />} />
                    </ul>
                    <div className="flex items-center gap-5">
                        <ThemeSwitch />
                        <BaseButton className={'hidden md:inline-flex'} text={'Download CV'} rightIcon={<MdOutlineFileDownload className="text-2xl" />} />
                        <button
                            aria-label={open ? "Close Menu" : "Open Menu"}
                            aria-expanded={open}
                            onClick={handleMenu}
                            className="block lg:hidden rounded-full bg-card hover:text-accent p-2"
                        >

                            {/* =====================================
                                ICON WRAPPER
                            ===================================== */}
                            <div className="relative w-6 h-6 flex justify-center items-center rounded-full shadow-2xs">

                                {/* =================================
                                    CLOSE ICON
                                    Visible when menu is open.
                                ================================= */}
                                {open ? (
                                    <IoClose className="absolute text-xl" />
                                ) : (
                                    <AiOutlineMenu className="absolute text-xl" />
                                )}

                            </div>
                        </button>
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Navbar;