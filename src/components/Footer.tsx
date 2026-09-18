import React from 'react';
import { GYM_INFO } from '../data/gymInfo';
import { Phone, MapPin, ArrowUp, Instagram } from 'lucide-react';
import logoVigour from '../assets/logo.png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-12 border-t border-red-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoVigour}
                alt={`${GYM_INFO.name} Logo`}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-semibold">
              "{GYM_INFO.tagline}"
            </p>
            <p className="text-xs text-zinc-500">
              {GYM_INFO.subTagline}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={GYM_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-red-500 hover:border-red-600 transition-colors"
                aria-label={`Instagram da ${GYM_INFO.name}`}
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={GYM_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500 transition-colors"
                aria-label={`WhatsApp da ${GYM_INFO.name}`}
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <a href="#inicio" className="hover:text-red-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-red-400 transition-colors">
                  Sobre a Academia
                </a>
              </li>
              <li>
                <a href="#modalidades" className="hover:text-red-400 transition-colors">
                  Modalidades
                </a>
              </li>
              <li>
                <a href="#horarios" className="hover:text-red-400 transition-colors">
                  Horários de Atendimento
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-red-400 transition-colors">
                  Localização
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-red-400 transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Modalidades */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Modalidades
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>Musculação Completa</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>Cardio</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>Treino Funcional</span>
              </li>
            </ul>
          </div>

          {/* Contact & Location Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contato & Endereço
            </h4>
            <p className="text-xs text-zinc-400 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
              <span>{GYM_INFO.address.full}</span>
            </p>
            <p className="text-xs text-zinc-400 flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Telefone/WhatsApp: {GYM_INFO.contact.phoneFormatted}</span>
            </p>
            <p className="text-xs text-zinc-400 flex items-center gap-2.5">
              <Instagram className="w-4 h-4 text-red-500 flex-shrink-0" />
              <a
                href={GYM_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                {GYM_INFO.contact.instagramHandle}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {GYM_INFO.name}. Todos os direitos reservados.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
