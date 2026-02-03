import { Button } from "@/components/ui/button";
import pilarPsique from "@/assets/pilar-psique.jpg";
import pilarFisico from "@/assets/pilar-fisico.jpg";
import pilarTactica from "@/assets/pilar-tactica.jpg";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import AnimatedBackground from "./AnimatedBackground";

const pillars = [
  {
    image: pilarPsique,
    icon: "🛡️",
    title: "La Psique",
    subtitle: "Blindaje Mental (Systema Vasiliev)",
    description: "Antes de la táctica, está la mente. Se entrena la regulación del miedo. Controlar la respiración y el estado interno permite gestionar la violencia sin perder la claridad estratégica.",
    lobo: "Gestión del miedo en soledad absoluta. No hay a quién pedir apoyo emocional.",
    binomio: "Confianza mutua. Gestión del miedo compartido sin contagio emocional.",
  },
  {
    image: pilarTactica,
    icon: "🎯",
    title: "La Táctica",
    subtitle: "Lectura y Evasión",
    description: "La mejor resolución es la que evita el contacto. Desarrollamos la lectura de entorno para detectar y evadir la amenaza. Si la confrontación es inminente, se entrena la transición inmediata a la ofensiva controlada.",
    lobo: "Decisión autónoma instantánea. Ciclo OODA individual bajo presión extrema.",
    binomio: "Decisión distribuida. OODA compartido sin comunicación verbal constante.",
  },
  {
    image: pilarFisico,
    icon: "⚡",
    title: "La Técnica",
    subtitle: "Control Físico (Sistema Koga)",
    description: "Cuando la fuerza es inevitable, se aplica biomecánica de control. Permite someter a oponentes sin depender de la fuerza bruta, asegurando la eficiencia energética y la legalidad de la intervención.",
    lobo: "Eficiencia máxima. Un error = no hay quien te cubra. Economía de movimiento crítica.",
    binomio: "Coordinación física. Roles intercambiables sin chocar. Testigo biomecánico.",
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
      {/* Animated Background */}
      <AnimatedBackground variant="aurora" intensity="low" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Ambient Glow - Enhanced */}
      <div ref={bgParallax} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[hsl(160_60%_40%/0.05)] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[180px]" />
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
            25 Años perfeccionando la respuesta en{" "}
            <span className="text-gold-gradient text-glow">entornos hostiles.</span>
          </h2>
          <p className="text-cream-muted text-lg md:text-xl leading-relaxed">
            Nuestra experiencia integra tres sistemas probados para anular la desventaja numérica y física.
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
