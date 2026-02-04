import { useRef, useEffect } from 'react';

interface BlurredImageBackgroundProps {
  imageSrc: string;
  blurAmount?: number;
  opacity?: number;
  overlay?: 'dark' | 'gold' | 'emerald' | 'red' | 'none';
  animate?: boolean;
  parallax?: boolean;
  className?: string;
}

const overlayStyles = {
  dark: 'bg-gradient-to-b from-background/60 via-background/40 to-background/80',
  gold: 'bg-gradient-to-br from-primary/20 via-transparent to-primary/10',
  emerald: 'bg-gradient-to-br from-[hsl(160_60%_40%/0.2)] via-transparent to-[hsl(160_60%_40%/0.1)]',
  red: 'bg-gradient-to-br from-inkoga-red/15 via-transparent to-inkoga-red/10',
  none: '',
};

const BlurredImageBackground = ({
  imageSrc,
  blurAmount = 80,
  opacity = 0.5,
  overlay = 'dark',
  animate = true,
  parallax = false,
  className = '',
}: BlurredImageBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parallax || !containerRef.current) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrolled = window.scrollY;
      const rect = containerRef.current.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const relativeScroll = scrolled - elementTop + window.innerHeight;
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        containerRef.current.style.transform = `translateY(${relativeScroll * 0.05}px) scale(1.2)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallax]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Blurred Image Layer */}
      <div
        ref={containerRef}
        className={`absolute inset-[-10%] ${animate ? 'animate-subtle-scale' : ''}`}
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: `blur(${blurAmount}px) saturate(1.2)`,
          opacity,
          transform: 'scale(1.2)',
        }}
      />
      
      {/* Overlay Gradient */}
      {overlay !== 'none' && (
        <div className={`absolute inset-0 ${overlayStyles[overlay]}`} />
      )}
      
      {/* Additional ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
    </div>
  );
};

export default BlurredImageBackground;
