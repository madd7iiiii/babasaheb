import heroImage from "@/assets/school-building.png";
import { Heart, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="शाळेचे मैदान"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <div className="animate-fade-in-up max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
            <Heart className="w-4 h-4 text-secondary" />
            <span className="font-devanagari text-sm text-primary-foreground/90">
              भारतरत्न डॉ. बाबासाहेब आंबेडकर
            </span>
          </div>

          <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6">
            <span className="font-devanagari">मतिमंद मुला-मुलींची</span>
            <br />
            <span className="font-devanagari text-secondary">निवासी विशेष शाळा</span>
          </h1>

          <p className="font-devanagari text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-4">
            हिंगणघाट, वर्धा
          </p>

          <p className="font-body text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            प्रत्येक मुलाला शिक्षण, प्रेम आणि आदराचा अधिकार आहे। आम्ही विशेष गरजा असलेल्या मुलांना सक्षम बनवतो.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-devanagari font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-base"
            >
              <BookOpen className="w-5 h-5" />
              आमच्याबद्दल जाणून घ्या
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground font-devanagari font-semibold px-8 py-4 rounded-lg hover:bg-primary-foreground/10 transition-colors text-base"
            >
              संपर्क करा
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
