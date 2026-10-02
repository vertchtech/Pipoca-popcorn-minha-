import { motion } from 'motion/react';
import { MapPin, MessageCircle, Navigation, Clock, ShieldCheck, Waves } from 'lucide-react';
import { CONTACT_INFO } from '../data/popcornData';

export default function LocationSection() {
  return (
    <section id="localizacao" className="relative py-16 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-16">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-72 bg-gradient-to-r from-red-600/10 via-amber-500/10 to-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold tracking-wider uppercase mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span>Ponto de Fácil Acesso</span>
        </div>
        <h2 className="font-['Syne',sans-serif] text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase [text-wrap:balance]">
          ONDE ESTAMOS 📍
        </h2>
        <p className="mt-2 text-zinc-300 text-sm sm:text-base font-medium [text-wrap:balance]">
          Venha buscar sua pipoca crocante no coração da Costa Verde!
        </p>
      </div>

      {/* Main Location Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl bg-gradient-to-b from-[#181820] to-[#101015] border border-amber-500/30 p-6 sm:p-10 shadow-2xl overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Location Details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Ponto de Retirada & Carrinho Popcorn
              </span>
              <h3 className="font-['Syne',sans-serif] text-2xl sm:text-3xl font-black text-white">
                {CONTACT_INFO.locationCity}
              </h3>
              <p className="text-sm text-zinc-300 flex items-center gap-1.5 font-medium">
                <Waves className="w-4 h-4 text-cyan-400" />
                Mangaratiba · Costa Verde — Rio de Janeiro
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-zinc-800 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-white block">Horário de Funcionamento:</span>
                  <span className="text-zinc-400">
                    Aberto todos os dias ao entardecer até a noite com pipoca quentinha estourando!
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-white block">Retirada Rápida e Segura:</span>
                  <span className="text-zinc-400">
                    Você pede pelo WhatsApp e passa direto para retirar, sem perder tempo esperando em filas.
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons: FALAR PELO WHATSAPP and COMO CHEGAR */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-5 rounded-xl font-extrabold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:brightness-110 shadow-[0_0_20px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span className="uppercase tracking-wider">FALAR PELO WHATSAPP</span>
              </a>

              <a
                href={CONTACT_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-5 rounded-xl font-extrabold text-xs sm:text-sm text-amber-300 bg-zinc-900 hover:bg-zinc-800 border border-amber-500/40 shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span className="uppercase tracking-wider">COMO CHEGAR</span>
              </a>
            </div>
          </div>

          {/* Right: Stylized interactive map preview card */}
          <div className="relative rounded-2xl overflow-hidden border border-zinc-700/60 bg-[#0d0d12] p-5 flex flex-col justify-between min-h-[260px] shadow-inner group">
            {/* Visual stylization of map overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-800/90 text-amber-400 text-xs font-semibold border border-zinc-700">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                Google Maps
              </span>
              <span className="text-[11px] text-zinc-400">Conceição de Jacareí</span>
            </div>

            <div className="relative z-10 my-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-tr from-red-600 to-amber-400 p-0.5 shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-bounce">
                <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center text-xl">
                  🍿
                </div>
              </div>
              <h4 className="mt-3 font-['Syne',sans-serif] text-base font-bold text-white">
                Popcorn — Centro de Conceição de Jacareí
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                Clique abaixo para traçar sua rota de navegação GPS em tempo real.
              </p>
            </div>

            <div className="relative z-10">
              <a
                href={CONTACT_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
              >
                <span>Abrir Rota no Google Maps</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
