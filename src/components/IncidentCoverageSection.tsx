import { Shield, Hand, Target, Scale } from "lucide-react";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

const stages = [
  {
    icon: Shield,
    number: "01",
    title: "Prevención",
    description: "Inteligencia, contravigilancia y lectura de entorno.",
    color: "text-primary",
  },
  {
    icon: Hand,
    number: "02",
    title: "Disuasión",
    description: "Romper la intención del agresor mediante postura y dominio del espacio.",
    color: "text-primary",
  },
  {
    icon: Target,
    number: "03",
    title: "Reacción",
    description: "Uso de fuerza técnica fundamentada para neutralizar el riesgo.",
    color: "text-primary",
  },
  {
    icon: Scale,
    number: "04",
    title: "Recuperación",
    description: "Gestión legal del evento y manejo del estrés post-incidente.",
    color: "text-primary",
  },
];

const IncidentCoverageSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: stagesRef, isVisible: stagesVisible } = useScrollAnimation(0.1);
  const bgParallax = useParallax(-0.1);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Ambient Glow */}
      <div ref={bgParallax} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
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
            <span className="text-gold-gradient">Incidente</span>
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
          {/* Connecting Line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0" />
          
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.title}
                className={`group relative z-10 animate-on-scroll stagger-${index + 1} ${stagesVisible ? "visible" : ""}`}
              >
                <div className="bg-card/50 backdrop-blur-sm border border-border/30 p-8 h-full transition-all duration-500 hover:border-primary/50 hover:bg-card/70">
                  {/* Number */}
                  <span className="text-xs text-muted-foreground tracking-widest mb-4 block">
                    {stage.number}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className={`w-8 h-8 ${stage.color}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
                    {stage.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-cream-muted text-sm leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-cream-muted text-sm leading-relaxed border border-border/30 bg-card/30 backdrop-blur-sm p-6">
            <span className="text-primary font-medium">El 95% del entrenamiento se enfoca en REACCIÓN.</span>{" "}
            Tu carrera depende de{" "}
            <span className="text-foreground">RECUPERACIÓN</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IncidentCoverageSection;
