const WaveDivider = ({ flip = false, className = "" }: { flip?: boolean; className?: string }) => {
  return (
    <div className={`wave-divider ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24"
      >
        <path
          d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
          fill="hsl(var(--primary) / 0.15)"
        />
        <path
          d="M0 80C240 120 480 40 720 80C960 120 1200 40 1440 80V120H0V80Z"
          fill="hsl(var(--primary) / 0.08)"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
