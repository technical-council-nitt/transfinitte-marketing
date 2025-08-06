import RotatingText from "./RotatingText";
import CountdownTimer from "./CountdownTimer";
import heroBg from "/Images/hero-bg.png";

const Hero = () => {
    return (
        <section
            id='hero'
            className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 py-20"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-6xl mt-20">
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-black break-words">
                    TransfiNITTe
                </h1>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 text-black font-bold text-4xl sm:text-6xl md:text-8xl text-center">
                    <span>for</span>
                    <div><RotatingText /></div>
                </div>

                <p className="mt-10 text-lg sm:text-xl font-semibold text-black px-2 sm:px-0">
                    The Flagship Hackathon of NIT Trichy
                </p>

                <CountdownTimer
                    targetDate={new Date("2025-10-17T00:00:00")}
                    finalText="OCT 17-19 2025"
                />
            </div>
        </section>
    );
};

export default Hero;
