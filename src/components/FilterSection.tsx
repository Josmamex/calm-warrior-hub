import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedBackground from "./AnimatedBackground";
import BlurredImageBackground from "./BlurredImageBackground";
import loboSolitario from "@/assets/lobo-solitario.jpg";

const targetAudience = [
  "Elementos que trabajan solos o en binomio y enfrentan la vulnerabilidad de la falta de apoyo.",
  "Quienes entienden que la psique determina el resultado tanto como el arma.",
  "Profesionales que buscan respaldo legal en su actuar.",
];

const notTargetAudience = [
  "Quienes creen que la seguridad se limita a la agresión física.",
  "Buscadores de métodos rápidos sin fundamento táctico ni mental.",
];

const FilterSection = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Blurred Image Background */}
      <BlurredImageBackground 
        imageSrc={loboSolitario} 
        blurAmount={100}
        opacity={0.2}
        overlay="dark"
        animate={true}
      />
      
      {/* Animated Background */}
      <AnimatedBackground variant="waves" intensity="low" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/10 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Ambient glows - Enhanced */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[hsl(160_60%_40%/0.08)] rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-inkoga-red/8 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">
            Filtro
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
            ¿Es Esto <span className="text-gold-gradient text-glow">Para Ti?</span>
          </h2>
        </div>

        {/* Two Column Grid */}
        <div
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-on-scroll ${contentVisible ? "visible" : ""}`}
        >
          {/* Dirigido A - Enhanced with emerald glow */}
          <div className="group relative border-2 border-[hsl(160_60%_40%/0.4)] card-glass p-8 md:p-10 transition-all duration-500 hover:border-[hsl(160_60%_40%/0.6)] overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(160_60%_40%/0.1)] to-transparent" />
            
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,hsl(160_60%_40%/0.1),transparent_70%)]" />
            
            <div className="relative flex items-center gap-3 mb-8">
              <div className="w-10 h-10 flex items-center justify-center bg-[hsl(160_60%_40%/0.2)] border border-[hsl(160_60%_40%/0.4)] group-hover:scale-110 transition-transform duration-300">
                <Check className="w-5 h-5 text-[hsl(160_70%_55%)]" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                Dirigido A
              </h3>
            </div>
            <ul className="relative space-y-6">
              {targetAudience.map((item, index) => (
                <li key={index} className="flex items-start gap-4 group/item">
                  <div className="relative">
                    <Check className="w-5 h-5 text-[hsl(160_70%_55%)] shrink-0 mt-0.5" />
                    <div className="absolute inset-0 blur-md bg-[hsl(160_60%_40%/0.3)] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-cream-muted leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
            
            {/* Shimmer */}
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-30" />
            
            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(160_60%_40%/0.5)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* No Dirigido A - Enhanced with red glow */}
          <div className="group relative border-2 border-inkoga-red/30 card-glass p-8 md:p-10 transition-all duration-500 hover:border-inkoga-red/50 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-inkoga-red/10 to-transparent" />
            
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,hsl(350_75%_45%/0.1),transparent_70%)]" />
            
            <div className="relative flex items-center gap-3 mb-8">
              <div className="w-10 h-10 flex items-center justify-center bg-inkoga-red/20 border border-inkoga-red/30 group-hover:scale-110 transition-transform duration-300">
                <X className="w-5 h-5 text-inkoga-red-light" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                No Dirigido A
              </h3>
            </div>
            <ul className="relative space-y-6">
              {notTargetAudience.map((item, index) => (
                <li key={index} className="flex items-start gap-4 group/item">
                  <div className="relative">
                    <X className="w-5 h-5 text-inkoga-red-light shrink-0 mt-0.5" />
                    <div className="absolute inset-0 blur-md bg-inkoga-red/30 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-cream-muted leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
            
            {/* Shimmer */}
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-30" />
            
            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-inkoga-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
