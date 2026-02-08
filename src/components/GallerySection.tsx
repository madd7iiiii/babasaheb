import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Corrected Imports (सही रास्ता)
import photo1 from "../assets/gallery/photo1.jpeg";
import photo2 from "../assets/gallery/photo2.jpeg";
import photo3 from "../assets/gallery/photo3.jpeg";
import photo4 from "../assets/gallery/photo4.jpeg";
import photo5 from "../assets/gallery/photo5.jpeg";
import photo6 from "../assets/gallery/photo6.jpeg";
import photo7 from "../assets/gallery/photo7.jpeg";
import photo8 from "../assets/gallery/photo8.jpeg";
import photo9 from "../assets/gallery/photo9.jpeg";
import photo10 from "../assets/gallery/photo10.jpeg";

const photos = [
  { src: photo1, alt: "विद्यार्थी आणि शिक्षक गट फोटो" },
  { src: photo10, alt: "शाळेचा वार्षिक कार्यक्रम" },
  { src: photo4, alt: "प्रवेशोत्सव कार्यक्रम" },
  { src: photo5, alt: "प्रवेशोत्सव स्वागत" },
  { src: photo6, alt: "विद्यार्थी सत्कार" },
  { src: photo7, alt: "पुष्पगुच्छ प्रदान" },
  { src: photo2, alt: "स्वागत समारंभ" },
  { src: photo3, alt: "शिक्षिका स्वागत" },
  { src: photo8, alt: "सामूहिक फोटो" },
  { src: photo9, alt: "शाळा कार्यक्रम" },
];

const GallerySection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % photos.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="gallery" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-devanagari text-3xl md:text-4xl font-bold text-foreground mb-3">
            📸 फोटो गॅलरी
          </h2>
          <p className="font-devanagari text-muted-foreground text-lg">
            शाळेतील कार्यक्रम आणि उपक्रम
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Image Container */}
          <div className="overflow-hidden rounded-2xl shadow-xl aspect-video bg-black relative group">
            <img
              src={photos[current].src}
              alt={photos[current].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background text-foreground rounded-full p-2 shadow-lg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="मागील फोटो"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background text-foreground rounded-full p-2 shadow-lg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="पुढील फोटो"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption */}
          <div className="text-center mt-4">
            <p className="text-lg font-medium font-devanagari">
              {photos[current].alt}
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 flex-wrap">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 w-2.5 hover:bg-primary/50"
                }`}
                aria-label={`फोटो ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;