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
    title: "El Miedo Te Paraliza",
    description: "Bajo estrés real, tu cerebro se apaga. No es debilidad. Nadie te preparó para esto.",
  },
  {
    image: problemEgo,
    title: "La Fuerza Te Destruye",
    description: "Agresión desmedida = prisión. En LATAM, el ego te lleva a la cárcel o la muerte.",
  },
  {
    image: problemCopy,
    title: "Copias Lo Que No Aplica",
    description: "Estilos extranjeros que no funcionan en nuestra realidad legal ni táctica.",
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
                Protección del Ser · Ciencia del Control
              </span>
            </div>

            {/* Main Headline - BIG */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] mb-8 opacity-0 animate-fade-up animation-delay-200">
              Domina el Caos
              <br />
              <span className="text-gold-gradient">sin Perder la Calma</span>
            </h1>

            {/* CTA - Prominent */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up animation-delay-400">
              <Button
                variant="hero"
                size="xl"
                className="text-lg px-10 py-6 shadow-gold hover:shadow-[0_0_60px_hsl(38_70%_55%/0.4)] transition-shadow"
                onClick={() => scrollToSection("contacto")}
              >
                Comienza Ahora →
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
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
              ¿Te suena <span className="text-gold-gradient">familiar</span>?
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

          {/* Hook */}
          <div className="mt-16 text-center">
            <p className="font-serif text-2xl md:text-3xl text-foreground">
              No eres el único. <span className="text-primary">Y tiene solución.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
