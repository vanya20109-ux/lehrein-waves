/** Kanagawa-inspired great wave SVG — used as a dramatic section divider */
const KanagawaWave = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1440 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-24 md:h-36"
      >
        {/* Deep water base */}
        <path
          d="M0,140 C120,100 200,60 320,80 C440,100 500,140 600,120 C700,100 760,50 880,70 C1000,90 1060,130 1160,110 C1260,90 1340,60 1440,80 L1440,180 L0,180Z"
          fill="hsl(var(--navy))"
          opacity="0.15"
        />
        {/* Medium wave */}
        <path
          d="M0,150 C80,120 160,90 280,110 C360,125 420,145 520,130 C620,115 680,85 800,100 C920,115 980,140 1080,125 C1180,110 1280,85 1380,105 L1440,110 L1440,180 L0,180Z"
          fill="hsl(var(--primary))"
          opacity="0.12"
        />
        {/* Curling wave crest — the Kanagawa signature curl */}
        <path
          d="M0,160 C60,145 120,130 200,140 C280,150 320,160 400,152 C480,144 540,125 640,135 C740,145 800,158 880,150 C960,142 1020,128 1120,138 C1220,148 1300,160 1380,152 L1440,148 L1440,180 L0,180Z"
          fill="hsl(var(--indigo))"
          opacity="0.08"
        />
        {/* Foam caps — white frothy tips */}
        <path
          d="M180,138 C200,132 220,128 240,130 C260,132 270,138 280,140"
          stroke="hsl(var(--foam))"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M620,130 C640,124 660,120 680,122 C700,124 710,130 720,132"
          stroke="hsl(var(--foam))"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M1080,132 C1100,126 1120,122 1140,124 C1160,126 1170,132 1180,134"
          stroke="hsl(var(--foam))"
          strokeWidth="2"
          fill="none"
          opacity="0.35"
        />
      </svg>
    </div>
  );
};

export default KanagawaWave;
