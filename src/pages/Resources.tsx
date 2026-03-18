import { useState } from "react";
import { BookOpen, FileText, Lock, ExternalLink, BookMarked } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import { modules } from "@/data/modules";
import { Link } from "react-router-dom";

const readingList = [
  { title: "The Body Keeps the Score", author: "Bessel van der Kolk", desc: "How trauma reshapes body and mind." },
  { title: "Man's Search for Meaning", author: "Viktor Frankl", desc: "Finding purpose through suffering." },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", desc: "Two systems that drive how we think." },
  { title: "Lost Connections", author: "Johann Hari", desc: "Real causes of depression and unexpected solutions." },
  { title: "The Gifts of Imperfection", author: "Brené Brown", desc: "Letting go of who you think you should be." },
];

const guides = [
  { title: "Session Facilitation 101", desc: "Step-by-step guide for running your first Lehrein session.", locked: true },
  { title: "Creating Safe Spaces", desc: "How to establish psychological safety in group settings.", locked: true },
  { title: "Debrief & Reflection Guide", desc: "Post-session processing techniques for facilitators.", locked: true },
  { title: "Cultural Sensitivity Handbook", desc: "Navigating diverse backgrounds in mental health work.", locked: false },
];

const Resources = () => {
  const [accessCode, setAccessCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = () => {
    if (accessCode.toLowerCase() === "lehrein2024") {
      setUnlocked(true);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-foam/60 via-background to-background -z-10" />
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Resources
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Module library, facilitation guides, and curated reading lists for chapter heads and facilitators.
          </p>
        </div>
      </section>

      {/* Module Library */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center">
              <BookOpen size={20} className="text-navy" />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground">Module Library</h2>
          </div>

          {!unlocked && (
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-navy/10 mb-8 text-center">
              <Lock size={32} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Chapter Heads Access</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Full module details are password-protected for registered chapter heads. Enter your access code to unlock.
              </p>
              <div className="flex gap-3 max-w-sm mx-auto">
                <input
                  type="password"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder="Enter access code"
                  className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
                />
                <button
                  onClick={handleUnlock}
                  className="px-6 py-2.5 rounded-xl bg-navy text-navy-foreground font-semibold text-sm hover:bg-navy/90 transition-colors"
                >
                  Unlock
                </button>
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.slice(0, 9).map((mod, i) => (
              <Link
                key={mod.number}
                to={unlocked ? `/modules/${mod.number}` : "#"}
                className={`bg-card/80 backdrop-blur-sm rounded-2xl p-5 border border-navy/10 hover-lift animate-fade-up-delay-${Math.min(i + 1, 3)} ${!unlocked ? "opacity-70 pointer-events-none" : ""}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center text-sm font-bold text-navy">
                    {mod.number}
                  </span>
                  <span className="text-xs text-muted-foreground">{mod.duration} · {mod.audience}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{mod.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{mod.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Facilitation Guides */}
      <section className="py-20 bg-gradient-to-b from-navy/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText size={20} className="text-primary" />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground">Facilitation Guides</h2>
          </div>
          <div className="space-y-4">
            {guides.map((guide, i) => (
              <div
                key={guide.title}
                className={`flex items-center justify-between bg-card/80 backdrop-blur-sm rounded-2xl p-5 border border-navy/10 animate-fade-up-delay-${Math.min(i + 1, 3)}`}
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
                    {guide.title}
                    {guide.locked && !unlocked && <Lock size={14} className="text-muted-foreground" />}
                  </h3>
                  <p className="text-sm text-muted-foreground">{guide.desc}</p>
                </div>
                {(!guide.locked || unlocked) && (
                  <button className="px-4 py-2 rounded-lg bg-navy/10 text-navy text-sm font-medium hover:bg-navy/15 transition-colors flex items-center gap-1.5 shrink-0">
                    <ExternalLink size={14} /> View
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip />

      {/* Reading List */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-steel/15 flex items-center justify-center">
              <BookMarked size={20} className="text-steel" />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground">Recommended Reading</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {readingList.map((book, i) => (
              <div
                key={book.title}
                className={`bg-card/80 backdrop-blur-sm rounded-2xl p-5 border border-navy/10 hover-lift animate-fade-up-delay-${Math.min(i + 1, 3)}`}
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-0.5">{book.title}</h3>
                <p className="text-sm text-primary font-medium mb-2">by {book.author}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{book.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
