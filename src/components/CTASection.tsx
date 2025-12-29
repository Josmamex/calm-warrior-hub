import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/20 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Overline */}
          <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase mb-4 animate-on-scroll">
            Comunidad Exclusiva
          </p>

          {/* Title */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 animate-on-scroll">
            ¿Listo Para{" "}
            <span className="text-gold-gradient">Dominar el Caos</span>?
          </h2>

          {/* Description */}
          <p className="text-cream-muted text-lg md:text-xl leading-relaxed mb-10 animate-on-scroll">
            Únete a mi comunidad de protectores ejecutivos. 
            Contenido exclusivo que no encontrarás en libros.
          </p>

          {/* WhatsApp Button */}
          <div className="animate-on-scroll">
            <Button 
              variant="whatsapp" 
              size="xl"
              className="group"
              asChild
            >
              <a 
                href="https://wa.me/yourNumber" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Unirme a la Comunidad
              </a>
            </Button>
          </div>

          {/* Note */}
          <p className="mt-8 text-muted-foreground text-sm italic animate-on-scroll">
            No es para todos. Solo para quienes toman en serio su desarrollo profesional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
