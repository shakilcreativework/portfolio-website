import { IoMdPaperPlane } from "react-icons/io";
import Container from "../shared/Container";
import { MdOutlineLocationOn } from "react-icons/md";

const Contact = () => {
    return (
        <section className="py-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-3">
                    <div className="space-y-4 col-span-2">
                        <div className="flex items-center gap-2">
                            <span className="inline-block h-3 w-3 rounded-full bg-linear-to-r from-purple-300 to-purple-600  animate-pulse"></span>
                            <span className="text-muted ">Open for Freelance Opportunities</span>
                        </div>
                        <h2 className="font-bold text-3xl leading-10">Let&apos;s Build Something <br /> <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text font-bold uppercase text-transparent">Amazing</span> Together</h2>
                        {/* <p className="text-muted lg:text-lg">Have a project in mind or want to collaborate? <br className="sm:hidden md:inline-flex" /> Feel free to reach out. <br className="hidden sm:inline-flex md:hidden" /> I&apos;m always open to <br className="hidden md:inline-flex" /> discussing new opportunities.</p> */}
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
                    </div>


                </div>
            </Container>
        </section>
    );
};

export default Contact;