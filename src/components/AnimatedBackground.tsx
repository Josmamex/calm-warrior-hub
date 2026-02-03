import { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
  variant?: "aurora" | "mesh" | "particles" | "waves" | "full";
  intensity?: "low" | "medium" | "high";
  className?: string;
}

const AnimatedBackground = ({ 
  variant = "full", 
  intensity = "medium",
  className = "" 
}: AnimatedBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas-based particle system for extra smoothness
  useEffect(() => {
    if (variant !== "particles" && variant !== "full") return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      hue: number;
    }> = [];

    const particleCount = intensity === "high" ? 80 : intensity === "medium" ? 50 : 25;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        hue: 38 + Math.random() * 20, // Gold range
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 55%, ${particle.opacity})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsla(${particle.hue}, 70%, 55%, 0.5)`;
        ctx.fill();
      });

      // Draw connections between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(38, 70%, 55%, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [variant, intensity]);

  const opacityClass = intensity === "high" ? "opacity-100" : intensity === "medium" ? "opacity-70" : "opacity-40";

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Aurora Effect */}
      {(variant === "aurora" || variant === "full") && (
        <div className={`absolute inset-0 ${opacityClass}`}>
          <div className="aurora-layer aurora-1" />
          <div className="aurora-layer aurora-2" />
          <div className="aurora-layer aurora-3" />
        </div>
      )}

      {/* Mesh Gradient */}
      {(variant === "mesh" || variant === "full") && (
        <div className={`absolute inset-0 ${opacityClass}`}>
          <div className="mesh-gradient" />
        </div>
      )}

      {/* Wave Effect */}
      {(variant === "waves" || variant === "full") && (
        <div className={`absolute inset-0 ${opacityClass}`}>
          <div className="wave-container">
            <div className="wave wave-1" />
            <div className="wave wave-2" />
            <div className="wave wave-3" />
          </div>
        </div>
      )}

      {/* Canvas Particles */}
      {(variant === "particles" || variant === "full") && (
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 ${opacityClass}`}
          style={{ mixBlendMode: "screen" }}
        />
      )}

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.8)_70%,hsl(var(--background))_100%)]" />
    </div>
  );
};

export default AnimatedBackground;
