import { Button } from "@/components/ui/button";
import pilarPsique from "@/assets/pilar-psique.jpg";
import pilarFisico from "@/assets/pilar-fisico.jpg";
import pilarTactica from "@/assets/pilar-tactica.jpg";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import AnimatedBackground from "./AnimatedBackground";
import BlurredImageBackground from "./BlurredImageBackground";

const pillars = [
  {
    image: pilarPsique,
    icon: "🛡️",
    title: "La Psique",
    subtitle: "Control Bajo Presión",
    description: "Respiración de alto rendimiento que mantiene tu capacidad de pensar cuando la presión sube. No motivación. Entrenamiento real del sistema nervioso.",
    lobo: "Gestión de presión en soledad absoluta. Sin apoyo emocional. Sin radio. Tú solo decides.",
    binomio: "Confianza mutua sin contagio emocional. Si tu compañero pierde claridad, tú no.",
  },
  {
    image: pilarTactica,
    icon: "🎯",
    title: "La Táctica",
    subtitle: "Adaptación en Crisis",
    description: "Toma de decisiones cuando el plan falla. Entrenamiento que te prepara para ejecutar cuando importa, no solo cuando es cómodo.",
    lobo: "Protocolos de priorización cuando no puedes estar en dos lugares. Chofer-escolta: dos roles, una persona.",
    binomio: "Roles intercambiables. Decisión distribuida sin depender de comunicación constante.",
  },
  {
    image: pilarFisico,
    icon: "⚡",
    title: "La Técnica",
    subtitle: "Congruencia Legal",
    description: "Control sin destrucción. Mínima fuerza necesaria, máxima defensa legal. Doctrina civil que protege al VIP, neutraliza la amenaza, y te defiende ante el fiscal.",
    lobo: "Técnicas que funcionan sin apoyo físico. Tú solo contra la amenaza.",
    binomio: "Coordinación de control sin comunicación verbal. Testigo cruzado para respaldo legal.",
  },
];

const SolutionSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: pillarsRef, isVisible: pillarsVisible } = useScrollAnimation(0.1);
  const bgParallax = useParallax(-0.15);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="metodologia" className="py-24 md:py-32 relative overflow-hidden">
      {/* Blurred Image Background */}
      <BlurredImageBackground 
        imageSrc={pilarTactica} 
        blurAmount={40}
        opacity={0.12}
        overlay="dark"
        animate={false}
        parallax={false}
      />
      
      {/* Animated Background */}
      <AnimatedBackground variant="aurora" intensity="low" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Ambient Glow - Enhanced */}
      <div ref={bgParallax} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[hsl(160_60%_40%/0.08)] rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-4xl mx-auto mb-20 animate-on-scroll ${headerVisible ? "visible" : ""}`}
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">
            Nuestra Expertise
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
            La Solución: 3 Pilares{" "}
            <span className="text-gold-gradient text-glow">Integrados.</span>
          </h2>
          <p className="text-cream-muted text-lg md:text-xl leading-relaxed">
            Psique, táctica y técnica entrenados como sistema único para operadores de 1-2 elementos.
          </p>
        </div>

        {/* Pillars Grid - Visual First */}
        <div
          ref={pillarsRef}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group relative overflow-hidden h-[650px] animate-on-scroll stagger-${index + 1} ${pillarsVisible ? "visible" : ""}`}
            >
              {/* Background Image */}
              <img
                src={pillar.image}
                alt={pillar.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
              
              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 transition-colors duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                {/* Icon with glow */}
                <div className="relative">
                  <span className="text-5xl mb-4 drop-shadow-lg block">{pillar.icon}</span>
                  <div className="absolute inset-0 blur-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Subtitle */}
                <p className="text-primary text-xs uppercase tracking-[0.2em] mb-2">
                  {pillar.subtitle}
                </p>
                
                {/* Title */}
                <h3 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4 group-hover:text-glow transition-all duration-300">
                  {pillar.title}
                </h3>
                
                {/* Description */}
                <p className="text-cream-muted text-base leading-relaxed mb-4">
                  {pillar.description}
                </p>

                {/* Dual Application */}
                <div className="space-y-3 pt-4 border-t border-border/30">
                  <div className="flex items-start gap-2">
                    <span className="text-xs px-2 py-1 bg-inkoga-silver/20 text-inkoga-silver-light font-medium shrink-0">🐺 LOBO</span>
                    <p className="text-xs text-cream-muted leading-relaxed">{pillar.lobo}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs px-2 py-1 bg-primary/20 text-primary font-medium shrink-0">🤝 BINOMIO</span>
                    <p className="text-xs text-cream-muted leading-relaxed">{pillar.binomio}</p>
                  </div>
                </div>

                {/* Decorative Line - Animated */}
                <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-700" />
              </div>

              {/* Hover Glow Effect - Enhanced */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-gold-light to-primary animate-pulse" />
                <div className="absolute inset-0 shadow-[inset_0_0_80px_hsl(38_70%_55%/0.1)]" />
              </div>
              
              {/* Shimmer on hover */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-50" />
            </div>
          ))}
        </div>

        {/* Note about dual application - Enhanced */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="relative">
            <p className="text-cream-muted text-sm leading-relaxed border-2 border-border/30 bg-card/50 backdrop-blur-sm p-6 card-glass">
              <span className="text-primary font-medium">Los 3 pilares se aplican en ambos contextos operativos.</span>{" "}
              No entrenas "para ser lobo" o "para ser binomio". Entrenas para ser{" "}
              <span className="text-foreground">efectivo en ambos contextos</span>, porque tu realidad operativa no te pregunta cuál prefieres.
            </p>
            {/* Subtle glow behind */}
            <div className="absolute inset-0 -z-10 bg-primary/5 blur-xl" />
          </div>
        </div>

        {/* CTA - Enhanced */}
        <div className="mt-12 text-center">
          <Button
            variant="hero"
            size="xl"
            className="text-lg px-12 py-6 shadow-gold hover:shadow-[0_0_80px_hsl(38_70%_55%/0.5)] transition-all duration-500"
            onClick={() => scrollToSection("programas")}
          >
            Ver Programas →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
