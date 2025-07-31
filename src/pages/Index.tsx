import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GameplaySection from "@/components/GameplaySection";
import CharacterSection from "@/components/CharacterSection";
import PlatformsSection from "@/components/PlatformsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <GameplaySection />
      <CharacterSection />
      <PlatformsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
