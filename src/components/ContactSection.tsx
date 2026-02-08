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

          {/* Map placeholder */}
          <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
            <iframe
              title="शाळेचा नकाशा"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d887.8858340150744!2d78.8350239!3d20.5300634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd371f1c1ef7cad%3A0xf4fbe23fa760cfb6!2sBHARAT%20RATNA%20DR.%20BABA%20SAHEB%20AMBEDKAR%20MATIMAND%20MULA%20MULICHI%20NIWASI%20VISHESH%20SCHOOL!5e1!3m2!1sen!2sin!4v1770557581978!5m2!1sen!2sin"
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
