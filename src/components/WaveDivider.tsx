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
        {/* Deep layer */}
        <path
          d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
          fill="hsl(var(--navy) / 0.12)"
        />
        {/* Mid layer */}
        <path
          d="M0 75C200 105 400 45 600 75C800 105 1000 45 1200 75C1320 90 1400 80 1440 75V120H0V75Z"
          fill="hsl(var(--primary) / 0.10)"
        />
        {/* Light foam layer */}
        <path
          d="M0 90C240 110 480 70 720 90C960 110 1200 70 1440 90V120H0V90Z"
          fill="hsl(var(--steel) / 0.06)"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
