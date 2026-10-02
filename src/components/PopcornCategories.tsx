import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { POPCORN_CATEGORIES, PopcornCategory } from '../data/popcornData';

interface PopcornCategoriesProps {
  onSelectCategory: (categoryId: 'salgada' | 'doce' | 'mista') => void;
}

export default function PopcornCategories({ onSelectCategory }: PopcornCategoriesProps) {
  return (
    <section id="pipocas" className="relative py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Feitas com Grãos Selecionados</span>
        </div>
        <h2 className="font-['Syne',sans-serif] text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase [text-wrap:balance]">
          ESCOLHA SUA PIPOCA 🍿
        </h2>
        <p className="mt-2.5 text-zinc-300 text-base sm:text-lg font-medium [text-wrap:balance]">
          Salgada, doce ou mista. Você escolhe!
        </p>
      </div>

      {/* 3 Premium Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {POPCORN_CATEGORIES.map((cat: PopcornCategory, index: number) => {
          const isMista = cat.id === 'mista';
          const isDoce = cat.id === 'doce';

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative flex flex-col rounded-3xl overflow-hidden bg-[#131318] border transition-all duration-300 hover:-translate-y-1.5 ${
                isMista
                  ? 'border-amber-400/50 shadow-[0_10px_30px_rgba(245,158,11,0.15)] ring-1 ring-amber-400/30'
                  : isDoce
                  ? 'border-red-500/30 hover:border-red-500/60 shadow-[0_10px_25px_rgba(239,68,68,0.1)]'
                  : 'border-amber-500/30 hover:border-amber-500/60 shadow-[0_10px_25px_rgba(245,158,11,0.1)]'
              }`}
            >
              {/* Image Container with 3D Depth & Lighting */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                <img
                  src={cat.image}
                  alt={cat.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131318] via-transparent to-black/20" />

                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide backdrop-blur-md border ${
                      isMista
                        ? 'bg-amber-500/90 text-zinc-950 border-amber-300'
                        : isDoce
                        ? 'bg-red-600/90 text-white border-red-400'
                        : 'bg-amber-400/90 text-zinc-950 border-amber-200'
                    }`}
                  >
                    {cat.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white tracking-wide">
                    {cat.name}
                  </h3>
                  
                  <p className="mt-1 text-xs font-semibold text-amber-400">
                    {cat.tagline}
                  </p>

                  <p className="mt-2.5 text-xs text-zinc-300 leading-relaxed font-normal">
                    {cat.description}
                  </p>

                  {/* Toppings / Options List */}
                  <div className="mt-4 pt-4 border-t border-zinc-800">
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                      {isMista ? 'Sabores Disponíveis:' : isDoce ? 'Coberturas Disponíveis:' : 'Acompanhamentos:'}
                    </span>

                    <ul className="grid grid-cols-2 gap-1.5 text-xs text-zinc-200">
                      {cat.options.map((opt) => (
                        <li key={opt} className="flex items-center gap-1.5 text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span className="truncate">{opt}</span>
                        </li>
                      ))}
                    </ul>

                    {cat.disclaimer && (
                      <p className="mt-3 text-[10px] text-zinc-500 italic">
                        {cat.disclaimer}
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="mt-6 pt-2">
                  <button
                    onClick={() => onSelectCategory(cat.id)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      isMista
                        ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-zinc-950 hover:brightness-110 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                        : isDoce
                        ? 'bg-red-600/90 text-white hover:bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.25)]'
                        : 'bg-zinc-800 text-amber-300 hover:bg-zinc-700 border border-amber-500/30'
                    }`}
                  >
                    <span>Quero Esta Pipoca</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
