import React from "react";
import { ChevronDown, Download, ExternalLink } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background grid and animations */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px]"></div>

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] z-10 backdrop-contrast-125 bg-gradient-to-b from-transparent via-white to-transparent animate-scanline"></div>
      </div>

      {/* Pixel art decorations */}
      <div
        className="absolute top-20 left-[10%] w-8 h-8 bg-game-purple rounded opacity-60 animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute top-40 right-[15%] w-12 h-12 bg-game-pink rounded opacity-60 animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute bottom-32 left-[20%] w-6 h-6 bg-game-cyan rounded opacity-60 animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute bottom-40 right-[25%] w-10 h-10 bg-game-yellow rounded opacity-60 animate-float"
        style={{ animationDelay: "4.5s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-pixel text-3xl md:text-4xl lg:text-5xl mb-6 relative inline-block">
            <span className="text-game-pink">PIXEL PERFECT</span>
            <br />
            <span className="text-white">PUZZLE GAMES</span>
            <div className="absolute -left-3 -right-3 -bottom-3 h-1 bg-game-cyan"></div>
          </h1>

          <p className="font-body text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I craft uniquely challenging pixel art puzzle experiences that blend
            retro aesthetics with modern gameplay mechanics.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="/#games"
              className="group px-8 py-3 rounded bg-game-purple hover:bg-game-purple/80 text-white font-pixel text-sm transition-all duration-300 transform hover:translate-y-[-2px] relative flex items-center justify-center"
            >
              <span>DISCOVER GAMES</span>
              <ExternalLink size={16} className="ml-2" />
              <div className="absolute inset-0 border-2 border-game-cyan rounded opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300"></div>
            </a>

            <a
              href="/#contact"
              className="group px-8 py-3 rounded bg-transparent border-2 border-game-cyan hover:bg-game-cyan/10 text-game-cyan font-pixel text-sm transition-all duration-300 transform hover:translate-y-[-2px] flex items-center justify-center"
            >
              <span>CONTACT ME</span>
              <Download size={16} className="ml-2" />
            </a>
          </div>

          {/* Featured game character */}
          <div className="mt-4 relative inline-block">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto relative">
              <div
                className="w-full h-full bg-[url('/assets/logo.png')] bg-contain bg-center bg-no-repeat"
                style={{
                  imageRendering: "pixelated",
                  filter: "brightness(1.2) contrast(1.1)",
                }}
              ></div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-game-purple via-game-pink to-game-cyan opacity-50 blur-lg -z-10 animate-pulse"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="font-pixel text-xs text-game-cyan mb-2">
            SCROLL DOWN
          </span>
          <ChevronDown size={24} className="text-game-cyan animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
