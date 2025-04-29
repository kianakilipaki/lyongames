import React, { useState } from 'react';
import { ExternalLink, Download } from 'lucide-react';

interface GameProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  releaseStatus: 'Released' | 'Coming Soon' | 'Beta';
  storeLink?: string;
  demoLink?: string;
}

const GameCard: React.FC<GameProps> = ({
  title,
  description,
  imageUrl,
  category,
  releaseStatus,
  storeLink,
  demoLink
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const statusColor = {
    'Released': 'bg-game-green',
    'Coming Soon': 'bg-game-yellow',
    'Beta': 'bg-game-pink'
  }[releaseStatus];
  
  return (
    <div 
      className="group relative overflow-hidden rounded-lg bg-game-dark border border-game-purple/20 transition-all duration-300 hover:border-game-cyan/50 hover:shadow-lg hover:shadow-game-cyan/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* CRT effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent opacity-50 z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_96%,rgba(0,0,0,0.6)_100%)] z-10 pointer-events-none"></div>
      
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ imageRendering: 'pixelated' }}
        />
        
        {/* Category */}
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-block px-2 py-1 bg-game-purple/80 backdrop-blur-sm text-white text-xs font-pixel rounded">
            {category}
          </span>
        </div>
        
        {/* Status */}
        <div className="absolute top-3 right-3 z-20">
          <span className={`inline-flex items-center px-2 py-1 ${statusColor} text-game-dark text-xs font-pixel rounded`}>
            <span className="w-2 h-2 rounded-full bg-white mr-1 animate-pulse"></span>
            {releaseStatus}
          </span>
        </div>
        
        {/* Overlay with info */}
        <div className={`absolute inset-0 bg-game-dark/80 backdrop-blur-sm flex flex-col justify-center items-center p-6 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} z-20`}>
          <p className="text-gray-300 font-body text-sm mb-6 text-center">{description}</p>
          
          <div className="flex space-x-4">
            {storeLink && (
              <a 
                href={storeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-3 py-2 bg-game-purple hover:bg-game-purple/80 rounded text-white font-pixel text-xs transition-all duration-300"
              >
                <ExternalLink size={14} />
                <span>Play Now</span>
              </a>
            )}
            
            {demoLink && (
              <a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-3 py-2 bg-transparent border border-game-cyan hover:bg-game-cyan/10 rounded text-game-cyan font-pixel text-xs transition-all duration-300"
              >
                <Download size={14} />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Title */}
      <div className="p-4">
        <h3 className="font-pixel text-base text-game-cyan">{title}</h3>
      </div>
      
      {/* Glitch effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-game-purple to-game-cyan opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500 -z-10"></div>
    </div>
  );
};

export default GameCard;