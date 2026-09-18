import React from 'react';
import { GYM_INFO } from '../data/gymInfo';

export const StatementSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white relative overflow-hidden border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 text-center relative z-10">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-red-600 mb-4 inline-block">
          Sua Jornada Começa Aqui
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-zinc-950 uppercase tracking-tight leading-[1.15] sm:leading-[1.1]">
          Mais que uma academia, o seu espaço de{' '}
          <span className="text-red-600">
            saúde, bem-estar e vitalidade
          </span>{' '}
          em Chapecó.
        </h2>
        <p className="mt-6 text-zinc-600 text-sm sm:text-lg max-w-2xl mx-auto font-normal">
          {GYM_INFO.tagline}. Musculação completa, cardio e funcional no Jardim Itália para você conquistar seus resultados.
        </p>
      </div>
    </section>
  );
};
