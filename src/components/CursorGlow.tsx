import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface CursorGlowProps {
  color?: 'gold' | 'emerald' | 'red';
  size?: number;
  blur?: number;
}

const colorStyles = {
  gold: 'hsl(38 70% 55% / 0.12)',
  emerald: 'hsl(160 60% 40% / 0.1)',
  red: 'hsl(350 75% 45% / 0.08)',
};

const CursorGlow = ({ 
  color = 'gold', 
  size = 400, 
  blur = 60 
}: CursorGlowProps) => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Don't render on mobile/touch devices
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isMobile, isVisible]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-opacity duration-300"
      style={{
        left: position.x,
        top: position.y,
        width: size,
        height: size,
        transform: 'translate(-50%, -50%)',
        background: `radial-gradient(circle, ${colorStyles[color]}, transparent 70%)`,
        filter: `blur(${blur}px)`,
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
};

export default CursorGlow;
