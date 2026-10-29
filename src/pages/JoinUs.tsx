import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ClipboardList, ArrowRight, CheckCircle2, School, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaveDivider from "@/components/WaveDivider";
import { partnerSchools } from "@/data/schools";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/data/contact";

const schoolShades = ["bg-sky", "bg-ocean", "bg-cobalt"];

const contactDetails = [
  { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: Phone, label: "Phone", value: CONTACT_PHONE, href: CONTACT_PHONE_HREF },
  { icon: MapPin, label: "Location", value: "New Delhi, India" },
];

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary";

const JoinUs = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const organization = String(data.get("organization") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = `Lehrein enquiry from ${name}`;
    const body = `${message}\n\n${name}${organization ? `\n${organization}` : ""}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-azure/15 via-ice to-white -z-10" />
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Join Us & Contact
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Launch a Lehrein chapter and plug into our digital platform, monthly trainings, and interdisciplinary modules, or simply reach out with a question. We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Two paths */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card/80 backdrop-blur-sm rounded-[36px] p-10 border border-navy/10 shadow-xl animate-fade-up">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center">
                  <ClipboardList size={28} className="text-navy" />
                </div>
                <div>
                  <h2 className="font-display text-3xl font-bold text-foreground">Start a Chapter</h2>
                  <p className="text-sm text-muted-foreground">
                    Apply to launch a Lehrein chapter at your college, school, or community organization. We provide the curriculum, trainings, and facilitation support you need to run psychology modules with confidence.
                  </p>
                </div>
              </div>
              <ul className="grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  Access to all Lehrein modules and facilitation guides
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  Training and onboarding for chapter leads
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  National network of student psychologists sharing reflections
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  Monthly virtual labs that coach facilitation, ethics, and storytelling
                </li>
              </ul>
              <div className="flex justify-end">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-navy text-navy-foreground font-semibold shadow-lg hover:shadow-xl hover:bg-navy/90 transition-all"
                >
                  Get in Touch <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schools in our community */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center mx-auto mb-4">
              <School size={24} className="text-ocean" />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">
              Schools Already With Us
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join these schools in the Lehrein community
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerSchools.map((school, i) => (
              <div
                key={school.name}
                className="relative overflow-hidden bg-white rounded-2xl p-6 pt-7 border border-navy/10 shadow-md"
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 ${schoolShades[i % schoolShades.length]}`} />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{school.name}</h3>
                <p className="flex items-start gap-1.5 text-sm text-muted-foreground">
                  <MapPin size={14} className="text-ocean mt-0.5 flex-shrink-0" /> {school.location}
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

      {/* Contact */}
      <section id="contact" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">Contact Us</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Want to start a chapter, have questions, or want to collaborate? We'd love to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card/80 rounded-2xl p-8 border border-navy/10 space-y-4 shadow-sm">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input name="name" required className={inputClass} placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Organization</label>
                  <input name="organization" className={inputClass} placeholder="Your school, college, or organization" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea name="message" rows={5} required className={`${inputClass} resize-none`} placeholder="How can we help?" />
                </div>
                <Button variant="coral" type="submit" size="lg" className="rounded-xl w-full">
                  Send Message
                </Button>
                <p className="text-xs text-muted-foreground text-center">This opens your email app with your message ready to send.</p>
              </form>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  {contactDetails.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy/15 to-steel/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-navy" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-ocean hover:underline break-all">{item.value}</a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-card/80 shadow-sm">
                <iframe
                  title="New Delhi, India map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.1190%2C28.5345%2C77.2340%2C28.6354&amp;layer=mapnik"
                  className="h-56 w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="px-4 pb-3 pt-2 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">New Delhi, India</p>
                  <a
                    href="https://www.openstreetmap.org/#map=13/28.5850/77.1765"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-primary underline"
                  >
                    View on OpenStreetMap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
