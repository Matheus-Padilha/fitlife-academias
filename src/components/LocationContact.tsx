import React from 'react';
import { GYM_INFO } from '../data/gymInfo';
import localizacaoImg from '../assets/imagem localizacao.jpeg';
import { Navigation, Phone, Instagram } from 'lucide-react';

export const LocationContact: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-white relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-black font-display text-zinc-950 uppercase tracking-tight">
            Como Chegar & <span className="text-red-600">Localização</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Localizada na Rua Achiles Tomazeli, no bairro Jardim Itália em Chapecó - SC.
          </p>
        </div>

        {/* Informações rápidas em cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-zinc-200/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900">Endereço</h3>
              <p className="text-sm text-zinc-600 mt-1">{GYM_INFO.address.full}</p>
              <p className="text-xs text-zinc-400 mt-0.5">{GYM_INFO.address.plusCode}</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-zinc-200/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900">WhatsApp / Telefone</h3>
              <p className="text-sm text-zinc-600 mt-1">{GYM_INFO.contact.phoneFormatted}</p>
              <a
                href={GYM_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-red-600 hover:underline mt-0.5 inline-block"
              >
                Chamar no WhatsApp →
              </a>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-zinc-200/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900">Instagram</h3>
              <p className="text-sm text-zinc-600 mt-1">{GYM_INFO.contact.instagramHandle}</p>
              <a
                href={GYM_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-red-600 hover:underline mt-0.5 inline-block"
              >
                Seguir no Instagram →
              </a>
            </div>
          </div>
        </div>

        {/* Container: Mapa à esquerda e Fachada à direita */}
        <div className="max-w-6xl mx-auto rounded-2xl border border-zinc-200 overflow-hidden shadow-card grid grid-cols-1 lg:grid-cols-2 bg-white mb-6">
          {/* Lado Esquerdo: Mapa Interativo */}
          <div className="relative h-[380px] sm:h-[460px] lg:h-[520px] bg-zinc-100 flex flex-col border-b lg:border-b-0 lg:border-r border-zinc-200">
            <iframe
              title={`Localização ${GYM_INFO.name} Chapecó`}
              src={GYM_INFO.address.googleMapsEmbedUrl}
              className="w-full h-full flex-1 border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Barra informativa inferior do mapa */}
            <div className="p-4 bg-white border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-600">
              <span className="font-semibold text-zinc-800">
                {GYM_INFO.address.street} • {GYM_INFO.address.neighborhood} ({GYM_INFO.address.city} - {GYM_INFO.address.state})
              </span>
              <a
                href={GYM_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-red-600 hover:text-red-700 hover:underline inline-flex items-center gap-1"
              >
                <Navigation className="w-3 h-3" />
                Traçar rota no GPS →
              </a>
            </div>
          </div>

          {/* Lado Direito: Imagem Real da Fachada da Vigour Academia */}
          <div className="relative h-[380px] sm:h-[460px] lg:h-[520px] bg-black flex items-center justify-center overflow-hidden">
            <img
              src={localizacaoImg}
              alt={`Fachada da ${GYM_INFO.name} em Chapecó`}
              className="w-full h-full object-cover select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
              <span className="text-xs font-extrabold uppercase px-2.5 py-1 rounded bg-red-600 text-white inline-block mb-2">
                Chapecó - SC
              </span>
              <h4 className="text-xl font-bold font-display">{GYM_INFO.name}</h4>
              <p className="text-xs text-zinc-300 mt-1">{GYM_INFO.address.street} - {GYM_INFO.address.neighborhood}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
