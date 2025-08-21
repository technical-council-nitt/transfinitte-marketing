import FadeInSection from "../Animations/FadeInSection";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import footerBg from "/Images/footer-bg.png";

const Footer = () => {
    return (
        <section
                    id='footer'
                    className="bg-black px-6 md:px-16 py-20 text-gray-400 text-left"
                    style={{
                        backgroundImage: `url(${footerBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center bottom",
                        backgroundRepeat: "no-repeat",
                    }}
                >
            <FadeInSection>
                <div className="text-white text-center mb-12 p-4 font-semibold">
                    <h1
                        className="inline-block leading-none w-full text-[clamp(2rem,14vw,20rem)]"
                        style={{ wordBreak: "break-word" }}
                    >
                        TransfiNITTe
                    </h1>
                </div>

                <div className="text-white text-right border-b-2 border-white pb-10 text-md sm:text-xl">
                    <div>Technical Council,</div>
                    <div>NIT - Tiruchirapalli</div>
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="text-white text-md sm:text-xl mx-auto max-w-7xl mt-16 px-4 sm:px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
                    {/* Social Links */}
                    <div className="flex gap-x-10 text-4xl text-white items-center">
                        <a
                            href="https://www.instagram.com/tc_nitt/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition duration-300"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/technical-council-nit-trichy/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition duration-300"
                        >
                            <FaLinkedin />
                        </a>
                    </div>

                    <div className="hidden md:block w-px h-28 bg-white" />

                    <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
                        <a
                            className="underline flex items-center justify-center md:justify-end gap-2"
                            href="mailto:technicalcouncil.nitt.work@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IoMdMail />
                            technicalcouncil.nitt.work@gmail.com
                        </a>
                        <div className="flex items-center justify-center md:justify-end gap-2">
                            <IoIosCall />
                            70477 79851 / 99407 42527
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

export default Footer;
