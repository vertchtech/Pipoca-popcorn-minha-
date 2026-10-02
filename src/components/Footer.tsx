import { MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, OFFICIAL_ASSETS } from '../data/popcornData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-zinc-800/80 bg-[#07070a] pt-12 pb-24 md:pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Official Popcorn Logo in smaller elegant medallion */}
        <div className="relative group cursor-pointer" onClick={scrollToTop}>
          <div className="w-20 h-20 rounded-2xl p-1 bg-gradient-to-tr from-amber-500 via-yellow-400 to-red-600 shadow-[0_0_20px_rgba(245,158,11,0.25)] overflow-hidden">
            <div className="w-full h-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
              <img
                src={OFFICIAL_ASSETS.logo}
                alt="Popcorn Logo Oficial"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>

        {/* Brand Text */}
        <div className="mt-4 space-y-1">
          <h3 className="font-['Syne',sans-serif] text-xl font-black text-white tracking-wider flex items-center justify-center gap-1.5">
            <span>POPCORN</span>
            <span>🍿</span>
          </h3>
          <p className="text-xs sm:text-sm text-amber-400 font-semibold">
            Pipoca salgada, doce e mista.
          </p>
          <p className="text-xs text-zinc-400">
            {CONTACT_INFO.locationCity}
          </p>
          <p className="text-xs text-zinc-300 font-mono pt-1">
            WhatsApp: <span className="font-bold text-white">{CONTACT_INFO.phoneDisplay}</span>
          </p>
        </div>

        {/* WhatsApp Button */}
        <div className="mt-6">
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:brightness-110 shadow-lg shadow-emerald-950 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>FALAR NO WHATSAPP AGORA</span>
          </a>
        </div>

        {/* Quick Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-5 text-xs text-zinc-400">
          <a href="#pipocas" className="hover:text-amber-400 transition-colors">
            Nossas Pipocas
          </a>
          <span>·</span>
          <a href="#tamanhos" className="hover:text-amber-400 transition-colors">
            Cardápio & Tamanhos
          </a>
          <span>·</span>
          <a href="#monte-seu-pedido" className="hover:text-amber-400 transition-colors">
            Monte Seu Pedido
          </a>
          <span>·</span>
          <a href="#localizacao" className="hover:text-amber-400 transition-colors">
            Onde Estamos
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-zinc-900 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 gap-2">
          <span>© {new Date().getFullYear()} POPCORN. Todos os direitos reservados. Conceição de Jacareí - RJ.</span>
          <div className="flex items-center gap-1">
            <span>Feito com</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>para a Costa Verde</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
