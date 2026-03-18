import IndiaMap from "@/components/IndiaMap";
import { MapPin, Mail, Users } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";

const chapters = [
  { city: "New Delhi", institution: "Heritage School", lead: "Vanya", email: "delhi@lehrein.org", active: true },
  { city: "Mumbai", institution: "Coming Soon", lead: "TBD", email: "mumbai@lehrein.org", active: false },
  { city: "Bangalore", institution: "Coming Soon", lead: "TBD", email: "bangalore@lehrein.org", active: false },
  { city: "Kolkata", institution: "Coming Soon", lead: "TBD", email: "kolkata@lehrein.org", active: false },
  { city: "Chennai", institution: "Coming Soon", lead: "TBD", email: "chennai@lehrein.org", active: false },
];

const Chapters = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-foam/60 via-background to-background -z-10" />
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Chapters
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Lehrein grows through student-led chapters at institutions across India. Find one near you or start your own.
          </p>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4 text-center">
            Where We're Active
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            Click on any state to see its program status
          </p>
          <IndiaMap />
        </div>
      </section>

      <WaveDivider />

      {/* Chapter List */}
      <section className="py-20 bg-gradient-to-b from-navy/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">
            Chapter Directory
          </h2>
          <div className="space-y-4">
            {chapters.map((ch, i) => (
              <div
                key={ch.city}
                className={`flex flex-col sm:flex-row sm:items-center justify-between bg-card/80 backdrop-blur-sm rounded-2xl p-5 border border-navy/10 hover-lift animate-fade-up-delay-${Math.min(i + 1, 3)}`}
              >
                <div className="flex items-start gap-4 mb-3 sm:mb-0">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${ch.active ? "bg-primary/15" : "bg-muted"}`}>
                    <MapPin size={18} className={ch.active ? "text-primary" : "text-muted-foreground"} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{ch.city}</h3>
                    <p className="text-sm text-muted-foreground">{ch.institution}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pl-14 sm:pl-0">
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Users size={14} /> {ch.lead}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Mail size={14} /> {ch.email}
                  </span>
                  {ch.active && (
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      Active
                    </span>
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

export default Chapters;
