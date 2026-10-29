const galleryImages = [
  { caption: "Shadow Puppetry Workshop at Heritage School", event: "First Lehrein Session", date: "Nov 2024" },
  { caption: "Students creating their puppet characters", event: "Module 1: Shadow Puppetry", date: "Nov 2024" },
  { caption: "The shadow wall performance", event: "Heritage School", date: "Nov 2024" },
  { caption: "Group reflection after the session", event: "Heritage School", date: "Nov 2024" },
  { caption: "Facilitator training workshop", event: "Leadership Training", date: "Dec 2024" },
  { caption: "Community outreach session", event: "Community Chapter", date: "Jan 2025" },
];

const shades = ["bg-sky", "bg-ocean", "bg-cobalt"];

const Gallery = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-mist via-ice to-white -z-10" />
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
                className="relative overflow-hidden bg-white rounded-2xl p-6 pt-7 border border-navy/10 shadow-md"
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 ${shades[i % shades.length]}`} />
                <span className="inline-block mb-3 px-3 py-1 rounded-md bg-ocean/10 text-ocean text-xs font-semibold">
                  {img.event}
                </span>
                <p className="text-base font-medium text-foreground mb-1">{img.caption}</p>
                <p className="text-sm text-muted-foreground">{img.date}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Gallery;
