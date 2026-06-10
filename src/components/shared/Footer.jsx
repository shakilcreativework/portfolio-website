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
import ShaderBackground from "../effects/ShaderBackground";

const technologies = [
    {
        name: "React",
        icon: SiReact,
        color: "text-[#61DAFB]", // React Blue
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-white dark:text-white", // Next.js
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-[#06B6D4]", // Tailwind Cyan
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "text-[#5FA04E]", // Node Green
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-[#47A248]", // MongoDB Green
    },
    {
        name: "Express.js",
        icon: SiExpress,
        color: "text-gray-300 dark:text-gray-200", // Express Neutral
    },
    {
        name: "Firebase",
        icon: SiFirebase,
        color: "text-[#FFCA28]", // Firebase Yellow
    },
    {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-[#F7DF1E]", // JavaScript Yellow
    },
];

const Footer = () => {
    const links = navLinks;
    // console.log(links);

    return (
        <ShaderBackground colorFront="#8B5CF6" as="footer" className="w-full bg-card py-6 mt-auto">
            <Container>
                <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
                    {/* logo */}
                    <Logo />
                    <span className="text-xs text-muted text-center leading-6">&copy; {new Date().getFullYear()} Md Shakil Ahmed. Designed & Developed with Next.js, Tailwind CSS, and ❤️.</span>
                    {/* social links */}
                    <div className="flex gap-5 items-center">
                        <Link href={'/'} className="hover:text-purple-600 transition">
                            <div className="w-8 h-8 bg-background flex justify-center items-center shadow-xs">
                                <IoLogoGithub className="text-lg" />
                            </div>
                        </Link>
                        <Link href={'/'} className="hover:text-purple-600 transition">
                            <div className="w-8 h-8 bg-background flex justify-center items-center shadow-xs">
                                <FaLinkedinIn className="text-lg" />
                            </div>
                        </Link>
                        <Link href={'/'} className="hover:text-purple-600 transition">
                            <div className="w-8 h-8 bg-background flex justify-center items-center shadow-xs">
                                <FaDiscord className="text-lg" />
                            </div>
                        </Link>
                        <Link href={'/'} className="hover:text-purple-600 transition">
                            <div className="w-8 h-8 bg-background flex justify-center items-center shadow-xs">
                                <MdOutlineMarkEmailUnread className="text-lg" />
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </ShaderBackground>
    );
};

export default Footer;