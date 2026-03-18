import { ClipboardList, ArrowRight, CheckCircle2 } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";

const JoinUs = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white -z-10" />
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
