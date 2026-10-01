import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import heroBg from '../assets/imagem de fundo hero section.jpeg';
import { GYM_INFO } from '../data/gymInfo';
import { ArrowRight, MessageCircle, ShieldCheck, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.1,
      })
      .from(
        '.hero-title',
        {
          y: 35,
          opacity: 0,
          duration: 0.85,
        },
        '-=0.4'
      )
      .from(
        '.hero-desc',
        {
          y: 25,
          opacity: 0,
          duration: 0.75,
        },
        '-=0.5'
      )
      .from(
        '.hero-ctas',
        {
          y: 20,
          opacity: 0,
          duration: 0.7,
        },
        '-=0.4'
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-[95vh] sm:min-h-screen flex items-end justify-center overflow-hidden bg-black isolate pb-14 sm:pb-20 lg:pb-24 pt-32 sm:pt-36"
    >
      {/* Imagem de fundo */}
      <img
        src={heroBg}
        alt={`Estrutura da ${GYM_INFO.name} Chapecó`}
        className="hero-bg absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none brightness-[0.70]"
      />

      {/* Gradientes de contraste para leitura perfeita */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-50% to-black/40 pointer-events-none z-[5]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none z-[5]" />

      {/* Conteúdo Centralizado */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6">

          {/* Badge superior com autoridade local */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Rede com 4 Unidades em Chapecó - SC</span>
          </div>

          {/* Título Principal com a essência FitLife */}
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display text-white tracking-tight uppercase leading-[1.08] max-w-4xl mx-auto">
            <span>Viva o Agora</span> <br />
            <span className="text-emerald-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.35)]">
              Treine na FitLife
            </span>
          </h1>

          {/* Descrição persuasiva */}
          <p className="hero-desc text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Incentivando pessoas a melhorarem sua qualidade de vida todos os dias. Estrutura completa de musculação e cardio em <strong>4 unidades estratégicas</strong> em Chapecó, das 06h às 22h sem fechar ao meio-dia.
          </p>

          {/* Botões de Ação Direta (Conversão Mobile & Desktop) */}
          <div className="hero-ctas pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <a
              href="#planos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-black text-sm uppercase tracking-wider shadow-[0_8px_24px_rgba(16,185,129,0.35)] hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              <span>Conhecer Nossos Planos</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={GYM_INFO.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700/80 font-bold text-sm uppercase tracking-wider hover:border-emerald-500/50 hover:text-emerald-400 active:scale-95 transition-all duration-300 backdrop-blur-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Fale no WhatsApp</span>
            </a>
          </div>

          {/* Selos de Confiança */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-400 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              4.7 ★ no Google (+100 Avaliações)
            </span>
            <span>•</span>
            <span>06h às 22h Sem Fechar</span>
            <span>•</span>
            <span>Gympass & TotalPass</span>
          </div>

        </div>
      </div>
    </section>
  );
};
