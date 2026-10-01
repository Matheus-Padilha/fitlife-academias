import React from 'react';
import { GYM_INFO } from '../data/gymInfo';
import { GYM_PLANS } from '../data/plans';
import { MessageCircle, Check, Sparkles } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="planos" className="py-24 bg-zinc-50 relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold tracking-wider text-xs sm:text-sm uppercase mb-2 block">
            Planos & Mensalidades
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-zinc-950 uppercase tracking-tight">
            Escolha o Plano Ideal para <span className="text-emerald-600">Sua Rotina</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Treine com total liberdade de horários em qualquer uma das nossas 4 unidades em Chapecó. Sem burocracia.
          </p>
        </div>

        {/* Grid de Planos com cantos rounded-lg sóbrios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {GYM_PLANS.map((plan) => {
            const isHighlighted = plan.isPopular;
            const priceVal = plan.pricing.livre.monthlyEquivalent;
            const planWhatsappUrl = `${GYM_INFO.contact.whatsappLink}&text=${encodeURIComponent(
              `Olá! Gostaria de saber mais sobre o plano ${plan.name} na FitLife Academias.`
            )}`;

            return (
              <div
                key={plan.id}
                className={`relative rounded-lg p-8 flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-white border-2 border-emerald-600 shadow-md md:-translate-y-1.5'
                    : 'bg-white border border-zinc-200 hover:border-zinc-300 shadow-xs hover:shadow-sm'
                }`}
              >
                {/* Badge Destaque */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md text-[11px] font-black uppercase tracking-wider bg-emerald-600 text-white shadow-xs">
                      <Sparkles className="w-3 h-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-zinc-950">
                      {plan.name}
                    </h3>
                    <p className="text-zinc-500 text-xs sm:text-sm mt-1">
                      {plan.description}
                    </p>
                  </div>

                  {/* Preço */}
                  <div className="mb-8 pb-6 border-b border-zinc-100 flex items-baseline gap-1">
                    {priceVal > 0 ? (
                      <>
                        <span className="text-zinc-500 text-sm font-semibold">R$</span>
                        <span className="text-4xl sm:text-5xl font-black font-display text-zinc-950 tracking-tight">
                          {priceVal}
                        </span>
                        <span className="text-zinc-500 text-xs sm:text-sm font-medium">
                          /mês
                        </span>
                      </>
                    ) : (
                      <span className="text-3xl sm:text-4xl font-black font-display text-emerald-600 tracking-tight">
                        Gratuita
                      </span>
                    )}
                  </div>

                  {/* Benefícios */}
                  <div className="space-y-3 mb-8">
                    {plan.benefits.map((benefit: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão com cantos rounded-lg */}
                <a
                  href={planWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xs ${
                    isHighlighted
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm hover:shadow-md'
                      : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar no WhatsApp</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Garantia / Diferencial inferior */}
        <div className="text-center mt-12 text-zinc-500 text-xs sm:text-sm">
          Planos sem taxa de cancelamento abusiva • Acesso livre às 4 unidades • Matrícula facilitada via WhatsApp
        </div>
      </div>
    </section>
  );
};
