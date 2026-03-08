import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, ChevronRight, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { modules } from "@/data/modules";
import WaveDivider from "@/components/WaveDivider";

const ModuleDetail = () => {
  const { id } = useParams();
  const moduleNum = parseInt(id || "1", 10);
  const mod = modules.find((m) => m.number === moduleNum);

  if (!mod) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Module Not Found</h1>
          <Link to="/modules">
            <Button variant="coral" className="rounded-xl">Back to Modules</Button>
          </Link>
        </div>
      </div>
    );
  }

  const prevMod = modules.find((m) => m.number === moduleNum - 1);
  const nextMod = modules.find((m) => m.number === moduleNum + 1);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/15 to-background" />
          {/* Decorative waves */}
          <svg className="absolute bottom-0 w-full opacity-30" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path d="M0,100 C360,200 720,0 1080,100 C1260,150 1380,120 1440,100 L1440,200 L0,200Z" fill="hsl(var(--primary) / 0.3)" />
            <path d="M0,140 C240,180 480,100 720,140 C960,180 1200,100 1440,140 L1440,200 L0,200Z" fill="hsl(var(--accent) / 0.15)" />
          </svg>
          {/* Floating wave icons */}
          <Waves className="absolute top-12 right-[15%] text-primary/20 animate-wave-float" size={48} />
          <Waves className="absolute bottom-20 left-[10%] text-accent/20 animate-wave-float" size={36} style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4">
          <Link to="/modules" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Modules</span>
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold tracking-wide mb-4">
              Module {mod.number}
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              {mod.name}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {mod.shortDesc}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border">
                <Clock size={16} className="text-accent" />
                <span className="text-sm font-medium text-foreground">{mod.duration}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border">
                <Users size={16} className="text-accent" />
                <span className="text-sm font-medium text-foreground">{mod.audience}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            About This Module
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-12">
            {mod.fullDesc}
          </p>

          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">
            Learning Objectives
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {mod.objectives.map((obj, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20"
              >
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-foreground text-sm leading-relaxed">{obj}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-deep to-primary opacity-90" />
            <svg className="absolute bottom-0 w-full opacity-20" viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,60 1440,50 L1440,100 L0,100Z" fill="white" />
            </svg>
            <div className="relative p-8 md:p-12 text-center">
              <h3 className="font-display text-2xl font-bold text-teal-deep-foreground mb-3">
                Interested in this module?
              </h3>
              <p className="text-teal-deep-foreground/80 mb-6 max-w-md mx-auto">
                Get in touch to bring {mod.name} to your organization or community.
              </p>
              <Link to="/contact">
                <Button variant="coral" size="lg" className="rounded-xl shadow-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider flip />

      {/* Navigation between modules */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex justify-between items-center">
            {prevMod ? (
              <Link to={`/modules/${prevMod.number}`} className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="text-xs text-muted-foreground">Previous</p>
                  <p className="text-sm font-medium">Module {prevMod.number}</p>
                </div>
              </Link>
            ) : <div />}
            {nextMod ? (
              <Link to={`/modules/${nextMod.number}`} className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-right">
                <div>
                  <p className="text-xs text-muted-foreground">Next</p>
                  <p className="text-sm font-medium">Module {nextMod.number}</p>
                </div>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModuleDetail;
