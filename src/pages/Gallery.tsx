import { Camera, ImageIcon } from "lucide-react";

const galleryImages = [
  { caption: "Shadow Puppetry Workshop at Heritage School", event: "First Lehrein Session", date: "Nov 2024" },
  { caption: "Students creating their puppet characters", event: "Module 1 — Shadow Puppetry", date: "Nov 2024" },
  { caption: "The shadow wall performance", event: "Heritage School", date: "Nov 2024" },
  { caption: "Group reflection after the session", event: "Heritage School", date: "Nov 2024" },
  { caption: "Facilitator training workshop", event: "Leadership Training", date: "Dec 2024" },
  { caption: "Community outreach session", event: "Community Chapter", date: "Jan 2025" },
];

const Gallery = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white -z-10" />
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Gallery
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Moments from Lehrein sessions at Heritage School and chapter events across India.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`group bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-navy/10 hover-lift animate-fade-up-delay-${Math.min(i + 1, 3)}`}
              >
                {/* Placeholder image area */}
                <div className="aspect-[4/3] bg-gradient-to-br from-navy/10 to-steel/10 flex items-center justify-center relative">
                  <div className="text-center">
                    <ImageIcon size={40} className="text-muted-foreground/40 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground/60">Photo coming soon</p>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
                      {img.event}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground mb-1">{img.caption}</p>
                  <p className="text-xs text-muted-foreground">{img.date}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Gallery;
