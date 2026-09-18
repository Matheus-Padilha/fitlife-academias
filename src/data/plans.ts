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
    badge: 'Conheça a Vigour',
    isPopular: false,
    description: 'Experimente a estrutura da Vigour Academia e conheça nossos instrutores.',
    periodMonths: 0,
    pricing: {
      livre: {
        monthlyEquivalent: 0,
        totalPeriod: 0,
        installments: 'Agende pelo WhatsApp',
      }
    },
    benefits: [
      'Acesso à musculação e modalidades',
      'Acompanhamento de instrutores no salão',
      'Estrutura acolhedora no Jardim Itália',
      'Ambiente motivador para sua evolução',
      'Agendamento direto pelo WhatsApp'
    ],
  },
  {
    id: 'mensal',
    name: 'Plano Mensal',
    description: 'Treine com total flexibilidade e liberdade na sua rotina.',
    periodMonths: 1,
    pricing: {
      livre: {
        monthlyEquivalent: 0,
        totalPeriod: 0,
        installments: 'Consulte valores com nossa equipe',
      }
    },
    benefits: [
      'Acesso total à musculação',
      'Treinos de Cardio e Funcional',
      'Equipe qualificada para tirar dúvidas',
      'Sem fidelidade ou burocracia',
      'Horários amplos de atendimento'
    ],
  },
  {
    id: 'semestral',
    name: 'Plano Semestral',
    badge: 'Mais Procurado',
    isPopular: true,
    description: 'Mais economia e consistência para atingir suas metas.',
    periodMonths: 6,
    pricing: {
      livre: {
        monthlyEquivalent: 0,
        totalPeriod: 0,
        installments: 'Condições especiais no WhatsApp',
      }
    },
    benefits: [
      'Acesso livre a todas as modalidades',
      'Acompanhamento contínuo de treino',
      'Condições especiais para 6 meses',
      'Orientação para musculação, cardio e funcional',
      'Flexibilidade de pagamento'
    ],
  },
  {
    id: 'anual',
    name: 'Plano Anual',
    badge: 'Melhor Custo-Benefício',
    description: 'Compromisso com sua saúde, longevidade e bem-estar o ano inteiro.',
    periodMonths: 12,
    pricing: {
      livre: {
        monthlyEquivalent: 0,
        totalPeriod: 0,
        installments: 'Parcelamento facilitado',
      }
    },
    benefits: [
      'Melhor tarifa mensal equivalente',
      'Acesso livre nos horários de funcionamento',
      'Acompanhamento profissional permanente',
      'Condições exclusivas para alunos',
      'Saúde e bem-estar no mesmo lugar'
    ],
  },
];
