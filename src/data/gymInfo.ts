export interface GymHours {
  day: string;
  shortDay: string;
  dayIndex: number;
  shifts: string[];
  note?: string;
  isOpenDay: boolean;
  intervals: Array<{ start: number; end: number }>;
}

export const GYM_INFO = {
  name: "Vigour Academia",
  shortName: "Vigour",
  tagline: "Saúde e Bem Estar no mesmo lugar",
  subTagline: "Encontre a sua melhor versão aqui",
  slogan: "O melhor momento para começar é agora",
  address: {
    street: "Rua Achiles Tomazeli, 170-D",
    neighborhood: "Jardim Itália",
    city: "Chapecó",
    state: "SC",
    zipCode: "89814-010",
    plusCode: "V9QP+7C Jardim Itália, Chapecó - SC",
    full: "Rua Achiles Tomazeli, 170-D - Jardim Itália, Chapecó - SC, 89814-010",
    googleMapsUrl: "https://maps.google.com/?q=Rua+Achiles+Tomazeli,+170-D+-+Jardim+Itália,+Chapecó+-+SC,+89814-010",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Rua+Achiles+Tomazeli,+170-D+-+Jardim+It%C3%A1lia,+Chapec%C3%B3+-+SC,+89814-010&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },
  contact: {
    phoneFormatted: "(49) 3323-9134",
    whatsappFormatted: "(49) 3323-9134",
    whatsappRaw: "554933239134",
    whatsappLink: "https://wa.me/message/CP6TBOOQWHCK1",
    instagramHandle: "@academiavigour",
    instagramUrl: "https://www.instagram.com/academiavigour/",
    firstClassFreeText: "Agende sua aula experimental! Venha conhecer nossa estrutura e equipe."
  },
  modalities: [
    {
      id: "musculacao",
      name: "Musculação",
      description: "Aparelhos modernos e ampla área de pesos livres para hipertrofia, força, resistência e definição muscular com acompanhamento atento de instrutores."
    },
    {
      id: "cardio",
      name: "Cardio",
      description: "Equipamentos e treinos focados em resistência cardiovascular, saúde do coração, alta queima calórica e condicionamento físico constante."
    },
    {
      id: "funcional",
      name: "Funcional",
      description: "Exercícios dinâmicos que trabalham movimentos naturais do corpo, equilíbrio, coordenação, força de core e agilidade para o seu dia a dia."
    }
  ],
  schedule: [
    {
      day: "Segunda-feira",
      shortDay: "Seg",
      dayIndex: 1,
      shifts: ["06:00 às 22:00"],
      note: "06h às 22h",
      isOpenDay: true,
      intervals: [
        { start: 6 * 60, end: 22 * 60 }
      ]
    },
    {
      day: "Terça-feira",
      shortDay: "Ter",
      dayIndex: 2,
      shifts: ["06:00 às 11:00", "14:00 às 22:00"],
      note: "06h às 11h e 14h às 22h",
      isOpenDay: true,
      intervals: [
        { start: 6 * 60, end: 11 * 60 },
        { start: 14 * 60, end: 22 * 60 }
      ]
    },
    {
      day: "Quarta-feira",
      shortDay: "Qua",
      dayIndex: 3,
      shifts: ["06:00 às 22:00"],
      note: "06h às 22h",
      isOpenDay: true,
      intervals: [
        { start: 6 * 60, end: 22 * 60 }
      ]
    },
    {
      day: "Quinta-feira",
      shortDay: "Qui",
      dayIndex: 4,
      shifts: ["06:00 às 11:00", "14:00 às 22:00"],
      note: "06h às 11h e 14h às 22h",
      isOpenDay: true,
      intervals: [
        { start: 6 * 60, end: 11 * 60 },
        { start: 14 * 60, end: 22 * 60 }
      ]
    },
    {
      day: "Sexta-feira",
      shortDay: "Sex",
      dayIndex: 5,
      shifts: ["06:00 às 22:00"],
      note: "06h às 22h",
      isOpenDay: true,
      intervals: [
        { start: 6 * 60, end: 22 * 60 }
      ]
    },
    {
      day: "Sábado",
      shortDay: "Sáb",
      dayIndex: 6,
      shifts: ["07:00 às 10:00"],
      note: "07h às 10h",
      isOpenDay: true,
      intervals: [
        { start: 7 * 60, end: 10 * 60 }
      ]
    },
    {
      day: "Domingo",
      shortDay: "Dom",
      dayIndex: 0,
      shifts: ["Fechada"],
      note: "Fechada aos domingos",
      isOpenDay: false,
      intervals: []
    }
  ]
};

// Helper function to check if the gym is open right now
export function getGymOpenStatus(now = new Date()): {
  isOpen: boolean;
  statusText: string;
  detailText: string;
} {
  const dayIndex = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const currentDaySchedule = GYM_INFO.schedule.find(s => s.dayIndex === dayIndex);

  // 1. Check if currently open
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

    // 2. Check if reopens later today (e.g. Ter/Qui afternoon shift)
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

  // 3. If closed for the rest of today or not open today, find the next open day
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
