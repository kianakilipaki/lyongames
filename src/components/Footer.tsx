import React from "react";
import { Github, Linkedin, Heart, Facebook } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-game-dark py-12 border-t border-game-purple/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and about */}
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-400 text-sm max-w-xs">
              Independent mobile game developer specializing in pixel art puzzle
              games with a retro aesthetic and modern gameplay.
            </p>

            {/* Social icons */}
            <div className="flex space-x-4">
              {[
                {
                  icon: <Github size={18} />,
                  label: "GitHub",
                  url: "https://github.com/kianakilipaki/lyongames",
                },
                {
                  icon: <Facebook size={18} />,
                  label: "Facebook",
                  url: "https://www.facebook.com/profile.php?id=61575665674946",
                },
                {
                  icon: <Linkedin size={18} />,
                  label: "LinkedIn",
                  url: "www.linkedin.com/in/alani-lyon-42ab81148",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-game-black text-gray-400 hover:text-game-cyan border border-game-purple/20 hover:border-game-cyan/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-pixel text-game-cyan text-sm mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", url: "/#home" },
                { label: "Games", url: "/#games" },
                { label: "About", url: "/#about" },
                { label: "Developer", url: "/#developer" },
                { label: "Contact", url: "/#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-game-pink transition-colors duration-300 text-sm inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-game-purple/20 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-4 sm:mb-0">
            © {currentYear} Lyon Games. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/privacy"
            className="text-gray-400 hover:text-game-cyan text-xs transition-colors duration-300"
          >
            Privacy Policy
          </Link>

          <Link
            to="/terms"
            className="text-gray-400 hover:text-game-cyan text-xs transition-colors duration-300"
          >
            Terms of Service
          </Link>

          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500 flex items-center justify-center">
          <span>Made with</span>
          <Heart size={12} className="mx-1 text-game-pink" />
          <span>and lots of pixels</span>
        </div>
      </div>

      {/* Decorative pixel art elements */}
      <div className="absolute bottom-0 left-0 w-4 h-4 bg-game-purple opacity-40"></div>
      <div className="absolute bottom-6 left-10 w-2 h-2 bg-game-cyan opacity-40"></div>
      <div className="absolute bottom-4 right-8 w-3 h-3 bg-game-pink opacity-40"></div>
      <div className="absolute top-10 right-4 w-6 h-6 bg-game-yellow opacity-40"></div>
    </footer>
  );
};

export default Footer;
