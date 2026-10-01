export interface GymHours {
  day: string;
  shortDay: string;
  dayIndex: number;
  shifts: string[];
  note?: string;
  isOpenDay: boolean;
  intervals: Array<{ start: number; end: number }>;
}

export interface GymUnit {
  id: string;
  name: string;
  badge?: string;
  neighborhood: string;
  address: string;
  phone: string;
  whatsappRaw: string;
  mapsUrl: string;
  rating: string;
  reviewsCount?: string;
  features: string[];
}

export const GYM_INFO = {
  name: "FitLife Academias",
  shortName: "FitLife",
  tagline: "Viva o agora! 💚",
  subTagline: "Incentivando pessoas a melhorarem sua qualidade de vida",
  slogan: "Sua melhor versão começa hoje na FitLife",
  address: {
    street: "R. John Kennedy, 1860-E (esq. com R. Jerusalém)",
    neighborhood: "Passo dos Fortes",
    city: "Chapecó",
    state: "SC",
    zipCode: "89805-000",
    plusCode: "W93M+8J Chapecó - SC",
    full: "R. John Kennedy, 1860-E - Passo dos Fortes, Chapecó - SC",
    googleMapsUrl: "https://maps.google.com/?q=FitLife+Passo+Dos+Fortes+Chapeco",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=FitLife+Passo+Dos+Fortes+Chapeco&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },
  contact: {
    phoneFormatted: "(49) 3322-1919",
    whatsappFormatted: "(49) 3322-1919",
    whatsappRaw: "554933221919",
    whatsappLink: "https://wa.me/554933221919?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20FitLife%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20planos.",
    instagramHandle: "@fitlifepassodosfortes",
    instagramUrl: "https://www.instagram.com/fitlifepassodosfortes/",
    firstClassFreeText: "Agende sua aula experimental gratuita! Venha conhecer nossa estrutura e equipe."
  },
  units: [
    {
      id: "passo-dos-fortes",
      name: "Unidade Passo dos Fortes (Matriz)",
      badge: "4.7 ★ (+100 Avaliações)",
      neighborhood: "Passo dos Fortes",
      address: "R. John Kennedy, 1860-E (esquina com R. Jerusalém)",
      phone: "(49) 3322-1919",
      whatsappRaw: "554933221919",
      mapsUrl: "https://maps.google.com/?q=FitLife+Passo+Dos+Fortes+Chapeco",
      rating: "4.7 ★",
      reviewsCount: "103+ avaliações",
      features: ["Salão amplo de musculação", "Área de cardio dedicada", "Estacionamento facilitado"]
    },
    {
      id: "esplanada",
      name: "Unidade Esplanada",
      badge: "4.6 ★",
      neighborhood: "Esplanada",
      address: "R. Borges de Medeiros, 1280 (esquina com Voluntários da Pátria)",
      phone: "(49) 3322-1919",
      whatsappRaw: "554933221919",
      mapsUrl: "https://maps.google.com/?q=Fitlife+Academia+Esplanada+Chapeco",
      rating: "4.6 ★",
      reviewsCount: "15 avaliações",
      features: ["Equipamentos modernos", "Treino funcional e cardio", "Climatização total"]
    },
    {
      id: "medici",
      name: "Unidade Presidente Médici",
      badge: "Região Sul",
      neighborhood: "Presidente Médici",
      address: "Atendimento completo na Região Sul de Chapecó",
      phone: "(49) 3322-1919",
      whatsappRaw: "554933221919",
      mapsUrl: "https://maps.google.com/?q=Fitlife+Academia+Chapeco",
      rating: "4.7 ★",
      features: ["Espaço integrado de força", "Professores no salão", "Acolhimento humanizado"]
    },
    {
      id: "efapi",
      name: "Unidade Grande Efapi",
      badge: "Maior Bairro",
      neighborhood: "Efapi",
      address: "Ponto estratégico na Grande Efapi em Chapecó",
      phone: "(49) 3322-1919",
      whatsappRaw: "554933221919",
      mapsUrl: "https://maps.google.com/?q=Fitlife+Academia+Chapeco",
      rating: "4.7 ★",
      features: ["Ambiente moderno e dinâmico", "Ciclismo indoor e pesos livres", "Vestiários estruturados"]
    }
  ] as GymUnit[],
  modalities: [
    {
      id: "musculacao",
      name: "Musculação",
      description: "Aparelhos ergonômicos e pesos livres de alta durabilidade para hipertrofia, emagrecimento, força e definição com orientação especializada de instrutores."
    },
    {
      id: "cardio",
      name: "Cardio & Ciclismo",
      description: "Esteiras, bikes e elípticos de última geração focados em queima calórica, aumento da resistência cardiovascular e saúde do coração."
    },
    {
      id: "funcional",
      name: "Treinamento Funcional",
      description: "Exercícios dinâmicos com peso corporal, kettlebells e elásticos que aumentam a mobilidade, equilíbrio e agilidade para o cotidiano."
    }
  ],
  schedule: [
    {
      day: "Segunda-feira",
      shortDay: "Seg",
      dayIndex: 1,
      shifts: ["06:00 às 22:00"],
      note: "06h às 22h sem fechar ao meio-dia",
      isOpenDay: true,
      intervals: [{ start: 6 * 60, end: 22 * 60 }]
    },
    {
      day: "Terça-feira",
      shortDay: "Ter",
      dayIndex: 2,
      shifts: ["06:00 às 22:00"],
      note: "06h às 22h sem fechar ao meio-dia",
      isOpenDay: true,
      intervals: [{ start: 6 * 60, end: 22 * 60 }]
    },
    {
      day: "Quarta-feira",
      shortDay: "Qua",
      dayIndex: 3,
      shifts: ["06:00 às 22:00"],
      note: "06h às 22h sem fechar ao meio-dia",
      isOpenDay: true,
      intervals: [{ start: 6 * 60, end: 22 * 60 }]
    },
    {
      day: "Quinta-feira",
      shortDay: "Qui",
      dayIndex: 4,
      shifts: ["06:00 às 22:00"],
      note: "06h às 22h sem fechar ao meio-dia",
      isOpenDay: true,
      intervals: [{ start: 6 * 60, end: 22 * 60 }]
    },
    {
      day: "Sexta-feira",
      shortDay: "Sex",
      dayIndex: 5,
      shifts: ["06:00 às 22:00"],
      note: "06h às 22h sem fechar ao meio-dia",
      isOpenDay: true,
      intervals: [{ start: 6 * 60, end: 22 * 60 }]
    },
    {
      day: "Sábado",
      shortDay: "Sáb",
      dayIndex: 6,
      shifts: ["08:00 às 16:00"],
      note: "08h às 16h",
      isOpenDay: true,
      intervals: [{ start: 8 * 60, end: 16 * 60 }]
    },
    {
      day: "Domingo",
      shortDay: "Dom",
      dayIndex: 0,
      shifts: ["Fechada"],
      note: "Consulte horários especiais",
      isOpenDay: false,
      intervals: []
    }
  ]
};

export function getGymOpenStatus(now = new Date()): {
  isOpen: boolean;
  statusText: string;
  detailText: string;
} {
  const dayIndex = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const currentDaySchedule = GYM_INFO.schedule.find(s => s.dayIndex === dayIndex);

  if (currentDaySchedule && currentDaySchedule.isOpenDay) {
    const matchingInterval = currentDaySchedule.intervals.find(
      i => currentMinutes >= i.start && currentMinutes < i.end
    );

    if (matchingInterval) {
      const endHour = Math.floor(matchingInterval.end / 60);
      const endMin = matchingInterval.end % 60;
      const timeFormatted = `${String(endHour === 24 ? 0 : endHour).padStart(2, '0')}:${String(endMin).padStart(2, '0')}`;
      return {
        isOpen: true,
        statusText: "Aberta Agora",
        detailText: `Até às ${timeFormatted}`
      };
    }

    const nextIntervalToday = currentDaySchedule.intervals.find(i => i.start > currentMinutes);
    if (nextIntervalToday) {
      const startHour = Math.floor(nextIntervalToday.start / 60);
      const startMin = nextIntervalToday.start % 60;
      const timeFormatted = `${String(startHour).padStart(2, '0')}:${String(startMin).padStart(2, '0')}`;
      return {
        isOpen: false,
        statusText: "Fechada",
        detailText: `Reabre hoje às ${timeFormatted}`
      };
    }
  }

  for (let offset = 1; offset <= 7; offset++) {
    const nextDayIndex = (dayIndex + offset) % 7;
    const nextDaySchedule = GYM_INFO.schedule.find(s => s.dayIndex === nextDayIndex);

    if (nextDaySchedule && nextDaySchedule.isOpenDay && nextDaySchedule.intervals.length > 0) {
      const firstInterval = nextDaySchedule.intervals[0];
      const startHour = Math.floor(firstInterval.start / 60);
      const startMin = firstInterval.start % 60;
      const timeFormatted = `${String(startHour).padStart(2, '0')}:${String(startMin).padStart(2, '0')}`;

      if (offset === 1) {
        return {
          isOpen: false,
          statusText: "Fechada",
          detailText: `Reabre amanhã às ${timeFormatted}`
        };
      } else {
        return {
          isOpen: false,
          statusText: "Fechada",
          detailText: `Abre ${nextDaySchedule.day.toLowerCase()} às ${timeFormatted}`
        };
      }
    }
  }

  return {
    isOpen: false,
    statusText: "Fechada",
    detailText: "Consulte nossos horários"
  };
}
