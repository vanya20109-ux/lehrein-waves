import { Link } from "react-router-dom";
import { ArrowRight, Waves } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import KanagawaWave from "@/components/KanagawaWave";
import { modules } from "@/data/modules";

const Modules = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/10 via-steel/8 to-background" />
          {/* Kanagawa wave background */}
          <svg className="absolute bottom-0 w-full h-[50%]" viewBox="0 0 1440 300" preserveAspectRatio="none">
            <path d="M0,180 C160,130 280,100 400,140 C520,180 580,210 700,180 C820,150 880,110 1000,150 C1120,190 1200,210 1320,180 C1380,165 1420,150 1440,155 L1440,300 L0,300Z" fill="hsl(var(--navy))" opacity="0.1" />
            <path d="M0,220 C120,190 240,170 360,195 C480,220 540,240 660,220 C780,200 840,175 960,200 C1080,225 1160,240 1280,220 C1360,208 1420,195 1440,200 L1440,300 L0,300Z" fill="hsl(var(--primary))" opacity="0.08" />
            {/* Foam */}
            <path d="M350,142 C375,130 400,125 425,130 C440,134 450,142 455,148" stroke="hsl(var(--foam))" strokeWidth="2" fill="none" opacity="0.35" />
            <path d="M950,152 C975,140 1000,135 1025,140" stroke="hsl(var(--foam))" strokeWidth="1.5" fill="none" opacity="0.3" />
          </svg>
          <Waves className="absolute top-16 right-[12%] text-navy/12 animate-sway" size={56} />
          <Waves className="absolute top-32 left-[8%] text-steel/10 animate-wave-float" size={40} style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4 animate-fade-up">
            Our Modules
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up-delay-1">
            Ten evidence-based psychology modules designed to create lasting change — from classrooms to boardrooms.
          </p>
        </div>
      </section>

      <KanagawaWave />

      {/* Module grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((mod) =>
            <Link
              key={mod.number}
              to={`/modules/${mod.number}`}
              className="group relative bg-card/80 rounded-2xl border border-navy/10 overflow-hidden hover-lift">
              
                {/* Gradient top — deep ocean to foam */}
                <div className="h-2 bg-gradient-to-r from-navy via-primary to-steel/50" />

                {/* Background wave decoration */}
                <svg className="absolute bottom-0 right-0 w-40 h-40 opacity-[0.05]" viewBox="0 0 200 200">
                  <path d="M50,80 C80,60 110,50 140,65 C160,75 170,90 175,100 C180,110 175,120 165,125 C155,130 140,128 130,120 C120,112 115,100 100,95 C85,90 70,92 60,100" stroke="hsl(var(--navy))" strokeWidth="3" fill="none" />
                  <path d="M0,120 C40,140 80,100 120,120 C160,140 200,100 200,120 L200,200 L0,200Z" fill="hsl(var(--navy))" />
                </svg>

                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-navy/10 text-navy text-xs font-semibold tracking-wide border border-navy/10">
                      Module {mod.number}
                    </span>
                    <ArrowRight
                    size={18}
                    className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-navy transition-colors">
                    {mod.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-2 mb-4 bg-indigo-100 text-xs">
                    {mod.shortDesc}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{mod.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-navy/30" />
                    <span>{mod.audience}</span>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>);

};

export default Modules;