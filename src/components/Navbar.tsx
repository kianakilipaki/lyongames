import React, { useState, useEffect } from "react";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
    // Sound implementation could be added here
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-game-dark/95 backdrop-blur-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />

        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Games", "About", "News", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-pixel text-sm text-white hover:text-game-cyan transition duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-game-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <button
            onClick={toggleSound}
            className="text-white hover:text-game-yellow focus:outline-none transition duration-300"
            aria-label={isSoundOn ? "Mute sound" : "Turn on sound"}
          >
            {isSoundOn ? (
              <Volume2 size={20} className="animate-pulse" />
            ) : (
              <VolumeX size={20} />
            )}
          </button>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-game-dark/95 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {["Home", "Games", "About", "News", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-pixel text-sm text-white hover:text-game-cyan py-2 border-b border-game-purple/20"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            onClick={toggleSound}
            className="text-white hover:text-game-yellow focus:outline-none py-2 flex items-center space-x-2"
          >
            {isSoundOn ? (
              <>
                <Volume2 size={20} />
                <span className="font-pixel text-sm">Sound On</span>
              </>
            ) : (
              <>
                <VolumeX size={20} />
                <span className="font-pixel text-sm">Sound Off</span>
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
