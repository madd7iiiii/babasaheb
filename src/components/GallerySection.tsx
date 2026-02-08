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

import photo11 from "../assets/gallery/Photo11.jpeg";
import photo12 from "../assets/gallery/Photo12.jpeg";
import photo15 from "../assets/gallery/Photo15.jpeg";
import photo16 from "../assets/gallery/Photo16.jpeg";
import photo20 from "../assets/gallery/Photo20.jpeg";
import photo23 from "../assets/gallery/Photo23.jpeg";
import photo25 from "../assets/gallery/Photo25.jpeg";
import photo28 from "../assets/gallery/Photo28.jpeg";
import photo33 from "../assets/gallery/Photo33.jpeg";
import photo34 from "../assets/gallery/Photo34.jpeg";
import photo36 from "../assets/gallery/Photo36.jpeg";
import photo37 from "../assets/gallery/Photo37.jpeg";
import photo38 from "../assets/gallery/Photo38.jpeg";
import photo39 from "../assets/gallery/Photo39.jpeg";
import photo40 from "../assets/gallery/Photo40.jpeg";

const photos = [
  // --- पुरानी फोटोज ---
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

  // --- नई फोटोज (New Added) ---
  { src: photo11, alt: "शाळेच्या इमारतीसमोर विद्यार्थी व शिक्षकांचा समूह फोटो" },
  { src: photo12, alt: "मैदानावर चित्रकला आणि हस्तकला उपक्रम" },
  { src: photo15, alt: "शाळेच्या स्वागत फलकासह विद्यार्थी आणि कर्मचारी" },
  { src: photo16, alt: "विद्यार्थ्यांना शैक्षणिक साहित्य आणि वह्यांचे वाटप" },
  { src: photo20, alt: "सकाळचा व्यायाम आणि पी.टी. (PT) क्लास" },
  { src: photo23, alt: "सांस्कृतिक कार्यक्रम आणि विद्यार्थी सादरीकरण" },
  { src: photo25, alt: "प्रजासत्ताक दिनानिमित्त महापुरुषांच्या प्रतिमेस पुष्पहार अर्पण" },
  { src: photo28, alt: "क्रांतीज्योती सावित्रीबाई फुले जयंती कार्यक्रम" },
  { src: photo33, alt: "विद्यार्थ्यांचा वाढदिवस आणि केक कटिंग सोहळा" },
  { src: photo34, alt: "मैदानावर विद्यार्थ्यांची शिस्तबद्ध कवायत (PT)" },
  { src: photo36, alt: "स्वातंत्र्य दिन समारंभ आणि ध्वजारोहण तयारी" },
  { src: photo37, alt: "मान्यवर पाहुण्यांचे स्वागत आणि मंच कार्यक्रम" },
  { src: photo38, alt: "क्रीडा स्पर्धेसाठी विद्यार्थ्यांची तयारी" },
  { src: photo39, alt: "कार्यक्रमाचा आनंद घेताना विद्यार्थी" },
  { src: photo40, alt: "विद्यार्थ्यांचा आनंददायी गट फोटो (Group Photo)" },
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