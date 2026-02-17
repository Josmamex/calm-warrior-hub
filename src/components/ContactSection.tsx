import { MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const glowParallax = useParallax(-0.1);

  return (
    <section id="contacto" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/30 to-background" />
      
      {/* Ambient Glow with Parallax */}
      <div ref={glowParallax} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />
      </div>

      {/* Top Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={contentRef}
          className={`max-w-3xl mx-auto text-center animate-on-scroll ${contentVisible ? "visible" : ""}`}
        >
          {/* Header */}
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">
            Contacto
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8">
            <span className="text-gold-gradient">¿Preguntas?</span>
          </h2>

          {/* CTAs - Big and Obvious */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              variant="whatsapp"
              size="xl"
              className="text-lg px-10 py-7 shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:shadow-[0_0_60px_rgba(37,211,102,0.5)] transition-shadow"
              asChild
            >
              <a
                href="https://wa.me/yourNumber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                WhatsApp Directo
              </a>
            </Button>

            <Button
              variant="hero"
              size="xl"
              className="text-lg px-10 py-7 shadow-gold hover:shadow-[0_0_60px_hsl(38_70%_55%/0.4)] transition-shadow"
              asChild
            >
              <a
                href="https://calendly.com/yourCalendly"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Agendar Llamada
              </a>
            </Button>
          </div>

          {/* Subtext */}
          <p className="text-cream-muted text-lg mb-8">
            Escríbeme directo. Respuesta en 24 horas.
          </p>

          {/* Note */}
          <div className="inline-block px-8 py-4 border border-primary/20 bg-primary/5 mb-6">
            <p className="text-foreground font-medium">
              Si no soy la solución correcta, te lo digo directamente.
            </p>
          </div>

          {/* Philosophy */}
          <p className="text-muted-foreground text-sm italic max-w-xl mx-auto">
            No vendemos certificados. Desarrollamos capacidades congruentes con la necesidad real de los protectores.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
