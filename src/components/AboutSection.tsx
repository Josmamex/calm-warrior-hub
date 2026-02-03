import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const decorParallax = useParallax(0.2);

  return (
    <section id="sobre-mi" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Decorative Elements with Parallax */}
      <div ref={decorParallax} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 border border-primary/10 rotate-45" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 border border-primary/5 rotate-12" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={contentRef}
          className={`max-w-4xl mx-auto animate-on-scroll ${contentVisible ? "visible" : ""}`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">
              Autoridad
            </p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-4">
              Josafath Herrera
            </h2>
            <p className="text-cream-muted text-lg">
              CEO INKOGA · 25 Años de Experiencia Internacional
            </p>
          </div>

          {/* Bio Text */}
          <div className="text-center mb-12 space-y-6">
            <p className="text-cream-muted text-lg leading-relaxed max-w-2xl mx-auto">
              Trayectoria operativa desarrollada en Finlandia, Holanda, Brasil, 
              Canadá y México. Experiencia real en entornos de alto riesgo 
              sin estructura de apoyo convencional.
            </p>
            <p className="text-cream-muted text-lg leading-relaxed max-w-2xl mx-auto">
              1er mexicano certificado por la ONU en Administración de Seguridad 
              y Representante del Sistema Koga en LATAM.
            </p>
          </div>

          {/* Key Quote */}
          <div className="text-center mb-12">
            <blockquote className="font-serif text-2xl md:text-3xl text-primary/90 italic leading-relaxed max-w-3xl mx-auto">
              "Aquí no hay teorías; hay ciencia del control aplicada 
              a la resolución de conflictos para el elemento solo y el binomio."
            </blockquote>
          </div>

          {/* Visual Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 border border-border/30 bg-card/30 group hover:border-primary/30 transition-colors">
              <span className="block font-serif text-4xl md:text-5xl text-primary font-medium mb-2">25</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Años<br/>Enseñando</span>
            </div>
            <div className="text-center p-6 border border-border/30 bg-card/30 group hover:border-primary/30 transition-colors">
              <span className="block font-serif text-4xl md:text-5xl text-primary font-medium mb-2">45</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Años<br/>Artes Guerreras</span>
            </div>
            <div className="text-center p-6 border border-border/30 bg-card/30 group hover:border-primary/30 transition-colors">
              <span className="block font-serif text-4xl md:text-5xl text-primary font-medium mb-2">1er</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Mexicano<br/>ONU Seguridad</span>
            </div>
            <div className="text-center p-6 border border-border/30 bg-card/30 group hover:border-primary/30 transition-colors">
              <span className="block font-serif text-4xl md:text-5xl text-primary font-medium mb-2">4</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Maestros<br/>Legendarios</span>
            </div>
          </div>

          {/* Masters */}
          <div className="mb-16">
            <p className="text-center text-muted-foreground text-sm uppercase tracking-wider mb-6">
              Formación Directa Con:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Robert Koga", "Vladimir Vasiliev", "Matt Thomas", "Konstantin Komarov"].map((master) => (
                <span
                  key={master}
                  className="px-6 py-3 border border-primary/30 bg-primary/5 text-primary font-medium text-sm"
                >
                  {master}
                </span>
              ))}
            </div>
          </div>


          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-cream-muted mb-12">
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> ONU (Seguridad)
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> H&K
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> Simmunition
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> Sistema Koga
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> Systema Vasiliev
            </span>
          </div>

          {/* International Experience */}
          <div className="text-center border-t border-border/30 pt-8">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Experiencia Internacional
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Finlandia", "Holanda", "Brasil", "Estados Unidos", "Canadá", "México"].map((country) => (
                <span
                  key={country}
                  className="px-4 py-2 border border-border/30 bg-card/30 text-cream-muted text-sm"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
