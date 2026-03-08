/** Kintsugi-themed "broken ≠ broken" typography component */
const KintsugiText = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background — dark dramatic gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-indigo to-navy -z-10" />

      {/* Decorative gold veins in background */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1440 500" preserveAspectRatio="none">
        <path d="M200,0 C230,80 180,160 250,250 C320,340 200,420 280,500" stroke="hsl(var(--kintsugi-gold))" strokeWidth="1.5" fill="none" />
        <path d="M600,0 C580,100 650,200 600,300 C550,400 620,450 600,500" stroke="hsl(var(--kintsugi-gold))" strokeWidth="1" fill="none" />
        <path d="M1000,0 C1050,120 980,220 1040,320 C1100,420 1020,480 1060,500" stroke="hsl(var(--kintsugi-gold))" strokeWidth="1.5" fill="none" />
        <path d="M1300,0 C1280,90 1320,180 1270,280" stroke="hsl(var(--kintsugi-gold))" strokeWidth="1" fill="none" />
        {/* Scattered gold dots — like pottery fragments */}
        <circle cx="350" cy="120" r="2" fill="hsl(var(--kintsugi-gold))" opacity="0.4" />
        <circle cx="800" cy="380" r="1.5" fill="hsl(var(--kintsugi-gold))" opacity="0.3" />
        <circle cx="1150" cy="200" r="2" fill="hsl(var(--kintsugi-gold))" opacity="0.35" />
      </svg>

      <div className="container mx-auto px-4 text-center relative">
        {/* Kintsugi philosophy intro */}
        <p className="text-kintsugi-gold/80 text-sm tracking-[0.3em] uppercase font-medium mb-8 animate-fade-up">
          金継ぎ — The Art of Golden Repair
        </p>

        {/* Main statement */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="flex items-center justify-center gap-3 md:gap-5 flex-wrap">
            {/* "broken" — with cracks */}
            <svg viewBox="0 0 400 100" className="w-64 md:w-80 lg:w-96 h-auto animate-fade-up" aria-label="broken">
              <defs>
                <clipPath id="cracked-text">
                  <text x="50%" y="72" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="72" fontWeight="700">broken</text>
                </clipPath>
              </defs>
              {/* Base text with cracked appearance */}
              <g clipPath="url(#cracked-text)">
                <rect width="400" height="100" fill="hsl(var(--foam))" opacity="0.7" />
                {/* Crack lines through text */}
                <line x1="85" y1="15" x2="95" y2="45" stroke="hsl(var(--navy))" strokeWidth="2.5" opacity="0.9" />
                <line x1="95" y1="45" x2="88" y2="75" stroke="hsl(var(--navy))" strokeWidth="2" opacity="0.9" />
                <line x1="95" y1="45" x2="105" y2="60" stroke="hsl(var(--navy))" strokeWidth="1.5" opacity="0.7" />
                
                <line x1="165" y1="10" x2="172" y2="40" stroke="hsl(var(--navy))" strokeWidth="2.5" opacity="0.9" />
                <line x1="172" y1="40" x2="160" y2="80" stroke="hsl(var(--navy))" strokeWidth="2" opacity="0.9" />
                <line x1="172" y1="40" x2="180" y2="55" stroke="hsl(var(--navy))" strokeWidth="1.5" opacity="0.7" />

                <line x1="255" y1="20" x2="248" y2="50" stroke="hsl(var(--navy))" strokeWidth="2" opacity="0.85" />
                <line x1="248" y1="50" x2="260" y2="82" stroke="hsl(var(--navy))" strokeWidth="2.5" opacity="0.9" />

                <line x1="330" y1="12" x2="325" y2="48" stroke="hsl(var(--navy))" strokeWidth="2" opacity="0.8" />
                <line x1="325" y1="48" x2="335" y2="78" stroke="hsl(var(--navy))" strokeWidth="1.8" opacity="0.85" />
              </g>
              {/* Subtle crumble effect — small fragments */}
              <circle cx="90" cy="50" r="1.5" fill="hsl(var(--foam))" opacity="0.4" />
              <circle cx="175" cy="35" r="1" fill="hsl(var(--foam))" opacity="0.3" />
              <circle cx="252" cy="55" r="1.5" fill="hsl(var(--foam))" opacity="0.35" />
            </svg>

            {/* ≠ symbol */}
            <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-foam/50 animate-fade-up-delay-1 select-none">≠</span>

            {/* "broken" — with gold kintsugi repair */}
            <svg viewBox="0 0 400 100" className="w-64 md:w-80 lg:w-96 h-auto animate-fade-up-delay-2" aria-label="broken, repaired with gold">
              <defs>
                <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--kintsugi-gold))" />
                  <stop offset="50%" stopColor="hsl(var(--kintsugi-light))" />
                  <stop offset="100%" stopColor="hsl(var(--kintsugi-gold))" />
                </linearGradient>
                <filter id="gold-glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <clipPath id="repaired-text">
                  <text x="50%" y="72" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="72" fontWeight="700">broken</text>
                </clipPath>
              </defs>
              {/* Base text — intact and whole */}
              <g clipPath="url(#repaired-text)">
                <rect width="400" height="100" fill="hsl(var(--foam))" opacity="0.9" />
                {/* Gold-filled cracks — the kintsugi repair */}
                <line x1="85" y1="15" x2="95" y2="45" stroke="url(#gold-gradient)" strokeWidth="3.5" filter="url(#gold-glow)" />
                <line x1="95" y1="45" x2="88" y2="75" stroke="url(#gold-gradient)" strokeWidth="3" filter="url(#gold-glow)" />
                <line x1="95" y1="45" x2="105" y2="60" stroke="url(#gold-gradient)" strokeWidth="2" filter="url(#gold-glow)" />
                
                <line x1="165" y1="10" x2="172" y2="40" stroke="url(#gold-gradient)" strokeWidth="3.5" filter="url(#gold-glow)" />
                <line x1="172" y1="40" x2="160" y2="80" stroke="url(#gold-gradient)" strokeWidth="3" filter="url(#gold-glow)" />
                <line x1="172" y1="40" x2="180" y2="55" stroke="url(#gold-gradient)" strokeWidth="2" filter="url(#gold-glow)" />

                <line x1="255" y1="20" x2="248" y2="50" stroke="url(#gold-gradient)" strokeWidth="3" filter="url(#gold-glow)" />
                <line x1="248" y1="50" x2="260" y2="82" stroke="url(#gold-gradient)" strokeWidth="3.5" filter="url(#gold-glow)" />

                <line x1="330" y1="12" x2="325" y2="48" stroke="url(#gold-gradient)" strokeWidth="3" filter="url(#gold-glow)" />
                <line x1="325" y1="48" x2="335" y2="78" stroke="url(#gold-gradient)" strokeWidth="2.5" filter="url(#gold-glow)" />
              </g>
              {/* Gold sparkle particles */}
              <circle cx="92" cy="30" r="2" fill="hsl(var(--kintsugi-light))" opacity="0.6" />
              <circle cx="168" cy="25" r="1.5" fill="hsl(var(--kintsugi-light))" opacity="0.5" />
              <circle cx="250" cy="65" r="2" fill="hsl(var(--kintsugi-light))" opacity="0.55" />
              <circle cx="328" cy="60" r="1.5" fill="hsl(var(--kintsugi-light))" opacity="0.45" />
            </svg>
          </div>
        </div>

        {/* Philosophy text */}
        <p className="text-foam/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-3 font-light">
          In the Japanese art of <span className="text-kintsugi-gold font-medium">Kintsugi</span>, broken pottery is repaired with gold — 
          making the cracks part of the object's beauty. At Lehrein, we believe the same is true for the human mind. 
          <span className="text-foam font-medium"> Our cracks are not flaws — they are where the light gets in.</span>
        </p>

        {/* Gold accent line */}
        <div className="flex justify-center gap-2 mt-8 animate-fade-up-delay-3">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-kintsugi-gold/60" />
          <div className="w-2 h-2 rounded-full bg-kintsugi-gold/60" />
          <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-kintsugi-gold/60" />
        </div>
      </div>
    </section>
  );
};

export default KintsugiText;
