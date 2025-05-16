import React from "react";
import SectionTitle from "./SectionTitle";
import { Joystick, Trophy, Puzzle as PuzzlePiece, Users } from "lucide-react";

const features = [
  {
    icon: <PuzzlePiece size={30} className="text-game-cyan" />,
    title: "Challenging Puzzles",
    description:
      "My games feature uniquely designed puzzles that test logic, memory, and problem-solving skills.",
  },
  {
    icon: <Trophy size={30} className="text-game-yellow" />,
    title: "Achievement System",
    description:
      "Unlock achievements and compete on leaderboards to showcase your puzzle-solving prowess.",
  },
  {
    icon: <Joystick size={30} className="text-game-pink" />,
    title: "Intuitive Controls",
    description:
      "Simple touch controls optimized for mobile gameplay, allowing players to focus on solving puzzles.",
  },
  {
    icon: <Users size={30} className="text-game-purple" />,
    title: "Community Challenges",
    description:
      "Regular updates with new levels and community-inspired challenges to keep the experience fresh.",
  },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-game-dark">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              title="About Lyon Games"
              subtitle="Crafting pixel perfect puzzle experiences since 2024"
              alignment="left"
            />

            <div className="space-y-4 text-gray-300 font-body">
              <p>
                As the sole developer behind Lyon Games, I specialize in
                creating challenging puzzle games with distinctive pixel art
                aesthetics. My games blend nostalgic retro visuals with modern
                gameplay mechanics.
              </p>
              <p>
                I'm passionate about creating games that are easy to pick up but
                difficult to master. Each title features handcrafted pixel art
                and original soundtracks that enhance the gaming experience.
              </p>
              <p>
                My mission is to create memorable puzzle experiences that
                stimulate the mind while delivering that perfect balance of
                challenge and satisfaction when a puzzle is finally solved.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/#developer"
                className="inline-block group px-6 py-3 bg-transparent border-2 border-game-cyan hover:bg-game-cyan/10 text-game-cyan font-pixel text-sm transition-all duration-300"
              >
                ABOUT THE DEVELOPER
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          <div>
            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-game-black/50 border border-game-purple/20 rounded-lg p-6 hover:border-game-cyan/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-4 bg-game-dark rounded-lg group-hover:bg-game-purple/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-pixel text-game-cyan text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 border border-game-purple/20 rounded-lg">
                <p className="font-pixel text-3xl text-game-pink">1</p>
                <p className="text-sm text-gray-300 mt-2">Games Released</p>
              </div>
              <div className="text-center p-4 border border-game-purple/20 rounded-lg">
                <p className="font-pixel text-3xl text-game-cyan">11</p>
                <p className="text-sm text-gray-300 mt-2">Downloads</p>
              </div>
              <div className="text-center p-4 border border-game-purple/20 rounded-lg">
                <p className="font-pixel text-3xl text-game-yellow">NA</p>
                <p className="text-sm text-gray-300 mt-2">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-game-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default AboutSection;
