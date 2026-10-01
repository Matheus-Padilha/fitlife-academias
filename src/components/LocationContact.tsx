import React from 'react';
import { GYM_INFO } from '../data/gymInfo';
import { MapPin, Navigation, Phone, Star } from 'lucide-react';

export const LocationContact: React.FC = () => {
  return (
    <section id="unidades" className="py-24 bg-white relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold tracking-wider text-xs sm:text-sm uppercase mb-2 block">
            Presença Estratégica em Chapecó
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-zinc-950 uppercase tracking-tight">
            Nossas <span className="text-emerald-600">4 Unidades</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Treine perto de casa ou do trabalho. Escolha a unidade mais conveniente e aproveite a mesma qualidade FitLife em toda Chapecó.
          </p>
        </div>

        {/* Grid das 4 Unidades com cantos rounded-lg sóbrios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {GYM_INFO.units.map((unit) => (
            <div
              key={unit.id}
              className="p-6 sm:p-8 rounded-lg bg-zinc-50 border border-zinc-200/90 hover:border-emerald-500 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    {unit.badge || unit.neighborhood}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold bg-white px-2.5 py-1 rounded-md border border-zinc-200 shadow-2xs">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{unit.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-zinc-950 group-hover:text-emerald-600 transition-colors">
                  {unit.name}
                </h3>
                
                <p className="text-zinc-600 text-sm mt-2 leading-relaxed">
                  {unit.address} • Chapecó - SC
                </p>

                {/* Diferenciais da unidade */}
                <div className="mt-6 pt-5 border-t border-zinc-200/80 space-y-2">
                  <div className="text-xs sm:text-sm text-zinc-700 space-y-1.5">
                    {unit.features.map((feat: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        <span className="text-zinc-700 font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botões de Ação da Unidade com cantos rounded-lg */}
              <div className="mt-8 pt-4 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/${unit.whatsappRaw}?text=${encodeURIComponent(
                    `Olá! Gostaria de informações sobre a unidade ${unit.name} da FitLife Academias.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs hover:shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Unidade</span>
                </a>

                <a
                  href={unit.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-300 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all"
                >
                  <Navigation className="w-4 h-4 text-emerald-600" />
                  <span>Ver Rota</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Atendimento Central com cantos rounded-lg */}
        <div className="max-w-4xl mx-auto rounded-lg bg-zinc-50 border border-zinc-200 p-8 sm:p-10 text-center relative overflow-hidden shadow-xs">
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black font-display text-zinc-950 uppercase">
              Dúvidas sobre qual unidade escolher?
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base max-w-xl mx-auto">
              Nossa equipe de consultores está pronta para indicar a filial ideal para a sua rotina e agendar sua aula experimental gratuita.
            </p>
            <div className="pt-2">
              <a
                href={GYM_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Central de Atendimento FitLife</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
