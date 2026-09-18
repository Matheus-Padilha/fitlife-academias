import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import heroBg from '../assets/imagem de fundo hero section.jpeg';
import { GYM_INFO } from '../data/gymInfo';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-title', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.1,
      }).from(
        '.hero-desc',
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.5'
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

      {/* Fade preto de baixo para cima com destaque e contraste */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 via-45% sm:via-black/75 to-transparent pointer-events-none z-[5]" />

      {/* Vinheta lateral sutil e glow vermelho */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent pointer-events-none z-[5]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/15 rounded-full blur-3xl pointer-events-none z-[5]" />

      {/* Conteúdo Centralizado */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {/* Título Principal com slogan oficial da Vigour */}
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display text-white tracking-tight uppercase leading-[1.1] max-w-4xl mx-auto">
            <span>O Melhor Momento Para</span> <br />
            <span className="text-red-500">
              Começar é Agora
            </span>
          </h1>

          {/* Descrição */}
          <p className="hero-desc text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
            A <strong>{GYM_INFO.name}</strong> une saúde e bem-estar no mesmo lugar em Chapecó, no Jardim Itália. Musculação, cardio e funcional com acompanhamento atencioso para você encontrar sua melhor versão.
          </p>
        </div>
      </div>
    </section>
  );
};
