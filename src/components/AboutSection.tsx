import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="sobre-mi" className="py-24 md:py-32 bg-gradient-radial relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image/Visual */}
          <div
            ref={imageRef}
            className={`relative animate-on-scroll-left ${imageVisible ? "visible" : ""}`}
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-charcoal-light to-card border border-border/30 relative overflow-hidden card-hover">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-8 left-8 w-32 h-32 border border-primary/20" />
                <div className="absolute bottom-8 right-8 w-48 h-48 border border-primary/10" />
              </div>

              {/* Placeholder for actual photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <span className="font-serif text-4xl text-primary">JH</span>
                  </div>
                  <p className="text-muted-foreground text-sm italic">
                    "Somos un breve momento físico"
                  </p>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-16 h-px bg-primary" />
              <div className="absolute top-0 left-0 w-px h-16 bg-primary" />
              <div className="absolute bottom-0 right-0 w-16 h-px bg-primary" />
              <div className="absolute bottom-0 right-0 w-px h-16 bg-primary" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 shadow-gold">
              <div className="text-center">
                <span className="block font-serif text-4xl font-medium text-primary-foreground">
                  45
                </span>
                <span className="text-xs uppercase tracking-widest text-primary-foreground/80">
                  Años
                </span>
                <span className="block text-[10px] uppercase tracking-wider text-primary-foreground/60 mt-1">
                  Artes Guerreras
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            ref={contentRef}
            className={`lg:pl-8 animate-on-scroll-right ${contentVisible ? "visible" : ""}`}
          >
            <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase mb-4">
              Sobre Mí
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-8">
              Josafath Herrera
            </h2>

            <div className="space-y-6 text-cream-muted leading-relaxed">
              <p>
                <span className="text-foreground font-medium">25 años</span>{" "}
                dedicados a la enseñanza de protectores operativos de alto riesgo y
                más de <span className="text-foreground font-medium">45 años</span>{" "}
                caminando el sendero del guerrero y las artes guerreras.
              </p>

              <p>
                He sido entrenado por leyendas como{" "}
                <span className="text-primary">Robert Koga</span>,
                <span className="text-primary"> Vladimir Vasiliev</span> (Spetsnaz),
                <span className="text-primary"> Matt Thomas</span> y el científico
                <span className="text-primary"> Oleg Maltsev</span>. Fui el primer
                mexicano certificado en el sistema de entrenamiento con simulaciones
                de estrés y certificado por la Organización de las Naciones Unidas
                en Seguridad.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-10 pl-6 border-l-2 border-primary">
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="font-serif text-xl italic text-foreground leading-relaxed">
                Mi misión no es crear robots violentos, sino desarrollar seres
                humanos integrales que puedan protegerse a sí mismos y a otros con
                inteligencia, ética y una calma inquebrantable.
              </p>
            </blockquote>

            {/* Credentials List */}
            <div className="mt-10 pt-8 border-t border-border/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Sistemas de Combate
                  </p>
                  <ul className="space-y-1 text-sm text-cream-muted">
                    <li>• Sistema Koga</li>
                    <li>• Systema Vasiliev</li>
                    <li>• Model Mugging</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Certificaciones
                  </p>
                  <ul className="space-y-1 text-sm text-cream-muted">
                    <li>• ONU (Seguridad)</li>
                    <li>• H&K</li>
                    <li>• Simmunition</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Especialización
                  </p>
                  <ul className="space-y-1 text-sm text-cream-muted">
                    <li>• Protección Ejecutiva</li>
                    <li>• Psicología de Combate</li>
                    <li>• Alto Estrés</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="mt-10 pt-8 border-t border-border/30">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                Filosofía de Trabajo:
              </p>
              <p className="text-cream-muted leading-relaxed">
                No enseño técnicas de combate. Enseño lo que me costó décadas
                descubrir: cómo apagar la señal del ego, la sobre-confianza y los
                automatismos que te convierten en víctima — y cómo encender al
                guerrero consciente.
              </p>
              <p className="text-cream-muted leading-relaxed mt-4">
                Lo aprendí de Koga, Vasiliev, Maltsev y Thomas. Ahora lo transmito:
                reprogramamos tus instintos para que sirvan, no para que te
                traicionen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
