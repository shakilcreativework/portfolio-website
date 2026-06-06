import { IoMdPaperPlane } from "react-icons/io";
import Container from "../shared/Container";
import { MdOutlineLocationOn } from "react-icons/md";

const Contact = () => {
    return (
        <section className="py-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-3">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 col-span-1">
                            <span className="inline-block h-3 w-3 rounded-full bg-linear-to-r from-purple-300 to-purple-600"></span>
                            <span className="text-muted ">Get In Touch</span>
                        </div>
                        <h2 className="font-bold text-3xl">Let&apos;s Work Together</h2>
                        <p className="text-muted lg:text-lg">Have a project in mind or want to collaborate? <br className="sm:hidden md:inline-flex" /> Feel free to reach out. <br className="hidden sm:inline-flex md:hidden" /> I&apos;m always open to <br className="hidden md:inline-flex" /> discussing new opportunities.</p>

                        <div className="text-muted space-y-4">
                            <span className="flex items-center gap-2 ">
                                <IoMdPaperPlane className="text-purple-600 text-xl" />
                                shakilcreativework@gmail.com
                            </span>

                            <span className="flex items-center gap-2 ">
                                <MdOutlineLocationOn className="text-purple-600 text-xl" />
                                Sirajganj, Bangladesh
                            </span>
                            <div className="flex items-center gap-2 col-span-1">
                                <div className="w-5 h-5 flex justify-center items-center">
                                    <span className="inline-block h-3 w-3 rounded-full bg-linear-to-r from-green-300 to-green-600"></span>
                                </div>
                                <span>Available for freelance work</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;