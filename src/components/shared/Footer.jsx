import { IoLogoGithub } from "react-icons/io5";
import Logo from "../ui/Logo";
import Container from "./Container";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";


const Footer = () => {
    return (
        <footer className="bg-card py-5">
            <Container>
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
                    <Logo />
                    <span className="text-sm">&copy; 2026 Md Shakil Ahmed. All rights reserved.</span>
                    <div className="flex gap-5 items-center">
                        <Link href={'/'} className="">
                            <IoLogoGithub className="text-2xl" />
                        </Link>
                        <Link href={'/'} className="">
                            <FaLinkedinIn className="text-2xl" />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;