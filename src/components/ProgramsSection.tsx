import { User, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedBackground from "./AnimatedBackground";
import BlurredImageBackground from "./BlurredImageBackground";
import binomio from "@/assets/binomio.jpg";

const programs = [
  {
    badge: "Nivel Entrada",
    title: "Guardian Mindset Foundations",
    subtitle: "Operador Individual",
    description: "Protocolos de alto rendimiento de protección ejecutiva. El antes, durante y después de la protección de personas.",
    includes: [
      "Protocolos de alto rendimiento PE",
      "El antes, durante y después de la protección",
      "Auto-regulación Systema Soviética (calma + recuperación)",
      "Protocolos legales fundamentales",
      "Acceso a comunidad de protectores",
    ],
    modality: "Online: 20 horas (4 semanas) | Presencial: 3 días intensivos",
    icon: User,
    featured: false,
    accentColor: "border-inkoga-silver/30",
    glowColor: "hsl(220 15% 62% / 0.15)",
  },
  {
    badge: "Más Popular",
    title: "Guardian Mindset Tactical",
    subtitle: "Operador + Binomio",
    description: "Sistema de coordinación binomio por niveles. Modelos mentales compartidos.",
    includes: [
      "Todo lo de Guardian Foundations",
      "Sistema de coordinación binomio por niveles",
      "Modelos mentales compartidos",
      "Protocolos pre-reflejos en pareja",
      "Regulación cruzada (co-regulación fisiológica)",
    ],
    modality: "Online: 40 horas (8 semanas) | Presencial: 5 días intensivos",
    icon: Users,
    featured: true,
    accentColor: "border-primary",
    glowColor: "hsl(38 70% 55% / 0.2)",
  },
  {
    badge: "Nivel Avanzado",
    title: "Guardian Mindset TEAMS e Instrucción",
    subtitle: "La Ciencia de la Instrucción Operativa",
    description: "Pedagogía para protección ejecutiva y creación de simulaciones y escenarios.",
    includes: [
      "Todo lo de Guardian Tactical",
      "Pedagogía para protección ejecutiva",
      "Pedagogía para creación de simulaciones y escenarios",
      "Metodologías científicas para tiro real",
      "Soporte continuo",
    ],
    modality: "Presencial: 10 días | Requiere: Guardian Tactical completado",
    icon: Award,
    featured: false,
    accentColor: "border-inkoga-red/30",
    glowColor: "hsl(350 75% 45% / 0.15)",
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
      {/* Blurred Image Background */}
      <BlurredImageBackground 
        imageSrc={binomio} 
        blurAmount={80}
        opacity={0.2}
        overlay="gold"
        animate={true}
      />
      
      {/* Animated Background */}
      <AnimatedBackground variant="aurora" intensity="medium" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Ambient Glow - Enhanced */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-inkoga-red/8 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(160_60%_40%/0.05)] rounded-full blur-[180px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 animate-on-scroll ${headerVisible ? "visible" : ""}`}
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">
            Programas de Formación
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Elige tu <span className="text-gold-gradient text-glow">Nivel</span>
          </h2>
          <p className="text-cream-muted text-lg">
            Tres niveles de preparación según tu situación actual y objetivos.
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
                className={`relative h-full border-2 transition-all duration-500 card-glass ${
                  program.featured
                    ? "border-primary bg-gradient-to-b from-primary/15 to-card shadow-gold"
                    : `${program.accentColor} hover:border-primary/50`
                }`}
              >
                {/* Background glow on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `radial-gradient(ellipse at center, ${program.glowColor}, transparent 70%)` 
                  }}
                />
                
                {/* Badge */}
                <div className="p-6 pb-0 relative">
                  <span
                    className={`inline-block px-4 py-2 text-xs uppercase tracking-wider font-medium ${
                      program.featured
                        ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(38_70%_55%/0.5)]"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {program.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full relative">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 border ${program.featured ? "border-primary bg-primary/10" : "border-border/50 bg-secondary/50"} group-hover:scale-110 transition-transform duration-300`}>
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
                    className={`w-full justify-center ${program.featured ? "shadow-gold hover:shadow-[0_0_40px_hsl(38_70%_55%/0.5)]" : ""}`}
                    onClick={() => scrollToSection("contacto")}
                  >
                    Solicitar Información
                  </Button>
                </div>

                {/* Hover Glow - Enhanced */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 shadow-[inset_0_0_80px_hsl(38_70%_55%/0.1)]" />
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-50" />
                
                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm italic">
            No vendemos certificados. <span className="text-foreground font-medium">Desarrollamos capacidades congruentes con la necesidad real de los protectores.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
