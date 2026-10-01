import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GYM_INFO } from '../data/gymInfo';
import fotoMusculacao from '../assets/imagem musculacao.png';
import fotoCardio from '../assets/imagem cardio.png';
import fotoFuncional from '../assets/imagem sobre.png';

interface ModalityItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
  imageScale?: string;
}

const MODALITIES: ModalityItem[] = [
  {
    id: 'musculacao',
    title: 'Musculação',
    badge: 'Hipertrofia & Força',
    description:
      'Aparelhos modernos e área completa de pesos livres para ganho de massa, força, resistência e definição muscular. Acompanhamento atento de instrutores no salão para garantir execução correta e segurança.',
    highlights: ['Aparelhos Ergonômicos', 'Pesos Livres Completos', 'Instrutores no Salão', 'Treino Seguro & Eficiente'],
    image: fotoMusculacao,
    alt: 'Musculação Completa na FitLife Academias Chapecó',
    imageScale: '',
  },
  {
    id: 'cardio',
    title: 'Cardio & Ciclismo',
    badge: 'Resistência & Queima',
    description:
      'Esteiras, bikes de spinning e elípticos de ponta para potencializar sua capacidade cardiorrespiratória, queimar calorias e manter sua disposição e energia em alta durante todo o dia.',
    highlights: ['Esteiras & Bikes Modernas', 'Alta Queima Calórica', 'Resistência Cardiovascular', 'Mais Disposição Diária'],
    image: fotoCardio,
    alt: 'Área de Cardio e Ciclismo na FitLife Academias',
    imageScale: '',
  },
  {
    id: 'funcional',
    title: 'Treinamento Funcional',
    badge: 'Mobilidade & Agilidade',
    description:
      'Exercícios que utilizam o peso do próprio corpo, elásticos e pesos livres para desenvolver equilíbrio, coordenação, fortalecimento do core e agilidade para sua rotina diária.',
    highlights: ['Fortalecimento do Core', 'Agilidade & Equilíbrio', 'Mobilidade Articular', 'Aulas Dinâmicas & Coletivas'],
    image: fotoFuncional,
    alt: 'Treinamento Funcional na FitLife Academias',
    imageScale: '',
  },
];

export const Modalities: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(6);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Drag / touch state
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const isDragActionRef = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const duration = 6000;
    const intervalTime = 50;
    const step = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((curr) => (curr + 1) % MODALITIES.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [currentIndex, isInView]);

  useEffect(() => {
    const remaining = Math.ceil(6 * (1 - progress / 100));
    setRemainingSeconds(remaining);
  }, [progress]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    setRemainingSeconds(6);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % MODALITIES.length);
    setProgress(0);
    setRemainingSeconds(6);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + MODALITIES.length) % MODALITIES.length);
    setProgress(0);
    setRemainingSeconds(6);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    isDragActionRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    if (Math.abs(touchStartX.current - touchEndX.current) > 10) {
      isDragActionRef.current = true;
    }
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
    touchEndX.current = e.clientX;
    isDragActionRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
    if (Math.abs(touchStartX.current - touchEndX.current) > 10) {
      isDragActionRef.current = true;
    }
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
  };

  return (
    <section
      id="modalidades"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#0A0A0A] relative overflow-hidden select-none border-b border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-emerald-400 font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2 block">
              Modalidades FitLife
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase">
              O que você vai <span className="text-emerald-400">treinar</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md">
            Espaços projetados para sua evolução diária, com suporte completo de instrutores em todas as unidades.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden w-full">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-out cursor-grab active:cursor-grabbing"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {MODALITIES.map((item, index) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 min-w-full px-5 sm:px-12 lg:px-24"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Coluna Esquerda: Textos & Barra de Progresso */}
                <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-widest text-zinc-400 uppercase mb-2 sm:mb-4">
                    <span className="text-emerald-400 text-sm sm:text-lg font-black">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-zinc-600">/</span>
                    <span className="text-zinc-400">{String(MODALITIES.length).padStart(2, '0')}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-white uppercase tracking-wider">{GYM_INFO.name}</span>
                  </div>

                  <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-white uppercase tracking-tight leading-none mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-300 text-sm sm:text-lg font-light leading-relaxed max-w-2xl mb-6">
                    {item.description}
                  </p>

                  {/* Diferenciais rápidos */}
                  <div className="grid grid-cols-2 gap-2 mb-8 max-w-md">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Barra de Progresso do Slide */}
                  <div className="w-full max-w-lg pt-4 border-t border-zinc-800/80">
                    <div className="flex justify-between items-center text-[11px] sm:text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-2">
                      <span className="text-zinc-300">
                        {isInView ? 'Troca Automática' : 'Pausado'}
                      </span>
                      <span className="text-emerald-400 font-mono font-bold text-xs sm:text-sm">
                        {remainingSeconds}s
                      </span>
                    </div>
                    <div className="h-1.5 sm:h-2 w-full bg-zinc-900 rounded-full overflow-hidden p-0.5">
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all ease-linear shadow-xs shadow-emerald-500/50"
                        style={{
                          width:
                            currentIndex === index
                              ? `${progress}%`
                              : index < currentIndex
                                ? '100%'
                                : '0%',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Coluna Direita: Imagem Real com Elemento Orgânico em Verde Esmeralda */}
                <div className="lg:col-span-5 flex items-center justify-center lg:justify-end order-1 lg:order-2 overflow-visible">
                  <div className="relative w-full max-w-md lg:max-w-none flex items-center justify-center h-[260px] sm:h-[380px] lg:h-[540px]">
                    {/* Elemento orgânico em verde esmeralda */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                      <svg
                        viewBox="0 0 1000 1450"
                        className="w-full h-full max-h-[500px] text-[#10B981] object-contain select-none opacity-90 drop-shadow-[0_0_35px_rgba(16,185,129,0.3)]"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M 780,40 C 890,40 945,130 945,280 C 945,430 920,580 940,740 C 960,890 985,990 980,1110 C 975,1250 905,1350 820,1390 C 720,1435 570,1440 470,1400 C 370,1360 285,1280 220,1170 C 130,1030 30,880 20,700 C 10,500 70,360 180,290 C 290,220 440,240 560,190 C 660,150 700,40 780,40 Z" />
                      </svg>
                    </div>

                    <img
                      src={item.image}
                      alt={item.alt}
                      draggable={false}
                      className={`relative z-10 max-h-full max-w-full object-contain drop-shadow-2xl select-none pointer-events-none ${item.imageScale || ''}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seta esquerda */}
      <button
        onClick={prevSlide}
        aria-label="Modalidade anterior"
        className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 text-white/80 hover:text-white bg-black/70 backdrop-blur-md rounded-full transition-all duration-300 hover:scale-110 active:scale-90 cursor-pointer p-2 sm:p-3 border border-emerald-500/30"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
      </button>

      {/* Seta direita */}
      <button
        onClick={nextSlide}
        aria-label="Próxima modalidade"
        className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 text-white/80 hover:text-white bg-black/70 backdrop-blur-md rounded-full transition-all duration-300 hover:scale-110 active:scale-90 cursor-pointer p-2 sm:p-3 border border-emerald-500/30"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
      </button>

      {/* Indicadores de slides */}
      <div className="flex justify-center items-center gap-2 mt-10 z-30">
        {MODALITIES.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => goToSlide(dotIndex)}
            aria-label={`Ir para modalidade ${dotIndex + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === dotIndex
                ? 'w-8 bg-emerald-500 shadow-md shadow-emerald-500/50'
                : 'w-2.5 bg-zinc-800 hover:bg-zinc-600'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
