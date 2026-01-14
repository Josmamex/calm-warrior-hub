import { FileText, Video, Award, Download, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const resources = [
  {
    icon: FileText,
    tag: "Gratuito",
    title: "El Manual del Hombre Gris",
    description:
      "Guía esencial para dominar el arte de la invisibilidad táctica. Incluye ejercicios de respiración basados en Systema.",
    content: [
      "Gestión del miedo y limpieza de programación equivocada",
      "Protocolos Maltsev y Koga",
      "Ejercicios de respiración Systema",
      "Invisibilidad operativa",
    ],
    cta: "Descargar PDF gratis",
    ctaIcon: Download,
    featured: false,
  },
  {
    icon: Video,
    tag: "Taller Online",
    title: "Ego Bajo Control",
    description:
      "Workshop intensivo para identificar y neutralizar las debilidades internas que sabotean tu desempeño bajo presión.",
    content: [
      "Identificación de automatismos destructivos",
      "Neutralización del ego como vulnerabilidad",
      "Protocolos de auto-evaluación",
      "Ejercicios prácticos aplicables inmediatamente",
    ],
    note: "Duración: Workshop de 3-4 horas online",
    cta: "Solicitar información",
    ctaIcon: MessageCircle,
    featured: true,
  },
  {
    icon: Award,
    tag: "Certificación",
    title: "CIPE Presencial",
    description:
      "Programa completo de Certificación Internacional en Protección Ejecutiva. Metodología Koga-Maltsev-Vasiliev integrada.",
    content: [
      "Biomecánica Koga: Eficiencia sin fuerza bruta",
      "Recensura Maltsev: Soluciones adaptables",
      "Systema Vasiliev: Control emocional bajo estrés",
      "Ciclo OODA: Decisiones tácticas inteligentes",
    ],
    modalities: [
      "Lobo Solitario (entrenamiento individual)",
      "Binomio Táctico (entrenamiento en pareja)",
      "Equipos corporativos (consultar disponibilidad)",
    ],
    note: "Formación presencial. Duración y costo según modalidad.",
    cta: "Agendar consulta estratégica",
    ctaIcon: Calendar,
    featured: false,
  },
];

const ResourcesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.05);

  return (
    <section id="recursos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 animate-on-scroll ${headerVisible ? "visible" : ""}`}
        >
          <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase mb-4">
            Tu Camino
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6">
            Elige tu Nivel de{" "}
            <span className="text-gold-gradient">Transformación</span>
          </h2>
          <p className="text-cream-muted text-lg">
            Desde recursos gratuitos hasta certificación completa. Cada paso te
            acerca al dominio de ti mismo.
          </p>
        </div>

        {/* Resources Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {resources.map((resource, index) => (
            <div
              key={resource.title}
              className={`group relative p-8 transition-all duration-500 animate-on-scroll stagger-${index + 1} ${cardsVisible ? "visible" : ""} ${
                resource.featured
                  ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary/30 shadow-gold"
                  : "bg-card/50 border border-border/50 hover:border-primary/30"
              }`}
            >
              {/* Tag */}
              <div className="mb-6">
                <span
                  className={`inline-block px-4 py-1 text-xs uppercase tracking-wider ${
                    resource.featured
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {resource.tag}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-6">
                <resource.icon
                  className={`w-12 h-12 ${
                    resource.featured
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-primary"
                  } transition-colors`}
                  strokeWidth={1}
                />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-medium mb-4 text-foreground">
                {resource.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {resource.description}
              </p>

              {/* Content List */}
              <div className="mb-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                  {resource.tag === "Certificación" ? "Metodología:" : "Contenido:"}
                </p>
                <ul className="space-y-2">
                  {resource.content.map((item) => (
                    <li key={item} className="text-sm text-cream-muted flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modalities (for CIPE) */}
              {resource.modalities && (
                <div className="mb-6">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                    Modalidades disponibles:
                  </p>
                  <ul className="space-y-1">
                    {resource.modalities.map((mod) => (
                      <li key={mod} className="text-sm text-primary">
                        ✓ {mod}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Note */}
              {resource.note && (
                <p className="text-xs text-muted-foreground italic mb-6">
                  {resource.note}
                </p>
              )}

              {/* CTA */}
              <Button
                variant={resource.featured ? "hero" : "heroOutline"}
                className="w-full"
              >
                <resource.ctaIcon className="w-4 h-4 mr-2" />
                {resource.cta}
              </Button>

              {/* Featured Glow Effect */}
              {resource.featured && (
                <div className="absolute -inset-px bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm italic max-w-2xl mx-auto">
            <span className="text-foreground font-medium">Importante:</span> No
            vendemos certificados. Desarrollamos capacidad operativa real. Si
            buscas "papel bonito para enmarcar", hay opciones más baratas en el
            mercado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
