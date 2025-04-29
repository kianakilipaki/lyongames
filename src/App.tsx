import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GamesShowcase from './components/GamesShowcase';
import AboutSection from './components/AboutSection';
import DeveloperSection from './components/DeveloperSection';
import NewsSection from './components/NewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-game-black text-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <GamesShowcase />
        <AboutSection />
        <DeveloperSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;