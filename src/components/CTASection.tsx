import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Mail, Gift, Star } from "lucide-react";

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

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

  const handleBetaSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle beta signup logic here
    console.log("Beta signup:", email);
    setEmail("");
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-card via-shadow-deep to-background overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-magic/5 rounded-full blur-3xl floating" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-ember/5 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-frost/5 rounded-full blur-3xl floating" style={{ animationDelay: '4s' }} />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-magic/40 rounded-full floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main CTA */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl mb-6 cinematic-title">
            THE CALL AWAITS
          </h2>
          <p className="font-cinzel text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Join thousands of adventurers preparing to explore the untamed wilds. 
            Be among the first to shape the legend of Wilderland.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            {/* Beta Signup Form */}
            <div 
              className={`w-full max-w-md transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <form onSubmit={handleBetaSignup} className="game-card p-6 rounded-2xl">
                <h3 className="font-orbitron font-bold text-xl text-magic mb-4">
                  Join the Beta
                </h3>
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-muted/20 border-magic/30 focus:border-magic text-foreground placeholder:text-foreground/50"
                    required
                  />
                  <Button 
                    type="submit"
                    className="hero-glow bg-gradient-magic text-primary-foreground px-6"
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-foreground/60 mt-3">
                  Get exclusive access, early gameplay, and special rewards
                </p>
              </form>
            </div>

            {/* Primary Actions */}
            <div 
              className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <Button 
                size="lg"
                className="hero-glow bg-gradient-magic text-primary-foreground font-orbitron font-bold text-xl px-12 py-8 rounded-2xl border-2 border-magic/50 hover:border-magic hover:scale-105"
              >
                <Download className="w-6 h-6 mr-3" />
                Download Beta
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="ember-glow font-orbitron font-bold text-xl px-12 py-8 rounded-2xl border-2 border-ember bg-ember/10 text-ember hover:bg-ember hover:text-background hover:scale-105"
              >
                <Gift className="w-6 h-6 mr-3" />
                Pre-Order Now
              </Button>
            </div>
          </div>
        </div>

        {/* Beta Benefits */}
        <div 
          className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {[
            {
              title: "Early Access",
              description: "Play 2 weeks before official launch",
              icon: "⏰",
              color: "magic"
            },
            {
              title: "Exclusive Content",
              description: "Unique beta tester rewards and items",
              icon: "🎁",
              color: "ember"
            },
            {
              title: "Shape the Game",
              description: "Your feedback directly influences development",
              icon: "🛠️",
              color: "wilderness"
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className="game-card p-6 rounded-xl text-center hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${1200 + index * 200}ms` }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h4 className={`font-orbitron font-bold text-xl mb-3 text-${benefit.color}`}>
                {benefit.title}
              </h4>
              <p className="text-foreground/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div 
          className={`text-center transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="game-card p-8 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="font-orbitron font-bold text-3xl text-magic mb-2">50K+</div>
                <div className="text-foreground/70">Beta Signups</div>
              </div>
              <div className="text-center">
                <div className="font-orbitron font-bold text-3xl text-ember mb-2">95%</div>
                <div className="text-foreground/70">Positive Feedback</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-wilderness text-wilderness" />
                  ))}
                </div>
                <div className="text-foreground/70">Community Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-1500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="game-card p-6 rounded-xl max-w-md mx-auto">
            <h4 className="font-orbitron font-bold text-lg text-frost mb-3">
              Stay Connected
            </h4>
            <p className="text-sm text-foreground/70 mb-4">
              Get the latest updates, development insights, and exclusive content
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Newsletter signup"
                className="flex-1 bg-muted/20 border-frost/30 focus:border-frost text-sm"
              />
              <Button 
                size="sm"
                className="bg-frost text-background hover:bg-frost/80"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;