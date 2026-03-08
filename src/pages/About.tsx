import { GraduationCap, Building2, Users, School, Waves } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import IndiaMap from "@/components/IndiaMap";

const serveCards = [
  { icon: GraduationCap, title: "Colleges", desc: "Empowering students with mental health awareness and emotional resilience programs.", color: "from-primary/20 to-primary/5" },
  { icon: Building2, title: "Corporates", desc: "Workplace wellness solutions for healthier, more productive teams.", color: "from-accent/20 to-accent/5" },
  { icon: Users, title: "Communities", desc: "Grassroots mental health initiatives for underserved populations.", color: "from-primary/20 to-teal-deep/10" },
  { icon: School, title: "Schools", desc: "Age-appropriate psychology modules for young minds.", color: "from-accent/15 to-primary/10" },
];

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/10 to-background" />
          {/* Multiple wave layers */}
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="hsl(var(--accent) / 0.08)" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
            <path fill="hsl(var(--primary) / 0.12)" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,213.3C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            <path fill="hsl(var(--primary) / 0.06)" d="M0,288L48,272C96,256,192,224,288,224C384,224,480,256,576,261.3C672,267,768,245,864,234.7C960,224,1056,224,1152,229.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
          {/* Floating decorative elements */}
          <Waves className="absolute top-20 right-[15%] text-primary/20 animate-wave-float" size={64} />
          <Waves className="absolute top-40 left-[10%] text-accent/15 animate-wave-float" size={48} style={{ animationDelay: "1.5s" }} />
          <Waves className="absolute bottom-40 right-[25%] text-primary/10 animate-wave-float" size={36} style={{ animationDelay: "3s" }} />
          <div className="absolute top-32 left-[30%] w-3 h-3 rounded-full bg-accent/30 animate-wave-float" style={{ animationDelay: "0.5s" }} />
          <div className="absolute top-52 right-[35%] w-2 h-2 rounded-full bg-primary/40 animate-wave-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 text-center animate-fade-up">
          <div className="inline-block px-5 py-2 rounded-full bg-accent/15 text-accent text-sm font-semibold tracking-wide mb-6">
            The Psychology Association
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
            Lehrein
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Waves of change in mental health & wellness — reaching every corner of India through psychology-driven programs.
          </p>
          <div className="flex justify-center gap-3">
            <div className="w-12 h-1 rounded-full bg-primary" />
            <div className="w-8 h-1 rounded-full bg-accent" />
            <div className="w-4 h-1 rounded-full bg-primary/50" />
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Who We Are */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 justify-center mb-8">
            <div className="w-12 h-1 rounded-full bg-accent" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center animate-fade-up">
              Who We Are
            </h2>
            <div className="w-12 h-1 rounded-full bg-accent" />
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg animate-fade-up-delay-1">
            <p>
              Lehrein — meaning "waves" — is a movement born from the belief that mental health and emotional well-being should be accessible to everyone. Founded by The Psychology Association, we design and deliver evidence-based psychology programs across India's diverse landscape.
            </p>
            <p>
              Our mission is to create lasting ripples of awareness, resilience, and healing in communities that need it most. From bustling urban campuses to remote rural schools, Lehrein's modules are tailored to meet people exactly where they are.
            </p>
            <p>
              We partner with institutions, organizations, and grassroots collectives to build a future where psychology is not a luxury — but a fundamental right woven into the fabric of everyday life.
            </p>
          </div>
        </div>
      </section>

      <WaveDivider flip />

      {/* Who We Serve */}
      <section className="relative py-24 bg-gradient-to-b from-secondary/50 via-secondary/30 to-background overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <path d="M0,300 C240,400 480,200 720,300 C960,400 1200,200 1440,300" stroke="hsl(var(--accent))" strokeWidth="2" fill="none" />
          <path d="M0,350 C240,450 480,250 720,350 C960,450 1200,250 1440,350" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        </svg>
        <div className="container mx-auto px-4 relative">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Who We Serve
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
            Creating waves of impact across four key sectors
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {serveCards.map((card, i) => (
              <div
                key={card.title}
                className={`bg-gradient-to-br ${card.color} backdrop-blur-sm rounded-2xl p-6 text-center hover-lift border border-border/50 animate-fade-up-delay-${Math.min(i + 1, 3)}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-card shadow-md flex items-center justify-center mx-auto mb-4">
                  <card.icon size={28} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Interactive Map */}
      <section className="py-24 relative">
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Where Lehrein is Live
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Click on any state to toggle its program status. Our reach grows every day.
          </p>
          <IndiaMap />
        </div>
      </section>

      {/* Bottom wave CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep via-primary to-teal-deep opacity-90 -z-10" />
        <svg className="absolute bottom-0 w-full opacity-10" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,60 1440,50 L1440,100 L0,100Z" fill="white" />
        </svg>
        <svg className="absolute top-0 w-full opacity-10 rotate-180" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,60 1440,50 L1440,100 L0,100Z" fill="white" />
        </svg>
        <div className="container mx-auto px-4 text-center relative">
          <Waves className="mx-auto mb-4 text-teal-deep-foreground/30" size={40} />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-teal-deep-foreground mb-4">
            Ready to Make Waves?
          </h2>
          <p className="text-teal-deep-foreground/80 max-w-md mx-auto mb-8">
            Join us in bringing psychology-driven wellness to every community.
          </p>
          <a href="/get-involved">
            <button className="px-8 py-3 rounded-xl bg-accent text-accent-foreground font-semibold shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all">
              Get Involved
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
