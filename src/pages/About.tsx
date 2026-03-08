import { GraduationCap, Building2, Users, School, Waves } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import KanagawaWave from "@/components/KanagawaWave";
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
      {/* Hero — Kanagawa-inspired */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Sky gradient — like the pale sky behind the wave */}
          <div className="absolute inset-0 bg-gradient-to-b from-foam via-secondary/50 to-background" />

          {/* Great wave SVG background */}
          <svg className="absolute bottom-0 w-full h-[60%]" viewBox="0 0 1440 500" preserveAspectRatio="none">
            {/* Deep ocean */}
            <path d="M0,250 C120,200 200,150 360,200 C520,250 580,300 720,260 C860,220 920,170 1080,220 C1200,260 1320,290 1440,250 L1440,500 L0,500Z" fill="hsl(var(--navy))" opacity="0.18" />
            {/* Mid wave — the great curl */}
            <path d="M-100,320 C0,260 80,200 200,230 C320,260 380,310 500,280 C620,250 680,200 800,240 C920,280 980,320 1100,290 C1220,260 1300,220 1440,270 L1440,500 L-100,500Z" fill="hsl(var(--primary))" opacity="0.14" />
            {/* Wave crest curl */}
            <path d="M0,370 C80,340 160,310 280,330 C400,350 440,370 560,355 C680,340 740,315 860,335 C980,355 1040,375 1160,358 C1280,340 1360,320 1440,340 L1440,500 L0,500Z" fill="hsl(var(--indigo))" opacity="0.10" />
            {/* Foam spray */}
            <path d="M160,225 C185,210 215,205 240,212 C255,216 265,225 270,230" stroke="hsl(var(--foam))" strokeWidth="2.5" fill="none" opacity="0.5" />
            <path d="M200,215 C210,205 225,200 240,205" stroke="hsl(var(--foam))" strokeWidth="1.5" fill="none" opacity="0.35" />
            <path d="M760,235 C785,220 815,215 840,222 C855,226 865,235 870,240" stroke="hsl(var(--foam))" strokeWidth="2.5" fill="none" opacity="0.45" />
            <path d="M1150,265 C1175,250 1205,245 1230,252" stroke="hsl(var(--foam))" strokeWidth="2" fill="none" opacity="0.4" />
          </svg>

          {/* Floating elements */}
          <Waves className="absolute top-20 right-[15%] text-navy/15 animate-wave-float" size={64} />
          <Waves className="absolute top-40 left-[10%] text-steel/15 animate-sway" size={48} />
          <Waves className="absolute bottom-[45%] right-[25%] text-primary/10 animate-wave-float" size={36} style={{ animationDelay: "3s" }} />
          <div className="absolute top-32 left-[30%] w-3 h-3 rounded-full bg-accent/30 animate-wave-float" style={{ animationDelay: "0.5s" }} />
          <div className="absolute top-52 right-[35%] w-2 h-2 rounded-full bg-steel/30 animate-wave-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 text-center animate-fade-up relative z-10">
          <div className="inline-block px-5 py-2 rounded-full bg-navy/10 text-navy text-sm font-semibold tracking-wide mb-6 border border-navy/10">
            The Psychology Association
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
            Lehrein
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Waves of change in mental health & wellness — reaching every corner of India through psychology-driven programs.
          </p>
          <div className="flex justify-center gap-3">
            <div className="w-12 h-1 rounded-full bg-navy" />
            <div className="w-8 h-1 rounded-full bg-accent" />
            <div className="w-4 h-1 rounded-full bg-steel" />
          </div>
        </div>
      </section>

      <KanagawaWave />

      {/* Who We Are */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-steel/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 justify-center mb-8">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-navy/40" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center animate-fade-up">
              Who We Are
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-navy/40" />
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
      <section className="relative py-24 bg-gradient-to-b from-navy/5 via-secondary/40 to-background overflow-hidden">
        {/* Background wave texture */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <path d="M0,200 C200,300 400,100 600,200 C800,300 1000,100 1200,200 C1320,260 1400,240 1440,200" stroke="hsl(var(--navy))" strokeWidth="3" fill="none" />
          <path d="M0,300 C200,400 400,200 600,300 C800,400 1000,200 1200,300 C1320,360 1400,340 1440,300" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
          <path d="M0,400 C200,500 400,300 600,400 C800,500 1000,300 1200,400" stroke="hsl(var(--steel))" strokeWidth="1.5" fill="none" />
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
                className={`bg-card/80 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift border border-navy/10 animate-fade-up-delay-${Math.min(i + 1, 3)}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy/15 to-steel/10 shadow-md flex items-center justify-center mx-auto mb-4">
                  <card.icon size={28} className="text-navy" />
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
        <div className="absolute top-20 left-0 w-96 h-96 bg-steel/5 rounded-full blur-3xl -z-10" />
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

      {/* Bottom CTA — Deep ocean band */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-indigo to-navy -z-10" />
        {/* Kanagawa foam decoration */}
        <svg className="absolute top-0 w-full opacity-10 rotate-180" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C120,10 240,0 360,20 C480,40 540,60 660,40 C780,20 840,0 960,20 C1080,40 1140,60 1260,40 C1340,28 1400,15 1440,20 L1440,80 L0,80Z" fill="hsl(var(--foam))" />
        </svg>
        <svg className="absolute bottom-0 w-full opacity-10" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C120,10 240,0 360,20 C480,40 540,60 660,40 C780,20 840,0 960,20 C1080,40 1140,60 1260,40 C1340,28 1400,15 1440,20 L1440,80 L0,80Z" fill="hsl(var(--foam))" />
        </svg>
        <div className="container mx-auto px-4 text-center relative">
          <Waves className="mx-auto mb-4 text-navy-foreground/25" size={40} />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-foreground mb-4">
            Ready to Make Waves?
          </h2>
          <p className="text-navy-foreground/70 max-w-md mx-auto mb-8">
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
