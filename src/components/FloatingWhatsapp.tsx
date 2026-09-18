import React, { useState, useEffect } from 'react';
import { GYM_INFO } from '../data/gymInfo';
import { Sparkles } from 'lucide-react';

export const FloatingWhatsapp: React.FC = () => {
  const [isVisibleMobile, setIsVisibleMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('inicio');
      const threshold = heroEl ? heroEl.offsetHeight - 120 : window.innerHeight * 0.7;

      if (window.scrollY > threshold) {
        setIsVisibleMobile(true);
      } else {
        setIsVisibleMobile(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex items-center group transition-all duration-500 ${
        isVisibleMobile
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none sm:opacity-100 sm:translate-y-0 sm:pointer-events-auto'
      }`}
    >
      {/* Tooltip ao passar o mouse */}
      <span className="hidden sm:inline-flex items-center gap-1.5 mr-3 px-3.5 py-1.5 rounded-xl bg-zinc-950 text-white text-xs font-bold shadow-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap border border-red-900/60">
        <Sparkles className="w-3.5 h-3.5 text-red-500" />
        Aula Experimental • Fale Conosco
      </span>

      <a
        href={GYM_INFO.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label={`Conversar no WhatsApp da ${GYM_INFO.name}`}
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-35 pointer-events-none" />
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 0C5.398 0 0 5.398 0 12.031c0 2.12.553 4.188 1.604 6.009L.057 24l6.163-1.616a12.023 12.023 0 0 0 5.811 1.487h.005c6.632 0 12.03-5.398 12.03-12.04 0-3.213-1.251-6.234-3.526-8.51A11.96 11.96 0 0 0 12.031 0zm0 22.016h-.004a9.98 9.98 0 0 1-5.09-1.396l-.365-.216-3.782.991 1.01-3.687-.238-.378a9.98 9.98 0 0 1-1.533-5.3c0-5.518 4.49-10.008 10.012-10.008 2.673 0 5.186 1.042 7.076 2.932a9.937 9.937 0 0 1 2.934 7.078c-.001 5.518-4.49 10.008-10.01 10.008zm5.485-7.493c-.3-.15-1.777-.877-2.052-.977-.276-.1-.476-.15-.676.15-.2.3-.776.977-.951 1.176-.176.2-.351.226-.652.075s-1.27-.468-2.42-1.493c-.895-.798-1.5-1.785-1.676-2.086s-.019-.463.132-.613c.135-.135.301-.35.451-.526.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.233-.244-.587-.492-.507-.677-.516l-.577-.01c-.2 0-.526.075-.802.376s-1.052 1.028-1.052 2.508c0 1.48 1.077 2.91 1.228 3.111.15.2 2.12 3.238 5.136 4.542.717.31 1.278.495 1.714.634.72.229 1.376.196 1.894.119.577-.086 1.778-.727 2.029-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.576-.35z" />
        </svg>
      </a>
    </div>
  );
};
