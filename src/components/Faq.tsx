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
        'Com certeza! Nossa equipe conta com profissionais atentos e disponíveis no salão em todos os turnos para montar sua ficha de treino, orientar a postura nos aparelhos e acompanhar sua evolução.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-zinc-50 relative border-b border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-wider text-xs sm:text-sm uppercase mb-2 block">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-zinc-950 uppercase tracking-tight">
            Perguntas <span className="text-emerald-600">Frequentes</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Tudo o que você precisa saber para começar a treinar na maior rede de academias de Chapecó.
          </p>
        </div>

        {/* Lista de FAQ em cards rounded-lg sóbrios */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-lg bg-white border border-zinc-200/90 overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-zinc-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-600 leading-relaxed border-t border-zinc-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA final no rodapé do FAQ com cantos rounded-lg */}
        <div className="mt-12 text-center">
          <p className="text-zinc-600 text-sm mb-4">Ainda ficou com alguma dúvida?</p>
          <a
            href={GYM_INFO.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-zinc-50 text-emerald-700 border border-emerald-300 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs hover:border-emerald-500 transition-all"
          >
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Falar com um Consultor FitLife</span>
          </a>
        </div>
      </div>
    </section>
  );
};
