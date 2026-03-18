import { Award, Users, Heart, BookOpen, Sparkles, Globe } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";

const teamMembers = [
  { name: "Team Member 1", role: "Chapter Lead — Delhi", bio: "Psychology student passionate about community mental health." },
  { name: "Team Member 2", role: "Chapter Lead — Mumbai", bio: "Advocate for accessible therapy and creative wellness." },
  { name: "Team Member 3", role: "Content & Research", bio: "Researcher focused on culturally rooted therapeutic techniques." },
];

const advisors = [
  { name: "Advisory Partner 1", role: "Clinical Psychologist", org: "To be announced" },
  { name: "Advisory Partner 2", role: "Education Policy Expert", org: "To be announced" },
];

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white -z-10" />
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            About Lehrein
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Lehrein is a student-led network bringing experiential psychology to high schoolers through chapters, a digital curriculum hub, and interdisciplinary programming across music, film, economics, design, and literature.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#f8f8fb]">
        <div className="container mx-auto px-4 max-w-6xl grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles size={20} className="text-primary" />
              <h2 className="font-display text-2xl font-semibold text-foreground">Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Equip student leaders with structured modules, facilitation playbooks, and a national platform so they can teach psychology through music, film, economics, public health, and design.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm mt-4">
              Chapters access lehreinindia.com for curriculum, blog articles, forum discussions, and shared resources that keep the national community connected.
            </p>
          </div>
          <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Globe size={20} className="text-navy" />
              <h2 className="font-display text-2xl font-semibold text-foreground">Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Build a validated network of 12–15 chapters across eight cities, supported by co-leads, partner endorsements, and documented impact for every student story.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm mt-4">
              We imagine a future where high schoolers publish psychology articles, host inter-school forums, and collaborate on an annual summit that showcases their work.
            </p>
          </div>
        </div>
      </section>

      {/* Vanya's Bio */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">
            <div className="animate-fade-up">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-navy/15 to-steel/10 flex items-center justify-center border border-navy/10">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-3">
                    <Heart size={32} className="text-navy" />
                  </div>
                  <p className="text-sm text-muted-foreground">Photo coming soon</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-up-delay-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-navy/10 text-navy text-sm font-semibold mb-4">
                Founder & National President
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Vanya
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Vanya is the founder and driving force behind Lehrein — The Psychology Association. As a student deeply committed to making mental health education accessible, she envisioned a movement that goes beyond awareness campaigns to deliver real, evidence-based psychology programs.
                </p>
                <p>
                  Under her leadership, Lehrein has designed culturally rooted modules — from shadow puppetry therapy inspired by Kerala's Tholpavakoothu tradition to community resilience workshops — and delivered them across schools and institutions.
                </p>
                <p>
                  Vanya's goal is to build a national network of student-led chapters, each empowered with professional-grade facilitation tools, so that psychology-driven wellness reaches every corner of India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* National Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mx-auto mb-4">
              <Users size={24} className="text-navy" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              National Leadership Team
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              The team building Lehrein's chapters and programs across India
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className={`bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-navy/10 hover-lift animate-fade-up-delay-${Math.min(i + 1, 3)}`}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy/15 to-steel/10 flex items-center justify-center mb-4">
                  <BookOpen size={22} className="text-navy" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip />

      {/* Advisory Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-14">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Award size={24} className="text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Advisory Partners
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Expert guidance shaping Lehrein's programs — updated as partnerships are secured
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {advisors.map((advisor, i) => (
              <div
                key={advisor.name}
                className={`bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-navy/10 hover-lift animate-fade-up-delay-${Math.min(i + 1, 3)}`}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">{advisor.name}</h3>
                <p className="text-sm text-primary font-medium mb-1">{advisor.role}</p>
                <p className="text-sm text-muted-foreground">{advisor.org}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-8 italic">
            More advisory partners will be added as collaborations are confirmed.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
