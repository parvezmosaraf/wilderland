import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Calendar, Bell } from "lucide-react";

const PlatformsSection = () => {
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

  const platforms = [
    {
      name: "Xbox Series X|S",
      icon: "🎮",
      color: "wilderness",
      colorClass: "text-wilderness",
      bgClass: "bg-wilderness",
      borderClass: "border-wilderness",
      features: ["4K HDR Gaming", "120 FPS Support", "Quick Resume", "Smart Delivery"],
      status: "Coming 2025"
    },
    {
      name: "PlayStation 5",
      icon: "🕹️",
      color: "frost",
      colorClass: "text-frost",
      bgClass: "bg-frost",
      borderClass: "border-frost",
      features: ["DualSense Haptics", "3D Audio", "Ray Tracing", "Activity Cards"],
      status: "Coming 2025"
    },
    {
      name: "PC (Steam)",
      icon: "💻",
      color: "magic",
      colorClass: "text-magic",
      bgClass: "bg-magic",
      borderClass: "border-magic",
      features: ["Ultra Settings", "Mod Support", "Cross-Platform", "Early Access"],
      status: "September 11, 2025"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-background to-card"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-6xl mb-6 cinematic-title">
            CONQUER ALL REALMS
          </h2>
          <p className="font-cinzel text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto px-4">
            Experience Wilderland across your favorite gaming platforms with optimized performance
          </p>
          <div className="w-24 h-1 bg-gradient-ember mx-auto mt-8" />
        </div>

        {/* Platforms Grid */}
        <div 
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="game-card p-6 md:p-8 rounded-2xl hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${300 + index * 200}ms` }}
            >
              {/* Platform Header */}
              <div className="text-center mb-6">
                <div className="text-4xl md:text-6xl mb-4">{platform.icon}</div>
                <h3 className={`font-orbitron font-bold text-xl md:text-2xl ${platform.colorClass} mb-2`}>
                  {platform.name}
                </h3>
                <div className={`inline-block px-3 md:px-4 py-2 rounded-full ${platform.bgClass}/10 ${platform.borderClass}/30 border`}>
                  <span className={`font-orbitron text-xs md:text-sm ${platform.colorClass}`}>
                    {platform.status}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-6 md:mb-8">
                {platform.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex}
                    className="flex items-center gap-3 p-2 md:p-3 rounded-lg bg-muted/10"
                  >
                    <div className={`w-2 h-2 ${platform.bgClass} rounded-full pulse-glow`} />
                    <span className="font-orbitron text-xs md:text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Platform Actions */}
              <div className="space-y-3">
                {platform.name.includes("PC") ? (
                  <Button 
                    className={`w-full hero-glow ${platform.bgClass} text-background font-orbitron font-bold hover:scale-105 text-sm md:text-base`}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Join Beta Now
                  </Button>
                ) : (
                  <Button 
                    variant="outline"
                    className={`w-full ${platform.borderClass} ${platform.colorClass} hover:${platform.bgClass} hover:text-background font-orbitron font-bold text-sm md:text-base`}
                  >
                    <Bell className="w-4 h-4 mr-2" />
                    Get Notified
                  </Button>
                )}
                <Button 
                  variant="ghost"
                  className="w-full font-orbitron text-xs md:text-sm text-foreground/60 hover:text-foreground"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Add to Wishlist
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* System Requirements */}
        <div 
          className={`game-card p-6 md:p-8 rounded-2xl transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h3 className="font-orbitron font-bold text-xl md:text-2xl text-magic mb-6 md:mb-8 text-center">
            PC System Requirements
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Minimum Requirements */}
            <div className="space-y-4">
              <h4 className="font-orbitron font-semibold text-base md:text-lg text-wilderness mb-4">
                Minimum Requirements
              </h4>
              <div className="space-y-3">
                {[
                  { label: "OS", value: "Windows 10 64-bit" },
                  { label: "Processor", value: "Intel i5-8400 / AMD Ryzen 5 2600" },
                  { label: "Memory", value: "8 GB RAM" },
                  { label: "Graphics", value: "GTX 1060 6GB / RX 580 8GB" },
                  { label: "Storage", value: "50 GB available space" }
                ].map((req, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-lg bg-muted/10 gap-2">
                    <span className="font-orbitron text-xs md:text-sm text-foreground/70">{req.label}</span>
                    <span className="text-xs md:text-sm text-foreground/90 text-right">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Requirements */}
            <div className="space-y-4">
              <h4 className="font-orbitron font-semibold text-base md:text-lg text-ember mb-4">
                Recommended Requirements
              </h4>
              <div className="space-y-3">
                {[
                  { label: "OS", value: "Windows 11 64-bit" },
                  { label: "Processor", value: "Intel i7-10700K / AMD Ryzen 7 3700X" },
                  { label: "Memory", value: "16 GB RAM" },
                  { label: "Graphics", value: "RTX 3070 / RX 6700 XT" },
                  { label: "Storage", value: "50 GB SSD space" }
                ].map((req, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-lg bg-muted/10 gap-2">
                    <span className="font-orbitron text-xs md:text-sm text-foreground/70">{req.label}</span>
                    <span className="text-xs md:text-sm text-foreground/90 text-right">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;