import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Waves, Heart, Briefcase, TreePine } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import KanagawaWave from "@/components/KanagawaWave";

const sections = [
  {
    title: "For Colleges",
    icon: Heart,
    desc: "Partner with Lehrein to bring psychology-driven wellness modules to your campus. Our programs help students build emotional resilience, manage academic stress, and develop healthy coping mechanisms.",
    cta: "Partner With Us",
  },
  {
    title: "For Corporates",
    icon: Briefcase,
    desc: "Invest in your team's mental health with Lehrein's corporate wellness programs. From leadership workshops to organization-wide wellness days, we design experiences that reduce burnout and improve team dynamics.",
    cta: "Explore Corporate Programs",
  },
  {
    title: "For Communities & Schools",
    icon: TreePine,
    desc: "Bring Lehrein to your community or school. We offer age-appropriate, culturally sensitive modules that help young people and community members understand emotions and support one another.",
    cta: "Bring Lehrein to Your Community",
  },
];

const GetInvolved = () => {
  const [formOpen, setFormOpen] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormOpen(null); }, 2000);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/10 via-steel/6 to-background" />
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path d="M0,100 C200,60 360,40 500,80 C640,120 720,140 860,110 C1000,80 1100,50 1240,90 C1340,115 1400,130 1440,120 L1440,200 L0,200Z" fill="hsl(var(--navy))" opacity="0.1" />
            <path d="M0,140 C160,120 320,100 480,125 C640,150 760,160 920,140 C1080,120 1200,105 1360,130 L1440,135 L1440,200 L0,200Z" fill="hsl(var(--primary))" opacity="0.06" />
            <path d="M440,82 C465,68 490,62 515,70" stroke="hsl(var(--foam))" strokeWidth="2" fill="none" opacity="0.3" />
          </svg>
          <Waves className="absolute top-12 right-[10%] text-navy/10 animate-sway" size={48} />
        </div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4 animate-fade-up">
            Get Involved
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up-delay-1">
            Whether you're a college, corporate, or community — there's a place for you in the Lehrein movement.
          </p>
        </div>
      </section>

      <KanagawaWave />

      {/* Sections */}
      {sections.map((section, i) => (
        <div key={section.title}>
          <section className={`py-16 relative ${i % 2 === 1 ? "bg-navy/[0.03]" : ""}`}>
            {/* Background wave texture */}
            <svg className="absolute top-0 right-0 w-64 h-full opacity-[0.03]" viewBox="0 0 200 400" preserveAspectRatio="none">
              <path d="M80,0 C130,80 30,160 80,240 C130,320 30,400 80,480" stroke="hsl(var(--navy))" strokeWidth="4" fill="none" />
            </svg>
            <div className="container mx-auto px-4 max-w-3xl relative">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy/15 to-steel/10 flex items-center justify-center flex-shrink-0 border border-navy/10">
                  <section.icon size={24} className="text-navy" />
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 ml-[4.5rem]">
                {section.desc}
              </p>
              <div className="ml-[4.5rem]">
                <Button
                  variant="coral"
                  size="lg"
                  className="rounded-xl"
                  onClick={() => setFormOpen(formOpen === section.title ? null : section.title)}
                >
                  {section.cta}
                </Button>
              </div>

              {formOpen === section.title && (
                <form onSubmit={handleSubmit} className="mt-8 ml-[4.5rem] bg-card rounded-2xl p-6 border border-navy/10 space-y-4 animate-fade-up">
                  {submitted ? (
                    <p className="text-navy font-medium text-center py-4">Thank you! We'll be in touch soon.</p>
                  ) : (
                    <>
                      <input placeholder="Your Name" required className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                      <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                      <input placeholder="Organization" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                      <textarea placeholder="Tell us about your interest..." rows={3} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                      <Button variant="coral" type="submit" className="rounded-xl">Submit Inquiry</Button>
                    </>
                  )}
                </form>
              )}
            </div>
          </section>
          {i < sections.length - 1 && <WaveDivider flip={i % 2 === 0} />}
        </div>
      ))}

      <WaveDivider />

      {/* General volunteer form */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/[0.03] -z-10" />
        <div className="container mx-auto px-4 max-w-2xl">
          <Waves className="mx-auto mb-4 text-navy/25" size={32} />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
            Volunteer or Partner With Us
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Interested in contributing to Lehrein in another way? Fill out this form and we'll connect with you.
          </p>
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-navy/10 space-y-4 shadow-sm">
            {submitted ? (
              <p className="text-navy font-medium text-center py-4">Thank you! We'll be in touch soon.</p>
            ) : (
              <>
                <input placeholder="Full Name" required className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                <select className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">I'm interested in...</option>
                  <option>Volunteering</option>
                  <option>Partnership</option>
                  <option>Sponsorship</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                <Button variant="coral" type="submit" size="lg" className="rounded-xl w-full">Send Message</Button>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
