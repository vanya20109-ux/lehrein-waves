import { Link } from "react-router-dom";
import { ArrowRight, Waves } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import { modules } from "@/data/modules";

const Modules = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-accent/10 to-background" />
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path d="M0,120 C360,200 720,40 1080,120 C1260,160 1380,140 1440,120 L1440,200 L0,200Z" fill="hsl(var(--primary) / 0.12)" />
            <path d="M0,160 C240,200 480,120 720,160 C960,200 1200,120 1440,160 L1440,200 L0,200Z" fill="hsl(var(--accent) / 0.08)" />
          </svg>
          <Waves className="absolute top-16 right-[12%] text-accent/20 animate-wave-float" size={56} />
          <Waves className="absolute top-32 left-[8%] text-primary/15 animate-wave-float" size={40} style={{ animationDelay: "2s" }} />
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

      <WaveDivider />

      {/* Module grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((mod, i) => (
              <Link
                key={mod.number}
                to={`/modules/${mod.number}`}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover-lift"
              >
                {/* Gradient top bar */}
                <div className="h-2 bg-gradient-to-r from-primary via-accent/60 to-primary/30" />

                {/* Decorative wave in background */}
                <svg className="absolute bottom-0 right-0 w-32 h-32 opacity-[0.06]" viewBox="0 0 200 200">
                  <path d="M0,100 C50,150 100,50 150,100 C175,125 190,110 200,100 L200,200 L0,200Z" fill="hsl(var(--accent))" />
                </svg>

                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold tracking-wide">
                      Module {mod.number}
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all"
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-teal-deep transition-colors">
                    {mod.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                    {mod.shortDesc}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{mod.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                    <span>{mod.audience}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modules;
