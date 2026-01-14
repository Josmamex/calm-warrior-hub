import { Button } from "@/components/ui/button";
import { Brain, Eye, Target } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import FloatingParticles from "./FloatingParticles";
import { useParallax, useScrollAnimation } from "@/hooks/useScrollAnimation";

const problems = [
  {
    number: "01",
    icon: Brain,
    title: "El Cortocircuito Interno",
    subtitle: "EL MIEDO TE PARALIZA",
    description:
      "Entrenas técnicas físicas durante años, pero bajo estrés real, tu respiración se detiene, tu cerebro entra en cortocircuito y tu cuerpo se congela. El miedo automático te sabotea.",
    solution:
      "La solución: Gestión del miedo y limpieza de la programación equivocada mediante los protocolos de Maltsev y Koga. Reprogramamos los patrones de reacción automática que te sabotean bajo presión.",
  },
  {
    number: "02",
    icon: Eye,
    title: "La Trampa del Ego",
    subtitle: "LA FUERZA BRUTA TE DESTRUYE",
    description:
      "Crees que debes ser el más fuerte o agresivo. Pero en LATAM, la agresión desmedida te lleva a la cárcel o a la muerte. El ego te hace creer que 'sentirte duro' es sinónimo de efectividad.",
    solution:
      "La solución: Movimientos basados en principios de Systema y Koga: relajación activa, eficiencia y economía de fuerza. Máximo resultado con menor desgaste físico y emocional.",
  },
  {
    number: "03",
    icon: Target,
    title: "La Desconexión Científica",
    subtitle: "COPIAS LO QUE NO APLICA",
    description:
      "Copias estilos militares extranjeros que no se aplican a nuestra realidad legal ni táctica. La mejor escolta es la que nadie nota, pero te enseñaron a 'parecer operador'.",
    solution:
      "La solución: El Ciclo OODA, legalidad táctica y el arte del 'Hombre Gris'. Decisiones inteligentes que te mantienen libre y vivo en el contexto legal latinoamericano.",
  },
];

const HeroSection = () => {
  const textParallax = useParallax(-0.2);
  const { ref: problemsRef, isVisible: problemsVisible } = useScrollAnimation(0.05);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative">
      {/* Hero Part */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/40" />
        </div>

        {/* Floating Particles & Ambient Effects */}
        <FloatingParticles />

        {/* Content */}
        <div ref={textParallax} className="relative z-10 container mx-auto px-6 py-32">
          <div className="max-w-3xl">
            {/* Overline */}
            <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up">
              Protección del Ser · Ciencia del Control
            </p>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-8 opacity-0 animate-fade-up animation-delay-200">
              Domina el Caos{" "}
              <span className="text-gold-gradient">sin Perder</span> la Calma.
            </h1>

            {/* Subtitle */}
            <p className="text-cream-muted text-lg md:text-xl leading-relaxed max-w-2xl mb-10 opacity-0 animate-fade-up animation-delay-400">
              La protección ejecutiva y personal no se trata de violencia ni
              intimidación. Se trata de{" "}
              <span className="text-foreground font-medium">
                Congruencia, Ciencia y Control Interno
              </span>
              . Transforma el estrés y las emociones en tu mayor activo
              estratégico.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-600">
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("recursos")}
              >
                Comienza tu Entrenamiento
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={() => scrollToSection("metodologia")}
              >
                Conoce la Metodología
              </Button>
            </div>

            {/* Credentials */}
            <div className="mt-16 pt-8 border-t border-border/30 opacity-0 animate-fade-up animation-delay-800">
              <p className="text-muted-foreground text-sm tracking-wide">
                25 años enseñando a protectores · Certificaciones internacionales
                · 45 años en el camino de las artes guerreras
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animation-delay-800">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs tracking-widest uppercase">Descubre más</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse" />
          </div>
        </div>
      </div>

      {/* Problems Section (Integrated) */}
      <div className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/20 to-background" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              ¿Por qué fallan los protectores en el{" "}
              <span className="text-gold-gradient">momento de la verdad</span>?
            </h2>
          </div>

          {/* Problems Grid */}
          <div
            ref={problemsRef}
            className="grid md:grid-cols-3 gap-8"
          >
            {problems.map((problem, index) => (
              <div
                key={problem.title}
                className={`group relative bg-card/30 border border-border/30 p-8 hover:bg-card/60 card-hover animate-on-scroll stagger-${index + 1} ${problemsVisible ? "visible" : ""}`}
              >
                {/* Number */}
                <span className="font-serif text-6xl text-primary/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors duration-500">
                  {problem.number}
                </span>

                {/* Icon */}
                <div className="mb-6">
                  <problem.icon
                    className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500"
                    strokeWidth={1}
                  />
                </div>

                {/* Title & Subtitle */}
                <p className="text-primary text-xs font-sans uppercase tracking-[0.2em] mb-2">
                  {problem.subtitle}
                </p>
                <h3 className="font-serif text-2xl font-medium mb-4 text-foreground">
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {problem.description}
                </p>

                {/* Solution */}
                <div className="pt-4 border-t border-border/30">
                  <p className="text-cream-muted text-sm leading-relaxed">
                    {problem.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-cream-muted text-lg leading-relaxed border-l-2 border-primary pl-6 text-left">
              Estos tres problemas no se resuelven con más repeticiones de
              técnicas físicas. Se resuelven{" "}
              <span className="text-foreground font-medium">
                transformando quién eres bajo presión extrema
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
