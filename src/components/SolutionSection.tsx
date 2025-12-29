import { Shield, Activity, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Shield,
    number: "I",
    title: "Psique",
    subtitle: "Control Mental",
    description:
      "Gestión del miedo y limpieza de la programación equivocada mediante los protocolos de Maltsev y Koga. Reprogramamos los patrones de reacción automática que te sabotean bajo presión.",
  },
  {
    icon: Activity,
    number: "II",
    title: "Físico",
    subtitle: "Biomecánica Eficiente",
    description:
      "Movimientos basados en principios de Systema y Koga: relajación activa, eficiencia y economía de fuerza. Máximo resultado con menor desgaste.",
  },
  {
    icon: Compass,
    number: "III",
    title: "Táctica",
    subtitle: "Estrategia Aplicada",
    description:
      "El Ciclo OODA, legalidad táctica y el arte del 'Hombre Gris'. Decisiones inteligentes que te mantienen libre y vivo en el contexto legal latinoamericano.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/30 to-background" />
      <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase mb-4">
            La Solución
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-8">
            Protección del Ser:{" "}
            <span className="text-gold-gradient">La Ciencia de la Supervivencia</span>
          </h2>
          <p className="text-cream-muted text-lg leading-relaxed">
            No enseño a combatir. Enseño a <span className="text-foreground">apagar la señal del ego, la sobre-confianza y la robotización</span> y 
            a encender el guerrero y la mente estratégica. Utilizando las metodologías de mis maestros: 
            los principios de control de Robert Koga, la ciencia de las emociones de Systema, 
            la ciencia de Maltsev/Force Science y el control de la adrenalina de Thomas, 
            reprogramamos tus instintos.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-1">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group relative bg-card/30 border-t border-border/30 p-10 hover:bg-card/60 transition-all duration-500"
            >
              {/* Roman Numeral */}
              <span className="font-serif text-7xl text-primary/5 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">
                {pillar.number}
              </span>

              {/* Icon */}
              <div className="mb-8">
                <pillar.icon className="w-10 h-10 text-primary" strokeWidth={1} />
              </div>

              {/* Content */}
              <p className="text-primary text-xs font-sans uppercase tracking-[0.2em] mb-2">
                {pillar.subtitle}
              </p>
              <h3 className="font-serif text-3xl font-medium mb-4 text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-8 pt-6 border-t border-border/30">
                <span className="text-xs text-muted-foreground tracking-wider uppercase group-hover:text-primary transition-colors cursor-pointer">
                  Profundizar →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="hero" size="xl">
            Inicia tu Transformación
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
