import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoInkoga from "@/assets/logo-inkoga-blanco.png";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-20 bg-charcoal border-t border-border/30">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoInkoga} alt="INKOGA" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              Ciencia del Control para Protección 1-2 Elementos.<br />
              Dominar el Caos sin perder la Calma.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#inicio");
                  }}
                  className="text-cream-muted hover:text-primary transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#metodologia"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#metodologia");
                  }}
                  className="text-cream-muted hover:text-primary transition-colors"
                >
                  Metodología
                </a>
              </li>
              <li>
                <a
                  href="#recursos"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#recursos");
                  }}
                  className="text-cream-muted hover:text-primary transition-colors"
                >
                  Recursos
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#blog");
                  }}
                  className="text-cream-muted hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#contacto");
                  }}
                  className="text-cream-muted hover:text-primary transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-1" />
                <span className="text-cream-muted text-sm">
                  contacto@josafathherrera.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-cream-muted text-sm">
                  Ciudad de México, México
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Recibe contenido exclusivo
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 bg-secondary border border-border px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                />
                <Button variant="hero" size="sm" className="px-4">
                  →
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 INKOGA Security Consulting. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground/50 text-xs">
            Certificado ONU • Instructor Systema • Representante Koga LATAM • H&K Autorizado • Mundo PE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
