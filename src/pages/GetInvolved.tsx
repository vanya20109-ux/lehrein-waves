import { useState } from "react";
import { Button } from "@/components/ui/button";
import WaveDivider from "@/components/WaveDivider";

const sections = [
  {
    title: "For Colleges",
    desc: "Partner with Lehrein to bring psychology-driven wellness modules to your campus. Our programs help students build emotional resilience, manage academic stress, and develop healthy coping mechanisms. We work with student bodies, faculty, and administration to create customized programs that fit your institution's needs.",
    cta: "Partner With Us",
  },
  {
    title: "For Corporates",
    desc: "Invest in your team's mental health with Lehrein's corporate wellness programs. From leadership workshops to organization-wide wellness days, we design experiences that reduce burnout, improve team dynamics, and foster a culture of psychological safety in the workplace.",
    cta: "Explore Corporate Programs",
  },
  {
    title: "For Communities & Schools",
    desc: "Bring Lehrein to your community or school. We offer age-appropriate, culturally sensitive modules that help young people and community members understand emotions, build self-awareness, and support one another. Our grassroots approach ensures every program is rooted in local context.",
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
      <section className="py-20 bg-gradient-to-b from-primary/15 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-up">
            Get Involved
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up-delay-1">
            Whether you're a college, corporate, or community — there's a place for you in the Lehrein movement. Let's create waves of change together.
          </p>
        </div>
      </section>

      <WaveDivider />

      {/* Sections */}
      {sections.map((section, i) => (
        <div key={section.title}>
          <section className={`py-16 ${i % 2 === 1 ? "bg-secondary/30" : ""}`}>
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {section.desc}
              </p>
              <Button
                variant="coral"
                size="lg"
                className="rounded-xl"
                onClick={() => setFormOpen(formOpen === section.title ? null : section.title)}
              >
                {section.cta}
              </Button>

              {/* Inline form */}
              {formOpen === section.title && (
                <form onSubmit={handleSubmit} className="mt-8 bg-card rounded-2xl p-6 border border-border space-y-4 animate-fade-up">
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
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
            Volunteer or Partner With Us
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Interested in contributing to Lehrein in another way? Fill out this form and we'll connect with you.
          </p>
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border space-y-4">
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
