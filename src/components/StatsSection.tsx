import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    value: 40,
    suffix: "",
    label: "विद्यार्थी",
    duration: 1000,
    delay: 0,
  },
  {
    value: 19,
    suffix: "+",
    label: "शिक्षक व कर्मचारी",
    duration: 1000,
    delay: 0
  },
  {
    value: 25,
    suffix: "+",
    label: "वर्षांचा अनुभव",
    duration: 1000,
    delay: 0,
  },
  {
    value: 100,
    suffix: "%",
    label: "समर्पण",
    duration: 1000,
    delay: 0,
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold font-display">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={stat.duration}
                  delay={stat.delay}
                />
              </p>
              <p className="font-devanagari text-sm md:text-base text-primary-foreground/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
