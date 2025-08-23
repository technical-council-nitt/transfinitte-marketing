
import RotatingText from "./RotatingText";
import CountdownTimer from "./CountdownTimer";
import heroBg from "/Images/hero-bg.png";

const Hero = () => {
    return (
        <section
            id='hero'
            className="w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-10 lg:px-25 py-20"
            
        >
            <div className="relative flex flex-col-reverse sm:flex-row items-center justify-center w-full gap-4 md:gap-8 mt-3 mb-7">
                {/* Left: Text */}
                <div className="flex-1 flex flex-col items-start justify-center text-left lg:mr-[16vw]">
                    <h1 className="text-[14vw] sm:text-7xl md:text-[7vw] lg:text-[5.7vw] font-bold text-white leading-none m-0">
                        innovate.
                    </h1>
                    <h1 className="text-[14vw] sm:text-7xl md:text-[7vw] lg:text-[5.7vw] font-bold text-white leading-none m-0">
                        collaborate.
                    </h1>
                    <h1 className="text-[14vw] sm:text-7xl md:text-[7vw] lg:text-[5.7vw] font-bold text-white leading-none m-0">
                        elevate.
                    </h1>
                    <p className="mt-2 text-l sm:text-xl font-semibold text-white">
                        The Flagship Hackathon of NIT Trichy
                    </p>
                    <CountdownTimer
                        targetDate={new Date("2025-10-10T00:00:00")}
                        finalText="OCT 10-12 2025"
                    />
                </div>

                    <div className="items-center justify-center lg:transform translate-x-[-3vw]">
                    <img
                        src="/Images/teamcard.png"
                        alt="Team Card"
                        className="hidden sm:block w-[20rem] h-auto rounded-xl shadow-xl object-cover"
                        style={{ background: "#181818" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
