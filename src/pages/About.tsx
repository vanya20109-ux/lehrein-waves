import { GraduationCap, Building2, Users, School, Waves } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import KanagawaWave from "@/components/KanagawaWave";
import KintsugiText from "@/components/KintsugiText";
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
          {/* Sky gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-foam via-secondary/50 to-background" />

          {/* Great Wave SVG — more dramatic and visible */}
          <svg className="absolute bottom-0 w-full h-[65%]" viewBox="0 0 1440 600" preserveAspectRatio="none">
            {/* Deep ocean */}
            <path d="M0,300 C120,240 200,180 360,230 C520,280 580,340 720,290 C860,240 920,180 1080,240 C1200,285 1320,330 1440,280 L1440,600 L0,600Z" fill="hsl(var(--navy))" opacity="0.22" />
            {/* Mid wave — the great curl body */}
            <path d="M-100,370 C0,300 80,230 200,270 C320,310 380,360 500,320 C620,280 680,220 800,270 C920,320 980,370 1100,330 C1220,290 1300,240 1440,300 L1440,600 L-100,600Z" fill="hsl(var(--primary))" opacity="0.18" />
            {/* Curling crest — the iconic spiral */}
            <path d="M0,420 C80,385 160,350 280,375 C400,400 440,425 560,408 C680,390 740,360 860,382 C980,405 1040,425 1160,408 C1280,390 1360,365 1440,385 L1440,600 L0,600Z" fill="hsl(var(--indigo))" opacity="0.14" />

            {/* Wave curl spirals — signature Kanagawa feature */}
            <path d="M160,260 C185,230 230,215 265,228 C290,238 300,260 292,278 C284,292 265,298 248,290 C236,284 230,270 238,258" stroke="hsl(var(--steel))" strokeWidth="3" fill="none" opacity="0.35" />
            <path d="M760,265 C790,235 835,220 870,235 C895,245 905,268 898,285 C890,298 872,304 856,296 C844,290 840,276 848,264" stroke="hsl(var(--steel))" strokeWidth="3" fill="none" opacity="0.30" />

            {/* Foam spray — white frothy tips */}
            <path d="M140,255 C170,235 210,225 250,235 C270,240 280,255 285,262" stroke="hsl(var(--foam))" strokeWidth="3" fill="none" opacity="0.55" />
            <path d="M155,245 C170,235 190,228 210,232" stroke="hsl(var(--foam))" strokeWidth="2" fill="none" opacity="0.35" />
            <path d="M740,260 C770,242 810,232 850,242 C870,248 880,262 882,268" stroke="hsl(var(--foam))" strokeWidth="3" fill="none" opacity="0.50" />
            <path d="M1150,290 C1180,272 1210,265 1240,275" stroke="hsl(var(--foam))" strokeWidth="2.5" fill="none" opacity="0.42" />

            {/* Foam droplets scattered */}
            <circle cx="125" cy="250" r="2.5" fill="hsl(var(--foam))" opacity="0.4" />
            <circle cx="190" cy="228" r="2" fill="hsl(var(--foam))" opacity="0.35" />
            <circle cx="240" cy="222" r="1.5" fill="hsl(var(--foam))" opacity="0.3" />
            <circle cx="720" cy="255" r="2.5" fill="hsl(var(--foam))" opacity="0.35" />
            <circle cx="800" cy="230" r="2" fill="hsl(var(--foam))" opacity="0.3" />
            <circle cx="1140" cy="285" r="2" fill="hsl(var(--foam))" opacity="0.3" />
          </svg>

          {/* Floating elements */}
          <Waves className="absolute top-20 right-[15%] text-navy/20 animate-wave-float" size={64} />
          <Waves className="absolute top-40 left-[10%] text-steel/20 animate-sway" size={48} />
          <Waves className="absolute bottom-[45%] right-[25%] text-primary/15 animate-wave-float" size={36} style={{ animationDelay: "3s" }} />
          <div className="absolute top-32 left-[30%] w-3 h-3 rounded-full bg-accent/35 animate-wave-float" style={{ animationDelay: "0.5s" }} />
          <div className="absolute top-52 right-[35%] w-2 h-2 rounded-full bg-steel/35 animate-wave-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 text-center animate-fade-up relative z-10">
          <div className="inline-block px-5 py-2 rounded-full bg-navy/12 text-navy text-sm font-semibold tracking-wide mb-6 border border-navy/15">
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-steel/8 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy/8 rounded-full blur-3xl -z-10" />
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

      {/* Kintsugi Section */}
      <KintsugiText />

      <WaveDivider flip />

      {/* Who We Serve */}
      <section className="relative py-24 bg-gradient-to-b from-navy/8 via-secondary/40 to-background overflow-hidden">
        {/* Background wave texture — more visible */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.06]" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <path d="M0,200 C200,300 400,100 600,200 C800,300 1000,100 1200,200 C1320,260 1400,240 1440,200" stroke="hsl(var(--navy))" strokeWidth="4" fill="none" />
          <path d="M0,300 C200,400 400,200 600,300 C800,400 1000,200 1200,300 C1320,360 1400,340 1440,300" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
          <path d="M0,400 C200,500 400,300 600,400 C800,500 1000,300 1200,400" stroke="hsl(var(--steel))" strokeWidth="2" fill="none" />
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
                className={`bg-card/80 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift border border-navy/12 animate-fade-up-delay-${Math.min(i + 1, 3)}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy/20 to-steel/15 shadow-md flex items-center justify-center mx-auto mb-4">
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
        <div className="absolute top-20 left-0 w-96 h-96 bg-steel/8 rounded-full blur-3xl -z-10" />
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
        <svg className="absolute top-0 w-full opacity-15 rotate-180" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C120,15 240,0 360,25 C480,50 540,70 660,45 C780,20 840,0 960,25 C1080,50 1140,70 1260,45 C1340,30 1400,15 1440,22 L1440,100 L0,100Z" fill="hsl(var(--foam))" />
          {/* Curl detail */}
          <path d="M300,28 C320,15 350,8 375,18 C390,24 395,38 388,48" stroke="hsl(var(--foam))" strokeWidth="1.5" fill="none" opacity="0.5" />
        </svg>
        <svg className="absolute bottom-0 w-full opacity-15" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C120,15 240,0 360,25 C480,50 540,70 660,45 C780,20 840,0 960,25 C1080,50 1140,70 1260,45 C1340,30 1400,15 1440,22 L1440,100 L0,100Z" fill="hsl(var(--foam))" />
        </svg>
        <div className="container mx-auto px-4 text-center relative">
          <Waves className="mx-auto mb-4 text-navy-foreground/30" size={40} />
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
