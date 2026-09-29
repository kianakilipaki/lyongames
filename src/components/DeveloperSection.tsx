import React from "react";
import SectionTitle from "./SectionTitle";
import {
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
      description: "Unity, Godot, and React Native expertise",
    },
    {
      icon: <Palette size={24} className="text-game-pink" />,
      name: "Pixel Art",
      description: "Character design, animations, and environments",
    },
    {
      icon: <Headphones size={24} className="text-game-yellow" />,
      name: "Sound Design",
      description: "Using 8-bit music and SFX for game creation",
    },
    {
      icon: <Briefcase size={24} className="text-game-purple" />,
      name: "Business",
      description: "App Store optimization and marketing",
    },
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
                src="/assets/avatar.png"
                alt="Lyon Games developer avatar"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-game-dark to-transparent opacity-60"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-game-cyan to-game-purple opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500"></div>
            </div>

            <h3 className="font-pixel text-xl text-game-cyan mb-4 text-center lg:text-left">
              Alani
            </h3>

            <div className="bg-game-dark/60 border border-game-purple/30 rounded-lg p-6 text-gray-300 font-body">
              <p>
                Hi! I'm Alani, the solo developer behind Lyon Games. I create
                pixel art puzzle games that combine retro charm, fresh
                challenges, and satisfying sound effects.
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
                Studio Milestones
              </h3>

              <div className="space-y-4">
                <div className="flex">
                  <div className="w-24 shrink-0 font-pixel text-game-cyan text-sm">
                    2025
                  </div>
                  <div className="text-gray-300">
                    Started Lyon Games, released first puzzle title
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
