import FadeInSection from "../Animations/FadeInSection";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import footerBg from "/Images/footer-bg.png";

const Footer = () => {
    return (
        <section
                    id='footer'
                    className="bg-black px-6 md:px-16 top-0 h-[100vh] max-h-[70vw] text-gray-400 text-left"
                    style={{
                        backgroundImage: `url(${footerBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center bottom",
                        backgroundRepeat: "no-repeat",
                    }}
                >
            <FadeInSection>
                <div className="flex justify-center items-center mb-4 mt-0 pt-30 p-4">
                    <img
                        src="/TransfiNITTe.png"
                        alt="TransfiNITTe Logo"
                        className="w-full max-w-full min-h-[5rem] h-auto"
                        style={{ objectFit: 'contain' }}
                    />
                </div>

                <div className="text-white text-right border-b-2 border-white pb-10 text-md sm:text-xl">
                    <div>Technical Council,</div>
                    <div>NIT - Tiruchirapalli</div>
                </div>
            </FadeInSection>

           
                <div className="text-white text-md sm:text-xl mx-8 px-0 mt-4 sm:px-6 flex flex-col md:block items-center md:items-start w-full absolute left-0 bottom-0" style={{minHeight: '7rem'}}>
                    {/* Social Links */}
                    <div className="flex gap-x-10 text-5xl text-white items-center md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2" style={{marginLeft: 0}}>
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

                    <div className="hidden md:block w-px h-68 bg-white md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2" />

                    <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 mr-12 text-xl">
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
           
        </section>
    );
};

export default Footer;