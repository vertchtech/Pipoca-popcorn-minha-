import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShoppingBag,
  MessageCircle,
  Plus,
  Minus,
  Check,
  Copy,
  CheckCheck,
  Sparkles,
  HelpCircle,
  UtensilsCrossed,
} from 'lucide-react';
import {
  OrderState,
  POPCORN_SIZES,
  SALGADA_TOPPINGS,
  DOCE_TOPPINGS,
  buildWhatsAppOrderMessage,
} from '../data/popcornData';

interface OrderBuilderProps {
  order: OrderState;
  setOrder: React.Dispatch<React.SetStateAction<OrderState>>;
}

export default function OrderBuilderSection({ order, setOrder }: OrderBuilderProps) {
  const [copied, setCopied] = useState(false);

  // Selected size object
  const currentSize =
    POPCORN_SIZES.find((s) => s.id === order.sizeId) || POPCORN_SIZES[0];
  const unitPrice = currentSize.price;
  const totalPrice = unitPrice * order.quantity;

  // Toggle Salgada Topping
  const toggleSalgadaTopping = (toppingId: string) => {
    setOrder((prev) => {
      const exists = prev.salgadaToppings.includes(toppingId);
      return {
        ...prev,
        salgadaToppings: exists
          ? prev.salgadaToppings.filter((t) => t !== toppingId)
          : [...prev.salgadaToppings, toppingId],
      };
    });
  };

  // Toggle Doce Topping
  const toggleDoceTopping = (toppingId: string) => {
    setOrder((prev) => {
      const exists = prev.doceToppings.includes(toppingId);
      return {
        ...prev,
        doceToppings: exists
          ? prev.doceToppings.filter((t) => t !== toppingId)
          : [...prev.doceToppings, toppingId],
      };
    });
  };

  // Adjust quantity
  const updateQuantity = (delta: number) => {
    setOrder((prev) => ({
      ...prev,
      quantity: Math.max(1, prev.quantity + delta),
    }));
  };

  // Quick note suggestions
  const quickNotes = [
    'Pouco sal',
    'Bastante queijo',
    'Caprichar na manteiga',
    'Calda bem generosa',
    'Retirada em 15 minutos',
  ];

  const addQuickNote = (note: string) => {
    setOrder((prev) => {
      const current = prev.notes.trim();
      if (!current) return { ...prev, notes: note };
      if (current.includes(note)) return prev;
      return { ...prev, notes: `${current}, ${note}` };
    });
  };

  // WhatsApp link generator
  const encodedText = buildWhatsAppOrderMessage(order);
  const whatsappUrlWithText = `https://wa.me/5521965802404?text=${encodedText}`;

  // Copy raw message
  const handleCopy = () => {
    const rawText = decodeURIComponent(encodedText);
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="monte-seu-pedido" className="relative py-16 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-10 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Calculadora & Pedido Rápido</span>
        </div>
        <h2 className="font-['Syne',sans-serif] text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase [text-wrap:balance]">
          MONTE SEU PEDIDO 🍿
        </h2>
        <p className="mt-2 text-zinc-300 text-sm sm:text-base font-medium [text-wrap:balance]">
          Selecione o tipo, tamanho e acompanhamentos. O valor é atualizado na hora e enviado pronto para o WhatsApp!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Form Controls (Steps 1 to 6) */}
        <div className="lg:col-span-7 space-y-8 bg-[#121217] p-5 sm:p-7 rounded-3xl border border-zinc-800 shadow-xl">
          {/* STEP 1: Tipo de Pipoca */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-zinc-950 font-black text-xs flex items-center justify-center">
                1
              </span>
              <h3 className="font-['Syne',sans-serif] text-base sm:text-lg font-bold text-white uppercase">
                Escolha o Tipo de Pipoca
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: 'salgada', label: 'Salgada', emoji: '🧈', desc: 'Com manteiga' },
                { id: 'mista', label: 'Mista', emoji: '🍿', desc: 'Doce + Salgada' },
                { id: 'doce', label: 'Doce', emoji: '🍫', desc: 'Caramelizada' },
              ].map((item) => {
                const isSelected = order.type === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setOrder((prev) => ({
                        ...prev,
                        type: item.id as 'salgada' | 'doce' | 'mista',
                      }))
                    }
                    className={`py-3 px-2 sm:px-3 rounded-2xl flex flex-col items-center justify-center text-center transition-all ${
                      isSelected
                        ? 'bg-gradient-to-b from-amber-400 to-amber-500 text-zinc-950 font-bold shadow-[0_0_20px_rgba(245,158,11,0.35)] scale-[1.02]'
                        : 'bg-[#181820] text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                    }`}
                  >
                    <span className="text-2xl mb-1">{item.emoji}</span>
                    <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase">
                      {item.label}
                    </span>
                    <span className={`text-[10px] hidden sm:block ${isSelected ? 'text-zinc-900 font-semibold' : 'text-zinc-400'}`}>
                      {item.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: Tamanho */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-zinc-950 font-black text-xs flex items-center justify-center">
                  2
                </span>
                <h3 className="font-['Syne',sans-serif] text-base sm:text-lg font-bold text-white uppercase">
                  Escolha o Tamanho
                </h3>
              </div>
              <span className="text-xs text-amber-400 font-semibold">
                Preços oficiais fixos
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {POPCORN_SIZES.map((size) => {
                const isSelected = order.sizeId === size.id;
                return (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setOrder((prev) => ({ ...prev, sizeId: size.id }))}
                    className={`p-3 rounded-xl text-left transition-all relative flex flex-col justify-between ${
                      isSelected
                        ? 'bg-amber-400/15 border-2 border-amber-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                        : 'bg-[#181820] border border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-amber-400 uppercase">
                          {size.categoryLabel}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                      </div>
                      <div className="text-xs font-bold text-white mt-1 leading-snug">
                        {size.name.replace(/Saquinho |Caixinha |Saco /, '')}
                      </div>
                    </div>

                    <div className="mt-2 pt-2 border-t border-zinc-800 flex items-baseline gap-0.5">
                      <span className="text-[10px] text-zinc-400 font-bold">R$</span>
                      <span className="text-base font-extrabold text-white tabular-nums">
                        {size.price.toFixed(0)}
                      </span>
                      <span className="text-[10px] text-zinc-400 tabular-nums">,00</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 3 & 4: Sabores / Coberturas (Conditionally shown depending on type) */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-zinc-950 font-black text-xs flex items-center justify-center">
                3
              </span>
              <h3 className="font-['Syne',sans-serif] text-base sm:text-lg font-bold text-white uppercase">
                {order.type === 'salgada'
                  ? 'Acompanhamentos Salgados'
                  : order.type === 'doce'
                  ? 'Coberturas Doces'
                  : 'Acompanhamentos & Coberturas (Pipoca Mista)'}
              </h3>
            </div>

            {/* Salgada Toppings */}
            {(order.type === 'salgada' || order.type === 'mista') && (
              <div className="mb-4">
                {order.type === 'mista' && (
                  <span className="text-xs font-bold text-amber-300 mb-2 block">
                    🧈 Para a parte Salgada:
                  </span>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {SALGADA_TOPPINGS.map((top) => {
                    const isChecked = order.salgadaToppings.includes(top.id);
                    return (
                      <button
                        key={top.id}
                        type="button"
                        onClick={() => toggleSalgadaTopping(top.id)}
                        className={`p-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                          isChecked
                            ? 'bg-amber-400 text-zinc-950 font-bold shadow-sm'
                            : 'bg-[#181820] text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        <span className="text-base">{top.icon}</span>
                        <span className="truncate">{top.name}</span>
                        {isChecked && <Check className="w-3.5 h-3.5 ml-auto shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Doce Toppings */}
            {(order.type === 'doce' || order.type === 'mista') && (
              <div>
                {order.type === 'mista' && (
                  <span className="text-xs font-bold text-red-300 mb-2 block">
                    🍫 Para a parte Doce:
                  </span>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {DOCE_TOPPINGS.map((top) => {
                    const isChecked = order.doceToppings.includes(top.id);
                    return (
                      <button
                        key={top.id}
                        type="button"
                        onClick={() => toggleDoceTopping(top.id)}
                        className={`p-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                          isChecked
                            ? 'bg-red-600 text-white font-bold shadow-sm'
                            : 'bg-[#181820] text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        <span className="text-base">{top.icon}</span>
                        <span className="truncate">{top.name}</span>
                        {isChecked && <Check className="w-3.5 h-3.5 ml-auto shrink-0" />}
                      </button>
                    );
                  })}
                </div>
                <p className="mt-2 text-[11px] text-zinc-400 italic">
                  *Opções selecionadas com coberturas especiais e guloseimas tipo Fini disponíveis no carrinho.
                </p>
              </div>
            )}
          </div>

          {/* STEP 5: Quantidade */}
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-zinc-950 font-black text-xs flex items-center justify-center">
                  4
                </span>
                <h3 className="font-['Syne',sans-serif] text-base sm:text-lg font-bold text-white uppercase">
                  Quantidade
                </h3>
              </div>

              {/* Stepper controls */}
              <div className="flex items-center gap-3 bg-[#181820] border border-zinc-800 rounded-2xl p-1.5 shadow-inner">
                <button
                  type="button"
                  onClick={() => updateQuantity(-1)}
                  disabled={order.quantity <= 1}
                  className="w-9 h-9 rounded-xl bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 disabled:hover:bg-zinc-800 text-white flex items-center justify-center transition-all active:scale-95"
                  aria-label="Diminuir quantidade"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-['Syne',sans-serif] text-lg font-black text-white tabular-nums">
                  {order.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => updateQuantity(1)}
                  className="w-9 h-9 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 flex items-center justify-center transition-all active:scale-95 font-bold"
                  aria-label="Aumentar quantidade"
                >
                  <Plus className="w-4 h-4 stroke-[3]" />
                </button>
              </div>
            </div>
          </div>

          {/* STEP 6: Observações */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-zinc-950 font-black text-xs flex items-center justify-center">
                  5
                </span>
                <h3 className="font-['Syne',sans-serif] text-base sm:text-lg font-bold text-white uppercase">
                  Observações (Opcional)
                </h3>
              </div>
              <span className="text-[11px] text-zinc-400">Ex: caprichos ou detalhes</span>
            </div>

            <textarea
              value={order.notes}
              onChange={(e) => setOrder((prev) => ({ ...prev, notes: e.target.value }))}
              placeholder="Ex: Quero com bastante queijo ralado e calda de chocolate bem caprichada..."
              rows={2}
              className="w-full bg-[#181820] border border-zinc-800 rounded-xl p-3 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
            />

            {/* Quick Suggestions */}
            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] text-zinc-400 mr-1">Sugestões rápidas:</span>
              {quickNotes.map((note) => (
                <button
                  key={note}
                  type="button"
                  onClick={() => addQuickNote(note)}
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/50 transition-colors"
                >
                  + {note}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Live Order Receipt & Direct WhatsApp Trigger */}
        <div className="lg:col-span-5 sticky top-20">
          <div className="relative rounded-3xl p-6 bg-gradient-to-b from-[#1c181f] via-[#14141a] to-[#0f0f13] border-2 border-amber-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(245,158,11,0.15)] overflow-hidden">
            {/* Top decorative receipt cutout */}
            <div className="absolute top-0 inset-x-8 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-5 h-5 text-amber-400" />
                <h4 className="font-['Syne',sans-serif] text-base font-extrabold text-white uppercase tracking-wider">
                  Resumo do Pedido
                </h4>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Pronto para Enviar
              </span>
            </div>

            {/* Item Breakdown */}
            <div className="py-4 space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-zinc-400 text-xs block">Produto:</span>
                  <span className="font-bold text-white text-sm">
                    {order.type === 'salgada'
                      ? 'Pipoca Salgada 🧈'
                      : order.type === 'doce'
                      ? 'Pipoca Doce 🍫'
                      : 'Pipoca Mista (Duo) 🍿'}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-zinc-400 text-xs block">Tamanho:</span>
                  <span className="font-bold text-amber-400 text-sm">
                    {currentSize.name}
                  </span>
                </div>
              </div>

              {/* Toppings summary */}
              <div className="pt-2 border-t border-zinc-800/80">
                <span className="text-zinc-400 text-xs block mb-1">Acompanhamentos / Coberturas:</span>
                <div className="flex flex-wrap gap-1">
                  {order.type === 'salgada' || order.type === 'mista'
                    ? order.salgadaToppings.map((id) => {
                        const top = SALGADA_TOPPINGS.find((t) => t.id === id);
                        return top ? (
                          <span
                            key={id}
                            className="inline-flex items-center gap-1 text-[11px] bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-md"
                          >
                            {top.icon} {top.name}
                          </span>
                        ) : null;
                      })
                    : null}

                  {order.type === 'doce' || order.type === 'mista'
                    ? order.doceToppings.map((id) => {
                        const top = DOCE_TOPPINGS.find((t) => t.id === id);
                        return top ? (
                          <span
                            key={id}
                            className="inline-flex items-center gap-1 text-[11px] bg-red-500/10 text-red-300 border border-red-500/30 px-2 py-0.5 rounded-md"
                          >
                            {top.icon} {top.name}
                          </span>
                        ) : null;
                      })
                    : null}

                  {order.salgadaToppings.length === 0 && order.doceToppings.length === 0 && (
                    <span className="text-xs text-zinc-400 italic">
                      Padrão quentinha com sal/açúcar original
                    </span>
                  )}
                </div>
              </div>

              {/* Quantity & Notes */}
              <div className="pt-2 border-t border-zinc-800/80 flex justify-between text-xs text-zinc-300">
                <span>Quantidade:</span>
                <span className="font-bold text-white">{order.quantity}x</span>
              </div>

              {order.notes.trim() && (
                <div className="pt-2 border-t border-zinc-800/80 text-xs">
                  <span className="text-zinc-400 block">Observação:</span>
                  <p className="text-zinc-200 italic mt-0.5 bg-zinc-900/60 p-2 rounded-lg border border-zinc-800">
                    "{order.notes.trim()}"
                  </p>
                </div>
              )}

              {/* Unit price calculation */}
              <div className="pt-2 border-t border-zinc-800/80 flex justify-between text-xs text-zinc-400">
                <span>Preço unitário:</span>
                <span>R$ {unitPrice.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            {/* Total Display */}
            <div className="mt-2 p-4 rounded-2xl bg-[#0e0e13] border border-amber-500/30 flex items-baseline justify-between shadow-inner">
              <span className="text-xs uppercase font-bold text-zinc-300 tracking-wider">
                Valor Total:
              </span>
              <div className="flex items-baseline gap-1 text-right">
                <span className="text-sm font-bold text-amber-400">R$</span>
                <span className="font-['Syne',sans-serif] text-3xl sm:text-4xl font-black text-white tabular-nums tracking-tight">
                  {totalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* Primary Action: PEDIR PELO WHATSAPP */}
            <div className="mt-5 space-y-2.5">
              <a
                href={whatsappUrlWithText}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-5 rounded-2xl font-extrabold text-sm sm:text-base text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-500 hover:to-green-500 shadow-[0_0_25px_rgba(16,185,129,0.45)] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 border border-emerald-400/40"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span className="uppercase tracking-wider">PEDIR PELO WHATSAPP</span>
              </a>

              <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1 px-1">
                <span>Retirada no Centro de Jacareí</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="hover:text-amber-300 inline-flex items-center gap-1 transition-colors"
                  title="Copiar mensagem completa do pedido"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar texto</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
