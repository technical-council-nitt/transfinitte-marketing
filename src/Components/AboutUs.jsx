import { SiBoeing, SiBosch, SiGeeksforgeeks, SiJbl, SiMongodb, SiYamahacorporation } from "react-icons/si";
import FadeInSection from "../Animations/FadeInSection";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

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
    <section id="aboutus" className="text-white px-6 md:px-16 py-10 pb-0">
      <FadeInSection>
        <h2 className="text-4xl md:text-5xl lg:text-7xl mb-16 text-left text-[rgb(161,163,165)] font-semibold">
          About <span className="text-white" style={{ fontFamily: 'Neue Haas Grotesk light, Inter, system-ui, sans-serif' }}>TransfiNITTe</span>
        </h2>
      </FadeInSection>

      <FadeInSection>
        <div className="my-12 max-w-4xl mx-auto text-[3vw] md:text-3xl max-sm:px-2 text-[rgb(161,163,165)] font-semibold text-center flex flex-wrap justify-center ">
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

      <FadeInSection>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 2,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper my-8"
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slides.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`Slideshow ${i}`}
                className="object-cover rounded-xl px-6"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </FadeInSection>

      

    </section>
  );
};

export default AboutUs;

