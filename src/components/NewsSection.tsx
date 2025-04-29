import React from 'react';
import SectionTitle from './SectionTitle';
import NewsCard from './NewsCard';

// News data
const newsData = [
  {
    id: 1,
    title: "Pixel Puzzler Hits 1 Million Downloads!",
    date: "June 15, 2025",
    excerpt: "Our flagship puzzle game has reached a major milestone. To celebrate, we're releasing a special anniversary update with 20 new levels and exclusive rewards.",
    imageUrl: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
    link: "#",
    category: "Milestone"
  },
  {
    id: 2,
    title: "Announcing Our New Game: Chroma Quest",
    date: "May 28, 2025",
    excerpt: "We're excited to reveal our latest project - a color-matching puzzle adventure that will challenge your perception and problem-solving skills.",
    imageUrl: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg",
    link: "#",
    category: "New Release"
  },
  {
    id: 3,
    title: "Lyon Games Partners with Indie Game Fest",
    date: "April 12, 2025",
    excerpt: "We're proud to sponsor this year's Indie Game Festival, celebrating independent game developers and showcasing innovative gameplay.",
    imageUrl: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg",
    link: "#",
    category: "Event"
  }
];

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-20 relative bg-game-dark">
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Latest News" 
          subtitle="Updates, announcements, and behind-the-scenes from Lyon Games" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {newsData.map(news => (
            <NewsCard 
              key={news.id}
              title={news.title}
              date={news.date}
              excerpt={news.excerpt}
              imageUrl={news.imageUrl}
              link={news.link}
              category={news.category}
            />
          ))}
        </div>
        
        {/* View all news button */}
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-block group px-8 py-3 bg-transparent border-2 border-game-purple hover:bg-game-purple/10 text-game-purple font-pixel text-sm transition-all duration-300"
          >
            VIEW ALL NEWS
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-game-black to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-game-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default NewsSection;