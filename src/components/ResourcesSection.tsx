import { Download, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const resources = [
  {
    tag: "Gratuito",
    title: "Manual del Hombre Gris",
    description: "Guía + ejercicios Systema",
    cta: "Descargar →",
    ctaIcon: Download,
    gradient: "from-emerald-500/20 to-transparent",
    featured: false,
  },
  {
    tag: "Online",
    title: "Ego Bajo Control",
    description: "Workshop 3-4 horas",
    cta: "Info →",
    ctaIcon: MessageCircle,
    gradient: "from-primary/30 to-transparent",
    featured: true,
  },
  {
    tag: "Presencial",
    title: "Mundo PE",
    description: "Formación completa",
    cta: "Consultar →",
    ctaIcon: Calendar,
    gradient: "from-amber-500/20 to-transparent",
    featured: false,
  },
];

const ResourcesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);

  return (
    <section id="recursos" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 animate-on-scroll ${headerVisible ? "visible" : ""}`}
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">
            Tu Camino
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
            Elige tu <span className="text-gold-gradient">Nivel</span>
          </h2>
        </div>

        {/* Resources Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {resources.map((resource, index) => (
            <div
              key={resource.title}
              className={`group relative overflow-hidden animate-on-scroll stagger-${index + 1} ${cardsVisible ? "visible" : ""} ${
                resource.featured ? "md:-mt-4 md:mb-4" : ""
              }`}
            >
              <div
                className={`relative h-[400px] border transition-all duration-500 ${
                  resource.featured
                    ? "border-primary/50 bg-gradient-to-b from-primary/10 to-card shadow-gold"
                    : "border-border/30 bg-card/30 hover:border-primary/30"
                }`}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${resource.gradient} opacity-50`} />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8">
                  {/* Tag */}
                  <div>
                    <span
                      className={`inline-block px-4 py-2 text-xs uppercase tracking-wider font-medium ${
                        resource.featured
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {resource.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-cream-muted text-lg">
                      {resource.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <Button
                    variant={resource.featured ? "hero" : "heroOutline"}
                    className="w-full justify-center gap-2"
                  >
                    <resource.ctaIcon className="w-4 h-4" />
                    {resource.cta}
                  </Button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_hsl(38_70%_55%/0.1)]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm italic">
            No vendemos certificados. <span className="text-foreground">Desarrollamos capacidades congruentes con la necesidad real de los protectores.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
