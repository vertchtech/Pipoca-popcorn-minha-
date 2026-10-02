import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PopcornCategories from './components/PopcornCategories';
import MenuPricingSection from './components/MenuPricingSection';
import OrderBuilderSection from './components/OrderBuilderSection';
import HowToOrderSection from './components/HowToOrderSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import ScrollProgress from './components/ScrollProgress';
import { OrderState } from './data/popcornData';

export default function App() {
  const [order, setOrder] = useState<OrderState>({
    type: 'mista',
    sizeId: 'caixinha_media',
    salgadaToppings: ['sal_manteiga', 'queijo_ralado'],
    doceToppings: ['leite_condensado', 'chocolate'],
    quantity: 1,
    notes: '',
  });

  const scrollToOrderBuilder = () => {
    const el = document.getElementById('monte-seu-pedido');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryId: 'salgada' | 'doce' | 'mista') => {
    setOrder((prev) => ({
      ...prev,
      type: categoryId,
    }));
    scrollToOrderBuilder();
  };

  const handleSelectSize = (sizeId: string) => {
    setOrder((prev) => ({
      ...prev,
      sizeId,
    }));
    scrollToOrderBuilder();
  };

  return (
    <div className="relative min-h-screen bg-[#0b0b0e] text-[#f4f4f6] selection:bg-amber-400 selection:text-zinc-950 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Scroll indicator across top */}
      <ScrollProgress />

      {/* Top Bar Contract Compliant Navigation */}
      <Header onOrderClick={scrollToOrderBuilder} />

      {/* Main Single-Page Continuous Vertical Flow */}
      <main className="relative">
        {/* 1. Hero / Abertura Cinematográfica com Logo 3D Oficial, Personagem e WhatsApp */}
        <HeroSection onOrderClick={scrollToOrderBuilder} />

        {/* Subtle Section Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
        </div>

        {/* 2. Seção — Nossas Pipocas (Salgada, Mista, Doce) */}
        <PopcornCategories onSelectCategory={handleSelectCategory} />

        {/* Subtle Section Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        {/* 3. Seção — Cardápio e Valores (8 tamanhos com preços exatos) */}
        <MenuPricingSection
          selectedSizeId={order.sizeId}
          onSelectSize={handleSelectSize}
        />

        {/* Subtle Section Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
        </div>

        {/* 4. Seção — Sistema de Pedido (Monte Seu Pedido + Resumo ao vivo + WhatsApp automático) */}
        <OrderBuilderSection order={order} setOrder={setOrder} />

        {/* Subtle Section Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        {/* 5. Seção — Como Comprar (3 passos visuais com ícones 3D) */}
        <HowToOrderSection />

        {/* Subtle Section Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
        </div>

        {/* 6. Seção — Nossa Localização (Centro de Conceição de Jacareí + Botões WhatsApp & Google Maps) */}
        <LocationSection />
      </main>

      {/* 7. Rodapé Premium com logo oficial reduzida, endereço e botão de WhatsApp */}
      <Footer />

      {/* 8. Botão Flutuante de WhatsApp no canto inferior direito */}
      <FloatingWhatsAppButton />
    </div>
  );
}
