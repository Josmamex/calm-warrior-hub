import { Download, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedBackground from "./AnimatedBackground";

const resources = [
  {
    tag: "Gratuito",
    title: "Manual del Hombre Gris",
    description: "Guía + ejercicios Systema",
    cta: "Descargar →",
    ctaIcon: Download,
    variant: "emerald" as const,
    featured: false,
  },
  {
    tag: "Online",
    title: "Ego Bajo Control",
    description: "Workshop 3-4 horas",
    cta: "Info →",
    ctaIcon: MessageCircle,
    variant: "gold" as const,
    featured: true,
  },
  {
    tag: "Presencial",
    title: "Mundo PE",
    description: "Formación completa",
    cta: "Consultar →",
    ctaIcon: Calendar,
    variant: "amber" as const,
    featured: false,
  },
];

const ResourcesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);

  return (
    <section id="recursos" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="mesh" intensity="low" />
      
      {/* Additional ambient effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Emerald glow for "Hombre Gris" theme */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[hsl(160_60%_40%/0.08)] rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

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
                className={`relative h-[400px] border-2 transition-all duration-500 card-glass ${
                  resource.featured
                    ? "border-primary/50 shadow-gold"
                    : resource.variant === "emerald"
                    ? "border-[hsl(160_60%_40%/0.3)] hover:border-[hsl(160_60%_40%/0.6)]"
                    : "border-border/30 hover:border-primary/30"
                }`}
              >
                {/* Gradient Overlay based on variant */}
                <div className={`absolute inset-0 opacity-60 ${
                  resource.variant === "emerald" 
                    ? "bg-gradient-to-b from-[hsl(160_60%_40%/0.2)] to-transparent"
                    : resource.variant === "gold"
                    ? "bg-gradient-to-b from-primary/20 to-transparent"
                    : "bg-gradient-to-b from-amber-500/20 to-transparent"
                }`} />
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8">
                  {/* Tag */}
                  <div>
                    <span
                      className={`inline-block px-4 py-2 text-xs uppercase tracking-wider font-medium ${
                        resource.featured
                          ? "bg-primary text-primary-foreground"
                          : resource.variant === "emerald"
                          ? "bg-[hsl(160_60%_40%/0.2)] text-[hsl(160_70%_55%)] border border-[hsl(160_60%_40%/0.3)]"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {resource.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className={`font-serif text-3xl md:text-4xl font-medium mb-3 ${
                      resource.variant === "emerald" ? "text-emerald-gradient" : "text-foreground"
                    }`}>
                      {resource.title}
                    </h3>
                    <p className="text-cream-muted text-lg">
                      {resource.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <Button
                    variant={resource.featured ? "hero" : "heroOutline"}
                    className={`w-full justify-center gap-2 ${
                      resource.variant === "emerald" 
                        ? "border-[hsl(160_60%_40%/0.5)] hover:bg-[hsl(160_60%_40%/0.1)] hover:border-[hsl(160_60%_40%)]" 
                        : ""
                    }`}
                  >
                    <resource.ctaIcon className="w-4 h-4" />
                    {resource.cta}
                  </Button>
                </div>

                {/* Hover Effect - Enhanced glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  resource.variant === "emerald"
                    ? "shadow-[inset_0_0_80px_hsl(160_60%_40%/0.15)]"
                    : "shadow-[inset_0_0_60px_hsl(38_70%_55%/0.1)]"
                }`} />
                
                {/* Border glow on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  resource.variant === "emerald" ? "emerald-glow" : ""
                }`} />
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
