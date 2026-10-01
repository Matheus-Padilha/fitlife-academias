import React, { useState, useEffect } from 'react';
import { GYM_INFO, getGymOpenStatus } from '../data/gymInfo';
import { Clock, MessageCircle } from 'lucide-react';

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
    <section id="horarios" className="py-20 sm:py-28 bg-white relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Coluna Esquerda */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <span className="text-emerald-600 font-bold tracking-wider text-xs sm:text-sm uppercase mb-2 block">
              Flexibilidade Total
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black font-display text-zinc-950 uppercase tracking-tight leading-tight">
              Treine no <span className="text-emerald-600">Seu Horário</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              Sabemos que seu dia a dia é corrido. Por isso, a FitLife funciona das <strong>06:00 às 22:00 sem fechar ao meio-dia</strong> durante toda a semana. Treine cedo, no almoço ou à noite com a mesma estrutura.
            </p>

            <div className="pt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Treino no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Grade de Horários */}
          <div className="lg:col-span-7">
            <div className="rounded-lg bg-zinc-50 border border-zinc-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-200">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <span className="font-bold text-zinc-900 text-base sm:text-lg">Grade de Horários</span>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-md ${
                  currentStatus.isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-zinc-200 text-zinc-700'
                }`}>
                  {currentStatus.isOpen ? '• Aberta Agora' : '• Fechada no Momento'}
                </span>
              </div>

              <div className="space-y-3">
                {GYM_INFO.schedule.map((item, index) => {
                  const isToday = index === todayIndex;
                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between p-3.5 rounded-md transition-colors ${
                        isToday ? 'bg-emerald-50/80 border border-emerald-200' : 'bg-white border border-zinc-200/60'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`text-xs sm:text-sm font-bold ${isToday ? 'text-emerald-900' : 'text-zinc-800'}`}>
                          {item.day}
                        </span>
                        {isToday && (
                          <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white px-2 py-0.5 rounded">
                            Hoje
                          </span>
                        )}
                      </div>
                      <span className={`text-xs sm:text-sm font-semibold ${isToday ? 'text-emerald-700' : 'text-zinc-600'}`}>
                        {item.shifts.join(' • ')}
                      </span>
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
