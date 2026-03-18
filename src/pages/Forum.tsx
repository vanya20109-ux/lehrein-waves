import { MessageSquare, ExternalLink, Users, Hash } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";

const Forum = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white -z-10" />
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Community Forum
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Connect with chapter heads, facilitators, and students expanding Lehrein across cities. Use the forum to exchange module feedback, share interdisciplinary insights, and mentor new leads.
          </p>
        </div>
      </section>

      {/* Discord Embed / Coming Soon */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-10 border border-navy/10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-indigo/15 flex items-center justify-center mx-auto mb-6">
              <MessageSquare size={32} className="text-indigo" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Join Our Discord Community
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
              Our primary discussion space is on Discord. Join to connect with chapter heads, share resources, discuss modules, and collaborate on upcoming sessions.
            </p>
            <a
              href="https://discord.gg/lehrein"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-indigo text-indigo-foreground font-semibold shadow-lg hover:shadow-xl hover:bg-indigo/90 transition-all"
            >
              <ExternalLink size={18} /> Join Discord Server
            </a>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Channels Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
            Discussion Channels
          </h2>
          <div className="space-y-4">
            {[
              { name: "general", desc: "Open discussion for all members", members: "All Members" },
              { name: "chapter-heads", desc: "Private channel for chapter leads", members: "Chapter Leads" },
              { name: "module-feedback", desc: "Share feedback on Lehrein modules", members: "Facilitators" },
              { name: "resource-sharing", desc: "Share articles, papers, and books", members: "All Members" },
              { name: "events", desc: "Upcoming sessions, workshops, and meetups", members: "All Members" },
              { name: "introductions", desc: "Introduce yourself to the community", members: "All Members" },
            ].map((channel, i) => (
              <div
                key={channel.name}
                className={`flex items-center justify-between bg-card/80 backdrop-blur-sm rounded-2xl p-5 border border-navy/10 animate-fade-up-delay-${Math.min(i + 1, 3)}`}
              >
                <div className="flex items-center gap-3">
                  <Hash size={18} className="text-navy" />
                  <div>
                    <h3 className="font-semibold text-foreground">{channel.name}</h3>
                    <p className="text-sm text-muted-foreground">{channel.desc}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1.5 shrink-0">
                  <Users size={12} /> {channel.members}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forum;
