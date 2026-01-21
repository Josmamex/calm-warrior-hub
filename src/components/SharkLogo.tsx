interface SharkLogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "full" | "mono-light" | "mono-dark";
  className?: string;
}

const SharkLogo = ({ size = "md", variant = "full", className = "" }: SharkLogoProps) => {
  const sizeClasses = {
    sm: "w-10 h-6",
    md: "w-16 h-10",
    lg: "w-24 h-14",
  };

  const getColors = () => {
    switch (variant) {
      case "mono-light":
        return { body: "hsl(var(--foreground))", accent: "hsl(var(--foreground))" };
      case "mono-dark":
        return { body: "hsl(var(--inkoga-navy))", accent: "hsl(var(--inkoga-navy))" };
      default:
        return { body: "hsl(var(--inkoga-silver))", accent: "hsl(var(--inkoga-red))" };
    }
  };

  const colors = getColors();

  return (
    <svg
      viewBox="0 0 140 85"
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main body */}
      <path
        d="M20 45 Q5 45 10 55 Q15 70 35 70 L110 70 Q130 70 135 55 Q140 40 120 35 L45 35 Q25 35 20 45Z"
        fill={colors.body}
      />
      {/* Dorsal fin */}
      <path
        d="M60 35 L75 5 L85 35Z"
        fill={colors.body}
      />
      {/* Tail */}
      <path
        d="M10 50 L0 35 L5 50 L0 65 L10 55Z"
        fill={colors.body}
      />
      {/* Pectoral fin */}
      <path
        d="M70 70 L85 85 L95 70Z"
        fill={colors.body}
      />
      {/* Eye */}
      <circle cx="115" cy="50" r="5" fill={colors.accent} />
      {/* Gill lines */}
      <path
        d="M100 42 L100 58"
        stroke={colors.accent}
        strokeWidth="2"
        opacity="0.6"
      />
      <path
        d="M95 44 L95 56"
        stroke={colors.accent}
        strokeWidth="2"
        opacity="0.4"
      />
    </svg>
  );
};

export default SharkLogo;
