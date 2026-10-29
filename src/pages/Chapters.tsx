import IndiaMap from "@/components/IndiaMap";
import { MapPin, Mail, Users, School } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import KanagawaWave from "@/components/KanagawaWave";
import { partnerSchools } from "@/data/schools";

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
        <div className="absolute inset-0 bg-gradient-to-b from-ice via-mist/70 to-white -z-10" />
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Chapters
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Lehrein grows through student-led chapters at institutions across India. Find one near you or start your own.
          </p>
        </div>
      </section>

      <KanagawaWave />

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
      <section className="py-20 bg-white">
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

      <WaveDivider flip />

      {/* Partner Schools */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mx-auto mb-4">
              <School size={24} className="text-navy" />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">
              Our School Community
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Schools that are part of the Lehrein community
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerSchools.map((school, i) => (
              <div
                key={school.name}
                className="relative overflow-hidden bg-white rounded-2xl p-6 pt-7 border border-navy/10 shadow-md"
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 ${["bg-sky", "bg-ocean", "bg-cobalt"][i % 3]}`} />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{school.name}</h3>
                <p className="flex items-start gap-1.5 text-sm text-muted-foreground">
                  <MapPin size={14} className="text-primary mt-0.5 flex-shrink-0" /> {school.location}
                </p>
                {school.details && (
                  <span className="inline-block mt-3 px-3 py-1 rounded-md bg-ocean/10 text-ocean text-xs font-semibold">
                    {school.details}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider />
    </div>
  );
};

export default Chapters;
