import { div } from "framer-motion/client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const logos = ['/T_black.png', '/T_black.png'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "About Us", target: "aboutus" },
    { name: "Reach", target: "reach" },
    { name: "Testimonials", target: "testimonials" },
    { name: "Contact Us", target: "footer" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      setScrolled(window.scrollY > heroHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div><nav
      className="w-full fixed top-0 z-50 px-6 md:px-10 py-4 flex justify-between items-center transition-colors duration-300 bg-transparent mix-blend-difference"
      style={{ cursor: "default" }}
    >
      {/* Logo */}
      <div
        onClick={() => scrollToSection("hero")}
        className='text-4xl font-bold transition'
        style={{ cursor: "pointer" }}
      >
  <div className="relative w-[60px] h-[45px] sm:w-[120px] sm:h-[45px]">
          {logos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Logo ${i}`}
              className={`absolute top-0 left-0 w-[120rem] pt-[0.8rem] h-auto object-contain transition-opacity duration-500 ease-in-out mix-blend-difference ${scrolled === (i === 1) ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Nav */}
      <div
        className={`hidden sm:flex gap-5 md:gap-6 lg:gap-16 md:text-md lg:text-lg font-bold items-center transition ${scrolled ? "text-white" : "text-white"
          }`}
      >
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.target)}
            className="relative group transition cursor-pointer"
          >
            {item.name}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
          </button>
        ))}
      </div>

      {/* Desktop Button */}
      <button
        className={`hidden sm:flex px-8 py-2 rounded-[5px] transition cursor-pointer ${scrolled ? "bg-white text-black" : "bg-white text-black"
          } hover:bg-neutral-600 hover:text-white`}
      >
        Website →
      </button>

      {/* Mobile Menu Icon */}
      <div className={`flex sm:hidden ${scrolled ? "text-white" : "text-white"}`}>
        <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
     
    </nav>
     {isOpen && (
        <div className="fixed top-16 left-0 w-full z-[999] bg-white text-black flex flex-col items-start px-6 py-4 gap-4 shadow-lg md:hidden transition-all duration-300">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.target)}
              className="relative text-base font-semibold text-left w-full group cursor-pointer"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-neutral-600 transition cursor-pointer">
            Website →
          </button>
        </div>
      )}
      </div>
  );
};

export default Navbar;
