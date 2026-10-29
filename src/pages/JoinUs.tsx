import { ClipboardList, ArrowRight, CheckCircle2, School, MapPin } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import { partnerSchools } from "@/data/schools";

const schoolShades = ["bg-sky", "bg-ocean", "bg-cobalt"];

const JoinUs = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-azure/15 via-ice to-white -z-10" />
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Join Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Launch a Lehrein chapter and plug into our digital platform, monthly trainings, and interdisciplinary modules. Apply now and start running the national curriculum with support.
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
                  href="#chapter-form"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-navy text-navy-foreground font-semibold shadow-lg hover:shadow-xl hover:bg-navy/90 transition-all"
                >
                  Apply Now <ArrowRight size={16} />
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

      {/* Embedded Google Form placeholder */}
      <section id="chapter-form" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4 text-center">
            Chapter Application Form
          </h2>
          <p className="text-muted-foreground text-center mb-8 max-w-lg mx-auto">
            Fill out the form below to apply for starting a Lehrein chapter at your institution.
          </p>
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-navy/10 overflow-hidden">
            {/* Replace the src below with your actual Google Form embed URL */}
            <div className="w-full h-[600px] flex items-center justify-center bg-muted/30">
              <div className="text-center p-8">
                <ClipboardList size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Google Form Embed</h3>
                <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                  Replace this placeholder with your Google Form by adding an iframe with your form's embed URL.
                </p>
                <code className="block mt-4 text-xs text-muted-foreground bg-muted/50 rounded-lg p-3">
                  {'<iframe src="YOUR_GOOGLE_FORM_URL" .../>'}
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JoinUs;
