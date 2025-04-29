import React, { useState } from 'react';
import GameCard from './GameCard';
import SectionTitle from './SectionTitle';

// Game data
const gamesData = [
  {
    id: 1,
    title: "Pixel Puzzler",
    description: "Navigate through 50+ challenging levels of pixel-perfect puzzles. Use logic and timing to overcome obstacles and collect all the gems.",
    imageUrl: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
    category: "Puzzle",
    releaseStatus: "Released" as const,
    storeLink: "#",
    demoLink: "#"
  },
  {
    id: 2,
    title: "Chroma Quest",
    description: "A color-matching adventure across magical pixel landscapes. Solve puzzles by combining colors and creating paths through challenging terrains.",
    imageUrl: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg",
    category: "Adventure/Puzzle",
    releaseStatus: "Beta" as const,
    storeLink: "#",
    demoLink: "#"
  },
  {
    id: 3,
    title: "Retro Reactor",
    description: "Connect power sources to reactors in this electrifying puzzle game. Plan your moves carefully to avoid overloads and meltdowns.",
    imageUrl: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg",
    category: "Strategy/Puzzle",
    releaseStatus: "Coming Soon" as const,
    demoLink: "#"
  },
  {
    id: 4,
    title: "Dungeon Bits",
    description: "Explore procedurally generated pixel dungeons filled with tricky puzzles, hidden treasures, and mysterious characters.",
    imageUrl: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg",
    category: "Roguelike/Puzzle",
    releaseStatus: "Released" as const,
    storeLink: "#",
    demoLink: "#"
  },
  {
    id: 5,
    title: "Bit Shift",
    description: "Manipulate bits and bytes in this programming-inspired puzzle game. Solve coding challenges in a colorful pixel world.",
    imageUrl: "https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg",
    category: "Logic/Puzzle",
    releaseStatus: "Coming Soon" as const
  },
  {
    id: 6,
    title: "Memory Maze",
    description: "Test your memory and problem-solving skills in this challenging maze adventure with shifting paths and hidden patterns.",
    imageUrl: "https://images.pexels.com/photos/957312/chess-checkmated-chess-pieces-black-white-957312.jpeg",
    category: "Memory/Puzzle",
    releaseStatus: "Beta" as const,
    storeLink: "#",
    demoLink: "#"
  }
];

// Filter categories
const categories = ["All", "Puzzle", "Adventure/Puzzle", "Strategy/Puzzle", "Roguelike/Puzzle", "Logic/Puzzle", "Memory/Puzzle"];

const GamesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGames = activeCategory === "All" 
    ? gamesData 
    : gamesData.filter(game => game.category === activeCategory);

  return (
    <section id="games" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:30px_30px] opacity-40 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Our Games" 
          subtitle="Discover our collection of pixel art puzzle games" 
        />
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded text-xs md:text-sm font-pixel transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-game-purple text-white' 
                  : 'bg-game-dark hover:bg-game-purple/20 text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Games grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredGames.map(game => (
            <GameCard 
              key={game.id}
              title={game.title}
              description={game.description}
              imageUrl={game.imageUrl}
              category={game.category}
              releaseStatus={game.releaseStatus}
              storeLink={game.storeLink}
              demoLink={game.demoLink}
            />
          ))}
        </div>
        
        {/* Empty state */}
        {filteredGames.length === 0 && (
          <div className="text-center py-20">
            <p className="font-pixel text-lg text-game-cyan mb-4">No games found in this category</p>
            <p className="text-gray-400">Check back soon for new releases!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GamesShowcase;