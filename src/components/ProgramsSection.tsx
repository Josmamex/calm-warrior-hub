import { User, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const programs = [
  {
    badge: "Nivel Entrada",
    title: "Guardian Foundations",
    subtitle: "Operador Individual",
    description: "Domina los fundamentos de la operación en solitario. Para escoltas que trabajan solos la mayor parte del tiempo.",
    includes: [
      "Neurociencia del desempeño bajo estrés",
      "Protocolos específicos para 1 persona",
      "Auto-regulación Systema (respiración + recovery)",
      "Toma de decisiones sin validación",
      "Supervivencia legal básica",
      "Acceso a comunidad Guardian",
    ],
    modality: "Online: 20 horas • Presencial: 3 días",
    icon: User,
    featured: false,
    accentColor: "border-inkoga-silver/30",
  },
  {
    badge: "Más Popular",
    title: "Guardian Tactical",
    subtitle: "Operador + Binomio",
    description: "Certificación dual: opera solo Y coordinado. Para escoltas que alternan entre ambas configuraciones.",
    includes: [
      "Todo lo de Guardian Foundations",
      "Sistema de coordinación binomio (4 niveles)",
      "Shared mental models",
      "Protocolos pre-reflejos en pareja",
      "Regulación cruzada (co-regulation)",
      "Certificación: Guardian Binomio Táctico",
    ],
    modality: "Online: 40 horas • Presencial: 5 días",
    icon: Users,
    featured: true,
    accentColor: "border-primary",
  },
  {
    badge: "Nivel Avanzado",
    title: "Guardian Instructor",
    subtitle: "Forma a Otros",
    description: "Certifícate para enseñar la metodología Guardian. Para líderes de equipo y directores de seguridad.",
    includes: [
      "Todo lo de Guardian Tactical",
      "Pedagogía para protección ejecutiva",
      "Diseño de simulacros",
      "Evaluación de competencias",
      "Licencia para usar metodología",
      "Soporte continuo para instructores",
    ],
    modality: "Presencial: 10 días (requiere Tactical)",
    icon: Award,
    featured: false,
    accentColor: "border-inkoga-red/30",
  },
];

const ProgramsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="programas" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-inkoga-red/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 animate-on-scroll ${headerVisible ? "visible" : ""}`}
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">
            Programas de Certificación
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Elige tu <span className="text-gold-gradient">Nivel</span>
          </h2>
          <p className="text-cream-muted text-lg">
            Tres niveles de preparación. Elige según tu situación actual.
          </p>
        </div>

        {/* Programs Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`group relative overflow-hidden animate-on-scroll stagger-${index + 1} ${cardsVisible ? "visible" : ""} ${
                program.featured ? "md:-mt-4 md:mb-4" : ""
              }`}
            >
              <div
                className={`relative h-full border-2 transition-all duration-500 bg-card/50 backdrop-blur-sm ${
                  program.featured
                    ? "border-primary bg-gradient-to-b from-primary/10 to-card shadow-gold"
                    : `${program.accentColor} hover:border-primary/50`
                }`}
              >
                {/* Badge */}
                <div className="p-6 pb-0">
                  <span
                    className={`inline-block px-4 py-2 text-xs uppercase tracking-wider font-medium ${
                      program.featured
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {program.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 border ${program.featured ? "border-primary bg-primary/10" : "border-border/50 bg-secondary/50"}`}>
                      <program.icon className={`w-6 h-6 ${program.featured ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-medium text-foreground">
                        {program.title}
                      </h3>
                      <p className="text-sm text-primary">{program.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-cream-muted text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Includes */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {program.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-cream-muted">
                        <span className="text-primary mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Modality */}
                  <p className="text-xs text-muted-foreground mb-6 border-t border-border/30 pt-4">
                    {program.modality}
                  </p>

                  {/* CTA */}
                  <Button
                    variant={program.featured ? "hero" : "heroOutline"}
                    className="w-full justify-center"
                    onClick={() => scrollToSection("contacto")}
                  >
                    Solicitar Información
                  </Button>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_hsl(38_70%_55%/0.1)]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
