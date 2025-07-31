import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Play, X } from "lucide-react";

const HeroSection = () => {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioEnabled) {
        // Mute the audio
        audioRef.current.pause();
        setIsAudioEnabled(false);
      } else {
        // Play the audio
        audioRef.current.play().catch(error => {
          console.log("Audio play failed:", error);
        });
        setIsAudioEnabled(true);
      }
    }
  };

  const openTrailer = () => {
    setShowTrailer(true);
    setIsPlaying(false);
  };

  const closeTrailer = () => {
    setShowTrailer(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
  };

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

  const handleAudioEnded = () => {
    // Restart the audio when it ends for endless loop
    if (audioRef.current && isAudioEnabled) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        console.log("Audio restart failed:", error);
      });
    }
  };

  return (
    <>
      {/* Background Audio */}
      <audio
        ref={audioRef}
        src="/lovable-uploads/audio/theme.mp3"
        loop
        preload="auto"
        onEnded={handleAudioEnded}
        onError={(e) => console.log("Audio error:", e)}
      />

      <section className="relative h-screen w-full overflow-hidden animated-bg">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-element parallax-back"
          style={{
            backgroundImage: "url('/lovable-uploads/d1f625a0-c6ad-4f98-ae40-69c6eadbcc8c.png')",
            filter: "brightness(0.7) contrast(1.2)"
          }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-shadow-deep via-transparent to-shadow-deep/50" />
        
        {/* Animated Particles/Orbs */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-magic rounded-full opacity-60 floating"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Audio Toggle */}
        <div className="absolute top-6 right-6 z-20">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleAudio}
            className={`game-card w-12 h-12 rounded-full transition-all duration-300 ${
              isAudioEnabled ? 'bg-magic/20 border-magic/50' : ''
            }`}
          >
            {isAudioEnabled ? (
              <Volume2 className="h-5 w-5 text-magic animate-pulse" />
            ) : (
              <VolumeX className="h-5 w-5 text-muted-foreground" />
            )}
          </Button>
        </div>

        {/* Main Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          {/* Game Title */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="font-orbitron font-black text-6xl md:text-8xl lg:text-9xl mb-4 text-white gaming-title">
              WILDERLAND
            </h1>
            <div className="font-cinzel text-lg md:text-xl lg:text-2xl text-magic mb-8 tracking-wider">
              ACTION RPG
            </div>
          </div>

          {/* Tagline */}
          <div 
            className={`transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="font-cinzel text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-12 max-w-2xl">
              "Where the untamed beckons"
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button 
              size="lg" 
              onClick={openTrailer}
              className="hero-glow bg-gradient-magic text-primary-foreground font-orbitron font-bold text-lg px-8 py-6 rounded-xl border-2 border-magic/50 hover:border-magic"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Trailer
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="ember-glow font-orbitron font-bold text-lg px-8 py-6 rounded-xl border-2 border-ember bg-ember/10 text-ember hover:bg-ember hover:text-background"
            >
              Join Beta
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div 
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col items-center text-magic">
              <div className="text-sm font-orbitron tracking-wider mb-2">EXPLORE</div>
              <div className="w-0.5 h-8 bg-gradient-to-b from-magic to-transparent animate-pulse" />
            </div>
          </div>
        </div>

        {/* Console Compatibility Badges */}
        <div className="absolute bottom-6 left-6 flex gap-4 z-20">
          <div className="game-card px-4 py-2 rounded-lg">
            <div className="font-orbitron text-sm text-wilderness">XBOX</div>
          </div>
          <div className="game-card px-4 py-2 rounded-lg">
            <div className="font-orbitron text-sm text-frost">PLAYSTATION</div>
          </div>
        </div>
      </section>

      {/* Trailer Modal */}
      {showTrailer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-shadow-deep/95 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl mx-4 aspect-video rounded-2xl overflow-hidden game-card">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover cursor-pointer"
              onClick={handleVideoClick}
              onEnded={handleVideoEnded}
              muted={isMuted}
              preload="metadata"
            >
              <source src="/lovable-uploads/video/video-2.mp4" type="video/mp4" />
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
                  Play Trailer
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
                onClick={closeTrailer}
                className="game-card w-10 h-10 rounded-full"
              >
                <X className="w-4 h-4 text-magic" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;