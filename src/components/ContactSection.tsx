import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-devanagari text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            संपर्क
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
            <span className="font-devanagari">आमच्याशी संपर्क साधा</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-devanagari font-bold text-foreground mb-1">पत्ता</h3>
                <p className="font-devanagari text-sm text-muted-foreground">
                  भारतरत्न डॉ. बाबासाहेब आंबेडकर मतिमंद मुला-मुलींची निवासी विशेष शाळा,
                  <br />
                  हिंगणघाट, जिल्हा वर्धा, महाराष्ट्र
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-devanagari font-bold text-foreground mb-1">फोन</h3>
                <p className="font-devanagari text-sm text-muted-foreground">
                  +91 99227 33102
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-devanagari font-bold text-foreground mb-1">ईमेल</h3>
                <p className="text-sm text-muted-foreground">
                  b.r.Ambedkarmrrschool@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-devanagari font-bold text-foreground mb-1">शाळेची वेळ</h3>
                <p className="font-devanagari text-sm text-muted-foreground">
                  सोमवार - शुक्रवार: सकाळी ९:३० ते संध्याकाळी ५:३०
                  <br />
                  शनिवार: सकाळी ७:०० ते ११:३०
                </p>
              </div>
            </div>
          </div>

          {/* Map placeholder - ✅ UPDATED LINK HERE */}
          <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
            <iframe
              title="शाळेचा नकाशा"
              src="https://maps.google.com/maps?q=Bharatratna%20Dr.%20Babasaheb%20Ambedkar%20Matimand%20Mula-Mulinchi%20Niwasi%20Vishesh%20Shala%20Hinganghat&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;