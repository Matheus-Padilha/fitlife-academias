import React from 'react';
import { GYM_INFO } from '../data/gymInfo';
import { GYM_PLANS } from '../data/plans';
import { MessageCircle, Check, Sparkles } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="planos" className="py-24 bg-[#0D0D0D] relative border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2 block">
            Planos & Mensalidades
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
            Escolha o Plano Ideal para <span className="text-emerald-400">Sua Rotina</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Treine com total liberdade de horários em qualquer uma das nossas 4 unidades em Chapecó. Sem burocracia.
          </p>
        </div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {GYM_PLANS.map((plan) => {
            const isHighlighted = plan.isPopular;
            const planWhatsappUrl = `${GYM_INFO.contact.whatsappLink}&text=${encodeURIComponent(
              `Olá! Gostaria de saber mais sobre o ${plan.name} na FitLife Academias.`
            )}`;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-[#141414] border-2 border-emerald-500 shadow-[0_10px_35px_rgba(16,185,129,0.15)] md:-translate-y-2'
                    : 'bg-[#111111] border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* Badge Destaque */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className={`inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                      isHighlighted
                        ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/30'
                        : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                    }`}>
                      {isHighlighted && <Sparkles className="w-3 h-3 fill-current" />}
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold font-display text-white mt-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>

                  <div className="my-6 py-4 border-y border-zinc-800/80">
                    <span className="text-xs uppercase tracking-wider text-zinc-400 block font-semibold">
                      Condição
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-white mt-1 block">
                      {plan.pricing.livre.installments}
                    </span>
                  </div>

                  {/* Benefícios */}
                  <ul className="space-y-3 mb-8">
                    {plan.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={planWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 ${
                    isHighlighted
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/25 hover:scale-[1.02]'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-emerald-500/50'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Escolher Este Plano</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Rodapé da seção de planos */}
        <div className="mt-12 text-center text-xs text-zinc-500">
          * Aceitamos Gympass e TotalPass em todas as unidades. Consulte os planos compatíveis na recepção.
        </div>

      </div>
    </section>
  );
};
