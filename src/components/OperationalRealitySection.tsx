import gapComparison from "@/assets/gap-comparison.jpg";
import loboSolitario from "@/assets/lobo-solitario.jpg";
import binomioImg from "@/assets/binomio.jpg";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import AnimatedBackground from "./AnimatedBackground";

const OperationalRealitySection = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);
  const bgParallax = useParallax(-0.2);

  return (
    <section id="realidad-operativa" className="relative overflow-hidden">
      {/* Full-width Visual Comparison */}
      <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground variant="particles" intensity="low" />
        
        {/* Background Image with Parallax */}
        <div ref={bgParallax} className="absolute inset-0 scale-110">
          <img
            src={gapComparison}
            alt="Gap de entrenamiento: 73% vs 92%"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        </div>

        {/* Stats Overlay */}
        <div
          ref={statsRef}
          className={`relative z-10 container mx-auto px-6 text-center animate-on-scroll-scale ${statsVisible ? "visible" : ""}`}
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-6 font-medium">
            El Problema que Nadie Resuelve
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Left Stat - Enhanced with glow */}
            <div className="text-center relative">
              <span className="block font-serif text-8xl md:text-9xl text-primary font-medium text-glow">
                73%
              </span>
              {/* Glow behind */}
              <div className="absolute inset-0 blur-3xl bg-primary/20 -z-10" />
              <p className="text-foreground text-lg mt-2">
                Operaciones reales
              </p>
              <p className="text-muted-foreground text-sm">
                1-2 escoltas
              </p>
            </div>

            {/* VS - Animated */}
            <span className="text-5xl md:text-6xl text-muted-foreground font-light opacity-50 animate-pulse">
              VS
            </span>

            {/* Right Stat */}
            <div className="text-center">
              <span className="block font-serif text-8xl md:text-9xl text-muted-foreground/50 font-medium">
                92%
              </span>
              <p className="text-muted-foreground text-lg mt-2">
                Entrenamiento disponible
              </p>
              <p className="text-muted-foreground/60 text-sm">
                Para equipos de 4+
              </p>
            </div>
          </div>

          {/* Tagline */}
          <p className="mt-12 font-serif text-xl md:text-2xl text-foreground max-w-2xl mx-auto">
            Te entrenan para equipos grandes que difícilmente tendrás.
            <br />
            <span className="text-primary text-glow">Nosotros te preparamos para tu realidad.</span>
          </p>
        </div>
      </div>

      {/* Two Cards: Lobo Solitario & Binomio */}
      <div className="py-24 relative">
        <AnimatedBackground variant="mesh" intensity="low" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/20 to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div
            ref={cardsRef}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {/* Card 1: Lobo Solitario */}
            <div
              className={`group relative overflow-hidden h-[500px] animate-on-scroll stagger-1 ${cardsVisible ? "visible" : ""}`}
            >
              {/* Background Image */}
              <img
                src={loboSolitario}
                alt="Lobo Solitario - Operación Individual"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              
              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-inkoga-silver/40 transition-colors duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-4xl mb-4">🐺</span>
                <h3 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-2">
                  Lobo Solitario
                </h3>
                <p className="text-primary text-sm uppercase tracking-wider mb-4">
                  Sin backup disponible
                </p>
                <ul className="space-y-2 text-cream-muted">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Decisión autónoma total
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Invisibilidad obligatoria
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Control emocional sin apoyo
                  </li>
                </ul>
              </div>

              {/* Hover Glow - Enhanced */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 shadow-[inset_0_0_100px_hsl(220_15%_62%/0.15)]" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-inkoga-silver via-inkoga-silver-light to-inkoga-silver" />
              </div>
            </div>

            {/* Card 2: Binomio */}
            <div
              className={`group relative overflow-hidden h-[500px] animate-on-scroll stagger-2 ${cardsVisible ? "visible" : ""}`}
            >
              {/* Background Image */}
              <img
                src={binomioImg}
                alt="Binomio Táctico - 2 Escoltas"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              
              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/40 transition-colors duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-4xl mb-4">🤝</span>
                <h3 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-2">
                  Binomio Táctico
                </h3>
                <p className="text-primary text-sm uppercase tracking-wider mb-4">
                  2 escoltas coordinados
                </p>
                <ul className="space-y-2 text-cream-muted">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Coordinación sin radio
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Testigo cruzado legal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Roles intercambiables
                  </li>
                </ul>
              </div>

              {/* Hover Glow - Enhanced */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 shadow-[inset_0_0_100px_hsl(38_70%_55%/0.15)]" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-gold-light to-primary" />
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-16 text-center">
            <p className="font-serif text-xl md:text-2xl text-cream-muted max-w-3xl mx-auto">
              No puedes especializarte solo en una configuración.
              <br />
              <span className="text-foreground font-medium">
                Tu realidad operativa cambia semana a semana.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* GAP Table Section */}
      <div className="py-24 relative">
        <AnimatedBackground variant="waves" intensity="low" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/10 to-background" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Table Header */}
            <div className="text-center mb-12">
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                El <span className="text-gold-gradient text-glow">GAP</span> de Preparación
              </h3>
            </div>

            {/* Table - Enhanced with glass effect */}
            <div className="overflow-x-auto card-glass p-6 border border-border/30">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-primary/30">
                    <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">
                      Configuración
                    </th>
                    <th className="text-center py-4 px-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">
                      % Operaciones
                    </th>
                    <th className="text-center py-4 px-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">
                      % Entrenamiento
                    </th>
                    <th className="text-center py-4 px-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">
                      GAP
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/20 hover:bg-primary/5 transition-colors group">
                    <td className="py-4 px-4 text-foreground font-medium">1 escolta solo</td>
                    <td className="py-4 px-4 text-center text-cream-muted">~45%</td>
                    <td className="py-4 px-4 text-center text-cream-muted">&lt;5%</td>
                    <td className="py-4 px-4 text-center text-inkoga-red font-bold group-hover:text-glow">-40%</td>
                  </tr>
                  <tr className="border-b border-border/20 hover:bg-primary/5 transition-colors group">
                    <td className="py-4 px-4 text-foreground font-medium">2 escoltas (binomio)</td>
                    <td className="py-4 px-4 text-center text-cream-muted">~28%</td>
                    <td className="py-4 px-4 text-center text-cream-muted">&lt;3%</td>
                    <td className="py-4 px-4 text-center text-inkoga-red font-bold group-hover:text-glow">-25%</td>
                  </tr>
                  <tr className="border-b border-border/20 hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-4 text-foreground font-medium">3-5 escoltas</td>
                    <td className="py-4 px-4 text-center text-cream-muted">~20%</td>
                    <td className="py-4 px-4 text-center text-cream-muted">~20%</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">0%</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-4 text-foreground font-medium">4+ escoltas</td>
                    <td className="py-4 px-4 text-center text-cream-muted">~7%</td>
                    <td className="py-4 px-4 text-center text-cream-muted">~72%</td>
                    <td className="py-4 px-4 text-center text-primary font-bold">+65%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Interpretation - Enhanced */}
            <div className="mt-8 p-6 border-2 border-inkoga-red/30 bg-inkoga-red/5 card-glass relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-inkoga-red/10 via-transparent to-inkoga-red/10 animate-pulse" />
              <p className="relative text-sm text-cream-muted mb-2">
                <span className="text-foreground font-medium">Interpretación:</span> El 73% de tu tiempo operativo recibe menos del 8% del entrenamiento disponible.
              </p>
              <p className="relative text-sm text-inkoga-red font-medium">
                Resultado: Cuando enfrentas tu realidad más común, no sabes qué hacer porque te entrenaron para una fantasía operativa.
              </p>
            </div>

            {/* Source */}
            <p className="mt-4 text-xs text-muted-foreground text-center italic">
              Fuente: Análisis TorchStone Global 2024, Royal American Group, TSS LATAM — Operaciones PE documentadas en México, Colombia, Brasil y Argentina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalRealitySection;
