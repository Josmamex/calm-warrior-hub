import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoInkoga from "@/assets/logo-inkoga-blanco.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Por qué INKOGA", href: "#por-que-inkoga" },
    { label: "Metodología", href: "#metodologia" },
    { label: "Programas", href: "#programas" },
    { label: "Blog", href: "#blog" },
    { label: "Sobre Mí", href: "#sobre-mi" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#inicio");
            }}
            className="flex items-center gap-3 group"
          >
            <img src={logoInkoga} alt="INKOGA" className="h-12 md:h-9 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("#contacto")}
            >
              Contactar
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 top-20 bg-background/98 backdrop-blur-xl border-b border-border/50 transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xl font-serif text-foreground hover:text-primary transition-colors py-2 border-b border-border/20"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="hero"
                className="mt-4 w-full"
                onClick={() => scrollToSection("#contacto")}
              >
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
