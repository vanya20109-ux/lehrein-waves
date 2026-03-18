import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Waves } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import KanagawaWave from "@/components/KanagawaWave";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
        </div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4 animate-fade-up">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up-delay-1">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
        </div>
      </section>

      <KanagawaWave />

      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-steel/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card/80 rounded-2xl p-8 border border-navy/10 space-y-4 shadow-sm">
                {submitted ? (
                  <div className="text-center py-8">
                    <Waves className="mx-auto mb-3 text-accent" size={32} />
                    <p className="text-navy font-display text-xl font-semibold mb-2">Message Sent!</p>
                    <p className="text-muted-foreground">We'll get back to you soon.</p>
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                      <input required className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="you@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Organization</label>
                      <input className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your college, company, or organization" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                      <textarea rows={5} required className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="How can we help?" />
                    </div>
                    <Button variant="coral" type="submit" size="lg" className="rounded-xl w-full">
                      Send Message
                    </Button>
                  </>
                )}
              </form>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "hello@lehrein.org" },
                    { icon: Phone, label: "Phone", value: "+91 XXXX XXXX" },
                    { icon: MapPin, label: "Location", value: "New Delhi, India" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy/15 to-steel/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-navy" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder with Kanagawa wave decoration */}
              <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-card/80 shadow-sm">
                <iframe
                  title="New Delhi, India map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.1190%2C28.5345%2C77.2340%2C28.6354&amp;layer=mapnik"
                  className="h-56 w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="px-4 pb-3 pt-2 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">New Delhi, India</p>
                  <a
                    href="https://www.openstreetmap.org/#map=13/28.5850/77.1765"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-primary underline"
                  >
                    View on OpenStreetMap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
