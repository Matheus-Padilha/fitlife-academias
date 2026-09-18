import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymInfo';
import aboutImg from '../assets/imagem sobre.png';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="pt-10 sm:pt-14 pb-0 bg-white relative overflow-hidden border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Coluna de Texto (Esquerda) */}
          <div className="lg:col-span-6 space-y-6 pb-12 sm:pb-16 pt-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-zinc-950 uppercase tracking-tight leading-tight">
              Saúde e Bem Estar <span className="text-red-600">no Mesmo Lugar</span>.
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              A <strong>{GYM_INFO.name}</strong> é o seu espaço de evolução, saúde e vitalidade em Chapecó, localizada na {GYM_INFO.address.street}, no bairro Jardim Itália.
            </p>

            <p className="text-base text-zinc-600 leading-relaxed">
              Aqui o seu bem-estar é prioridade. Com uma trajetória de mais de três décadas na comunidade chapecoense, oferecemos ambiente familiar e acolhedor para a prática de musculação, cardio e treino funcional, acompanhado por profissionais atenciosos para guiar seus passos com segurança e motivação.
            </p>

            {/* Diferenciais em lista */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-zinc-800">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>Agende sua aula experimental</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm font-semibold text-zinc-800">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>Musculação, Cardio e Funcional</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm font-semibold text-zinc-800">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>Atendimento humano e acolhedor</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm font-semibold text-zinc-800">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>Encontre sua melhor versão</span>
              </div>
            </div>
          </div>

          {/* Coluna da Imagem (Direita) com elemento orgânico distorcido em vermelho */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-end h-full pt-4 relative">
            {/* Elemento orgânico distorcido em vermelho da Vigour (tamanho ajustado) */}
            <div className="absolute inset-0 flex items-center justify-end pointer-events-none z-0">
              <svg
                viewBox="0 0 1000 1450"
                className="w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[540px] h-auto max-h-[500px] sm:max-h-[560px] lg:max-h-[600px] text-[#DC2626] object-contain drop-shadow-md select-none translate-y-2 sm:translate-y-4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 780,40 C 890,40 945,130 945,280 C 945,430 920,580 940,740 C 960,890 985,990 980,1110 C 975,1250 905,1350 820,1390 C 720,1435 570,1440 470,1400 C 370,1360 285,1280 220,1170 C 130,1030 30,880 20,700 C 10,500 70,360 180,290 C 290,220 440,240 560,190 C 660,150 700,40 780,40 Z" />
              </svg>
            </div>

            <img
              src={aboutImg}
              alt={`Treinamento na ${GYM_INFO.name}`}
              className="relative z-10 w-auto h-auto max-h-[560px] sm:max-h-[620px] lg:max-h-[680px] xl:max-h-[740px] object-contain object-bottom drop-shadow-2xl block select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
