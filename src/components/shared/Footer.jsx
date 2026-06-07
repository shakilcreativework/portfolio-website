import { IoLogoGithub } from "react-icons/io5";
import Logo from "../ui/Logo";
import Container from "./Container";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { MdOutlineMarkEmailUnread } from "react-icons/md";


const Footer = () => {
    return (
        <footer className="bg-card py-5">
            <Container>
                <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-6">
                    <Logo />
                    <span className="text-xs">&copy; 2026 Md Shakil Ahmed. Designed & Developed with Next.js, Tailwind CSS, and ❤️.</span>
                    {/* <div className="flex gap-5 items-center">
                        <Link href={'/'} className="">
                            <IoLogoGithub className="text-2xl" />
                        </Link>
                        <Link href={'/'} className="">
                            <FaLinkedinIn className="text-2xl" />
                        </Link>
                    </div> */}
                    <div className="flex gap-5 items-center">
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
            </Container>
        </footer>
    );
};

export default Footer;