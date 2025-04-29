import React from "react";
const Logo: React.FC = () => {
  return (
    <a href="#home" className="flex items-center space-x-2 group">
      <div className="relative w-8 h-8">
        <img
          src="/assets/logo.png"
          alt="Lyon Games Logo"
          className="w-full h-full object-contain transition-colors duration-300"
        />
        <div className="absolute inset-0 bg-game-purple/20 blur-lg rounded-full animate-pulse"></div>
      </div>
      <div className="relative">
        <span className="font-pixel text-lg text-white group-hover:text-game-cyan transition-colors duration-300">
          LYON
        </span>
        <span className="font-pixel text-lg text-game-pink group-hover:text-game-cyan transition-colors duration-300">
          GAMES
        </span>
        <span className="absolute -right-4 top-0 w-2 h-2 bg-game-cyan animate-blink"></span>
      </div>
    </a>
  );
};

export default Logo;
