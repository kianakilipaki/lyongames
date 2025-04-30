import React, { useState } from "react";
import GameCard from "./GameCard";
import SectionTitle from "./SectionTitle";

// Game data
const gamesData = [
  {
    id: 1,
    title: "PixelDoku",
    description:
      "Sudoku meets pixel art in this relaxing puzzle game! Solve cute, colorful grids and unlock charming themes — from cats to bugs and beyond.",
    imageUrl: "/assets/birdDoku.jpg",
    category: "Puzzle",
    releaseStatus: "Released" as const,
    storeLink:
      "https://play.google.com/store/apps/details?id=com.alanilyon.pixeldoku",
  },
  {
    id: 2,
    title: "Goat Leap: Mountain Mayhem",
    description:
      "Scale the heights as a determined goat in Goat Leap: Mountain Mayhem, a chaotic vertical platformer where every jump could be your last!",
    imageUrl: "/assets/goat.png",
    category: "Arcade",
    releaseStatus: "Coming Soon" as const,
  },
  {
    id: 3,
    title: "Kapybara Kitchen",
    description:
      "With cozy visuals and game-like interactions, Kapybara’s Kitchen makes meal planning and pantry tracking fun, simple, and a little adorable..",
    imageUrl: "assets/kapybara-icon.png",
    category: "Cooking Tracker",
    releaseStatus: "Coming Soon" as const,
  },
];

// Filter categories
const categories = [
  "All",
  "Puzzle",
  "Adventure/Puzzle",
  "Cooking Tracker",
  "Roguelike/Puzzle",
  "Logic/Puzzle",
  "Arcade",
];

const GamesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGames =
    activeCategory === "All"
      ? gamesData
      : gamesData.filter((game) => game.category === activeCategory);

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
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded text-xs md:text-sm font-pixel transition-all duration-300 ${
                activeCategory === category
                  ? "bg-game-purple text-white"
                  : "bg-game-dark hover:bg-game-purple/20 text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Games grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              description={game.description}
              imageUrl={game.imageUrl}
              category={game.category}
              releaseStatus={game.releaseStatus}
              storeLink={game.storeLink}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredGames.length === 0 && (
          <div className="text-center py-20">
            <p className="font-pixel text-lg text-game-cyan mb-4">
              No games found in this category
            </p>
            <p className="text-gray-400">Check back soon for new releases!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GamesShowcase;
