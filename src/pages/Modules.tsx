import { useState } from "react";
import { ChevronDown } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";

const modules = Array.from({ length: 10 }, (_, i) => ({
  number: i + 1,
  name: "Art Therapy",
  desc: "Explore the intersection of creative expression and psychological healing. This module uses art-based interventions to help participants process emotions, reduce stress, and build self-awareness through guided activities.",
}));

const Modules = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-primary/15 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-up">
            Our Modules
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up-delay-1">
            Ten evidence-based psychology modules designed to create lasting change — from classrooms to boardrooms.
          </p>
        </div>
      </section>

      <WaveDivider />

      {/* Module grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((mod) => (
              <div
                key={mod.number}
                className="bg-card rounded-2xl border border-border overflow-hidden hover-lift group"
              >
                {/* Wave decoration at top */}
                <div className="h-2 bg-gradient-to-r from-primary via-primary/60 to-primary/30" />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                      Module {mod.number}
                    </span>
                    <button
                      onClick={() => setExpanded(expanded === mod.number ? null : mod.number)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Toggle details"
                    >
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${expanded === mod.number ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {mod.name}
                  </h3>

                  {expanded === mod.number && (
                    <div className="animate-fade-up">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {mod.desc}
                      </p>
                      <button className="text-sm font-medium text-accent hover:underline">
                        Learn More →
                      </button>
                    </div>
                  )}

                  {expanded !== mod.number && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {mod.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modules;
