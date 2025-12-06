import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNav(true);
      } else {
        setShowNav(false);
        setIsMenuOpen(false); // close menu when navbar hides
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#programs", label: "Programs" },
    { href: "#announcements", label: "News" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white/70 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-semibold text-secondary text-lg leading-tight">
                  <span className="text-primary">Alle </span>School
                </p>
                <p className="text-xs text-secondary-soft">Fine Arts & Design</p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
  key={link.href}
  href={link.href}
  className="relative text-gray-600 font-medium transition duration-300
             after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
             after:w-0 after:bg-orange-600 after:transition-all after:duration-300
             hover:after:w-full"
>
  {link.label}
</a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/80 transition">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu – floats and doesn’t block background */}
      {isMenuOpen && (
  <div
    className={`
       lg:hidden
      pointer-events-none
      absolute
      right-0
      top-20
      z-50
      w-fit
      max-w-fit
      ${
        !showNav?"hidden":"block animation-fadeIn"
      }`

     
    }
  >
    <nav
      className="
        flex flex-col gap-4 px-6 py-3
        bg-white/70 backdrop-blur-md rounded-lg shadow-lg
        pointer-events-auto
        rounded-t-none
       
         items-center
      "
    >
      {navLinks.map((link) => (
        <a
  key={link.href}
  href={link.href}
  className="relative text-gray-600 font-medium transition duration-300
             after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
             after:w-0 after:bg-orange-600 after:transition-all after:duration-300
             hover:after:w-full text-center w-fit"
>
  {link.label}
</a>
      ))}

      <button className="bg-primary text-white px-6 py-3 rounded-full mt-2 hover:bg-orange-700">
        Apply Now
      </button>
    </nav>
  </div>
)}
    </header>
  );
};

export default Header;
