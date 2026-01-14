import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/yourNumber"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative">
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card border border-border px-3 py-2 text-sm text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          ¿Dudas? Escríbeme
        </span>

        {/* Button */}
        <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <MessageCircle className="w-7 h-7 text-white" fill="white" />
        </div>

        {/* Pulse Effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
