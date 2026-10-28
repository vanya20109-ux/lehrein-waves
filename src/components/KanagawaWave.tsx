/** Kanagawa-inspired great wave SVG: dramatic section divider with visible curling wave */
const KanagawaWave = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1440 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-32 md:h-48 lg:h-56"
      >
        {/* Deep ocean base: darkest layer */}
        <path
          d="M0,200 C120,160 200,100 360,130 C480,155 540,190 680,165 C780,148 840,100 960,120 C1080,140 1160,180 1280,155 C1360,140 1420,110 1440,120 L1440,260 L0,260Z"
          fill="hsl(var(--navy))"
          opacity="0.25"
        />
        {/* Mid wave: the great curl body */}
        <path
          d="M0,210 C80,180 160,130 300,155 C400,172 460,200 580,180 C680,163 740,120 860,145 C960,165 1020,195 1140,175 C1240,158 1320,125 1440,150 L1440,260 L0,260Z"
          fill="hsl(var(--primary))"
          opacity="0.2"
        />
        {/* The iconic curling wave crest */}
        <path
          d="M0,225 C60,208 120,185 220,198 C300,208 340,225 440,215 C520,206 580,180 680,195 C760,206 820,222 900,212 C980,202 1040,182 1140,196 C1220,206 1300,222 1400,212 L1440,208 L1440,260 L0,260Z"
          fill="hsl(var(--indigo))"
          opacity="0.15"
        />

        {/* Wave curl: the Kanagawa signature spiral */}
        <path
          d="M260,150 C275,130 310,118 340,125 C360,130 370,145 365,158 C360,168 345,172 330,168 C320,165 315,155 320,148"
          stroke="hsl(var(--steel))"
          strokeWidth="2.5"
          fill="none"
          opacity="0.35"
        />
        <path
          d="M700,125 C720,108 755,98 785,108 C805,115 815,132 808,146 C800,158 785,160 772,155 C762,150 758,140 765,132"
          stroke="hsl(var(--steel))"
          strokeWidth="2.5"
          fill="none"
          opacity="0.30"
        />
        <path
          d="M1120,140 C1140,122 1175,112 1205,120 C1220,126 1228,140 1222,152 C1216,162 1202,165 1190,160"
          stroke="hsl(var(--steel))"
          strokeWidth="2"
          fill="none"
          opacity="0.25"
        />

        {/* Foam spray: frothy white tips flying off the crests */}
        <path
          d="M240,145 C260,135 285,128 310,132 C330,135 340,145 345,150"
          stroke="hsl(var(--foam))"
          strokeWidth="2.5"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M250,138 C260,130 275,126 290,128"
          stroke="hsl(var(--foam))"
          strokeWidth="1.5"
          fill="none"
          opacity="0.35"
        />
        <path
          d="M680,120 C700,110 725,105 750,110 C770,114 780,125 782,130"
          stroke="hsl(var(--foam))"
          strokeWidth="2.5"
          fill="none"
          opacity="0.45"
        />
        <path
          d="M690,112 C705,105 720,100 740,104"
          stroke="hsl(var(--foam))"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M1100,135 C1120,125 1145,118 1170,124 C1185,128 1195,138 1198,142"
          stroke="hsl(var(--foam))"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />

        {/* Scattered foam droplets */}
        <circle cx="225" cy="140" r="2" fill="hsl(var(--foam))" opacity="0.35" />
        <circle cx="275" cy="125" r="1.5" fill="hsl(var(--foam))" opacity="0.3" />
        <circle cx="320" cy="130" r="1" fill="hsl(var(--foam))" opacity="0.25" />
        <circle cx="665" cy="115" r="2" fill="hsl(var(--foam))" opacity="0.3" />
        <circle cx="720" cy="102" r="1.5" fill="hsl(var(--foam))" opacity="0.25" />
        <circle cx="1090" cy="130" r="1.5" fill="hsl(var(--foam))" opacity="0.3" />
        <circle cx="1155" cy="118" r="1" fill="hsl(var(--foam))" opacity="0.25" />
      </svg>
    </div>
  );
};

export default KanagawaWave;
