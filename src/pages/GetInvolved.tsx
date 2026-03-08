import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Waves, Heart, Briefcase, TreePine } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";

const sections = [
  {
    title: "For Colleges",
    icon: Heart,
    desc: "Partner with Lehrein to bring psychology-driven wellness modules to your campus. Our programs help students build emotional resilience, manage academic stress, and develop healthy coping mechanisms.",
    cta: "Partner With Us",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "For Corporates",
    icon: Briefcase,
    desc: "Invest in your team's mental health with Lehrein's corporate wellness programs. From leadership workshops to organization-wide wellness days, we design experiences that reduce burnout and improve team dynamics.",
    cta: "Explore Corporate Programs",
    gradient: "from-accent/15 to-accent/5",
  },
  {
    title: "For Communities & Schools",
    icon: TreePine,
    desc: "Bring Lehrein to your community or school. We offer age-appropriate, culturally sensitive modules that help young people and community members understand emotions and support one another.",
    cta: "Bring Lehrein to Your Community",
    gradient: "from-primary/15 to-accent/5",
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
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-primary/20 to-background" />
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path d="M0,100 C360,180 720,20 1080,100 C1260,140 1380,120 1440,100 L1440,200 L0,200Z" fill="hsl(var(--primary) / 0.1)" />
            <path d="M0,140 C240,180 480,100 720,140 C960,180 1200,100 1440,140 L1440,200 L0,200Z" fill="hsl(var(--accent) / 0.06)" />
          </svg>
          <Waves className="absolute top-12 right-[10%] text-accent/15 animate-wave-float" size={48} />
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

      <WaveDivider />

      {/* Sections */}
      {sections.map((section, i) => (
        <div key={section.title}>
          <section className={`py-16 relative ${i % 2 === 1 ? "bg-secondary/30" : ""}`}>
            {/* Subtle background wave */}
            <svg className="absolute top-0 right-0 w-64 h-full opacity-[0.04]" viewBox="0 0 200 400" preserveAspectRatio="none">
              <path d="M100,0 C150,100 50,200 100,300 C150,400 50,500 100,600" stroke="hsl(var(--accent))" strokeWidth="3" fill="none" />
            </svg>
            <div className="container mx-auto px-4 max-w-3xl relative">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center flex-shrink-0 border border-border/50`}>
                  <section.icon size={24} className="text-accent" />
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
                <form onSubmit={handleSubmit} className="mt-8 ml-[4.5rem] bg-card rounded-2xl p-6 border border-border space-y-4 animate-fade-up">
                  {submitted ? (
                    <p className="text-teal-deep font-medium text-center py-4">Thank you! We'll be in touch soon.</p>
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 -z-10" />
        <div className="container mx-auto px-4 max-w-2xl">
          <Waves className="mx-auto mb-4 text-accent/40" size={32} />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
            Volunteer or Partner With Us
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Interested in contributing to Lehrein in another way? Fill out this form and we'll connect with you.
          </p>
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border space-y-4 shadow-sm">
            {submitted ? (
              <p className="text-teal-deep font-medium text-center py-4">Thank you! We'll be in touch soon.</p>
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
