import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "About Us", target: "aboutus" },
    { name: "Reach", target: "reach" },
    { name: "Testimonials", target: "testimonials" }
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
    <nav
      className="w-full fixed top-0 z-50 px-6 md:px-10 py-4 flex justify-between items-center transition-colors duration-300 backdrop-blur-xs"
      style={{ cursor: "default" }}
    >
      {/* Logo */}
      <div
        onClick={() => scrollToSection("hero")}
        className={`text-4xl font-bold transition ${scrolled ? "text-white" : "text-black"
          }`}
        style={{ cursor: "pointer" }}
      >
        TransfiNITTe
      </div>

      {/* Desktop Nav */}
      <div
        className={`hidden md:flex md:gap-6 lg:gap-16 md:text-md lg:text-lg font-bold items-center transition ${scrolled ? "text-white" : "text-black"
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
        className={`hidden md:flex px-5 py-2 rounded transition cursor-pointer ${scrolled ? "bg-white text-black" : "bg-black text-white"
          } hover:bg-neutral-600 hover:text-white`}
      >
        Problem Statements →
      </button>

      {/* Mobile Menu Icon */}
      <div className={`md:hidden ${scrolled ? "text-white" : "text-black"}`}>
        <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-black flex flex-col items-start px-6 py-4 gap-4 shadow-lg md:hidden transition-all duration-300">
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
            Problem Statements →
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
