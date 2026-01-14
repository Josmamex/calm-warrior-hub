import { Shield, Activity, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    icon: Shield,
    number: "I",
    title: "Psique",
    subtitle: "Control Mental",
    description:
      "Gestión del miedo y limpieza de la programación equivocada mediante los protocolos de Maltsev y Koga. Reprogramamos los patrones de reacción automática que te sabotean bajo presión.",
    lobo: "Gestión del miedo en soledad absoluta. No hay a quién pedir apoyo emocional.",
    binomio: "Confianza mutua. Gestión del miedo compartido sin contagio emocional.",
  },
  {
    icon: Activity,
    number: "II",
    title: "Físico",
    subtitle: "Biomecánica Eficiente",
    description:
      "Movimientos basados en principios de Systema y Koga: relajación activa, eficiencia y economía de fuerza. Máximo resultado con menor desgaste.",
    lobo: "Eficiencia máxima. Un error = no hay quien te cubra. Economía de movimiento crítica.",
    binomio: "Coordinación física. Roles intercambiables sin chocar. Testigo biomecánico.",
  },
  {
    icon: Compass,
    number: "III",
    title: "Táctica",
    subtitle: "Estrategia Aplicada",
    description:
      "El Ciclo OODA, legalidad táctica y el arte del 'Hombre Gris'. Decisiones inteligentes que te mantienen libre y vivo en el contexto legal latinoamericano.",
    lobo: "Decisión autónoma instantánea. Ciclo OODA individual bajo presión extrema.",
    binomio: "Decisión distribuida. OODA compartido sin comunicación verbal constante.",
  },
];

const SolutionSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: pillarsRef, isVisible: pillarsVisible } = useScrollAnimation(0.05);
  const numeralParallax = useParallax(0.3);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="metodologia" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/30 to-background" />
      <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-20 animate-on-scroll ${headerVisible ? "visible" : ""}`}
        >
          <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase mb-4">
            La Solución
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-8">
            Protección del Ser:{" "}
            <span className="text-gold-gradient">La Ciencia de la Supervivencia</span>
          </h2>
          <p className="text-cream-muted text-lg leading-relaxed">
            No enseño técnicas de combate. Enseño lo que me costó décadas descubrir:
            cómo{" "}
            <span className="text-foreground">
              apagar la señal del ego, la sobre-confianza y los automatismos
            </span>{" "}
            que te convierten en víctima — y cómo encender al guerrero consciente.
            Lo aprendí de Koga, Vasiliev, Maltsev y Thomas. Ahora lo transmito:
            reprogramamos tus instintos para que sirvan, no para que te traicionen.
          </p>
        </div>

        {/* Pillars */}
        <div ref={pillarsRef} className="grid md:grid-cols-3 gap-1">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group relative bg-card/30 border-t border-border/30 p-10 hover:bg-card/60 card-hover animate-on-scroll stagger-${index + 1} ${pillarsVisible ? "visible" : ""}`}
            >
              {/* Roman Numeral with parallax */}
              <span
                ref={index === 1 ? numeralParallax : undefined}
                className="font-serif text-7xl text-primary/5 absolute top-4 right-4 group-hover:text-primary/15 transition-colors duration-500"
              >
                {pillar.number}
              </span>

              {/* Icon */}
              <div className="mb-8">
                <pillar.icon
                  className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500"
                  strokeWidth={1}
                />
              </div>

              {/* Content */}
              <p className="text-primary text-xs font-sans uppercase tracking-[0.2em] mb-2">
                {pillar.subtitle}
              </p>
              <h3 className="font-serif text-3xl font-medium mb-4 text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {pillar.description}
              </p>

              {/* Dual Application */}
              <div className="space-y-4 pt-4 border-t border-border/30">
                <div>
                  <p className="text-xs text-primary uppercase tracking-wider mb-1">
                    En Lobo Solitario:
                  </p>
                  <p className="text-sm text-cream-muted">{pillar.lobo}</p>
                </div>
                <div>
                  <p className="text-xs text-primary uppercase tracking-wider mb-1">
                    En Binomio:
                  </p>
                  <p className="text-sm text-cream-muted">{pillar.binomio}</p>
                </div>
              </div>

              {/* Bottom Line */}
              <div className="mt-8 pt-6 border-t border-border/30">
                <span className="text-xs text-muted-foreground tracking-wider uppercase group-hover:text-primary transition-colors cursor-pointer">
                  Profundizar →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-cream-muted leading-relaxed border-l-2 border-primary pl-6 text-left">
            Los 3 pilares se aplican en ambos contextos operativos (solo y binomio).
            No entrenas "para ser lobo" o "para ser binomio". Entrenas para ser
            efectivo en ambos contextos, porque{" "}
            <span className="text-foreground font-medium">
              tu realidad operativa no te pregunta cuál prefieres
            </span>
            .
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            variant="hero"
            size="xl"
            className="hover:animate-pulse-gold"
            onClick={() => scrollToSection("recursos")}
          >
            Inicia tu Transformación
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
