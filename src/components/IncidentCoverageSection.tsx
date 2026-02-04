import { Shield, Hand, Target, Scale } from "lucide-react";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import AnimatedBackground from "./AnimatedBackground";
import BlurredImageBackground from "./BlurredImageBackground";
import heroTactical from "@/assets/hero-tactical.jpg";

const stages = [
  {
    icon: Shield,
    number: "01",
    title: "Prevención",
    description: "Inteligencia, contravigilancia y lectura de entorno.",
    color: "text-[hsl(160_70%_55%)]",
    glowColor: "hsl(160 60% 40% / 0.2)",
    borderColor: "border-[hsl(160_60%_40%/0.3)]",
  },
  {
    icon: Hand,
    number: "02",
    title: "Disuasión",
    description: "Romper la intención del agresor mediante postura y dominio del espacio.",
    color: "text-primary",
    glowColor: "hsl(38 70% 55% / 0.2)",
    borderColor: "border-primary/30",
  },
  {
    icon: Target,
    number: "03",
    title: "Reacción",
    description: "Uso de fuerza técnica fundamentada para neutralizar el riesgo.",
    color: "text-inkoga-red-light",
    glowColor: "hsl(350 75% 45% / 0.2)",
    borderColor: "border-inkoga-red/30",
  },
  {
    icon: Scale,
    number: "04",
    title: "Recuperación",
    description: "Gestión legal del evento y manejo del estrés post-incidente.",
    color: "text-inkoga-silver-light",
    glowColor: "hsl(220 15% 62% / 0.2)",
    borderColor: "border-inkoga-silver/30",
  },
];

const IncidentCoverageSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: stagesRef, isVisible: stagesVisible } = useScrollAnimation(0.1);
  const bgParallax = useParallax(-0.1);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Blurred Image Background */}
      <BlurredImageBackground 
        imageSrc={heroTactical} 
        blurAmount={120}
        opacity={0.15}
        overlay="dark"
        animate={true}
      />
      
      {/* Animated Background */}
      <AnimatedBackground variant="mesh" intensity="medium" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Ambient Glow - Enhanced */}
      <div ref={bgParallax} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[hsl(160_60%_40%/0.08)] rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-inkoga-red/8 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 animate-on-scroll ${headerVisible ? "visible" : ""}`}
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">
            El Elemento Completo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
            Cobertura Total del{" "}
            <span className="text-gold-gradient text-glow">Incidente</span>
          </h2>
          <p className="text-cream-muted text-lg leading-relaxed">
            En esquemas de 1-2 elementos, se debe garantizar la seguridad del Principal en todas las etapas:
          </p>
        </div>

        {/* Stages Timeline */}
        <div
          ref={stagesRef}
          className="grid md:grid-cols-4 gap-6 lg:gap-8 relative"
        >
          {/* Connecting Line (desktop only) - Animated */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 z-0 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-[hsl(160_60%_40%/0.3)] via-primary/30 to-inkoga-silver/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-[shimmer_3s_infinite]" />
          </div>
          
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.title}
                className={`group relative z-10 animate-on-scroll stagger-${index + 1} ${stagesVisible ? "visible" : ""}`}
              >
                <div className={`card-glass border-2 ${stage.borderColor} p-8 h-full transition-all duration-500 hover:border-primary/50 relative overflow-hidden`}>
                  {/* Background glow on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: `radial-gradient(ellipse at center, ${stage.glowColor}, transparent 70%)` 
                    }}
                  />
                  
                  {/* Number */}
                  <span className="relative text-xs text-muted-foreground tracking-widest mb-4 block">
                    {stage.number}
                  </span>
                  
                  {/* Icon - Enhanced */}
                  <div className="relative w-16 h-16 flex items-center justify-center bg-primary/10 border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-8 h-8 ${stage.color}`} />
                    {/* Icon glow */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                      style={{ background: stage.glowColor }}
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="relative font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
                    {stage.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="relative text-cream-muted text-sm leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Decorative Line - Animated */}
                  <div className="relative mt-6 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-700" />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-30" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Note - Enhanced */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="relative">
            <p className="text-cream-muted text-sm leading-relaxed border-2 border-border/30 card-glass p-6">
              <span className="text-primary font-medium">El 95% del entrenamiento se enfoca en REACCIÓN.</span>{" "}
              Tu carrera depende de{" "}
              <span className="text-foreground font-medium">RECUPERACIÓN</span>.
            </p>
            {/* Glow behind */}
            <div className="absolute inset-0 -z-10 bg-primary/5 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncidentCoverageSection;
