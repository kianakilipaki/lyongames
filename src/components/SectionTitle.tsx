import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center' 
}) => {
  const alignmentClasses = {
    center: 'text-center mx-auto',
    left: 'text-left'
  };
  
  return (
    <div className={`mb-12 max-w-2xl ${alignmentClasses[alignment]}`}>
      <h2 className="font-pixel text-2xl md:text-3xl text-white mb-4 relative inline-block">
        <span className="relative z-10">{title}</span>
        <span className="absolute bottom-1 left-0 right-0 h-3 bg-game-purple/30 -z-0"></span>
      </h2>
      <p className="text-gray-300 font-body">{subtitle}</p>
      <div className="mt-4 flex items-center gap-2">
        <div className="w-6 h-1 bg-game-cyan"></div>
        <div className="w-3 h-1 bg-game-pink"></div>
        <div className="w-1 h-1 bg-game-yellow"></div>
      </div>
    </div>
  );
};

export default SectionTitle;