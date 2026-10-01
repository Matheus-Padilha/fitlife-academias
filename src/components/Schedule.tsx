import React, { useState, useEffect } from 'react';
import { GYM_INFO, getGymOpenStatus } from '../data/gymInfo';
import { ArrowRight, Clock, MessageCircle } from 'lucide-react';

export const Schedule: React.FC = () => {
  const [currentStatus, setCurrentStatus] = useState(getGymOpenStatus());
  const todayIndex = new Date().getDay();

  const whatsappUrl = `${GYM_INFO.contact.whatsappLink}&text=${encodeURIComponent(
    'Olá! Gostaria de mais informações sobre horários e planos na FitLife Academias.'
  )}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStatus(getGymOpenStatus());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="horarios" className="py-20 sm:py-28 bg-[#0D0D0D] relative border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Coluna Esquerda: Texto de Treino / Planos + Chamada WhatsApp */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <span className="text-emerald-400 font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2 block">
              Flexibilidade Total
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black font-display text-white uppercase tracking-tight leading-tight">
              Treine no Seu <span className="text-emerald-400">Próprio Ritmo</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              Agende sua <strong>aula experimental gratuita</strong> e venha conhecer a estrutura de musculação, cardio e funcional da FitLife.
            </p>

            <p className="mt-3 text-sm text-zinc-400">
              Segunda a Sexta das <strong>06:00 às 22:00 sem fechar ao meio-dia</strong> e Sábados das <strong>08:00 às 16:00</strong>. Treine na hora que melhor se adapta à sua rotina.
            </p>

            {/* Botão WhatsApp */}
            <div className="mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/25 hover:scale-[1.02] active:scale-95 group w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 text-black" />
                <span>Agendar Aula Grátis</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Coluna Direita: Grade de Atendimento / Horários */}
          <div className="lg:col-span-7">
            <div className="bg-[#141414] rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden">
              
              {/* Header da tabela com status dinâmico integrado */}
              <div className="p-6 sm:px-8 bg-zinc-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800">
                <div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <h3 className="text-base sm:text-lg font-bold font-display uppercase tracking-wide">
                      Horários de Atendimento • {GYM_INFO.name}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Rede com 4 Unidades em Chapecó - SC
                  </p>
                </div>

                {/* Status Aberto/Fechado */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-emerald-500/40 text-white shadow-sm self-start sm:self-center">
                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        currentStatus.isOpen ? 'bg-emerald-400' : 'bg-rose-400'
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                        currentStatus.isOpen ? 'bg-emerald-500' : 'bg-rose-500'
                      }`}
                    />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {currentStatus.statusText}
                  </span>
                  <span className="text-zinc-600 text-xs">•</span>
                  <span className="text-xs text-zinc-300 font-mono">
                    {currentStatus.detailText}
                  </span>
                </div>
              </div>

              {/* Lista de Dias */}
              <div className="divide-y divide-zinc-800/80">
                {GYM_INFO.schedule.map((item) => {
                  const isToday = item.dayIndex === todayIndex;

                  return (
                    <div
                      key={item.day}
                      className={`p-4 sm:p-5 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors ${
                        isToday ? 'bg-emerald-500/10 font-semibold' : 'hover:bg-zinc-800/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            isToday ? 'bg-emerald-400 ring-4 ring-emerald-500/30' : 'bg-zinc-700'
                          }`}
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm sm:text-base ${isToday ? 'text-emerald-400 font-bold' : 'text-zinc-200'}`}>
                              {item.day}
                            </span>
                            {isToday && (
                              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                Hoje
                              </span>
                            )}
                          </div>
                          {item.note && (
                            <p className="text-xs text-zinc-400 font-normal mt-0.5">
                              {item.note}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <div className="flex flex-col sm:items-end">
                          {item.shifts.map((shift, idx) => (
                            <span
                              key={idx}
                              className={`font-mono text-sm sm:text-base font-bold ${
                                shift === 'Fechada' ? 'text-zinc-500' : 'text-zinc-100'
                              }`}
                            >
                              {shift}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
