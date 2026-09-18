import React from 'react';
import { GYM_INFO } from '../data/gymInfo';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const Pricing: React.FC = () => {
  const whatsappUrl = `${GYM_INFO.contact.whatsappLink}?text=${encodeURIComponent(
    'Olá! Gostaria de mais informações sobre os planos e a aula experimental na Strong Fit Academia.'
  )}`;

  return (
    <section id="planos" className="py-20 sm:py-28 bg-white relative border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Título Principal */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-zinc-950 uppercase tracking-tight leading-tight">
          Treine com <span className="text-blue-600">Qualidade e Dedicação</span>
        </h2>

        {/* Subtítulo / Descrição */}
        <p className="mt-5 text-base sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
          Agende sua <strong>aula experimental</strong> e venha conferir nossa estrutura para musculação, cardio e funcional.
        </p>

        {/* Chamada para o WhatsApp */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:scale-95 group"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Falar com nossa equipe</span>
            <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
