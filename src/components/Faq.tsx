import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { GYM_INFO } from '../data/gymInfo';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como funciona a aula experimental na Vigour Academia?',
      answer:
        'A aula experimental pode ser agendada de forma rápida e prática diretamente pelo nosso WhatsApp! Você vem conhecer nosso espaço na Rua Achiles Tomazeli, conferir a estrutura de musculação, cardio e funcional e tirar dúvidas com nossos profissionais.',
    },
    {
      question: 'Quais modalidades a Vigour Academia oferece?',
      answer:
        'Oferecemos modalidades completas de Musculação, Cardio e Treino Funcional, com treinos voltados para hipertrofia, ganho de força, resistência física, emagrecimento e qualidade de vida.',
    },
    {
      question: 'Qual é o horário de atendimento da academia?',
      answer:
        'Atendemos de Segunda, Quarta e Sexta das 06:00 às 22:00 direto. Nas Terças e Quintas atendemos das 06:00 às 11:00 e das 14:00 às 22:00. Aos Sábados atendemos das 07:00 às 10:00. Aos domingos permanecemos fechados.',
    },
    {
      question: 'Nunca treinei antes. Terei acompanhamento dos instrutores?',
      answer:
        'Com certeza! Nossa equipe de instrutores está presente no salão de musculação e nos treinos para orientar seus movimentos, ajustar cargas, garantir segurança e auxiliar na evolução correta.',
    },
    {
      question: 'Onde a Vigour Academia fica localizada em Chapecó?',
      answer:
        'Estamos localizados na Rua Achiles Tomazeli, 170-D, no bairro Jardim Itália em Chapecó - SC, com fácil acesso e estacionamento.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#FAFAFA] relative border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black font-display text-zinc-950 uppercase tracking-tight">
            Perguntas <span className="text-red-600">Frequentes</span>
          </h2>
          <p className="mt-4 text-base text-zinc-600">
            Tudo o que você precisa saber para começar a treinar na Vigour Academia.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-zinc-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-zinc-900 hover:text-red-600 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-red-600 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-zinc-600 text-sm sm:text-base leading-relaxed border-t border-zinc-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA final do FAQ */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-white border border-red-600/20 shadow-sm">
          <h3 className="text-lg font-bold text-zinc-900 mb-2">Ainda tem alguma dúvida?</h3>
          <p className="text-sm text-zinc-600 mb-5">
            Nossa equipe está pronta para te atender e tirar todas as suas dúvidas no WhatsApp.
          </p>
          <a
            href={GYM_INFO.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs uppercase tracking-wider font-extrabold shadow-md hover:scale-105 transition-all"
          >
            Falar com a Vigour Academia
          </a>
        </div>
      </div>
    </section>
  );
};
