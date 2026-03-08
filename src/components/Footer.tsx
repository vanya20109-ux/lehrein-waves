import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-teal-deep text-teal-deep-foreground">
      {/* Wave top */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z" fill="hsl(var(--teal-deep))" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-3">Lehrein</h3>
            <p className="text-teal-deep-foreground/80 text-sm leading-relaxed max-w-xs">
              Waves of change — bringing psychology-driven wellness programs to colleges, corporates, communities, and schools worldwide.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-teal-deep-foreground/80 hover:text-teal-deep-foreground transition-colors">About Lehrein</Link>
              <Link to="/get-involved" className="text-sm text-teal-deep-foreground/80 hover:text-teal-deep-foreground transition-colors">Get Involved</Link>
              <Link to="/modules" className="text-sm text-teal-deep-foreground/80 hover:text-teal-deep-foreground transition-colors">Modules</Link>
              <Link to="/contact" className="text-sm text-teal-deep-foreground/80 hover:text-teal-deep-foreground transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-teal-deep-foreground/80">
              <span className="flex items-center gap-2"><Mail size={14} /> hello@lehrein.org</span>
              <span className="flex items-center gap-2"><Phone size={14} /> +91 98765 43210</span>
              <span className="flex items-center gap-2"><MapPin size={14} /> New Delhi, India</span>
            </div>
            {/* Social placeholders */}
            <div className="flex gap-3 mt-4">
              {["Instagram", "LinkedIn", "Twitter"].map((s) => (
                <span key={s} className="w-8 h-8 rounded-full bg-teal-deep-foreground/20 flex items-center justify-center text-xs font-medium cursor-pointer hover:bg-teal-deep-foreground/30 transition-colors">
                  {s[0]}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-teal-deep-foreground/20 mt-10 pt-6 text-center text-sm text-teal-deep-foreground/60">
          © {new Date().getFullYear()} Lehrein — The Psychology Association. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
