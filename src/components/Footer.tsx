import { Heart } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src={logo} alt="शाळेचा लोगो" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-devanagari text-sm font-bold text-primary-foreground leading-tight">
                डॉ. बाबासाहेब आंबेडकर
              </p>
              <p className="font-devanagari text-xs text-primary-foreground/70 leading-tight">
                मतिमंद निवासी विशेष शाळा, हिंगणघाट
              </p>
            </div>
          </div>

          <div className="h-px w-24 bg-primary-foreground/20" />

          <p className="font-devanagari text-sm text-primary-foreground/60 flex items-center gap-1">
            © {new Date().getFullYear()} सर्व हक्क राखीव | 
            <Heart className="w-3 h-3 text-secondary inline" /> 
            सेवा आणि समर्पण
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
