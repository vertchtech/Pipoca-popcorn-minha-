import { motion } from 'motion/react';
import { Sparkles, ShoppingBag, MessageCircle, MapPin, ArrowRight } from 'lucide-react';

export default function HowToOrderSection() {
  const steps = [
    {
      num: '1',
      title: 'ESCOLHA',
      desc: 'Escolha sua pipoca, tamanho e sabores.',
      icon: ShoppingBag,
      accent: 'amber',
      badgeColor: 'from-amber-400 to-yellow-500',
      glow: 'shadow-[0_0_20px_rgba(245,158,11,0.25)]',
    },
    {
      num: '2',
      title: 'FAÇA SEU PEDIDO',
      desc: 'Clique no botão e envie seu pedido pelo WhatsApp.',
      icon: MessageCircle,
      accent: 'emerald',
      badgeColor: 'from-emerald-400 to-green-600',
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.25)]',
    },
    {
      num: '3',
      title: 'PASSE PARA BUSCAR',
      desc: 'Combine pelo WhatsApp e passe para buscar sua pipoca.',
      icon: MapPin,
      accent: 'red',
      badgeColor: 'from-red-500 to-rose-600',
      glow: 'shadow-[0_0_20px_rgba(239,68,68,0.25)]',
    },
  ];

  return (
    <section id="como-pedir" className="relative py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Passo a Passo Simples</span>
        </div>
        <h2 className="font-['Syne',sans-serif] text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase [text-wrap:balance]">
          É FÁCIL PEDIR 🍿
        </h2>
        <p className="mt-2 text-zinc-300 text-sm sm:text-base font-medium [text-wrap:balance]">
          Sem filas e sem complicação. Sua pipoca é preparada e embalada no ponto exato da crocância!
        </p>
      </div>

      {/* 3 Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-6 rounded-3xl bg-[#121217] border border-zinc-800/80 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* 3D Glowing Step Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl p-0.5 bg-gradient-to-tr ${step.badgeColor} ${step.glow} flex items-center justify-center`}>
                    <div className="w-full h-full rounded-[14px] bg-zinc-950 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <span className="font-['Syne',sans-serif] text-3xl font-black text-zinc-800 group-hover:text-amber-500/30 transition-colors">
                    0{step.num}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-amber-400 tracking-widest uppercase">
                    Etapa {step.num}
                  </span>
                  <h3 className="font-['Syne',sans-serif] text-lg font-bold text-white tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed pt-1">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Bottom connecting subtle element */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] text-zinc-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>100% Rápido e Seguro</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
