import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/popcornData';

export default function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 group">
      {/* Tooltip badge */}
      <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-zinc-900/90 text-white text-xs font-bold shadow-xl border border-zinc-700/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Peça sua pipoca agora! 🍿
      </span>

      {/* Button */}
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp da Popcorn"
        className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 text-white flex items-center justify-center shadow-[0_4px_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing ring aura */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping opacity-60 pointer-events-none" style={{ animationDuration: '3s' }} />

        {/* Modern WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white text-emerald-600 relative z-10" />
      </a>
    </div>
  );
}
