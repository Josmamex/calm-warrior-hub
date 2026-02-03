import { Button } from "@/components/ui/button";
import heroTactical from "@/assets/hero-tactical.jpg";
import problemFear from "@/assets/problem-fear.jpg";
import problemEgo from "@/assets/problem-ego.jpg";
import problemCopy from "@/assets/problem-copy.jpg";
import FloatingParticles from "./FloatingParticles";
import { useParallax, useScrollAnimation } from "@/hooks/useScrollAnimation";

const problems = [
  {
    image: problemFear,
    title: "El Entorno: La Soledad del Elemento",
    description: "El agresor tiene la ventaja de la sorpresa. El protector tiene la desventaja de la multifuncionalidad: conductor, escolta y avanzada simultáneos. Se requiere capacidad para priorizar y resolver sin margen de error.",
  },
  {
    image: problemEgo,
    title: "La Fisiología: El Bloqueo Interno",
    description: "Bajo estrés, el mayor adversario es el propio sistema nervioso. El túnel visual y el bloqueo auditivo anulan la capacidad de respuesta. Utilizamos Systema para blindar la psique y mantener la claridad mental bajo fuego.",
  },
  {
    image: problemCopy,
    title: "La Ley: El Riesgo Penal",
    description: "Neutralizar la amenaza sin justificación es una derrota legal. El marco jurídico exige racionalidad. Enseñamos a controlar con fundamentos técnicos que resisten el escrutinio de un juez, evitando la prisión por uso indebido de la fuerza.",
  },
];

const HeroSection = () => {
  const bgParallax = useParallax(-0.3);
  const textParallax = useParallax(-0.1);
  const { ref: problemsRef, isVisible: problemsVisible } = useScrollAnimation(0.1);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative">
      {/* HERO - Full Visual Impact */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <div
          ref={bgParallax}
          className="absolute inset-0 scale-110"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroTactical})` }}
          />
          {/* Overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
        </div>

        {/* Floating Particles & Ambient Glow */}
        <FloatingParticles />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
        </div>

        {/* Content - Minimal Text */}
        <div ref={textParallax} className="relative z-10 container mx-auto px-6 py-32 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-background/50 backdrop-blur-sm mb-8 opacity-0 animate-fade-up">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">
                Ciencia del Control · Protección 1-2 Elementos
              </span>
            </div>

            {/* Main Headline - BIG */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] mb-6 opacity-0 animate-fade-up animation-delay-200">
              Dominar el caos
              <br />
              <span className="text-gold-gradient">sin perder la calma.</span>
            </h1>

            {/* Subtitle */}
            <div className="max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up animation-delay-300">
              <p className="text-cream-muted text-lg md:text-xl leading-relaxed mb-4">
                La doctrina convencional entrena para equipos de cuatro. 
                La realidad exige eficacia en solitario o en binomio.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Desde hace 25 años preparando protectores en Finlandia, Holanda, 
                Brasil, Canadá y México. Cuando no hay unidad de apoyo, 
                tu psique, tu táctica y tu técnica son el único recurso 
                para resolver la asimetría.
              </p>
            </div>

            {/* CTA - Prominent */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up animation-delay-400">
              <Button
                variant="hero"
                size="xl"
                className="text-lg px-10 py-6 shadow-gold hover:shadow-[0_0_60px_hsl(38_70%_55%/0.4)] transition-shadow"
                onClick={() => scrollToSection("contacto")}
              >
                Solicitar Información
              </Button>
            </div>

            {/* Credential Badge */}
            <div className="mt-16 inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 opacity-0 animate-fade-up animation-delay-600">
              <span className="text-3xl font-serif text-primary font-medium">1er</span>
              <span className="text-sm text-cream-muted text-left leading-tight">
                Mexicano certificado<br />ONU en Seguridad
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animation-delay-800">
          <div className="flex flex-col items-center gap-3">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* PROBLEMS - Visual Cards with Images */}
      <div className="py-24 md:py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/30 to-background" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16">
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">
              La Realidad Adversa
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium max-w-4xl mx-auto">
              Tres frentes críticos que el entrenamiento estándar <span className="text-gold-gradient">ignora.</span>
            </h2>
          </div>

          {/* Problem Cards - Image First */}
          <div
            ref={problemsRef}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {problems.map((problem, index) => (
              <div
                key={problem.title}
                className={`group relative overflow-hidden animate-on-scroll stagger-${index + 1} ${problemsVisible ? "visible" : ""}`}
              >
                {/* Image */}
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={problem.image}
                    alt={problem.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-3 drop-shadow-lg">
                      {problem.title}
                    </h3>
                    <p className="text-cream-muted text-sm md:text-base leading-relaxed">
                      {problem.description}
                    </p>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
