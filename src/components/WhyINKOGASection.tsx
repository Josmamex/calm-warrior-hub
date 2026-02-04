import { Target, Brain, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedBackground from "./AnimatedBackground";
import BlurredImageBackground from "./BlurredImageBackground";
import pilarTactica from "@/assets/pilar-tactica.jpg";

const differentiators = [
  {
    icon: Target,
    title: "Realidad > Fantasía",
    description: "No entrenamos para el equipo de 4+ que jamás tendrás. Entrenamos para las configuraciones que SÍ existen: 1 escolta o 2 trabajando juntos.",
    accentColor: "hsl(var(--inkoga-red))",
    glowColor: "hsl(350 75% 45% / 0.2)",
  },
  {
    icon: Brain,
    title: "Ciencia > Mito",
    description: "Force Science Institute, Systema Vasiliev, Koga System. Cada protocolo respaldado por neurobiología, biomecánica y legislación LATAM.",
    accentColor: "hsl(var(--primary))",
    glowColor: "hsl(38 70% 55% / 0.2)",
  },
  {
    icon: Shield,
    title: "Integridad > Marketing",
    description: "25 años de experiencia verificable. Certificaciones ONU, H&K, Systema, Koga que puedes comprobar. Sin claims inventados.",
    accentColor: "hsl(var(--inkoga-silver))",
    glowColor: "hsl(220 15% 62% / 0.2)",
  },
];

const WhyINKOGASection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);

  return (
    <section id="por-que-inkoga" className="py-24 md:py-32 relative overflow-hidden">
      {/* Blurred Image Background */}
      <BlurredImageBackground 
        imageSrc={pilarTactica} 
        blurAmount={100}
        opacity={0.3}
        overlay="gold"
        animate={true}
      />
      
      {/* Animated Background */}
      <AnimatedBackground variant="waves" intensity="low" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/30 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-inkoga-red/30 to-transparent" />

      {/* Ambient Glow - Enhanced */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-inkoga-red/8 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 animate-on-scroll ${headerVisible ? "visible" : ""}`}
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">
            Diferenciadores
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Por qué <span className="text-gold-gradient text-glow">INKOGA</span>
          </h2>
          <p className="text-cream-muted text-xl">
            No competimos en marketing. Competimos en{" "}
            <span className="text-foreground font-medium">integridad verificable.</span>
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden animate-on-scroll stagger-${index + 1} ${cardsVisible ? "visible" : ""}`}
            >
              <div className="relative h-full p-8 border-2 border-border/30 card-glass hover:border-primary/30 transition-all duration-500">
                {/* Accent Line - Animated */}
                <div
                  className="absolute top-0 left-0 w-full h-1 opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, ${item.accentColor}, transparent)` }}
                />
                
                {/* Background glow on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `radial-gradient(ellipse at center, ${item.glowColor}, transparent 70%)` 
                  }}
                />

                {/* Icon - Enhanced */}
                <div
                  className="relative w-14 h-14 flex items-center justify-center border mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ borderColor: item.accentColor, background: `${item.accentColor}10` }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.accentColor }} />
                  {/* Icon glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{ background: item.glowColor }}
                  />
                </div>

                {/* Title */}
                <h3 className="relative font-serif text-2xl font-medium text-foreground mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative text-cream-muted leading-relaxed">
                  {item.description}
                </p>

                {/* Hover Glow - Enhanced */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div
                    className="absolute inset-0"
                    style={{ boxShadow: `inset 0 0 80px ${item.accentColor}15` }}
                  />
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyINKOGASection;
