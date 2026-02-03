import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const targetAudience = [
  "Elementos que trabajan solos o en binomio y enfrentan la vulnerabilidad de la falta de apoyo.",
  "Quienes entienden que la psique determina el resultado tanto como el arma.",
  "Profesionales que buscan respaldo legal en su actuar.",
];

const notTargetAudience = [
  "Quienes creen que la seguridad se limita a la agresión física.",
  "Buscadores de métodos rápidos sin fundamento táctico ni mental.",
];

const FilterSection = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/10 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">
            Filtro
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
            ¿Es Esto <span className="text-gold-gradient">Para Ti?</span>
          </h2>
        </div>

        {/* Two Column Grid */}
        <div
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-on-scroll ${contentVisible ? "visible" : ""}`}
        >
          {/* Dirigido A */}
          <div className="border border-primary/30 bg-primary/5 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/20 border border-primary/30">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                Dirigido A
              </h3>
            </div>
            <ul className="space-y-6">
              {targetAudience.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-cream-muted leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* No Dirigido A */}
          <div className="border border-destructive/30 bg-destructive/5 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 flex items-center justify-center bg-destructive/20 border border-destructive/30">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                No Dirigido A
              </h3>
            </div>
            <ul className="space-y-6">
              {notTargetAudience.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <p className="text-cream-muted leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
