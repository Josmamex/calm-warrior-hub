import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "¿Los programas son presenciales u online?",
    a: "Ambos. Guardian Foundations y Guardian Tactical están disponibles en modalidad online, presencial o híbrida. Guardian Instructor es exclusivamente presencial debido a la naturaleza práctica del contenido pedagógico.",
  },
  {
    q: "¿Necesito experiencia previa en protección ejecutiva?",
    a: "Para Guardian Foundations, no. Está diseñado para profesionales que inician o tienen poca experiencia. Para Guardian Tactical, recomendamos al menos 1 año de experiencia operativa o haber completado Foundations primero.",
  },
  {
    q: "¿La certificación es reconocida internacionalmente?",
    a: "Guardian Mindset es una certificación privada basada en metodología propietaria. No es una certificación gubernamental ni está afiliada a organismos como ASIS. Su valor está en las competencias reales que desarrolla, no en el papel.",
  },
  {
    q: "¿Puedo certificarme con mi binomio actual?",
    a: "Sí, y de hecho lo recomendamos. Guardian Tactical incluye módulos específicos de coordinación que funcionan mejor cuando entrenas con tu compañero real de operaciones. Ofrecemos precio especial para binomios.",
  },
  {
    q: "¿Qué pasa si trabajo solo el 100% del tiempo?",
    a: "Guardian Foundations está diseñado exactamente para ti. Sin embargo, te recomendamos también Tactical porque la realidad operativa cambia: podrías necesitar coordinar con alguien eventualmente.",
  },
  {
    q: "¿Hay garantía de satisfacción?",
    a: "Si después del primer módulo sientes que no es para ti, devolvemos el 100% de tu inversión sin preguntas. No me interesa tener alumnos que no quieren estar ahí.",
  },
  {
    q: "¿Qué incluyen los recursos gratuitos?",
    a: "Todo lo de la sección Herramientas es completamente gratis: manuales, checklists, protocolos y plantillas. No hay truco. Es contenido real que puedes usar hoy.",
  },
  {
    q: "¿Cómo sé si Guardian Mindset es para mí?",
    a: "Si operas con equipos de 8+ personas y presupuesto ilimitado, probablemente no. Si operas solo o en binomio con recursos limitados (como el 73% de escoltas en LATAM), entonces sí.",
  },
];

const FAQSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: accordionRef, isVisible: accordionVisible } = useScrollAnimation(0.1);

  return (
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 animate-on-scroll ${headerVisible ? "visible" : ""}`}
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">
            Preguntas Frecuentes
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
            <span className="text-gold-gradient">FAQ</span>
          </h2>
        </div>

        {/* Accordion */}
        <div
          ref={accordionRef}
          className={`max-w-3xl mx-auto animate-on-scroll ${accordionVisible ? "visible" : ""}`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/30 bg-card/30 backdrop-blur-sm px-6 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-serif text-lg md:text-xl text-foreground hover:text-primary py-6 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-cream-muted text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
