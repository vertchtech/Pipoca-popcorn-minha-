import { motion } from 'motion/react';
import { MessageCircle, ShoppingBag, Sparkles, ChevronDown, Flame, Award, MapPin } from 'lucide-react';
import { CONTACT_INFO, OFFICIAL_ASSETS } from '../data/popcornData';

interface HeroSectionProps {
  onOrderClick: () => void;
}

export default function HeroSection({ onOrderClick }: HeroSectionProps) {
  return (
    <section id="topo" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-12 px-4 sm:px-6">
      {/* Background ambient cinema lighting & radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Golden radial aura */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-gradient-to-b from-amber-500/20 via-amber-600/10 to-transparent rounded-full blur-3xl opacity-70" />
        
        {/* Subtle red rim glow in corner */}
        <div className="absolute top-12 right-1/4 w-72 h-72 bg-red-600/15 rounded-full blur-3xl opacity-60" />

        {/* Ambient bottom vignette */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0b0b0e] to-transparent" />

        {/* Subtle gold sparkles/particles */}
        <div className="absolute top-20 left-[15%] w-2 h-2 rounded-full bg-amber-400 blur-[0.5px] animate-pulse opacity-75" />
        <div className="absolute top-36 right-[20%] w-2.5 h-2.5 rounded-full bg-yellow-300 blur-[0.5px] animate-pulse-subtle opacity-80" />
        <div className="absolute bottom-32 left-[25%] w-1.5 h-1.5 rounded-full bg-amber-300 blur-[0.5px] animate-ping opacity-50" />
        <div className="absolute top-1/2 right-[12%] w-2 h-2 rounded-full bg-amber-400 blur-[0.5px] animate-pulse opacity-60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Top pill/kicker */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide shadow-lg mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Direto do carrinho para você</span>
          <span className="text-zinc-500">·</span>
          <span className="flex items-center gap-1 text-zinc-300">
            <MapPin className="w-3 h-3 text-red-400" />
            Conceição de Jacareí
          </span>
        </motion.div>

        {/* Central Official Logo with 3D Depth & Specular Sheen */}
        <div className="relative flex items-center justify-center my-4 sm:my-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative group cursor-pointer"
          >
            {/* Outer golden aura pulsing */}
            <div className="absolute -inset-6 sm:-inset-8 rounded-3xl bg-gradient-to-r from-amber-500/35 via-yellow-400/25 to-red-600/25 blur-2xl opacity-80 group-hover:opacity-100 transition-opacity" />

            {/* 3D Beveled Container with multi-layered border */}
            <div className="relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 bg-gradient-to-b from-[#2a2415] via-[#141419] to-[#0c0c0f] border-2 border-amber-400/60 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(245,158,11,0.35)] overflow-hidden">
              {/* Animated light sheen passing across */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl z-20">
                <div className="w-1/2 h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/4 animate-sheen" />
              </div>

              {/* Exact Official Popcorn Logo (Preserved, high-contrast, premium 3D framed presentation) */}
              <div className="relative z-10 w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden bg-black flex items-center justify-center shadow-inner">
                <img
                  src={OFFICIAL_ASSETS.logo}
                  alt="Logo Oficial Popcorn"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Golden Emblem Trim */}
              <div className="absolute bottom-1 inset-x-4 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80" />
            </div>
          </motion.div>
        </div>

        {/* Brand Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 sm:mt-8 space-y-3"
        >
          <h1 className="font-['Syne',sans-serif] text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            BEM-VINDO À <span className="text-gradient-gold glow-gold-text">POPCORN</span>
          </h1>

          <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-amber-400 max-w-xl mx-auto [text-wrap:balance]">
            A melhor pipoca da Costa Verde 🍿
          </p>

          <p className="text-sm sm:text-base text-zinc-300 max-w-md sm:max-w-lg mx-auto [text-wrap:balance] font-medium">
            Pipoca salgada, doce e mista, feita na hora para você.
          </p>
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full max-w-md mx-auto"
        >
          {/* Main Requested Button: FAZER PEDIDO NO WHATSAPP */}
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 py-4 px-6 rounded-xl font-extrabold text-sm sm:text-base text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-500 hover:to-green-500 shadow-[0_0_25px_rgba(16,185,129,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 border border-emerald-400/40"
          >
            <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
            <span className="tracking-wide uppercase">FAZER PEDIDO NO WHATSAPP</span>
          </a>

          {/* Secondary Action: Monte seu Pedido interativo */}
          <button
            onClick={onOrderClick}
            className="w-full sm:w-auto py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm text-amber-300 bg-zinc-900/90 hover:bg-zinc-800 border border-amber-500/40 shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span>Monte Seu Pedido</span>
          </button>
        </motion.div>

        {/* Feature Badges / Trust Markers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-3 sm:gap-6 text-center max-w-lg mx-auto"
        >
          <div className="flex flex-col items-center">
            <Flame className="w-5 h-5 text-amber-400 mb-1" />
            <span className="text-xs font-bold text-zinc-200">Feita na Hora</span>
            <span className="text-[11px] text-zinc-400">Quente & Crocante</span>
          </div>
          <div className="flex flex-col items-center">
            <Award className="w-5 h-5 text-amber-400 mb-1" />
            <span className="text-xs font-bold text-zinc-200">Manteiga Real</span>
            <span className="text-[11px] text-zinc-400">Sabor Incomparável</span>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-5 h-5 text-red-500 mb-1" />
            <span className="text-xs font-bold text-zinc-200">Jacareí Centro</span>
            <span className="text-[11px] text-zinc-400">Ponto de Fácil Acesso</span>
          </div>
        </motion.div>

        {/* Down Indicator */}
        <div className="mt-8 flex flex-col items-center animate-bounce text-zinc-500 hover:text-amber-400 cursor-pointer transition-colors">
          <span className="text-[11px] uppercase tracking-wider font-semibold">Conheça o Cardápio</span>
          <ChevronDown className="w-4 h-4 mt-0.5" />
        </div>
      </div>
    </section>
  );
}
