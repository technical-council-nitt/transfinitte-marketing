import { SiBoeing, SiBosch, SiGeeksforgeeks, SiJbl, SiMongodb, SiYamahacorporation } from "react-icons/si";
import FadeInSection from "../Animations/FadeInSection";
import { useEffect, useState } from "react";

const steps = [
  { title: "01 Software", active: false },
  { title: "02 Hardware", active: false },
  { title: "03 Management", active: false },
  { title: "04 Entrepreneurship", active: false },
];

const slides = [
  "/Images/slideshow1/slideshow1.0.jpeg",
  "/Images/slideshow1/slideshow1.1.jpeg",
  "/Images/slideshow1/slideshow1.2.jpeg",
  "/Images/slideshow1/slideshow1.3.jpeg",
  "/Images/slideshow1/slideshow1.4.jpeg",
];

const AboutUs = () => {
  const [idx, setIdx] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % totalSlides);
    }, 1000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section id="aboutus" className="bg-black text-white px-6 md:px-16 py-20">
      <FadeInSection>
        <h2 className="text-4xl md:text-5xl lg:text-7xl mb-16 text-left text-[rgb(161,163,165)] font-semibold">
          About <span className="text-white font-bold">TransfiNITTe</span>
        </h2>
      </FadeInSection>

      <FadeInSection>
        <div className="my-12 max-w-4xl mx-auto text-xl md:text-3xl text-[rgb(161,163,165)] font-semibold text-center flex flex-wrap justify-center ">
          <span className="text-white font-bold whitespace-nowrap">4 Domains</span>
          <span className="">,</span>
          <span className="text-white font-bold whitespace-nowrap ml-3">42 Hours</span>
          <span className="">,</span>
          <span className="text-white font-bold whitespace-nowrap ml-3">100+ Teams</span>
          <span className="">,</span>
          <span className="text-white font-bold whitespace-nowrap ml-3">Infinite Possibilities!</span>
        </div>
      </FadeInSection>

      <div className="w-full pt-12 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl">
          {steps.map((step, idx) => (
            <FadeInSection key={idx}>
              <div className="px-4 py-2">
                <h3
                  className={`text-xl sm:text-3xl md:text-4xl font-bold p-4 rounded-md transition ${step.active
                    ? "bg-gradient-to-r from-red-500 to-pink-400 text-black"
                    : "text-white border border-white"
                    }`}
                >
                  {step.title}
                </h3>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-3xl h-[400px] mx-auto my-16 overflow-hidden">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slideshow ${i}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === i ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          />
        ))}
      </div>



      <div className="mt-20">
        <FadeInSection>
          <div className="font-semibold text-white text-3xl md:text-4xl lg:text-5xl mb-12">They trust us</div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 px-4 text-white justify-items-center items-center text-5xl sm:text-7xl">
            <SiJbl className="hover:scale-110 transition-transform duration-300" />
            <SiYamahacorporation className="hover:scale-110 transition-transform duration-300" />
            <SiBosch className="hover:scale-110 transition-transform duration-300" />
            <SiMongodb className="hover:scale-110 transition-transform duration-300" />
            <SiGeeksforgeeks className="hover:scale-110 transition-transform duration-300" />
            <SiBoeing className="hover:scale-110 transition-transform duration-300" />
          </div>
        </FadeInSection>
      </div>

    </section>
  );
};

export default AboutUs;

