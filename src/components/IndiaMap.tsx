import { useState } from "react";

interface StateData {
  id: string;
  name: string;
  d: string;
  live?: boolean;
}

// Simplified SVG paths for Indian states including undivided J&K
const states: StateData[] = [
  { id: "JK", name: "Jammu & Kashmir", d: "M220 30 L260 20 L290 40 L300 70 L280 90 L250 100 L230 80 L210 60 Z", live: true },
  { id: "HP", name: "Himachal Pradesh", d: "M250 100 L280 90 L290 110 L270 130 L250 120 Z" },
  { id: "PB", name: "Punjab", d: "M230 110 L250 100 L250 120 L270 130 L260 150 L230 140 Z", live: true },
  { id: "HR", name: "Haryana", d: "M230 140 L260 150 L260 170 L240 180 L220 160 Z" },
  { id: "UK", name: "Uttarakhand", d: "M270 130 L290 110 L310 120 L300 150 L280 150 L260 150 Z" },
  { id: "DL", name: "Delhi", d: "M240 165 L250 160 L255 170 L245 175 Z", live: true },
  { id: "RJ", name: "Rajasthan", d: "M150 160 L220 160 L240 180 L230 230 L200 260 L140 240 L120 200 Z", live: true },
  { id: "UP", name: "Uttar Pradesh", d: "M260 170 L300 150 L340 160 L360 190 L340 220 L300 230 L260 210 L240 180 Z", live: true },
  { id: "BR", name: "Bihar", d: "M340 220 L380 210 L400 230 L380 250 L350 240 Z" },
  { id: "WB", name: "West Bengal", d: "M380 250 L400 230 L420 240 L410 290 L400 320 L380 310 L370 280 Z", live: true },
  { id: "SK", name: "Sikkim", d: "M390 200 L400 195 L405 210 L395 215 Z" },
  { id: "NE", name: "Northeast States", d: "M420 200 L470 190 L490 210 L480 240 L450 250 L420 240 Z" },
  { id: "MP", name: "Madhya Pradesh", d: "M200 260 L300 230 L340 250 L330 300 L280 310 L220 300 L180 280 Z", live: true },
  { id: "GJ", name: "Gujarat", d: "M100 220 L140 240 L180 280 L160 320 L120 330 L80 300 L70 260 Z", live: true },
  { id: "MH", name: "Maharashtra", d: "M120 330 L160 320 L220 300 L280 310 L300 340 L280 380 L240 400 L180 390 L130 370 Z", live: true },
  { id: "CG", name: "Chhattisgarh", d: "M300 300 L340 280 L370 300 L360 340 L330 350 L300 340 Z" },
  { id: "JH", name: "Jharkhand", d: "M340 250 L370 240 L380 260 L370 280 L340 280 L330 260 Z" },
  { id: "OD", name: "Odisha", d: "M330 350 L370 300 L400 320 L390 360 L360 380 L330 370 Z" },
  { id: "TG", name: "Telangana", d: "M240 400 L280 380 L310 390 L300 420 L270 430 L240 420 Z", live: true },
  { id: "AP", name: "Andhra Pradesh", d: "M240 420 L300 420 L330 370 L360 380 L370 420 L340 460 L290 470 L250 450 Z" },
  { id: "KA", name: "Karnataka", d: "M160 400 L240 400 L250 450 L230 490 L190 500 L150 470 L140 430 Z", live: true },
  { id: "GA", name: "Goa", d: "M135 410 L150 405 L155 420 L140 425 Z" },
  { id: "KL", name: "Kerala", d: "M170 490 L190 500 L195 540 L180 570 L165 560 L160 520 Z", live: true },
  { id: "TN", name: "Tamil Nadu", d: "M195 490 L250 450 L290 470 L280 510 L240 540 L200 540 Z", live: true },
];

const IndiaMap = () => {
  const [activeStates, setActiveStates] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    states.forEach((s) => { if (s.live) initial.add(s.id); });
    return initial;
  });
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const toggleState = (id: string) => {
    setActiveStates((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top - 30 });
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg
        viewBox="50 10 460 580"
        className="w-full h-auto"
        onMouseMove={handleMouseMove}
      >
        {states.map((state) => (
          <path
            key={state.id}
            d={state.d}
            fill={activeStates.has(state.id) ? "#9ad8de" : "#e8e8e8"}
            stroke="hsl(var(--teal-deep))"
            strokeWidth="1.5"
            className="cursor-pointer transition-colors duration-300"
            onClick={() => toggleState(state.id)}
            onMouseEnter={() => setHoveredState(state.id)}
            onMouseLeave={() => setHoveredState(null)}
          />
        ))}
      </svg>

      {/* Tooltip */}
      {hoveredState && (
        <div
          className="absolute pointer-events-none bg-foreground text-background px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg"
          style={{ left: tooltipPos.x, top: tooltipPos.y, transform: "translateX(-50%)" }}
        >
          {states.find((s) => s.id === hoveredState)?.name}
        </div>
      )}

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#9ad8de" }} />
          <span className="text-sm text-muted-foreground">Program Live</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#e8e8e8" }} />
          <span className="text-sm text-muted-foreground">Coming Soon</span>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;
