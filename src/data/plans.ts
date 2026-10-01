export interface PlanPricing {
  monthlyEquivalent: number;
  totalPeriod: number;
  installments?: string;
  savingsPercentage?: number;
}

export interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  periodMonths: number;
  pricing: {
    livre: PlanPricing;
  };
  benefits: string[];
}

export const GYM_PLANS: PlanItem[] = [
  {
    id: 'experimental',
    name: 'Aula Experimental',
    badge: '100% Gratuita',
    isPopular: false,
    description: 'Venha conhecer uma de nossas 4 unidades em Chapecó e treinar sem compromisso.',
    periodMonths: 0,
    pricing: {
      livre: {
        monthlyEquivalent: 0,
        totalPeriod: 0,
        installments: 'Agende pelo WhatsApp',
      }
    },
    benefits: [
      'Acesso à musculação e área de cardio',
      'Acompanhamento de instrutores no salão',
      'Escolha qualquer uma das 4 unidades',
      'Ambiente acolhedor e motivador',
      'Agendamento rápido e direto pelo WhatsApp'
    ],
  },
  {
    id: 'plano-livre',
    name: 'Plano FitLife Livre',
    badge: 'Mais Escolhido',
    isPopular: true,
    description: 'Treine com máxima liberdade e flexibilidade de horários em todas as unidades.',
    periodMonths: 1,
    pricing: {
      livre: {
        monthlyEquivalent: 0,
        totalPeriod: 0,
        installments: 'Consulte condições exclusivas',
      }
    },
    benefits: [
      'Acesso livre às 4 unidades em Chapecó',
      'Horário flexível: 06h às 22h sem fechar ao meio-dia',
      'Área completa de musculação e pesos livres',
      'Cardio moderno (esteiras, bikes e elípticos)',
      'Suporte constante de profissionais qualificados',
      'Aceitamos Gympass e TotalPass'
    ],
  },
  {
    id: 'plano-fidelidade',
    name: 'Plano Fidelidade',
    badge: 'Melhor Custo-Benefício',
    isPopular: false,
    description: 'Para quem busca transformação contínua, consistência e o melhor valor mensal.',
    periodMonths: 12,
    pricing: {
      livre: {
        monthlyEquivalent: 0,
        totalPeriod: 0,
        installments: 'Condição facilitada no cartão',
      }
    },
    benefits: [
      'Menor mensalidade garantida por 12 meses',
      'Acesso irrestrito a toda a rede FitLife',
      'Avaliação física e montagem de ficha de treino',
      'Treinos de musculação, cardio e funcional inclusos',
      'Benefícios especiais para renovação',
      'Bloqueio temporário de férias sem custo'
    ],
  }
];
