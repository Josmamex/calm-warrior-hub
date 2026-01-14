import { Users, User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const gapData = [
  { config: "1 escolta solo", realPct: "~45%", trainPct: "<5%", gap: "-40%" },
  { config: "2 escoltas (binomio)", realPct: "~28%", trainPct: "<3%", gap: "-25%" },
  { config: "3-5 escoltas", realPct: "~20%", trainPct: "~20%", gap: "0%" },
  { config: "6+ escoltas (equipo completo)", realPct: "~7%", trainPct: "~72%", gap: "+65%" },
];

const OperationalRealitySection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.05);
  const { ref: tableRef, isVisible: tableVisible } = useScrollAnimation(0.1);

  return (
    <section id="realidad-operativa" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/30 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-4xl mx-auto mb-16 animate-on-scroll ${headerVisible ? "visible" : ""}`}
        >
          <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase mb-4">
            La Realidad que Nadie Menciona
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-8">
            Tu Realidad Operativa:{" "}
            <span className="text-gold-gradient">1-2 Personas</span>
          </h2>

          {/* Stats */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            <div className="text-center">
              <span className="block font-serif text-6xl md:text-7xl text-primary font-medium">
                73%
              </span>
              <p className="text-cream-muted text-sm mt-2 max-w-[200px]">
                de las operaciones en LATAM se ejecutan con 1-2 escoltas
              </p>
            </div>

            <span className="text-4xl text-muted-foreground font-light">VS</span>

            <div className="text-center">
              <span className="block font-serif text-6xl md:text-7xl text-muted-foreground font-medium">
                92%
              </span>
              <p className="text-cream-muted text-sm mt-2 max-w-[200px]">
                del entrenamiento disponible está diseñado para equipos de 6+
              </p>
            </div>
          </div>

          <p className="text-cream-muted text-lg mt-12 max-w-2xl mx-auto">
            La mayoría de los escoltas enfrentan DOS configuraciones operativas
            constantemente. No puedes especializarte solo en una, porque tu
            realidad laboral cambia semana a semana.
          </p>
        </div>

        {/* Two Cards: Lobo Solitario & Binomio */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {/* Card 1: Lobo Solitario */}
          <div
            className={`group relative bg-card/30 border border-border/30 p-8 md:p-10 hover:bg-card/60 card-hover animate-on-scroll stagger-1 ${cardsVisible ? "visible" : ""}`}
          >
            {/* Icon */}
            <div className="mb-6 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <User className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-medium text-foreground">
                  Operación Individual
                </h3>
                <p className="text-primary text-xs uppercase tracking-wider">
                  "Lobo Solitario" — Sin backup disponible
                </p>
              </div>
            </div>

            {/* When */}
            <div className="mb-6">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                ¿Cuándo operas así?
              </p>
              <ul className="space-y-2 text-sm text-cream-muted">
                <li>• Cliente pequeño (1 ejecutivo, presupuesto limitado)</li>
                <li>• Eventos privados de bajo perfil</li>
                <li>• Traslados rutinarios</li>
                <li>• Situaciones donde 2 escoltas "llaman demasiado la atención"</li>
              </ul>
            </div>

            {/* Challenges */}
            <div className="mb-6">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                Desafíos específicos:
              </p>
              <ul className="space-y-2 text-sm text-cream-muted">
                <li>• Decisión autónoma total: No hay a quién consultar en tiempo real</li>
                <li>• Estrés psicológico extremo: No hay backup si fallas</li>
                <li>• Velocidad crítica: Actúas o mueres, no hay segunda línea</li>
                <li>• Invisibilidad obligatoria: "Hombre Gris" es supervivencia</li>
              </ul>
            </div>

            {/* What you need */}
            <div className="pt-6 border-t border-border/30">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                Qué necesitas dominar:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="text-primary">✓ Adaptabilidad sin protocolo rígido</li>
                <li className="text-primary">✓ Control emocional sin apoyo externo (Systema)</li>
                <li className="text-primary">✓ Respuesta pre-consciente sub-segundo (Recensura Maltsev)</li>
                <li className="text-primary">✓ Gestión del miedo en soledad operativa (Koga mindset)</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Binomio */}
          <div
            className={`group relative bg-card/30 border border-border/30 p-8 md:p-10 hover:bg-card/60 card-hover animate-on-scroll stagger-2 ${cardsVisible ? "visible" : ""}`}
          >
            {/* Icon */}
            <div className="mb-6 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Users className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-medium text-foreground">
                  Operación Binomio
                </h3>
                <p className="text-primary text-xs uppercase tracking-wider">
                  2 escoltas coordinados — Testigo cruzado
                </p>
              </div>
            </div>

            {/* When */}
            <div className="mb-6">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                ¿Cuándo operas así?
              </p>
              <ul className="space-y-2 text-sm text-cream-muted">
                <li>• Cliente corporativo (presupuesto permite 2 elementos)</li>
                <li>• Alto riesgo (amenaza documentada)</li>
                <li>• Eventos públicos con múltiples variables</li>
                <li>• Operaciones que requieren cobertura 360°</li>
              </ul>
            </div>

            {/* Challenges */}
            <div className="mb-6">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                Desafíos específicos:
              </p>
              <ul className="space-y-2 text-sm text-cream-muted">
                <li>• Coordinación sin radio: Comunicación debe ser imperceptible</li>
                <li>• Confianza mutua absoluta: Tu vida depende del otro</li>
                <li>• Roles intercambiables: Primario/secundario fluyen según situación</li>
                <li>• Testigo cruzado: Documentación legal mutua de acciones</li>
              </ul>
            </div>

            {/* What you need */}
            <div className="pt-6 border-t border-border/30">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                Qué necesitas dominar:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="text-primary">✓ Lenguaje no verbal estandarizado (sin palabras)</li>
                <li className="text-primary">✓ Cobertura 360° sin zonas muertas</li>
                <li className="text-primary">✓ Decisión distribuida (no centralizada en uno)</li>
                <li className="text-primary">✓ Protección legal mutua (justificación cruzada)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Truth Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card/50 border border-primary/20 p-8 md:p-12">
            <h3 className="text-primary text-xs font-sans uppercase tracking-[0.2em] mb-4">
              La Verdad que Nadie te Dice:
            </h3>
            <p className="font-serif text-2xl md:text-3xl text-foreground font-medium mb-6">
              No puedes especializarte solo en una configuración.
            </p>
            <p className="text-cream-muted leading-relaxed mb-6">
              El escolta profesional en LATAM cambia de contexto operativo
              constantemente. Un día trabajas solo protegiendo a un empresario en
              traslado rutinario. La semana siguiente trabajas en binomio porque el
              cliente pagó por 2 elementos después de recibir amenaza específica.
            </p>
            <p className="text-cream-muted leading-relaxed">
              <span className="text-foreground font-medium">
                Necesitas dominar AMBAS configuraciones
              </span>{" "}
              porque tu realidad operativa no es estable. El problema es que el 92%
              del entrenamiento disponible no prepara para ninguna de las dos —
              prepara para equipos completos de 6-12 personas que casi nunca existen
              en la práctica.
            </p>
          </div>
        </div>

        {/* Gap Table */}
        <div
          ref={tableRef}
          className={`max-w-4xl mx-auto animate-on-scroll ${tableVisible ? "visible" : ""}`}
        >
          <h3 className="text-primary text-xs font-sans uppercase tracking-[0.2em] mb-6 text-center">
            El Gap de Preparación:
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-muted-foreground font-sans">
                    Configuración
                  </th>
                  <th className="text-center py-4 px-4 text-xs uppercase tracking-wider text-muted-foreground font-sans">
                    % Operaciones Reales
                  </th>
                  <th className="text-center py-4 px-4 text-xs uppercase tracking-wider text-muted-foreground font-sans">
                    % Entrenamiento Disponible
                  </th>
                  <th className="text-center py-4 px-4 text-xs uppercase tracking-wider text-muted-foreground font-sans">
                    Gap
                  </th>
                </tr>
              </thead>
              <tbody>
                {gapData.map((row, index) => (
                  <tr
                    key={row.config}
                    className={`border-b border-border/30 ${index < 2 ? "bg-destructive/5" : ""}`}
                  >
                    <td className="py-4 px-4 text-sm text-cream-muted">
                      {row.config}
                    </td>
                    <td className="py-4 px-4 text-sm text-center text-foreground font-medium">
                      {row.realPct}
                    </td>
                    <td className="py-4 px-4 text-sm text-center text-muted-foreground">
                      {row.trainPct}
                    </td>
                    <td
                      className={`py-4 px-4 text-sm text-center font-medium ${
                        row.gap.startsWith("-")
                          ? "text-destructive"
                          : row.gap === "0%"
                            ? "text-muted-foreground"
                            : "text-primary"
                      }`}
                    >
                      {row.gap}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Interpretation */}
          <div className="mt-8 space-y-4 text-sm text-cream-muted">
            <p>
              <span className="text-foreground font-medium">Interpretación:</span>{" "}
              El 73% de tu tiempo operativo (1-2 personas) recibe menos del 8% del
              entrenamiento disponible. Mientras tanto, el 7% de situaciones (equipo
              completo) recibe 72% del contenido de formación.
            </p>
            <p>
              <span className="text-foreground font-medium">Resultado:</span> Cuando
              enfrentas tu realidad más común (solo o en binomio), no sabes qué hacer
              porque nunca te prepararon para eso. Te entrenaron para una fantasía
              operativa que casi nunca ocurre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalRealitySection;
