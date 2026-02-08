import { BookOpen, Palette, Music, Dumbbell, Utensils, HandHeart } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "विशेष शिक्षण",
    description: "वैयक्तिक गरजांनुसार तयार केलेले अभ्यासक्रम आणि शिक्षण पद्धती.",
  },
  {
    icon: HandHeart,
    title: "व्यावसायिक प्रशिक्षण",
    description: "स्वावलंबी जीवनासाठी व्यावसायिक कौशल्य विकास कार्यक्रम.",
  },
  {
    icon: Palette,
    title: "कला व हस्तकला",
    description: "चित्रकला, हस्तकला आणि सर्जनशील अभिव्यक्तीचे प्रशिक्षण.",
  },
  {
    icon: Music,
    title: "संगीत व नृत्य",
    description: "संगीत, नृत्य आणि सांस्कृतिक कार्यक्रमांमध्ये सहभाग.",
  },
  {
    icon: Dumbbell,
    title: "क्रीडा व योग",
    description: "शारीरिक विकासासाठी खेळ, योग आणि व्यायाम कार्यक्रम.",
  },
  {
    icon: Utensils,
    title: "निवासी सुविधा",
    description: "सुरक्षित निवास, पोषक आहार आणि सर्वांगीण काळजी.",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-devanagari text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            कार्यक्रम
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
            <span className="font-devanagari">आमचे कार्यक्रम व सेवा</span>
          </h2>
          <p className="font-devanagari text-base md:text-lg text-muted-foreground">
            विशेष गरजा असलेल्या मुलांच्या सर्वांगीण विकासासाठी विविध कार्यक्रम.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-7 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <program.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-devanagari font-bold text-lg text-foreground mb-2">
                {program.title}
              </h3>
              <p className="font-devanagari text-sm text-muted-foreground leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
