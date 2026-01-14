import { MessageCircle, Calendar, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="contacto" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/20 to-background" />

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={contentRef}
          className={`max-w-4xl mx-auto animate-on-scroll ${contentVisible ? "visible" : ""}`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase mb-4">
              Contacto
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
              Comienza tu{" "}
              <span className="text-gold-gradient">Transformación</span>
            </h2>
            <p className="text-cream-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Si estás leyendo hasta aquí, probablemente reconoces que la gestión
              de tu miedo, ego y automatismos bajo presión podría ser la variable
              entre supervivencia y tragedia.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card 1: Escoltas */}
            <div className="bg-card/30 border border-border/30 p-8 text-center hover:bg-card/60 transition-colors">
              <h3 className="font-serif text-xl font-medium mb-2 text-foreground">
                Para escoltas individuales:
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                WhatsApp directo — Respuesta en 24-48 hrs
              </p>
              <Button variant="whatsapp" size="xl" className="w-full" asChild>
                <a
                  href="https://wa.me/yourNumber"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Card 2: Directors */}
            <div className="bg-card/30 border border-border/30 p-8 text-center hover:bg-card/60 transition-colors">
              <h3 className="font-serif text-xl font-medium mb-2 text-foreground">
                Para directores/coordinadores:
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Consulta estratégica — 30 minutos
              </p>
              <Button variant="hero" size="xl" className="w-full" asChild>
                <a
                  href="https://calendly.com/yourCalendly"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar llamada
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Evaluación de gaps en estructura operativa actual
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-cream-muted mb-12">
            <a
              href="mailto:contacto@josafathherrera.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              contacto@josafathherrera.com
            </a>
            <span className="hidden md:block text-border">|</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Ciudad de México, México
            </span>
          </div>

          {/* Note */}
          <div className="text-center">
            <p className="text-foreground font-medium mb-2">
              No vendo certificados. Desarrollo capacidad operativa real.
            </p>
            <p className="text-muted-foreground text-sm italic">
              Si no soy la solución correcta para tu situación, te lo digo
              directamente en la primera conversación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
