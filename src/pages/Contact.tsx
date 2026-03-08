import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Waves } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";

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
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background" />
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path d="M0,120 C360,200 720,40 1080,120 C1260,160 1380,140 1440,120 L1440,200 L0,200Z" fill="hsl(var(--primary) / 0.1)" />
            <path d="M0,160 C240,190 480,130 720,160 C960,190 1200,130 1440,160 L1440,200 L0,200Z" fill="hsl(var(--accent) / 0.06)" />
          </svg>
          <Waves className="absolute top-16 left-[12%] text-primary/15 animate-wave-float" size={44} />
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

      <WaveDivider />

      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border space-y-4 shadow-sm">
                {submitted ? (
                  <div className="text-center py-8">
                    <Waves className="mx-auto mb-3 text-accent" size={32} />
                    <p className="text-teal-deep font-display text-xl font-semibold mb-2">Message Sent!</p>
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
                    { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                    { icon: MapPin, label: "Location", value: "New Delhi, India" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="relative bg-card rounded-2xl border border-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5" />
                <svg className="absolute bottom-0 w-full opacity-20" viewBox="0 0 400 80" preserveAspectRatio="none">
                  <path d="M0,40 C100,80 200,0 300,40 C350,60 380,50 400,40 L400,80 L0,80Z" fill="hsl(var(--primary))" />
                </svg>
                <div className="relative h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="text-accent mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">New Delhi, India</p>
                    <p className="text-xs text-muted-foreground mt-1">Map placeholder</p>
                  </div>
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
