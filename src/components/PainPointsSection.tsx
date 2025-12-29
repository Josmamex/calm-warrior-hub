import { Brain, Eye, Target } from "lucide-react";

const painPoints = [
  {
    icon: Brain,
    title: "El Cortocircuito Interno",
    subtitle: "El Miedo te Paraliza",
    description:
      "Entrenas técnicas físicas durante años, pero bajo estrés real, tu respiración se detiene, tu cerebro entra en 'túnel' y te congelas. Tu 'software' humano falla antes de que puedas usar tu 'hardware'.",
  },
  {
    icon: Eye,
    title: "La Trampa del Ego",
    subtitle: "La Fuerza Bruta te Destruye",
    description:
      "Crees que debes ser el más fuerte o agresivo. Pero en LATAM, la agresión desmedida te lleva a la cárcel o a la muerte. El ego te hace visible; la invisibilidad te mantiene vivo.",
  },
  {
    icon: Target,
    title: "La Desconexión Científica",
    subtitle: "Copias lo que No Aplica",
    description:
      "Copias estilos militares extranjeros que no aplican a nuestra realidad legal ni psicológica. Intentas usar un mapa de guerra para navegar una crisis civil.",
  },
];

const PainPointsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-radial">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase mb-4">
            El Diagnóstico
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6">
            ¿Por qué fallan los protectores en el{" "}
            <span className="text-gold-gradient">momento de la verdad</span>?
          </h2>
          <div className="w-20 h-px bg-primary mx-auto" />
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {painPoints.map((point, index) => (
            <div
              key={point.title}
              className="group relative p-8 bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-gold"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Number */}
              <span className="absolute -top-4 -left-4 font-serif text-6xl text-primary/10 font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="mb-6 p-4 inline-block bg-secondary/50 border border-border/50 group-hover:border-primary/30 transition-colors">
                <point.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-medium mb-2 text-foreground group-hover:text-primary transition-colors">
                {point.title}
              </h3>
              <p className="text-primary text-sm font-sans uppercase tracking-wider mb-4">
                {point.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
