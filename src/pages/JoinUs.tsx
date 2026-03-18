import { ClipboardList, UserPlus, ArrowRight, CheckCircle2 } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";

const benefits = [
  "Access to all Lehrein modules and facilitation guides",
  "Training and onboarding for chapter leads",
  "National network of student psychologists",
  "Certificate of leadership and community service",
  "Mentorship from Lehrein's advisory board",
  "Opportunities to present at national events",
];

const JoinUs = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-foam/60 via-background to-background -z-10" />
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Join Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Start a Lehrein chapter at your institution or sign up as a member. Be part of the wave.
          </p>
        </div>
      </section>

      {/* Two paths */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Chapter Application */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-navy/10 hover-lift animate-fade-up">
              <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center mb-5">
                <ClipboardList size={28} className="text-navy" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                Start a Chapter
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Apply to launch a Lehrein chapter at your college, school, or community organization. We provide all the resources, training, and support you need.
              </p>
              <ul className="space-y-2 mb-6">
                {benefits.slice(0, 3).map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#chapter-form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy text-navy-foreground font-semibold shadow-lg hover:shadow-xl hover:bg-navy/90 transition-all text-sm"
              >
                Apply Now <ArrowRight size={16} />
              </a>
            </div>

            {/* Member Sign-up */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-navy/10 hover-lift animate-fade-up-delay-1">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <UserPlus size={28} className="text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                Become a Member
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join as an individual member to participate in sessions, access resources, and connect with the Lehrein community nationwide.
              </p>
              <ul className="space-y-2 mb-6">
                {benefits.slice(3).map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#member-form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-navy/20 text-foreground font-semibold hover:bg-navy/5 transition-all text-sm"
              >
                Sign Up <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Embedded Google Form placeholder */}
      <section id="chapter-form" className="py-20 bg-gradient-to-b from-navy/5 to-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4 text-center">
            Chapter Application Form
          </h2>
          <p className="text-muted-foreground text-center mb-8 max-w-lg mx-auto">
            Fill out the form below to apply for starting a Lehrein chapter at your institution.
          </p>
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-navy/10 overflow-hidden">
            {/* Replace the src below with your actual Google Form embed URL */}
            <div className="w-full h-[600px] flex items-center justify-center bg-muted/30">
              <div className="text-center p-8">
                <ClipboardList size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Google Form Embed</h3>
                <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                  Replace this placeholder with your Google Form by adding an iframe with your form's embed URL.
                </p>
                <code className="block mt-4 text-xs text-muted-foreground bg-muted/50 rounded-lg p-3">
                  {'<iframe src="YOUR_GOOGLE_FORM_URL" .../>'}
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Sign-up Form */}
      <section id="member-form" className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4 text-center">
            Member Sign-Up
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Join the Lehrein community as an individual member.
          </p>
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-navy/10">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input type="email" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Institution / Organization</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your college, school, or organization" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Why do you want to join Lehrein?</label>
                <textarea rows={4} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Tell us about your interest in psychology and mental health..." />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-navy text-navy-foreground font-semibold shadow-lg hover:shadow-xl hover:bg-navy/90 transition-all"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
