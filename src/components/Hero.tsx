import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import heroBg from '../assets/imagem de fundo hero section.jpeg';
import { GYM_INFO } from '../data/gymInfo';
import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(
        '.hero-title',
        {
          y: 40,
          opacity: 0,
          duration: 0.9,
          delay: 0.1,
        }
      )
      .from(
        '.hero-desc',
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
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
      className="relative min-h-[92vh] sm:min-h-[95vh] lg:min-h-screen flex items-end justify-center overflow-hidden bg-black isolate pb-14 sm:pb-20 lg:pb-24 pt-32"
    >
      {/* Imagem de fundo */}
      <img
        src={heroBg}
        alt={`Estrutura da ${GYM_INFO.name} Chapecó`}
        className="hero-bg absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none brightness-90"
      />

      {/* Fade preto de baixo para cima com destaque e contraste (Original Vigour) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 via-45% sm:via-black/75 to-transparent pointer-events-none z-[5]" />

      {/* Vinheta lateral sutil e glow esmeralda */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent pointer-events-none z-[5]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-600/15 rounded-full blur-3xl pointer-events-none z-[5]" />

      {/* Conteúdo Centralizado */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">

          {/* Título Principal Sóbrio (Sem Pílulas Neon) */}
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display text-white tracking-tight uppercase leading-[1.1] max-w-4xl mx-auto">
            <span>Viva o Agora</span> <br />
            <span className="text-emerald-500 drop-shadow-[0_0_25px_rgba(16,185,129,0.35)]">
              Treine na FitLife
            </span>
          </h1>

          {/* Descrição */}
          <p className="hero-desc text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
            A <strong>{GYM_INFO.name}</strong> incentiva pessoas a melhorarem sua qualidade de vida com estrutura moderna e acompanhamento próximo em <strong>4 unidades estratégicas</strong> em Chapecó, das 06h às 22h sem fechar ao meio-dia.
          </p>

          {/* Botões de Ação Direta em formato Pílula (rounded-full) */}
          <div className="hero-ctas pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <a
              href="#planos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:scale-95 group"
            >
              <span>Conhecer Nossos Planos</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={GYM_INFO.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm uppercase tracking-wider backdrop-blur-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Fale no WhatsApp</span>
            </a>
          </div>

          {/* Garantias / Diferenciais sutis */}
          <div className="pt-2 flex items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-400 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              4 Unidades em Chapecó
            </span>
            <span>•</span>
            <span>06h às 22h Sem Fechar</span>
            <span>•</span>
            <span>Acompanhamento Próximo</span>
          </div>
        </div>
      </div>
    </section>
  );
};
