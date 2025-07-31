import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CharacterSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(0);

  const characters = [
    {
      name: "The Wanderer",
      title: "Exiled Warrior",
      description: "A skilled swordsman seeking redemption in the wilds, master of both blade and forgotten arts.",
      abilities: ["Sword Mastery", "Survival Instinct", "Ancient Knowledge"],
      color: "magic"
    },
    {
      name: "The Shaman",
      title: "Nature's Voice",
      description: "A mystic who speaks with the spirits of the wild, channeling primal magic through sacred rituals.",
      abilities: ["Elemental Magic", "Beast Communication", "Healing Arts"],
      color: "wilderness"
    },
    {
      name: "The Hunter",
      title: "Shadow Stalker",
      description: "A relentless tracker who moves unseen through the wilderness, striking from the shadows.",
      abilities: ["Stealth", "Precision Archery", "Trap Setting"],
      color: "ember"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextCharacter = () => {
    setSelectedCharacter((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setSelectedCharacter((prev) => (prev - 1 + characters.length) % characters.length);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-shadow-deep to-background overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full opacity-30 floating`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `hsl(${280 + Math.random() * 80} 70% 60%)`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="font-orbitron font-bold text-4xl md:text-6xl mb-6 cinematic-title">
            CHOOSE YOUR PATH
          </h2>
          <p className="font-cinzel text-xl text-foreground/80 max-w-2xl mx-auto">
            Every hero has a story. Which legend will you forge in the Wilderland?
          </p>
          <div className="w-24 h-1 bg-gradient-magic mx-auto mt-8" />
        </div>

        {/* Character Carousel */}
        <div 
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative">
            {/* Main Character Display */}
            <div className="game-card p-8 rounded-2xl mb-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Character Visual */}
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-magic/20 via-wilderness/20 to-ember/20 p-8">
                    <div className="w-full h-full bg-gradient-to-br from-shadow-deep/50 to-transparent rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className={`font-orbitron font-bold text-8xl text-${characters[selectedCharacter].color} mb-4`}>
                          {selectedCharacter === 0 ? "⚔️" : selectedCharacter === 1 ? "🌟" : "🏹"}
                        </div>
                        <div className="font-cinzel text-2xl text-foreground/80">
                          {characters[selectedCharacter].name}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Character selection indicators */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {characters.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedCharacter(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === selectedCharacter ? 'bg-magic scale-125' : 'bg-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Character Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className={`font-orbitron font-bold text-3xl md:text-4xl text-${characters[selectedCharacter].color} mb-2`}>
                      {characters[selectedCharacter].name}
                    </h3>
                    <p className="font-cinzel text-xl text-foreground/60 mb-6">
                      {characters[selectedCharacter].title}
                    </p>
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      {characters[selectedCharacter].description}
                    </p>
                  </div>

                  {/* Abilities */}
                  <div>
                    <h4 className="font-orbitron font-semibold text-xl text-foreground mb-4">
                      Key Abilities
                    </h4>
                    <div className="grid gap-3">
                      {characters[selectedCharacter].abilities.map((ability, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg bg-muted/20"
                        >
                          <div className={`w-2 h-2 bg-${characters[selectedCharacter].color} rounded-full`} />
                          <span className="font-orbitron text-sm">{ability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevCharacter}
                className="game-card w-12 h-12 rounded-full"
              >
                <ChevronLeft className="w-5 h-5 text-magic" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextCharacter}
                className="game-card w-12 h-12 rounded-full"
              >
                <ChevronRight className="w-5 h-5 text-magic" />
              </Button>
            </div>
          </div>
        </div>

        {/* Character Stats Comparison */}
        <div 
          className={`grid md:grid-cols-3 gap-6 mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {[
            { stat: "Combat", values: [95, 70, 85] },
            { stat: "Magic", values: [60, 95, 40] },
            { stat: "Stealth", values: [40, 60, 95] }
          ].map((statGroup, index) => (
            <div key={index} className="game-card p-6 rounded-xl">
              <h5 className="font-orbitron font-semibold text-lg text-center mb-4 text-magic">
                {statGroup.stat}
              </h5>
              <div className="space-y-3">
                {characters.map((character, charIndex) => (
                  <div key={charIndex} className="flex items-center justify-between">
                    <span className="text-sm text-foreground/70">{character.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-${character.color} transition-all duration-1000`}
                          style={{ width: `${statGroup.values[charIndex]}%` }}
                        />
                      </div>
                      <span className="text-xs text-foreground/60 w-8">{statGroup.values[charIndex]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterSection;