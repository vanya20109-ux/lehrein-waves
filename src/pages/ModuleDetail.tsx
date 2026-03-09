import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, ChevronRight, Waves, MapPin, Clipboard, Package, ListOrdered, Sparkles, Target, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { modules } from "@/data/modules";
import WaveDivider from "@/components/WaveDivider";
import KanagawaWave from "@/components/KanagawaWave";

const ImageFrame = ({ label }: { label: string }) => (
  <div className="rounded-2xl border-2 border-navy/20 bg-gradient-to-br from-navy/5 via-steel/5 to-primary/5 aspect-[4/3] flex flex-col items-center justify-center gap-3 group hover:border-navy/40 transition-colors">
    <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center">
      <ImageIcon size={24} className="text-navy/40" />
    </div>
    <p className="text-sm text-muted-foreground font-medium">{label}</p>
    <p className="text-xs text-muted-foreground/60">Image coming soon</p>
  </div>
);

const SectionHeading = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy/15 to-primary/10 flex items-center justify-center border border-navy/10">
      <Icon size={20} className="text-navy" />
    </div>
    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{title}</h3>
  </div>
);

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
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-navy/12 via-steel/8 to-background" />
          <svg className="absolute bottom-0 w-full opacity-40" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path d="M0,100 C200,60 360,40 500,80 C640,120 720,140 860,110 C1000,80 1100,50 1240,90 C1340,115 1400,130 1440,120 L1440,200 L0,200Z" fill="hsl(var(--navy))" opacity="0.15" />
            <path d="M0,140 C160,120 320,100 480,125 C640,150 760,160 920,140 C1080,120 1200,105 1360,130 L1440,135 L1440,200 L0,200Z" fill="hsl(var(--primary))" opacity="0.08" />
            <path d="M440,82 C465,68 490,62 515,70 C530,75 540,84 545,90" stroke="hsl(var(--foam))" strokeWidth="2" fill="none" opacity="0.4" />
          </svg>
          <Waves className="absolute top-12 right-[15%] text-navy/12 animate-sway" size={48} />
          <Waves className="absolute bottom-20 left-[10%] text-steel/10 animate-wave-float" size={36} style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4">
          <Link to="/modules" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Modules</span>
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy/10 text-navy text-sm font-semibold tracking-wide mb-4 border border-navy/10">
              Module {mod.number}
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              {mod.name}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {mod.shortDesc}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-navy/10">
                <Clock size={16} className="text-accent" />
                <span className="text-sm font-medium text-foreground">{mod.duration}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-navy/10">
                <Users size={16} className="text-accent" />
                <span className="text-sm font-medium text-foreground">{mod.audience}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <KanagawaWave />

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl space-y-16">

          {/* About */}
          <div>
            <SectionHeading icon={Sparkles} title="About This Module" />
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              {mod.fullDesc}
            </p>
            {/* Image frame */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ImageFrame label="Module overview" />
              <ImageFrame label="Session in action" />
            </div>
          </div>

          {/* Origin */}
          {mod.origin && (
            <div>
              <SectionHeading icon={MapPin} title="Origin" />
              <div className="rounded-2xl bg-gradient-to-br from-navy/8 to-steel/5 border border-navy/10 p-6 md:p-8">
                <p className="text-muted-foreground leading-relaxed text-lg">{mod.origin}</p>
              </div>
              <div className="mt-4">
                <ImageFrame label="Cultural origin & history" />
              </div>
            </div>
          )}

          {/* Facilitator Preparation */}
          {mod.facilitatorPrep && mod.facilitatorPrep.length > 0 && (
            <div>
              <SectionHeading icon={Clipboard} title="Facilitator Preparation" />
              <div className="space-y-3">
                {mod.facilitatorPrep.map((step, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-navy/6 to-steel/4 border border-navy/8">
                    <div className="w-7 h-7 rounded-full bg-navy/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-navy font-bold text-xs">{i + 1}</span>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <ImageFrame label="Facilitator setup reference" />
              </div>
            </div>
          )}

          {/* Materials Needed */}
          {mod.materialsNeeded && mod.materialsNeeded.length > 0 && (
            <div>
              <SectionHeading icon={Package} title="Materials Needed" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {mod.materialsNeeded.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-navy/6 to-transparent border border-navy/8">
                    <div className="w-2 h-2 rounded-full bg-navy/40 flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ImageFrame label="Materials overview" />
                <ImageFrame label="Setup example" />
              </div>
            </div>
          )}

          {/* Session Structure */}
          {mod.sessionStructure && mod.sessionStructure.length > 0 && (
            <div>
              <SectionHeading icon={ListOrdered} title="Session Structure" />
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[18px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-navy/20 via-primary/15 to-navy/20" />
                <div className="space-y-4">
                  {mod.sessionStructure.map((step, i) => {
                    const [title, ...descParts] = step.split(" — ");
                    const desc = descParts.join(" — ");
                    return (
                      <div key={i} className="flex items-start gap-4 relative">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-navy/20 to-primary/15 flex items-center justify-center flex-shrink-0 z-10 border-2 border-background">
                          <span className="text-navy font-bold text-xs">{i + 1}</span>
                        </div>
                        <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-navy/6 to-steel/4 border border-navy/8">
                          <p className="font-semibold text-foreground text-sm">{title}</p>
                          {desc && <p className="text-muted-foreground text-sm mt-1">{desc}</p>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-4">
                <ImageFrame label="Session flow visual" />
              </div>
            </div>
          )}

          {/* What Children Produce */}
          {mod.whatChildrenProduce && (
            <div>
              <SectionHeading icon={Sparkles} title="What Children Produce" />
              <div className="rounded-2xl bg-gradient-to-br from-navy/8 to-primary/5 border border-navy/10 p-6 md:p-8">
                <p className="text-muted-foreground leading-relaxed text-lg">{mod.whatChildrenProduce}</p>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ImageFrame label="Student work example 1" />
                <ImageFrame label="Student work example 2" />
                <ImageFrame label="Student work example 3" />
              </div>
            </div>
          )}

          {/* Expected Outcomes */}
          {mod.expectedOutcomes && mod.expectedOutcomes.length > 0 && (
            <div>
              <SectionHeading icon={Target} title="Expected Outcomes" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mod.expectedOutcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-navy/8 to-steel/5 border border-navy/10">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Learning Objectives */}
          <div>
            <SectionHeading icon={Target} title="Learning Objectives" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mod.objectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-navy/8 to-steel/5 border border-navy/10">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">{obj}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-indigo to-navy" />
            <svg className="absolute bottom-0 w-full opacity-15" viewBox="0 0 1440 80" preserveAspectRatio="none">
              <path d="M0,40 C120,10 240,0 360,20 C480,40 540,60 660,40 C780,20 840,0 960,20 C1080,40 1140,60 1260,40 L1440,30 L1440,80 L0,80Z" fill="hsl(var(--foam))" />
            </svg>
            <div className="relative p-8 md:p-12 text-center">
              <h3 className="font-display text-2xl font-bold text-navy-foreground mb-3">
                Interested in this module?
              </h3>
              <p className="text-navy-foreground/70 mb-6 max-w-md mx-auto">
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
      <section className="py-12 bg-navy/5">
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
