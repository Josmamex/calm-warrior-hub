import { FileText, Video, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: FileText,
    tag: "Gratuito",
    title: "El Manual del Hombre Gris",
    description:
      "Guía esencial para dominar el arte de la invisibilidad táctica. Incluye ejercicios de respiración basados en Systema.",
    cta: "Descargar Ahora",
    featured: false,
  },
  {
    icon: Video,
    tag: "Taller Online",
    title: "Ego Bajo Control",
    description:
      "Workshop intensivo para identificar y neutralizar las debilidades internas que sabotean tu desempeño bajo presión.",
    cta: "Ver Contenido",
    featured: true,
  },
  {
    icon: Award,
    tag: "Certificación",
    title: "CIPE Presencial",
    description:
      "Programa completo de Certificación Internacional en Protección Ejecutiva. Metodología Koga-Maltsev-Vasiliev integrada.",
    cta: "Solicitar Información",
    featured: false,
  },
];

const ProductsSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase mb-4">
            Tu Camino
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6">
            Elige tu Nivel de{" "}
            <span className="text-gold-gradient">Transformación</span>
          </h2>
          <p className="text-cream-muted text-lg">
            Desde recursos gratuitos hasta certificación completa. 
            Cada paso te acerca al dominio de ti mismo.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className={`group relative p-8 transition-all duration-500 ${
                product.featured
                  ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary/30 shadow-gold"
                  : "bg-card/50 border border-border/50 hover:border-primary/30"
              }`}
            >
              {/* Tag */}
              <div className="mb-6">
                <span
                  className={`inline-block px-4 py-1 text-xs uppercase tracking-wider ${
                    product.featured
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {product.tag}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-6">
                <product.icon
                  className={`w-12 h-12 ${
                    product.featured ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  } transition-colors`}
                  strokeWidth={1}
                />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-medium mb-4 text-foreground">
                {product.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* CTA */}
              <Button
                variant={product.featured ? "hero" : "heroOutline"}
                className="w-full"
              >
                {product.cta}
              </Button>

              {/* Featured Glow Effect */}
              {product.featured && (
                <div className="absolute -inset-px bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
