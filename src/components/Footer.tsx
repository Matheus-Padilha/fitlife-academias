import React from 'react';
import { GYM_INFO } from '../data/gymInfo';
import { MapPin, Phone, Instagram } from 'lucide-react';
import logoFitLife from '../assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-200 pt-16 pb-12 text-zinc-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Coluna 1: Logo e Marca */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src={logoFitLife}
                alt={`${GYM_INFO.name} Logo`}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Incentivando pessoas a melhorarem sua qualidade de vida com estrutura moderna e acompanhamento próximo em Chapecó.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-100 hover:bg-emerald-50 text-zinc-600 hover:text-emerald-600 flex items-center justify-center transition-colors border border-zinc-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={GYM_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-100 hover:bg-emerald-50 text-zinc-600 hover:text-emerald-600 flex items-center justify-center transition-colors border border-zinc-200"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4 className="text-zinc-900 font-bold text-sm uppercase tracking-wider mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#inicio" className="hover:text-emerald-600 transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-emerald-600 transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#modalidades" className="hover:text-emerald-600 transition-colors">Modalidades</a>
              </li>
              <li>
                <a href="#planos" className="hover:text-emerald-600 transition-colors">Planos & Preços</a>
              </li>
              <li>
                <a href="#horarios" className="hover:text-emerald-600 transition-colors">Horários de Funcionamento</a>
              </li>
              <li>
                <a href="#unidades" className="hover:text-emerald-600 transition-colors">Nossas 4 Unidades</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Nossas 4 Unidades */}
          <div>
            <h4 className="text-zinc-900 font-bold text-sm uppercase tracking-wider mb-4">Unidades Chapecó</h4>
            <ul className="space-y-2.5 text-zinc-500 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Passo dos Fortes (R. John Kennedy, 1860-E)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Esplanada (R. Borges de Medeiros, 1280)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Presidente Médici</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Efapi</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Atendimento & Horário */}
          <div>
            <h4 className="text-zinc-900 font-bold text-sm uppercase tracking-wider mb-4">Atendimento</h4>
            <div className="space-y-2 text-zinc-500 text-xs sm:text-sm">
              <p className="font-semibold text-zinc-800">Segunda a Sexta:</p>
              <p>06:00 às 22:00 (Sem fechar ao meio-dia)</p>
              <p className="font-semibold text-zinc-800 pt-2">Sábados:</p>
              <p>08:00 às 16:00</p>
              <p className="pt-3">
                <a
                  href={GYM_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-600 hover:text-emerald-500 transition-colors"
                >
                  WhatsApp: (49) 3322-1919
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé inferior com direitos autorais */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {GYM_INFO.name}. Todos os direitos reservados. Chapecó - SC.</p>
          <p className="flex items-center gap-1">
            Feito com dedicação para a saúde de Chapecó.
          </p>
        </div>
      </div>
    </footer>
  );
};
