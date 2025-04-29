import React from "react";
import SectionTitle from "./SectionTitle";
import {
  Github,
  Linkedin,
  Twitter,
  Code,
  Palette,
  Headphones,
  Briefcase,
} from "lucide-react";

const DeveloperSection: React.FC = () => {
  const skills = [
    {
      icon: <Code size={24} className="text-game-cyan" />,
      name: "Game Development",
      description: "Unity, Godot, and custom game frameworks",
    },
    {
      icon: <Palette size={24} className="text-game-pink" />,
      name: "Pixel Art",
      description: "Character design, animations, and environments",
    },
    {
      icon: <Headphones size={24} className="text-game-yellow" />,
      name: "Sound Design",
      description: "8-bit music composition and SFX creation",
    },
    {
      icon: <Briefcase size={24} className="text-game-purple" />,
      name: "Business",
      description: "App Store optimization and marketing",
    },
  ];

  const socialLinks = [
    { platform: "github", url: "#", icon: <Github size={20} /> },
    { platform: "twitter", url: "#", icon: <Twitter size={20} /> },
    { platform: "linkedin", url: "#", icon: <Linkedin size={20} /> },
  ];

  return (
    <section id="developer" className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:30px_30px] opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="The Developer"
          subtitle="Meet the person behind Lyon Games"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Developer Image and Bio */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative rounded-lg overflow-hidden mb-6 max-w-sm w-full border-2 border-game-purple/30 group">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                alt="Lyon Games Developer"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-game-dark to-transparent opacity-60"></div>

              {/* Glitch effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-game-cyan to-game-purple opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500"></div>
            </div>

            <h3 className="font-pixel text-xl text-game-cyan mb-4 text-center lg:text-left">
              Alani Lyon
            </h3>

            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-game-dark text-gray-400 hover:text-game-cyan border border-game-purple/30 hover:border-game-cyan/50 transition-colors duration-300"
                  aria-label={`${link.platform} profile`}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div className="bg-game-dark/60 border border-game-purple/30 rounded-lg p-6 text-gray-300 font-body">
              <p className="mb-4">
                Hi there! I'm Alani, the solo developer behind Lyon Games. With
                over 8 years of game development experience, I've combined my
                passion for retro aesthetics with modern mobile gameplay.
              </p>
              <p>
                My journey started with a love for classic puzzle games and
                pixel art. Now, I create challenging puzzle experiences that
                blend nostalgia with fresh ideas. Each game is crafted with
                attention to detail, from the pixel-perfect art to the
                satisfying sound effects.
              </p>
            </div>
          </div>

          {/* Skills and Experience */}
          <div className="space-y-8">
            <h3 className="font-pixel text-xl text-game-pink mb-6">
              Skills & Expertise
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-game-dark/60 border border-game-purple/30 rounded-lg p-5 hover:border-game-cyan/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-game-black/50 rounded-lg mr-3">
                      {skill.icon}
                    </div>
                    <h4 className="font-pixel text-game-cyan text-base">
                      {skill.name}
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-game-dark/60 border border-game-purple/30 rounded-lg p-6 mt-8">
              <h3 className="font-pixel text-lg text-game-yellow mb-4">
                Game Development Journey
              </h3>

              <div className="space-y-4">
                <div className="flex">
                  <div className="w-24 shrink-0 font-pixel text-game-cyan text-sm">
                    2019
                  </div>
                  <div className="text-gray-300">
                    Started Lyon Games, released first puzzle title
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 shrink-0 font-pixel text-game-cyan text-sm">
                    2021
                  </div>
                  <div className="text-gray-300">
                    Reached 500K+ downloads milestone
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 shrink-0 font-pixel text-game-cyan text-sm">
                    2023
                  </div>
                  <div className="text-gray-300">
                    Featured in Apple App Store's "Game of the Day"
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 shrink-0 font-pixel text-game-cyan text-sm">
                    2025
                  </div>
                  <div className="text-gray-300">
                    Expanding with new puzzle series and collaborations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
