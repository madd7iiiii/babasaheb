import { useEffect, useState, useRef } from "react";

// Typescript के लिए इंटरफेस
interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  delay?: number;
}

const AnimatedCounter = ({ target, duration = 2000, suffix = "", delay = 0 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 } // जब 10% एलिमेंट दिखेगा तब एनीमेशन शुरू होगा
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // एनीमेशन का कैलकुलेशन
      const percentage = Math.min(progress / duration, 1);
      const easeProgress = 1 - Math.pow(1 - percentage, 3); // Smooth effect
      
      const currentCount = Math.floor(easeProgress * target);

      if (progress < duration) {
        setCount(currentCount);
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target); // अंत में सही नंबर सेट करें
      }
    };

    const timer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
    };
  }, [target, duration, delay, hasAnimated]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;