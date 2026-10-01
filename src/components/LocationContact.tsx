import React from 'react';
import { GYM_INFO } from '../data/gymInfo';
import { MapPin, Navigation, Phone, Instagram, Star, Clock } from 'lucide-react';

export const LocationContact: React.FC = () => {
  return (
    <section id="unidades" className="py-24 bg-[#0A0A0A] relative border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2 block">
            Presença Estratégica em Chapecó
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
            Nossas <span className="text-emerald-400">4 Unidades</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Treine perto de casa ou do trabalho. Escolha a unidade mais conveniente e aproveite a mesma qualidade FitLife em toda Chapecó.
          </p>
        </div>

        {/* Grid das 4 Unidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {GYM_INFO.units.map((unit) => (
            <div
              key={unit.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)]"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <MapPin className="w-3.5 h-3.5" />
                    {unit.badge || unit.neighborhood}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold bg-zinc-900 px-2.5 py-1 rounded-full border border-zinc-800">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{unit.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-emerald-400 transition-colors">
                  {unit.name}
                </h3>

                <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                  {unit.address}
                </p>

                {/* Features */}
                <div className="mt-4 space-y-1.5 pt-4 border-t border-zinc-800/80">
                  {unit.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ações da Unidade */}
              <div className="mt-6 pt-5 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                <a
                  href={unit.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-semibold border border-zinc-700 hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Ver Rota no Maps</span>
                </a>

                <a
                  href={`https://wa.me/${unit.whatsappRaw}?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20${encodeURIComponent(unit.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-all shadow-md shadow-emerald-500/20"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Falar com Recepção</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Barra de Canais Oficiais */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-[#141414] to-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Clock className="w-4 h-4" />
              <span>Horário Estendido</span>
            </div>
            <h4 className="text-lg font-bold text-white">
              Segunda a Sexta: 06h às 22h sem fechar ao meio-dia
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              Sábados das 08h às 16h. Atendimento rápido em todas as recepções.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={GYM_INFO.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>{GYM_INFO.contact.phoneFormatted}</span>
            </a>

            <a
              href={GYM_INFO.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700 transition-all"
              aria-label="Instagram FitLife"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
