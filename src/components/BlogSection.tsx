import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const blogPosts = [
  {
    category: "Filosofía",
    title: "La Falacia de la 'Mano Dura'",
    excerpt: "Por qué el ex-militar resentido es el mayor riesgo para un CEO.",
  },
  {
    category: "Táctica",
    title: "El Hombre Gris",
    excerpt: "Cómo desaparecer a plena vista. La mejor escolta es la que nadie nota.",
  },
  {
    category: "Psicología",
    title: "Tu Ego es tu Peor Enemigo",
    excerpt: "Tu necesidad de 'tener la razón' te matará más rápido que una bala.",
  },
];

const BlogSection = () => {
  const { ref: postsRef, isVisible: postsVisible } = useScrollAnimation(0.1);

  return (
    <section id="blog" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">
              Escritos
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium">
              Reflexiones del <span className="text-gold-gradient">Guerrero</span>
            </h2>
          </div>
          <a
            href="#"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-primary text-sm uppercase tracking-wider hover:gap-4 transition-all"
          >
            Ver todos
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Blog Grid */}
        <div ref={postsRef} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className={`group cursor-pointer animate-on-scroll stagger-${index + 1} ${postsVisible ? "visible" : ""}`}
            >
              {/* Image Placeholder with Gradient */}
              <div className="aspect-[16/10] relative overflow-hidden mb-6 bg-gradient-to-br from-charcoal-light to-card border border-border/30">
                {/* Number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-8xl text-primary/10 group-hover:text-primary/20 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-primary px-3 py-1">
                  <span className="text-xs text-primary-foreground uppercase tracking-wider font-medium">
                    Próximamente
                  </span>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-primary text-xs uppercase tracking-wider font-medium">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-medium text-foreground group-hover:text-primary transition-colors mb-3">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>

              {/* Read More */}
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                <span>Leer más</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
