import { Heart, Globe, Users, BookOpen, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import WaveDivider from "@/components/WaveDivider";
import KanagawaWave from "@/components/KanagawaWave";

const impactStats = [
  { value: "500+", label: "Students Reached", icon: Users },
  { value: "12", label: "Modules Designed", icon: BookOpen },
  { value: "5+", label: "Cities Active", icon: Globe },
  { value: "15+", label: "Sessions Delivered", icon: Heart },
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-foam via-secondary/30 to-background" />
          <svg className="absolute bottom-0 w-full h-[55%]" viewBox="0 0 1440 600" preserveAspectRatio="none">
            <path d="M0,300 C120,240 200,180 360,230 C520,280 580,340 720,290 C860,240 920,180 1080,240 C1200,285 1320,330 1440,280 L1440,600 L0,600Z" fill="hsl(var(--navy))" opacity="0.18" />
            <path d="M-100,370 C0,300 80,230 200,270 C320,310 380,360 500,320 C620,280 680,220 800,270 C920,320 980,370 1100,330 C1220,290 1300,240 1440,300 L1440,600 L-100,600Z" fill="hsl(var(--primary))" opacity="0.14" />
            <path d="M0,420 C80,385 160,350 280,375 C400,400 440,425 560,408 C680,390 740,360 860,382 C980,405 1040,425 1160,408 C1280,390 1360,365 1440,385 L1440,600 L0,600Z" fill="hsl(var(--indigo))" opacity="0.10" />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center animate-fade-up relative z-10">
          <div className="inline-block px-5 py-2 rounded-full bg-navy/10 text-navy text-sm font-semibold tracking-wide mb-6 border border-navy/15">
            The Psychology Association
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
            Lehrein
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Waves of change in mental health & wellness — reaching every corner of India through psychology-driven programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/join"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-navy text-navy-foreground font-semibold shadow-lg hover:shadow-xl hover:bg-navy/90 transition-all"
            >
              Join the Movement <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-navy/20 text-foreground font-semibold hover:bg-navy/5 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <KanagawaWave />

      {/* Mission & Vision */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-steel/8 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center">
                  <Sparkles size={20} className="text-navy" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To democratize psychology education by delivering evidence-based, culturally rooted mental health programs to schools, colleges, corporates, and communities across India — making emotional well-being accessible to all.
              </p>
            </div>
            <div className="animate-fade-up-delay-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe size={20} className="text-primary" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                A world where every individual — regardless of geography, socioeconomic status, or background — has access to tools for emotional resilience, self-awareness, and mental wellness. Lehrein envisions a national network of student-led chapters making this vision real.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-b from-navy/5 via-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Our Impact So Far
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto">
            Numbers that grow with every wave we create
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {impactStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`bg-card/80 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift border border-navy/10 animate-fade-up-delay-${Math.min(i + 1, 3)}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy/15 to-steel/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon size={22} className="text-navy" />
                </div>
                <div className="font-display text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip />

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-indigo to-navy -z-10" />
        <svg className="absolute top-0 w-full opacity-15 rotate-180" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C120,15 240,0 360,25 C480,50 540,70 660,45 C780,20 840,0 960,25 C1080,50 1140,70 1260,45 C1340,30 1400,15 1440,22 L1440,100 L0,100Z" fill="hsl(var(--foam))" />
        </svg>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-foreground mb-4">
            Ready to Make Waves?
          </h2>
          <p className="text-navy-foreground/70 max-w-md mx-auto mb-8">
            Start a chapter at your institution or join an existing one. Together, we can reach every community.
          </p>
          <Link to="/join">
            <button className="px-8 py-3 rounded-xl bg-foam text-foam-foreground font-semibold shadow-lg hover:shadow-xl hover:bg-foam/90 transition-all">
              Get Involved
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
