import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 overflow-hidden"
    >
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background">
        <div className="absolute inset-0 opacity-20">
          {/* Animated background elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-magic/10 rounded-full blur-xl floating" />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-ember/10 rounded-full blur-xl floating" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-frost/10 rounded-full blur-xl floating" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="font-orbitron font-bold text-4xl md:text-6xl mb-6 cinematic-title">
            THE LEGEND AWAITS
          </h2>
          <div className="w-24 h-1 bg-gradient-magic mx-auto mb-8" />
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div 
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="game-card p-8 rounded-2xl">
              <h3 className="font-cinzel font-semibold text-2xl md:text-3xl mb-6 text-magic">
                A World Unleashed
              </h3>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                In the far reaches of an ancient realm, where civilization's light fades into 
                primal darkness, lies <span className="text-magic font-semibold">Wilderland</span> 
                — a vast wilderness where forgotten gods still walk and untamed magic flows through every stone and stream.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                As a wandering warrior seeking redemption, you must navigate treacherous landscapes, 
                forge alliances with mysterious beings, and master both blade and sorcery to uncover 
                the truth behind the realm's growing corruption.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-wilderness rounded-full pulse-glow" />
                  <span className="font-orbitron text-sm text-wilderness">OPEN WORLD</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-magic rounded-full pulse-glow" />
                  <span className="font-orbitron text-sm text-magic">DYNAMIC COMBAT</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-ember rounded-full pulse-glow" />
                  <span className="font-orbitron text-sm text-ember">EPIC QUESTS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div 
            className={`transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-20 rotate-3'
            }`}
          >
            <div className="relative game-card p-8 rounded-2xl hover:scale-105 transition-transform duration-500">
              <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-magic/20 to-ember/20 p-6">
                <div className="w-full h-full bg-gradient-to-br from-shadow-deep/50 to-transparent rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-orbitron font-bold text-6xl text-magic mb-4">∞</div>
                    <div className="font-cinzel text-xl text-foreground/80">Endless</div>
                    <div className="font-cinzel text-lg text-foreground/60">Adventures</div>
                  </div>
                </div>
              </div>
              
              {/* Floating runes around the card */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-magic/20 rounded-full flex items-center justify-center floating">
                <div className="w-3 h-3 bg-magic rounded-full" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ember/20 rounded-full flex items-center justify-center floating" style={{ animationDelay: '1s' }}>
                <div className="w-2 h-2 bg-ember rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div 
          className={`grid md:grid-cols-3 gap-8 mt-20 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {[
            {
              title: "Immersive Combat",
              description: "Master fluid swordplay and devastating magic in visceral real-time battles",
              icon: "⚔️",
              color: "magic"
            },
            {
              title: "Living World",
              description: "Explore a dynamic ecosystem where your choices reshape the wilderness",
              icon: "🌲",
              color: "wilderness"
            },
            {
              title: "Epic Storyline",
              description: "Uncover ancient mysteries in a narrative that adapts to your journey",
              icon: "📜",
              color: "ember"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="game-card p-6 rounded-xl text-center hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${1200 + index * 200}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className={`font-orbitron font-bold text-xl mb-3 text-${feature.color}`}>
                {feature.title}
              </h4>
              <p className="text-foreground/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;