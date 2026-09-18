import React, { useState, useEffect } from 'react';
import { GYM_INFO, getGymOpenStatus } from '../data/gymInfo';
import { ArrowRight } from 'lucide-react';

export const Schedule: React.FC = () => {
  const [currentStatus, setCurrentStatus] = useState(getGymOpenStatus());
  const todayIndex = new Date().getDay();

  const whatsappUrl = `${GYM_INFO.contact.whatsappLink}?text=${encodeURIComponent(
    'Olá! Gostaria de mais informações sobre os planos e a aula experimental na Vigour Academia.'
  )}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStatus(getGymOpenStatus());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="horarios" className="py-20 sm:py-28 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Coluna Esquerda: Texto de Treino / Planos + Chamada WhatsApp */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black font-display text-zinc-950 uppercase tracking-tight leading-tight">
              Treine com <span className="text-red-600">Constância e Foco</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              Agende sua <strong>aula experimental</strong> e venha conhecer nossa estrutura para musculação, cardio e funcional.
            </p>

            <p className="mt-3 text-sm text-zinc-500">
              Seg, Qua e Sex das <strong>06h às 22h</strong>, Ter e Qui das <strong>06h às 11h e 14h às 22h</strong> e Sábados das <strong>07h às 10h</strong>.
            </p>

            {/* Botão WhatsApp */}
            <div className="mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg shadow-red-600/25 hover:shadow-red-600/40 hover:-translate-y-0.5 active:scale-95 group w-full sm:w-auto"
              >
                <span>Fale Conosco no WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Coluna Direita: Grade de Atendimento / Horários */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg border border-zinc-200 shadow-card overflow-hidden">
              {/* Header da tabela com status dinâmico integrado */}
              <div className="p-6 sm:px-8 bg-black text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-red-600/30">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold font-display uppercase tracking-wide">
                      Horários de Atendimento • {GYM_INFO.name}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {GYM_INFO.address.street} - {GYM_INFO.address.neighborhood}, {GYM_INFO.address.city} - {GYM_INFO.address.state}
                  </p>
                </div>

                {/* Status Aberto/Fechado */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-zinc-900 border border-red-600/40 text-white shadow-sm self-start sm:self-center">
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
                  <span className="text-zinc-500 text-xs">•</span>
                  <span className="text-xs text-zinc-300 font-mono">
                    {currentStatus.detailText}
                  </span>
                </div>
              </div>

              {/* Lista de Dias */}
              <div className="divide-y divide-zinc-100">
                {GYM_INFO.schedule.map((item) => {
                  const isToday = item.dayIndex === todayIndex;

                  return (
                    <div
                      key={item.day}
                      className={`p-4 sm:p-5 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors ${
                        isToday ? 'bg-red-50/70 font-semibold' : 'hover:bg-zinc-50/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-2.5 h-2.5 rounded-xs ${
                            isToday ? 'bg-red-600 ring-4 ring-red-200' : 'bg-zinc-300'
                          }`}
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`text-base ${isToday ? 'text-red-700 font-bold' : 'text-zinc-800'}`}>
                              {item.day}
                            </span>
                            {isToday && (
                              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-xs bg-red-100 text-red-800 border border-red-300">
                                Hoje
                              </span>
                            )}
                          </div>
                          {item.note && (
                            <p className="text-xs text-zinc-500 font-normal mt-0.5">
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
                                shift === 'Fechada' ? 'text-zinc-400' : 'text-zinc-900'
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
