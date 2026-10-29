import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/data/contact";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,60 C120,30 240,10 360,30 C480,50 540,70 660,50 C780,30 840,10 960,30 C1080,50 1140,70 1260,50 C1340,38 1400,25 1440,30 L1440,100 L0,100Z" fill="hsl(var(--navy))" />
          <path d="M0,70 C160,45 320,25 480,45 C640,65 720,80 880,60 C1040,40 1120,25 1280,45 C1380,55 1420,60 1440,55 L1440,100 L0,100Z" fill="hsl(var(--navy))" opacity="0.7" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-3">Lehrein</h3>
            <p className="text-navy-foreground/70 text-sm leading-relaxed max-w-xs">
              Waves of change, bringing psychology-driven wellness programs to schools, colleges, communities, and corporates across India.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors">About</Link>
              <Link to="/resources" className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors">Resources</Link>
              <Link to="/blog" className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors">Blog</Link>
              <Link to="/join" className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors">Join Us & Contact</Link>
              <Link to="/gallery" className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors">Gallery</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-navy-foreground/70">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 hover:text-navy-foreground transition-colors"><Mail size={14} /> {CONTACT_EMAIL}</a>
              <a href={CONTACT_PHONE_HREF} className="flex items-center gap-2 hover:text-navy-foreground transition-colors"><Phone size={14} /> {CONTACT_PHONE}</a>
              <span className="flex items-center gap-2"><MapPin size={14} /> New Delhi, India</span>
            </div>
            <div className="flex gap-3 mt-4">
              {["Instagram", "LinkedIn", "Twitter"].map((s) => (
                <span key={s} className="w-8 h-8 rounded-full bg-navy-foreground/15 flex items-center justify-center text-xs font-medium cursor-pointer hover:bg-navy-foreground/25 transition-colors">
                  {s[0]}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-navy-foreground/15 mt-10 pt-6 text-center text-sm text-navy-foreground/50">
          © {new Date().getFullYear()} Lehrein: The Psychology Association. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
