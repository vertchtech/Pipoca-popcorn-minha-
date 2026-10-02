import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Check, ArrowRight, Package } from 'lucide-react';
import { POPCORN_SIZES, PopcornSize } from '../data/popcornData';

interface MenuPricingSectionProps {
  selectedSizeId: string;
  onSelectSize: (sizeId: string) => void;
}

export default function MenuPricingSection({
  selectedSizeId,
  onSelectSize,
}: MenuPricingSectionProps) {
  const [filter, setFilter] = useState<'all' | 'saquinho' | 'caixinha' | 'saco'>('all');

  const filteredSizes = POPCORN_SIZES.filter((size) => {
    if (filter === 'all') return true;
    return size.containerType === filter;
  });

  return (
    <section id="tamanhos" className="relative py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
          <Package className="w-3.5 h-3.5" />
          <span>Cardápio & Valores Oficiais</span>
        </div>
        <h2 className="font-['Syne',sans-serif] text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase [text-wrap:balance]">
          ESCOLHA O SEU TAMANHO 🍿
        </h2>
        <p className="mt-2 text-zinc-300 text-sm sm:text-base font-medium [text-wrap:balance]">
          Porções generosas preparadas na hora com o padrão de qualidade Popcorn.
        </p>

        {/* Filter buttons (Interactive segmented control) */}
        <div className="mt-6 inline-flex p-1 rounded-xl bg-zinc-900 border border-zinc-800 shadow-inner">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 sm:px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
              filter === 'all'
                ? 'bg-amber-400 text-zinc-950 shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Todos ({POPCORN_SIZES.length})
          </button>
          <button
            onClick={() => setFilter('saquinho')}
            className={`px-3 sm:px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
              filter === 'saquinho'
                ? 'bg-amber-400 text-zinc-950 shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Saquinhos
          </button>
          <button
            onClick={() => setFilter('caixinha')}
            className={`px-3 sm:px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
              filter === 'caixinha'
                ? 'bg-amber-400 text-zinc-950 shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Caixinhas
          </button>
          <button
            onClick={() => setFilter('saco')}
            className={`px-3 sm:px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
              filter === 'saco'
                ? 'bg-amber-400 text-zinc-950 shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Sacos Especiais
          </button>
        </div>
      </div>

      {/* Grid of Sizes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {filteredSizes.map((size: PopcornSize, index: number) => {
          const isSelected = selectedSizeId === size.id;

          return (
            <motion.div
              key={size.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => onSelectSize(size.id)}
              className={`relative flex flex-col justify-between p-5 rounded-2xl cursor-pointer border transition-all duration-200 group ${
                isSelected
                  ? 'bg-gradient-to-b from-[#262014] to-[#16151c] border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.25)] ring-1 ring-amber-400'
                  : 'bg-[#121217] border-zinc-800/80 hover:border-amber-500/40 hover:bg-[#16161e]'
              }`}
            >
              {/* Highlight badge if popular */}
              {size.highlight && (
                <div className="absolute -top-2.5 right-4 z-10">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-md flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    Muito Pedido
                  </span>
                </div>
              )}

              <div>
                {/* Container type header */}
                <div className="flex items-center justify-between text-xs text-zinc-400 font-semibold mb-2">
                  <span className="uppercase tracking-wider text-[11px] text-amber-400/90 font-bold">
                    {size.categoryLabel}
                  </span>
                  <span className="text-[11px] text-zinc-400">
                    {size.serving}
                  </span>
                </div>

                {/* Size Name */}
                <h3 className="font-['Syne',sans-serif] text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {size.name}
                </h3>

                <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed font-normal min-h-[36px]">
                  {size.description}
                </p>

                {/* Price Display - Big, Elegant & Eye-catching */}
                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-baseline gap-1">
                  <span className="text-xs font-bold text-amber-400">R$</span>
                  <span className="text-3xl font-extrabold text-white tracking-tight tabular-nums font-['Syne',sans-serif]">
                    {size.price.toFixed(0)}
                  </span>
                  <span className="text-sm font-semibold text-zinc-400 tabular-nums">
                    ,00
                  </span>
                </div>
              </div>

              {/* Selection button */}
              <div className="mt-5">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectSize(size.id);
                  }}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-bold tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                    isSelected
                      ? 'bg-amber-400 text-zinc-950 shadow-md'
                      : 'bg-zinc-800 text-zinc-200 group-hover:bg-amber-500/20 group-hover:text-amber-300 border border-zinc-700/50'
                  }`}
                >
                  {isSelected ? (
                    <>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Selecionado</span>
                    </>
                  ) : (
                    <>
                      <span>Escolher este</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
