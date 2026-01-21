import { cn } from "@/lib/utils";

interface SharkLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "light" | "mono";
  className?: string;
}

const sizeClasses = {
  sm: "w-12 h-8",
  md: "w-16 h-10",
  lg: "w-24 h-14",
  xl: "w-32 h-20",
};

const SharkLogo = ({ size = "md", variant = "full", className }: SharkLogoProps) => {
  // Colors based on variant - Official INKOGA colors
  const bodyColor = variant === "light" ? "#1a2744" : "#8a9bb3"; // Navy for light bg, Silver for dark bg
  const tailColor = variant === "mono" ? bodyColor : "#c41e3a"; // Red tail unless mono
  const gillColor = variant === "light" ? "#f8f9fa" : "#ffffff";
  const eyeColor = "#1a2744";

  return (
    <svg
      viewBox="0 0 185 110"
      className={cn(sizeClasses[size], className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main Body - Curved shark shape */}
      <path
        d="M10 55 Q25 20, 80 25 Q120 28, 140 45 Q150 55, 140 65 Q120 82, 80 85 Q25 90, 10 55 Z"
        fill={bodyColor}
      />
      
      {/* Dorsal Fin */}
      <path
        d="M75 25 Q85 5, 95 10 Q100 18, 95 28 Q88 26, 75 25 Z"
        fill={bodyColor}
      />
      
      {/* Tail/Caudal Fin - Red accent */}
      <path
        d="M140 55 Q155 35, 175 25 Q170 45, 165 55 Q170 65, 175 85 Q155 75, 140 55 Z"
        fill={tailColor}
      />
      
      {/* Pectoral Fin */}
      <path
        d="M70 65 Q60 85, 50 90 Q55 75, 65 65 Q68 63, 70 65 Z"
        fill={bodyColor}
      />
      
      {/* Gill Slits */}
      <line x1="55" y1="45" x2="58" y2="60" stroke={gillColor} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="62" y1="43" x2="65" y2="58" stroke={gillColor} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="69" y1="42" x2="72" y2="57" stroke={gillColor} strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Eye */}
      <circle cx="35" cy="52" r="5" fill={eyeColor} />
      <circle cx="33" cy="50" r="1.5" fill={gillColor} />
      
      {/* Mouth line */}
      <path
        d="M15 58 Q25 62, 40 60"
        stroke={eyeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default SharkLogo;
