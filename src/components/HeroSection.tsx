import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-3xl">
          {/* Overline */}
          <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up">
            Protección del Ser • Ciencia del Control
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-8 opacity-0 animate-fade-up animation-delay-200">
            Domina el Caos{" "}
            <span className="text-gold-gradient">sin Disparar</span>{" "}
            una Bala.
          </h1>

          {/* Subtitle */}
          <p className="text-cream-muted text-lg md:text-xl leading-relaxed max-w-2xl mb-10 opacity-0 animate-fade-up animation-delay-400">
            La protección ejecutiva y personal no se trata de fuerza bruta. 
            Se trata de <span className="text-foreground font-medium">Congruencia, Ciencia y Control Interno</span>. 
            Transforma tu miedo en tu mayor activo estratégico.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-600">
            <Button variant="hero" size="xl">
              Comienza tu Entrenamiento
            </Button>
            <Button variant="heroOutline" size="xl">
              Conoce la Metodología
            </Button>
          </div>

          {/* Credentials */}
          <div className="mt-16 pt-8 border-t border-border/30 opacity-0 animate-fade-up animation-delay-800">
            <p className="text-muted-foreground text-sm tracking-wide">
              45 años en artes marciales • 24 años en protección operativa • 
              Certificado por Koga, Vasiliev & Maltsev
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
    </section>
  );
};

export default HeroSection;
