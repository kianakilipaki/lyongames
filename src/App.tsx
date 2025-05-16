import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GamesShowcase from "./components/GamesShowcase";
import AboutSection from "./components/AboutSection";
import DeveloperSection from "./components/DeveloperSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GamesShowcase />
        <AboutSection />
        <DeveloperSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-game-black text-white overflow-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </div>
  );
}

export default App;
