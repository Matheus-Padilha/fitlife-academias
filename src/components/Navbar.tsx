import React, { useState, useEffect } from 'react';
import { GYM_INFO, getGymOpenStatus } from '../data/gymInfo';
import { Menu, X, Clock, MessageCircle } from 'lucide-react';
import logoFitLife from '../assets/logo.png';

export const Navbar: React.FC = () => {
  const [isPastHero, setIsPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState(getGymOpenStatus());
  const [isHiddenMobile, setIsHiddenMobile] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroElement = document.getElementById('inicio');
      const pastHero = heroElement
        ? heroElement.getBoundingClientRect().bottom <= 80
        : currentScrollY > 500;

      setIsPastHero(pastHero);

      if (pastHero && !mobileMenuOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsHiddenMobile(true);
        } else if (currentScrollY < lastScrollY) {
          setIsHiddenMobile(false);
        }
      } else {
        setIsHiddenMobile(false);
      }

      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    const interval = setInterval(() => {
      setOpenStatus(getGymOpenStatus());
    }, 60000);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Planos', href: '#planos' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Unidades', href: '#unidades' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out pointer-events-none ${
        isPastHero ? 'top-2 sm:top-5 px-3 sm:px-6' : 'top-3 sm:top-6 px-4 sm:px-8'
      } ${isHiddenMobile ? '-translate-y-28 md:translate-y-0 opacity-0 md:opacity-100' : 'translate-y-0 opacity-100'}`}
    >
      <div className="w-full max-w-7xl flex items-center justify-between pointer-events-none">
        {/* Pílula Principal (Desktop): Logo + Divisor + Links de Navegação */}
        <nav
          className={`pointer-events-auto flex items-center justify-between md:justify-start rounded-full transition-all duration-500 ease-out w-full md:w-auto ${
            isPastHero
              ? 'bg-black/90 backdrop-blur-xl border border-emerald-500/30 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.8)] px-4 sm:px-6 py-1.5 sm:py-2 gap-3 sm:gap-6'
              : 'bg-black/80 backdrop-blur-md border border-white/15 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)] px-4 sm:px-6 py-2 sm:py-2.5 gap-3 sm:gap-6'
          }`}
        >
          {/* Logo da FitLife oficial com respiro */}
          <div className="flex items-center shrink-0">
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="flex items-center group focus:outline-none shrink-0"
            >
              <div className="relative w-auto flex items-center shrink-0 h-9 sm:h-11">
                <img
                  src={logoFitLife}
                  alt={`${GYM_INFO.name} Logo`}
                  className="w-auto h-8 sm:h-10 object-contain shrink-0 drop-shadow-md transition-transform group-hover:scale-105"
                />
              </div>
            </a>
          </div>

          {/* Divisor vertical sutil entre o Logo e os links */}
          <div className="hidden md:block w-px h-6 bg-white/20 shrink-0" />

          {/* Links de navegação em formato pílula interna */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-semibold flex-nowrap shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 text-white/90 hover:text-emerald-400 hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Botão Hambúrguer Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-full transition-colors shrink-0 focus:outline-none p-2 text-white hover:bg-white/10"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5 text-emerald-400" />}
          </button>
        </nav>

        {/* Segunda Pílula (Desktop): Botão CTA Fale Conosco independente */}
        <div className="hidden md:flex items-center pointer-events-auto shrink-0">
          <a
            href={GYM_INFO.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider whitespace-nowrap shadow-[0_4px_14px_0_rgba(16,185,129,0.35)] hover:scale-[1.02] active:scale-95 transition-all duration-300 leading-none"
          >
            <span>Fale Conosco</span>
            <span className="text-base font-bold leading-none">&rarr;</span>
          </a>
        </div>
      </div>

      {/* Menu Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-full mt-2 inset-x-4 max-w-lg mx-auto rounded-3xl p-5 border border-emerald-500/30 bg-black/95 text-white backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-top-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold mb-3 bg-zinc-900 border border-emerald-500/30 text-zinc-200">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>
              {openStatus.statusText} ({openStatus.detailText})
            </span>
          </div>

          <div className="flex flex-col space-y-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-base font-semibold rounded-xl text-zinc-200 hover:text-emerald-400 hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={GYM_INFO.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-center shadow-lg active:scale-95 text-sm uppercase tracking-wider"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
};
