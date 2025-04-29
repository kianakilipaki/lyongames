import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

interface NewsCardProps {
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  link: string;
  category: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  excerpt,
  imageUrl,
  link,
  category
}) => {
  return (
    <article className="bg-game-dark border border-game-purple/20 rounded-lg overflow-hidden group hover:border-game-cyan/50 transition-all duration-300">
      {/* Image section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Category */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2 py-1 bg-game-purple/80 backdrop-blur-sm text-white text-xs font-pixel rounded">
            {category}
          </span>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-game-dark to-transparent opacity-60"></div>
      </div>
      
      {/* Content section */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center space-x-1 text-gray-400 text-xs mb-2">
          <Calendar size={14} />
          <span>{date}</span>
        </div>
        
        {/* Title */}
        <h3 className="font-pixel text-lg text-game-cyan mb-2 group-hover:text-game-pink transition-colors duration-300">
          {title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        {/* Read more link */}
        <a 
          href={link} 
          className="inline-flex items-center text-game-cyan hover:text-game-pink font-pixel text-xs transition-colors duration-300"
        >
          READ MORE
          <ChevronRight size={14} className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
};

export default NewsCard;