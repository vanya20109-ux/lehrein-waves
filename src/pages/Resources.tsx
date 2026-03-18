import { BookOpen, FileText } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import { modules } from "@/data/modules";

const Resources = () => (
  <div className="overflow-hidden">
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-white -z-10" />
      <div className="container mx-auto px-4 text-center animate-fade-up">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
          Resources
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Every chapter accesses the same six core modules—music, tests, economics, cognitive bias, film, and art therapy—each bundled with materials, facilitation tips, and reflection prompts.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center">
            <BookOpen size={20} className="text-navy" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground">Module Library</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {modules.map((mod) => (
            <article
              key={mod.number}
              className="group rounded-[32px] border border-navy/10 bg-white/80 p-6 shadow-lg transition-shadow hover:shadow-2xl"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span>Module {mod.number}</span>
                <span className="text-[0.65rem]">
                  {mod.duration} · {mod.audience}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mt-4 mb-2">{mod.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{mod.shortDesc}</p>
              <div className="flex flex-wrap gap-2">
                {mod.objectives.slice(0, 3).map((obj) => (
                  <span
                    key={obj}
                    className="rounded-full border border-navy/20 px-3 py-1 text-xs text-navy-foreground bg-navy/5"
                  >
                    {obj}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                {mod.fullDesc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default Resources;
