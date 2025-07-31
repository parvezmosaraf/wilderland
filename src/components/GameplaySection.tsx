import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Maximize, Volume2, VolumeX } from "lucide-react";

const GameplaySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-card to-shadow-deep"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="font-orbitron font-bold text-4xl md:text-6xl mb-6 cinematic-title">
            WITNESS THE ADVENTURE
          </h2>
          <p className="font-cinzel text-xl text-foreground/80 max-w-2xl mx-auto">
            Experience the visceral combat and breathtaking world of Wilderland
          </p>
          <div className="w-24 h-1 bg-gradient-ember mx-auto mt-8" />
        </div>

        {/* Main Gameplay Video */}
        <div 
          className={`mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative game-card p-6 rounded-2xl overflow-hidden">
            {/* Video Container */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-shadow-deep to-card">
              {/* Video Element */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover cursor-pointer"
                onClick={handleVideoClick}
                onEnded={handleVideoEnded}
                muted={isMuted}
                loop
                preload="metadata"
              >
                <source src="/lovable-uploads/video/video-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play/Pause Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-shadow-deep/40">
                  <Button 
                    size="lg"
                    onClick={handleVideoClick}
                    className="hero-glow bg-gradient-magic text-primary-foreground font-orbitron font-bold text-lg px-8 py-6 rounded-full"
                  >
                    <Play className="w-6 h-6 mr-2" />
                    Play Gameplay Trailer
                  </Button>
                </div>
              )}
              
              {/* Video Controls Overlay */}
              <div className="absolute top-4 right-4 flex gap-2">
                <Button 
                  variant="ghost"
                  size="icon"
                  onClick={toggleMute}
                  className="game-card w-10 h-10 rounded-full"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-magic" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-magic" />
                  )}
                </Button>
                <Button 
                  variant="ghost"
                  size="icon"
                  className="game-card w-10 h-10 rounded-full"
                >
                  <Maximize className="w-4 h-4 text-magic" />
                </Button>
              </div>
            </div>
            
            {/* Video Description */}
            <div className="mt-6 text-center">
              <h3 className="font-orbitron font-bold text-2xl text-magic mb-2">
                Combat Showcase
              </h3>
              <p className="text-foreground/70">
                Watch our hero face the untamed creatures of Wilderland in epic real-time combat
              </p>
            </div>
          </div>
        </div>

        {/* Character Introduction Section */}
        <div 
          className={`mt-16 mb-20 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h3 className="font-orbitron font-bold text-3xl md:text-4xl text-magic mb-4">
              MEET YOUR HERO
            </h3>
            <p className="font-cinzel text-lg text-foreground/70 max-w-2xl mx-auto">
              Discover the warrior who will guide you through the untamed realms of Wilderland
            </p>
          </div>

          {/* Character Card */}
          <div className="max-w-4xl mx-auto">
            <div className="game-card p-8 rounded-2xl overflow-hidden relative">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-magic/10 via-ember/5 to-frost/10" />
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-magic/20 rounded-full blur-xl floating" />
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-ember/20 rounded-full blur-xl floating" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-frost/20 rounded-full blur-xl floating" style={{ animationDelay: '4s' }} />
              </div>

              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                {/* Character Image with 3D Effect */}
                <div className="relative group">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-shadow-deep to-card p-4">
                    {/* 3D Container */}
                    <div className="w-full h-full relative transform-style-3d perspective-1000">
                      <div className="absolute inset-0 bg-gradient-to-br from-magic/20 to-ember/20 rounded-xl" />
                      
                      {/* Character Image with Background Removal Effect */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="relative w-80 h-80 transform-3d hover:rotate-y-12 transition-all duration-500">
                          <img
                            src="/lovable-uploads/character/character-1.jpeg"
                            alt="Paul - Wilderland Warrior"
                            className="w-full h-full object-cover rounded-xl shadow-2xl"
                            style={{
                              filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
                              mixBlendMode: 'multiply'
                            }}
                          />
                          {/* Glow Effect */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-magic/30 via-transparent to-ember/30 opacity-60" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Stats */}
                  <div className="absolute -top-2 -right-2 game-card px-3 py-1 rounded-full">
                    <div className="font-orbitron text-xs text-magic">LEVEL 50</div>
                  </div>
                  <div className="absolute -bottom-2 -left-2 game-card px-3 py-1 rounded-full">
                    <div className="font-orbitron text-xs text-ember">WARRIOR</div>
                  </div>
                </div>

                {/* Character Information */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-2 gaming-title">
                      PAUL
                    </h4>
                    <div className="font-cinzel text-xl text-magic mb-4 tracking-wider">
                      THE UNTAMED WARRIOR
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      A battle-hardened warrior who has survived the harshest trials of the wilderness. 
                      Paul's journey began in the shadow of the ancient mountains, where he learned to 
                      harness both steel and sorcery in his quest for redemption.
                    </p>
                    
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      With a blade forged in dragon fire and armor blessed by forgotten gods, 
                      Paul stands as the last hope against the corruption spreading through Wilderland.
                    </p>
                  </div>

                  {/* Character Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center game-card p-3 rounded-lg">
                      <div className="font-orbitron text-2xl text-magic mb-1">⚔️</div>
                      <div className="font-orbitron text-sm text-magic">COMBAT</div>
                      <div className="text-xs text-foreground/60">Master</div>
                    </div>
                    <div className="text-center game-card p-3 rounded-lg">
                      <div className="font-orbitron text-2xl text-ember mb-1">🛡️</div>
                      <div className="font-orbitron text-sm text-ember">DEFENSE</div>
                      <div className="text-xs text-foreground/60">Elite</div>
                    </div>
                    <div className="text-center game-card p-3 rounded-lg">
                      <div className="font-orbitron text-2xl text-frost mb-1">🔮</div>
                      <div className="font-orbitron text-sm text-frost">MAGIC</div>
                      <div className="text-xs text-foreground/60">Adept</div>
                    </div>
                  </div>

                  {/* Special Abilities */}
                  <div className="pt-4">
                    <h5 className="font-orbitron font-semibold text-lg text-magic mb-3">
                      SPECIAL ABILITIES
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="game-card px-3 py-1 rounded-full text-xs font-orbitron text-magic">
                        Dragon's Fury
                      </span>
                      <span className="game-card px-3 py-1 rounded-full text-xs font-orbitron text-ember">
                        Shadow Step
                      </span>
                      <span className="game-card px-3 py-1 rounded-full text-xs font-orbitron text-frost">
                        Frost Shield
                      </span>
                      <span className="game-card px-3 py-1 rounded-full text-xs font-orbitron text-wilderness">
                        Nature's Bond
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div 
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {[
            {
              title: "Real-time Combat",
              description: "Fluid sword fighting with magical abilities",
              image: "⚔️",
              color: "magic"
            },
            {
              title: "Environmental Interaction",
              description: "Use the world around you as a weapon",
              image: "🌿",
              color: "wilderness"
            },
            {
              title: "Character Progression",
              description: "Unlock new abilities and equipment",
              image: "⭐",
              color: "ember"
            },
            {
              title: "Boss Encounters",
              description: "Face legendary beasts in epic battles",
              image: "🐉",
              color: "frost"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="game-card p-6 rounded-xl hover:scale-105 transition-all duration-300 relative"
            >
              {/* Development Badge */}
              <div className="absolute top-2 right-2">
                <span className="text-xs font-orbitron text-foreground/50 bg-background/20 px-2 py-1 rounded-full">
                  Development
                </span>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-4">{feature.image}</div>
                <h4 className={`font-orbitron font-bold text-lg mb-3 text-${feature.color}`}>
                  {feature.title}
                </h4>
                <p className="text-foreground/70 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Spacing for next section */}
        <div className="mt-16"></div>
      </div>
    </section>
  );
};

export default GameplaySection;