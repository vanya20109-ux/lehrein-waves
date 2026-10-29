import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import WaveDivider from "@/components/WaveDivider";
import { modules } from "@/data/modules";

const shades = [
  { bar: "bg-sky", text: "text-sky", box: "bg-sky/10 border-sky" },
  { bar: "bg-ocean", text: "text-ocean", box: "bg-ocean/10 border-ocean" },
  { bar: "bg-cobalt", text: "text-cobalt", box: "bg-cobalt/10 border-cobalt" },
  { bar: "bg-azure", text: "text-azure", box: "bg-azure/10 border-azure" },
  { bar: "bg-steel", text: "text-steel", box: "bg-steel/10 border-steel" },
  { bar: "bg-primary", text: "text-primary", box: "bg-primary/10 border-primary" },
];

const Resources = () => (
  <div className="overflow-hidden">
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ice via-mist/60 to-white -z-10" />
      <div className="container mx-auto px-4 text-center animate-fade-up">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
          Resources
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Every chapter accesses the same six core modules (music, tests, economics, cognitive bias, film, and art therapy), each bundled with materials, facilitation tips, and reflection prompts.
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
          {modules.map((mod, i) => {
            const shade = shades[i % shades.length];
            return (
            <article
              key={mod.number}
              className="relative overflow-hidden rounded-[32px] border border-navy/10 bg-white p-6 pt-8 shadow-lg flex flex-col"
            >
              <div className={`absolute inset-x-0 top-0 h-2 ${shade.bar}`} />
              <div className={`flex items-center justify-between text-xs uppercase tracking-[0.2em] font-semibold ${shade.text}`}>
                <span>Module {mod.number}</span>
                <span className="text-[0.65rem]">
                  {mod.duration} · {mod.audience}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mt-4 mb-2">{mod.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{mod.shortDesc}</p>
              <ul className="space-y-2">
                {mod.objectives.slice(0, 3).map((obj) => (
                  <li
                    key={obj}
                    className={`rounded-md border-l-4 px-3 py-2 text-sm text-foreground ${shade.box}`}
                  >
                    {obj}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed flex-1">
                {mod.fullDesc}
              </p>
              <Link
                to={`/modules/${mod.number}`}
                className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${shade.text} hover:underline`}
              >
                View full module <ArrowRight size={14} />
              </Link>
            </article>
            );
          })}
        </div>
      </div>
    </section>

  </div>
);

export default Resources;
