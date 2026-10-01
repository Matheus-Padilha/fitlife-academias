import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymInfo';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como funciona a aula experimental na FitLife Academias?',
      answer:
        'A aula experimental é 100% gratuita! Basta nos chamar no WhatsApp para agendar o melhor dia e horário. Você poderá escolher qualquer uma das 4 unidades em Chapecó para conhecer os equipamentos, conversar com os professores e vivenciar nosso ambiente.',
    },
    {
      question: 'Posso treinar em qualquer uma das 4 unidades da FitLife?',
      answer:
        'Sim! Nosso plano dá acesso completo a toda a rede de 4 unidades em Chapecó (Passo dos Fortes, Esplanada, Presidente Médici e Efapi). Você treina onde for mais cômodo no seu dia a dia.',
    },
    {
      question: 'A FitLife aceita Gympass ou TotalPass?',
      answer:
        'Sim! Somos conveniados aos principais benefícios corporativos de atividade física, como Gympass e TotalPass. Basta fazer o check-in diretamente na recepção de qualquer filial.',
    },
    {
      question: 'Qual é o horário de atendimento das unidades?',
      answer:
        'Funcionamos de Segunda a Sexta das 06:00 às 22:00 de forma ininterrupta (sem fechar ao meio-dia!) e aos Sábados das 08:00 às 16:00.',
    },
    {
      question: 'Nunca treinei antes. Terei auxílio de instrutores no salão?',
      answer:
        'Com certeza! Contamos com equipe de instrutores dedicados em todas as filiais para montar sua ficha de treino, orientar a postura e execução dos exercícios e acompanhar sua evolução desde o primeiro dia com segurança.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0A0A0A] relative border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-400 mb-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight mt-2">
            Perguntas <span className="text-emerald-400">Frequentes</span>
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Tudo o que você precisa saber para começar a treinar hoje na {GYM_INFO.name}.
          </p>
        </div>

        {/* Acordeão */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-[#141414] border-emerald-500/40 shadow-[0_4px_20px_rgba(16,185,129,0.05)]'
                    : 'bg-[#111111] border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-300 font-light leading-relaxed border-t border-zinc-800/60 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
