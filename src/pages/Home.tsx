import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import WaveDivider from "@/components/WaveDivider";
import KanagawaWave from "@/components/KanagawaWave";

const impactStats = [
  { value: "250+", label: "Students reached" },
  { value: "15", label: "Cities engaged" },
  { value: "12", label: "Modules seeded" },
  { value: "2", label: "Monthly trainings" },
];

const solutionFeatures = [
  {
    title: "Digital platform",
    description:
      "lehreinindia.com hosts the curriculum library, blog, forum, and chapter resources so every lead can pull from the same structured materials.",
  },
  {
    title: "Chapter labs",
    description:
      "Monthly trainings led by Vanya and the national leadership team focus on facilitation skills, ethical practice, and the next module theme.",
  },
  {
    title: "Pre-designed modules",
    description:
      "Ready-to-run sessions like Music & Emotional Regulation and Cognitive Biases in Social Media come with objectives, materials, prompts, and ethical reminders.",
  },
  {
    title: "Community rituals",
    description:
      "A curated blog, discussion forum, and an annual virtual summit keep chapter heads, members, and mentors learning together across cities.",
  },
];

const whoWeServe = [
  {
    title: "Curious high schoolers",
    description:
      "Grades 9–12 who want psychology to be experiential, interdisciplinary, and more than rote memorization.",
  },
  {
    title: "Tier 2/3 students",
    description:
      "Learners in cities where AP/IB Psychology or club culture is rare yet curiosity about behavior is growing.",
  },
  {
    title: "Interdisciplinary explorers",
    description:
      "Students blending behavioral science with design, public policy, media, or economics instead of just clinical psych.",
  },
];

const interdisciplinaryFocus = [
  {
    label: "Psych + Music",
    description:
      "How does sound shift emotional regulation? What role does rhythm and melody play in memory and identity?",
  },
  {
    label: "Psych + Film",
    description:
      "Analyze how filmmakers manipulate perception and what narrative structures reveal about cognition and social influence.",
  },
  {
    label: "Psych + Economics",
    description:
      "Spot cognitive biases shaping consumer decisions and public health nudges in everyday life.",
  },
  {
    label: "Psych + Design",
    description:
      "Decode how interfaces grab attention, exploit habits, and invite ethical reflection on attention economy.",
  },
  {
    label: "Psych + Literature",
    description:
      "Use character arcs and fiction to study archetypes, empathy, and perspective-taking in action.",
  },
];

const impactStatsCards = impactStats.map((stat) => (
  <div key={stat.label} className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-navy/10">
    <div className="text-3xl font-display font-bold text-foreground mb-1">{stat.value}</div>
    <div className="text-sm text-muted-foreground">{stat.label}</div>
  </div>
));

const Home = () => (
  <div className="overflow-hidden bg-white">
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-white" />
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex px-5 py-2 rounded-full bg-navy/10 text-navy text-sm font-semibold tracking-wide border border-navy/15 mx-auto">
          Student-led Psychology, Reimagined
        </div>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
          Building a national chapter network that makes psychology accessible, interdisciplinary, and experiential for Indian high schoolers.
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed">
          Chapters deliver psychology through music, film, economics, public health, and design with ready-to-run modules and shared facilitation support.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/join"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-navy text-navy-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Join the Movement <ArrowRight size={18} />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-navy/20 text-foreground font-semibold hover:bg-navy/5 transition-all"
          >
            Learn About Lehrein
          </Link>
        </div>
      </div>
      <div className="mt-8 w-full">
        <KanagawaWave />
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-5xl space-y-8 text-center">
        <div className="space-y-3">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Mission Statement
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Lehrein is a student-led organization that makes psychology education accessible, interdisciplinary, and experiential for high school students across India. Through a chapter-based model, we equip student leaders with structured modules that explore psychology’s overlap with music, literature, film, behavioral economics, public health, and design.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">{impactStatsCards}</div>
      </div>
    </section>

    <section className="py-20 bg-[#f8f8fb]">
      <div className="container mx-auto px-4 max-w-6xl grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-3xl p-8 border border-navy/10 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Heart size={20} className="text-navy" />
            <h3 className="font-display text-2xl font-semibold text-foreground">The Problem We're Solving</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Psychology in India is often reduced to board exams or “pre-med” prep. Tier 2 students rarely experience experiential programming, interdisciplinary exploration, or mentorship. There is no national platform for high schoolers fascinated by behavioral science to connect, learn, and lead.
          </p>
        </div>
        <div className="bg-white rounded-3xl p-8 border border-navy/10 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles size={20} className="text-primary" />
            <h3 className="font-display text-2xl font-semibold text-foreground">Our Solution</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A decentralized network of chapters supported by a digital platform, monthly trainings, pre-designed modules, a curated blog, and an annual virtual summit. Student leaders get curriculum, facilitation coaching, ethical guardrails, and a community that helps them translate psychology into the world around them.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl space-y-10">
        <div className="space-y-3 text-center">
          <h3 className="font-display text-3xl font-bold text-foreground">How Lehrein Supports Chapters</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every chapter pulls from the same resources: curated curriculum, facilitation playbooks, and a community forum where ideas are shared and questions are answered.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {solutionFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-navy/10 bg-card/80 p-6 text-sm text-muted-foreground shadow-sm"
            >
              <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-[#f8f8fb]">
      <div className="container mx-auto px-4 max-w-6xl space-y-10">
        <div className="space-y-3 text-center">
          <h3 className="font-display text-3xl font-bold text-foreground">Who We Serve</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Psychology as a lens for understanding identity, decision-making, and systems — not a subject reserved for exam prep. We show students how to apply those frameworks to music, film, policy, and everyday life.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {whoWeServe.map((pillar) => (
            <div key={pillar.title} className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm">
              <h4 className="font-display text-xl font-semibold text-foreground mb-2">{pillar.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl space-y-8">
        <div className="space-y-3 text-center">
          <h3 className="font-display text-3xl font-bold text-foreground">Interdisciplinary Framing</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We help students use psychological frameworks to decode the media, art, policy, design, and systems that shape their lives.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {interdisciplinaryFocus.map((block) => (
            <div key={block.label} className="rounded-3xl border border-navy/10 bg-card/80 p-6 shadow-sm">
              <h4 className="font-display text-xl font-semibold text-foreground mb-2">{block.label}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
        <div>
          <h3 className="font-display text-3xl font-bold text-foreground">Ready to Build a Chapter?</h3>
          <p className="text-muted-foreground leading-relaxed">
            Start a Lehrein chapter, contribute to the blog, or join one of our monthly trainings. Together we can help every student see psychology as a lens, not a textbook.
          </p>
        </div>
        <Link
          to="/join"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-navy text-navy-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Apply for a Chapter <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </div>
);

export default Home;
