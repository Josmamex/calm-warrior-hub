import { Button } from "@/components/ui/button";
import pilarPsique from "@/assets/pilar-psique.jpg";
import pilarFisico from "@/assets/pilar-fisico.jpg";
import pilarTactica from "@/assets/pilar-tactica.jpg";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    image: pilarPsique,
    icon: "🛡️",
    title: "Psique",
    subtitle: "Control Mental",
    description: "Gestiona el miedo. Reprograma automatismos.",
  },
  {
    image: pilarFisico,
    icon: "⚡",
    title: "Físico",
    subtitle: "Biomecánica Eficiente",
    description: "Eficiencia sin fuerza bruta. Koga + Systema.",
  },
  {
    image: pilarTactica,
    icon: "🎯",
    title: "Táctica",
    subtitle: "Estrategia Aplicada",
    description: "Decisiones inteligentes. OODA + Hombre Gris.",
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
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Ambient Glow */}
      <div ref={bgParallax} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 animate-on-scroll ${headerVisible ? "visible" : ""}`}
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">
            La Solución
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Protección del Ser:
            <br />
            <span className="text-gold-gradient">3 Pilares</span>
          </h2>
        </div>

        {/* Pillars Grid - Visual First */}
        <div
          ref={pillarsRef}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group relative overflow-hidden h-[600px] animate-on-scroll stagger-${index + 1} ${pillarsVisible ? "visible" : ""}`}
            >
              {/* Background Image */}
              <img
                src={pillar.image}
                alt={pillar.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                {/* Icon */}
                <span className="text-5xl mb-4 drop-shadow-lg">{pillar.icon}</span>
                
                {/* Subtitle */}
                <p className="text-primary text-xs uppercase tracking-[0.2em] mb-2">
                  {pillar.subtitle}
                </p>
                
                {/* Title */}
                <h3 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">
                  {pillar.title}
                </h3>
                
                {/* Description */}
                <p className="text-cream-muted text-lg leading-relaxed">
                  {pillar.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-primary to-transparent group-hover:w-32 transition-all duration-500" />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-gold-light to-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Button
            variant="hero"
            size="xl"
            className="text-lg px-12 py-6 shadow-gold hover:shadow-[0_0_60px_hsl(38_70%_55%/0.4)] transition-all"
            onClick={() => scrollToSection("recursos")}
          >
            Ver Programas →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
