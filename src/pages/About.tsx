import { GraduationCap, Building2, Users, School } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import IndiaMap from "@/components/IndiaMap";

const serveCards = [
  { icon: GraduationCap, title: "Colleges", desc: "Empowering students with mental health awareness and emotional resilience programs." },
  { icon: Building2, title: "Corporates", desc: "Workplace wellness solutions for healthier, more productive teams." },
  { icon: Users, title: "Communities", desc: "Grassroots mental health initiatives for underserved populations." },
  { icon: School, title: "Schools", desc: "Age-appropriate psychology modules for young minds." },
];

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated background waves */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary to-background" />
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="hsl(var(--primary) / 0.1)" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,213.3C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            <path fill="hsl(var(--primary) / 0.06)" d="M0,288L48,272C96,256,192,224,288,224C384,224,480,256,576,261.3C672,267,768,245,864,234.7C960,224,1056,224,1152,229.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Lehrein
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 font-light leading-relaxed">
            Waves of change in mental health & wellness — reaching every corner of India through psychology-driven programs.
          </p>
          <p className="text-sm text-muted-foreground tracking-widest uppercase">
            The Psychology Association
          </p>
        </div>
      </section>

      <WaveDivider />

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center animate-fade-up">
            Who We Are
          </h2>
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
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Who We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {serveCards.map((card, i) => (
              <div
                key={card.title}
                className={`bg-card rounded-2xl p-6 text-center hover-lift border border-border animate-fade-up-delay-${Math.min(i + 1, 3)}`}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <card.icon size={28} className="text-teal-deep" />
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
      <section className="py-20">
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
    </div>
  );
};

export default About;
