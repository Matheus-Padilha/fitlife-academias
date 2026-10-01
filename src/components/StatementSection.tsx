import React from 'react';
import { GYM_INFO } from '../data/gymInfo';
import { Sparkles } from 'lucide-react';

export const StatementSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#0D0D0D] relative overflow-hidden border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 text-center relative z-10">
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Sua Jornada Começa Hoje</span>
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-white uppercase tracking-tight leading-[1.15] sm:leading-[1.1]">
          Mais que uma academia, o seu ponto de{' '}
          <span className="text-emerald-400">
            saúde, energia e evolução diária
          </span>{' '}
          em Chapecó.
        </h2>
        <p className="mt-6 text-zinc-400 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          {GYM_INFO.tagline}. Com 4 unidades estruturadas e horários flexíveis das 06h às 22h sem fechar ao meio-dia, nunca foi tão fácil manter a constância.
        </p>
      </div>
    </section>
  );
};
