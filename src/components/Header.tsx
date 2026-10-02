import { useState } from 'react';
import { Menu, X, MessageCircle, MapPin, ShoppingBag } from 'lucide-react';
import { CONTACT_INFO, OFFICIAL_ASSETS } from '../data/popcornData';

interface HeaderProps {
  onOrderClick: () => void;
}

export default function Header({ onOrderClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-500/20 bg-[#0b0b0e]/90 backdrop-blur-md transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark with logo mark */}
        <a
          href="#topo"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-amber-400/60 shadow-[0_0_12px_rgba(245,158,11,0.4)]">
            <img
              src={OFFICIAL_ASSETS.logo}
              alt="Popcorn Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <span className="font-['Syne',sans-serif] text-xl font-extrabold tracking-wider text-gradient-gold">
            POPCORN
          </span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-zinc-300">
          <a
            href="#pipocas"
            className="hover:text-amber-400 transition-colors"
          >
            Pipocas
          </a>
          <a
            href="#tamanhos"
            className="hover:text-amber-400 transition-colors"
          >
            Tamanhos
          </a>
          <a
            href="#monte-seu-pedido"
            className="text-amber-400 font-bold hover:text-amber-300 transition-colors flex items-center gap-1"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Monte Seu Pedido
          </a>
          <a
            href="#como-pedir"
            className="hover:text-amber-400 transition-colors"
          >
            Como Pedir
          </a>
          <a
            href="#localizacao"
            className="hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            Onde Estamos
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOrderClick}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.35)] hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Montar Pedido</span>
          </button>

          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg active:scale-95 transition-all whitespace-nowrap shadow-sm shadow-emerald-950"
            title="Abrir WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span className="hidden xs:inline">WhatsApp</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Alternar menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-[#0e0e12]/95 backdrop-blur-xl px-4 py-4 space-y-3">
          <nav className="flex flex-col gap-2.5 text-sm font-medium text-zinc-300">
            <a
              href="#pipocas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-800/60 hover:text-amber-400 transition-colors"
            >
              🍿 Nossas Pipocas
            </a>
            <a
              href="#tamanhos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-800/60 hover:text-amber-400 transition-colors"
            >
              📏 Cardápio & Valores
            </a>
            <a
              href="#monte-seu-pedido"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/30 flex items-center justify-between"
            >
              <span>🛒 Monte Seu Pedido</span>
              <span className="text-xs bg-amber-400 text-zinc-950 font-bold px-2 py-0.5 rounded">Rápido</span>
            </a>
            <a
              href="#como-pedir"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-800/60 hover:text-amber-400 transition-colors"
            >
              ✨ É Fácil Pedir
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-800/60 hover:text-amber-400 transition-colors"
            >
              📍 Onde Estamos (Jacareí)
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
