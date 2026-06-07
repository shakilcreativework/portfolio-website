import { IoLogoGithub } from "react-icons/io5";
import Logo from "../ui/Logo";
import Container from "./Container";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { navLinks } from "@/lib/actions";
import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiFirebase,
    SiGithub,
} from "react-icons/si";

const technologies = [
    {
        name: "React",
        icon: SiReact,
        color: "text-[#61DAFB]",
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-foreground",
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-[#00BCFF]",
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "text-[#5FA04E]",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-[#47A248]",
    },
];

const Footer = () => {
    const links = navLinks;
    console.log(links);

    return (
        <footer className="bg-card space-y-6 py-10">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {/* logo */}
                    <div className="space-y-3 sm:col-span-2">
                        <Logo />
                        <span className="text-muted">Crafting modern digital experiences with React, Next.js, Tailwind CSS, and performance-driven development. Focused on building responsive, scalable, and user-friendly applications that help businesses grow online.</span>
                        {/* social links */}
                        <div className="flex gap-5 items-center mt-5">
                            <Link href={'/'} className="hover:text-purple-600 transition">
                                <div className="w-8 h-8 bg-background flex justify-center items-center shadow-xs">
                                    <IoLogoGithub className="text-xl" />
                                </div>
                            </Link>
                            <Link href={'/'} className="hover:text-purple-600 transition">
                                <div className="w-8 h-8 bg-background flex justify-center items-center shadow-xs">
                                    <FaLinkedinIn className="text-xl" />
                                </div>
                            </Link>
                            <Link href={'/'} className="hover:text-purple-600 transition">
                                <div className="w-8 h-8 bg-background flex justify-center items-center shadow-xs">
                                    <FaDiscord className="text-xl" />
                                </div>
                            </Link>
                            <Link href={'/'} className="hover:text-purple-600 transition">
                                <div className="w-8 h-8 bg-background flex justify-center items-center shadow-xs">
                                    <MdOutlineMarkEmailUnread className="text-xl" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* nav links */}
                    <div className="space-y-3">
                        <h3 className="text-foreground text-lg font-medium">Navigation</h3>
                        <ul className="space-y-2.5">
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
                        </ul>
                    </div>
                    {/* Tech Stack */}
                    <div className="md:col-span-3 lg:col-span-1">
                        <h3 className="text-foreground text-lg font-medium">Tech Stack</h3>
                        <div className="flex flex-wrap gap-1.5 mt-5">
                            {technologies.map(({ name, icon: Icon, color }) => (
                                <span
                                    key={name}
                                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/5 px-4 py-1.5 text-sm text-muted backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:bg-surface-hover/10 hover:text-foreground shadow-xs"
                                >
                                    <Icon className={`text-base ${color}`} />
                                    {name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
            <hr />
            {/* copyright */}
            <Container>
                <div className="flex justify-center items-center">
                    <span className="text-xs text-muted">&copy; {new Date().getFullYear()} Md Shakil Ahmed. Designed & Developed with Next.js, Tailwind CSS, and ❤️.</span>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;