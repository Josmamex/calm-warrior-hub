import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    category: "Filosofía",
    date: "Próximamente",
    title: "La Falacia de la 'Mano Dura'",
    excerpt:
      "Por qué contratar a un ex-militar resentido es el mayor riesgo para un CEO en México.",
  },
  {
    category: "Táctica",
    date: "Próximamente",
    title: "El Hombre Gris",
    excerpt:
      "Cómo desaparecer a plena vista. La mejor escolta es la que nadie nota.",
  },
  {
    category: "Psicología",
    date: "Próximamente",
    title: "Tu Ego es tu Peor Enemigo",
    excerpt:
      "En una crisis, tu necesidad de 'tener la razón' te matará más rápido que una bala.",
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-radial">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase mb-4">
              Escritos
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight">
              Reflexiones del{" "}
              <span className="text-gold-gradient">Guerrero-Filósofo</span>
            </h2>
          </div>
          <a
            href="#"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-primary text-sm uppercase tracking-wider hover:gap-4 transition-all"
          >
            Ver todos los artículos
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="aspect-[16/10] bg-card border border-border/50 mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light to-secondary flex items-center justify-center">
                  <span className="font-serif text-6xl text-primary/10">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-primary text-xs uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="text-muted-foreground text-xs">
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-medium mb-3 text-foreground group-hover:text-primary transition-colors">
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
