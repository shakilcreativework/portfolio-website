

import { IoLogoGithub, IoMdPaperPlane } from "react-icons/io";
import Container from "../shared/Container";
import { MdOutlineLocationOn, MdOutlineMarkEmailUnread } from "react-icons/md";
import ContactForm from "../ui/ContactForm";
import Link from "next/link";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="py-20" id="contact">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center gap-12 md:gap-14 lg:gap-8 xl:gap-16">
                    <div className="space-y-4 md:col-span-2">
                        <div className="flex items-center gap-2">
                            <span className="inline-block h-3 w-3 rounded-full bg-linear-to-r from-purple-300 to-purple-600  animate-pulse"></span>
                            <span className="text-muted ">Have an idea?</span>
                            {/* <span className="text-muted ">Open for Freelance Opportunities</span> */}
                        </div>
                        <h2 className="font-bold text-3xl leading-10">Let&apos;s turn it into a <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text font-bold text-transparent">beautiful</span> <br className="hidden sm:inline-flex" /> <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text font-bold uppercase text-transparent">digital</span> experience.</h2>
                        {/* <h2 className="font-bold text-3xl leading-10">Let&apos;s Build Something <br /> <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text font-bold uppercase text-transparent">Amazing</span> Together</h2> */}
                        <p className="text-muted lg:text-lg">Have a project idea or need a developer for your next product?
                            <br className=" sm:inline-flex md:inline-flex lg:hidden xl:inline-flex" /> I&apos;m available for freelance work, collaborations, and full-stack web <br className="hidden sm:inline-flex md:inline-flex lg:hidden xl:inline-flex" /> development projects worldwide.</p>

                        <div className="text-muted space-y-4">
                            <span className="flex items-center gap-2 ">
                                <IoMdPaperPlane className="text-purple-600 text-xl" />
                                shakilcreativework@gmail.com
                            </span>

                            <span className="flex items-center gap-2 ">
                                <MdOutlineLocationOn className="text-purple-600 text-xl" />
                                Sirajganj, Bangladesh • Remote Worldwide
                            </span>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 flex justify-center items-center animate-pulse">
                                    <span className="inline-block h-3 w-3 rounded-full bg-linear-to-r from-green-300 to-green-600"></span>
                                </div>
                                <span>Available for freelance work</span>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <Link href={'/'} className="hover:text-purple-600 transition">
                                <div className="w-10 h-10 bg-card flex justify-center items-center shadow-xs">
                                    <IoLogoGithub className="text-2xl" />
                                </div>
                            </Link>
                            <Link href={'/'} className="hover:text-purple-600 transition">
                                <div className="w-10 h-10 bg-card flex justify-center items-center shadow-xs">
                                    <FaLinkedinIn className="text-2xl" />
                                </div>
                            </Link>
                            <Link href={'/'} className="hover:text-purple-600 transition">
                                <div className="w-10 h-10 bg-card flex justify-center items-center shadow-xs">
                                    <FaDiscord className="text-2xl" />
                                </div>
                            </Link>
                            <Link href={'/'} className="hover:text-purple-600 transition">
                                <div className="w-10 h-10 bg-card flex justify-center items-center shadow-xs">
                                    <MdOutlineMarkEmailUnread className="text-2xl" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="md:col-span-2 lg:col-span-3">
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;