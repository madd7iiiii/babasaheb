import { Target, Heart } from "lucide-react";
import schoolBuilding from "@/assets/school-building.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-devanagari text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            आमच्याबद्दल
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
            <span className="font-devanagari">विशेष मुलांसाठी विशेष शाळा</span>
          </h2>
          <p className="font-devanagari text-base md:text-lg text-muted-foreground leading-relaxed">
            भारतरत्न डॉ. बाबासाहेब आंबेडकर मतिमंद मुला-मुलींची निवासी विशेष शाळा, हिंगणघाट, 
            जिल्हा वर्धा ही विशेष गरजा असलेल्या मुलांसाठी एक समर्पित शैक्षणिक संस्था आहे. 
            आमचा उद्देश प्रत्येक मुलाला त्यांच्या क्षमतेनुसार शिक्षण देणे, त्यांचे कौशल्य विकसित करणे 
            आणि त्यांना स्वावलंबी बनवणे हा आहे.
          </p>
        </div>


        {/* Mission cards */}
        {/* School image */}
        <div className="max-w-4xl mx-auto mt-16 mb-12">
          <img
            src={schoolBuilding}
            alt="भारतरत्न डॉ. बाबासाहेब आंबेडकर मतिमंद मुला-मुलींची निवासी विशेष शाळा"
            className="w-full rounded-xl shadow-md border border-border"
          />
        </div>

        {/* Mission cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
            <h3 className="font-devanagari font-bold text-xl text-foreground mb-4 flex items-center gap-3">
              <Target className="w-6 h-6 text-accent" />
              आमचे ध्येय
            </h3>
            <p className="font-devanagari text-muted-foreground leading-relaxed">
              विशेष गरजा असलेल्या मुलांना सर्वसमावेशक शिक्षण आणि प्रशिक्षण देऊन त्यांना 
              समाजात सन्मानाने जगण्यास सक्षम बनवणे.
            </p>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
            <h3 className="font-devanagari font-bold text-xl text-foreground mb-4 flex items-center gap-3">
              <Heart className="w-6 h-6 text-accent" />
              आमची दृष्टी
            </h3>
            <p className="font-devanagari text-muted-foreground leading-relaxed">
              प्रत्येक विशेष मुलाला समान संधी, प्रेम आणि आदर मिळावा यासाठी 
              एक आदर्श शैक्षणिक वातावरण निर्माण करणे.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
