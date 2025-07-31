import { Github, Twitter, Youtube, Twitch, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: MessageCircle, label: "Discord", color: "frost" },
    { icon: Twitter, label: "Twitter", color: "magic" },
    { icon: Youtube, label: "YouTube", color: "ember" },
    { icon: Twitch, label: "Twitch", color: "wilderness" },
    { icon: Github, label: "GitHub", color: "foreground" },
  ];

  const footerLinks = [
    {
      title: "Game",
      links: ["Features", "Characters", "Gameplay", "System Requirements"]
    },
    {
      title: "Community",
      links: ["Discord", "Forums", "Reddit", "Fan Art"]
    },
    {
      title: "Support",
      links: ["Contact Us", "Bug Reports", "FAQ", "Documentation"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press Kit", "Legal"]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-shadow-deep to-background py-16 px-4 border-t border-magic/20">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-magic/20 rounded-full floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-orbitron font-black text-3xl cinematic-title mb-2">
                WILDERLAND
              </h3>
              <p className="font-cinzel text-magic text-lg">
                Where the untamed beckons
              </p>
            </div>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Embark on an epic journey through the untamed wilderness where ancient magic 
              meets modern adventure. Your legend begins in the Wilderland.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`game-card w-10 h-10 rounded-full hover:text-${social.color} hover:border-${social.color}/50`}
                >
                  <social.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-orbitron font-bold text-lg text-magic mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-foreground/70 hover:text-magic transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Console Compatibility */}
        <div className="flex flex-wrap items-center justify-center gap-6 py-8 border-t border-magic/10">
          <div className="text-center">
            <div className="font-orbitron text-sm text-wilderness mb-1">AVAILABLE ON</div>
            <div className="flex items-center gap-4">
              <div className="game-card px-4 py-2 rounded-lg">
                <span className="font-orbitron text-sm text-wilderness">Xbox Series X|S</span>
              </div>
              <div className="game-card px-4 py-2 rounded-lg">
                <span className="font-orbitron text-sm text-frost">PlayStation 5</span>
              </div>
              <div className="game-card px-4 py-2 rounded-lg">
                <span className="font-orbitron text-sm text-magic">PC Steam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-magic/10">
          <div className="text-sm text-foreground/60">
            © 2025 Wilderland Game Studio. All rights reserved by Developers World LLC.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-magic transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-magic transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-magic transition-colors">Cookie Policy</a>
          </div>

          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-ember fill-ember" />
            <span>for gamers</span>
          </div>
        </div>

        {/* Development Credits */}
        <div className="text-center mt-8 pt-6 border-t border-magic/5">
          <p className="text-xs text-foreground/40 font-orbitron">
            Game Development • Art Direction • Sound Design • Community Management
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;