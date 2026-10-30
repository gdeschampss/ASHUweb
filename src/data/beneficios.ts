export interface Benefit {
  id: string;
  title: string;
  category: 'esporte' | 'alimentacao' | 'educacao' | 'saude' | 'convenio';
  description: string;
  featured: boolean;
  image?: string;
  highlightText?: string;
  link?: string;
  badge?: string;
  iconName: 'Dumbbell' | 'Utensils' | 'Baby' | 'Trophy' | 'Scale' | 'HeartPulse' | 'ShieldCheck' | 'Sparkles' | 'Gift' | 'Building';
}

export const BENEFICIOS_DATA: Benefit[] = [
  {
    id: 'academia',
    title: 'Academia Completa',
    category: 'esporte',
    description: 'Espaço com aparelhos de musculação e aeróbico. Gratuita para o sócio e seus dependentes.',
    featured: true,
    highlightText: 'Gratuito para Associados',
    badge: 'Saúde & Bem-Estar',
    link: '/academia',
    iconName: 'Dumbbell',
    image: '/fotos/academia.jpg',
  },
  {
    id: 'restaurante',
    title: "A'ntenas Restaurante",
    category: 'alimentacao',
    description: 'Refeições saborosas e balanceadas no coração do HU com 10% de desconto exclusivo para associados e dependentes.',
    featured: true,
    highlightText: '10% OFF p/ Associados',
    badge: 'Gastronomia',
    link: '/restaurante',
    iconName: 'Utensils',
    // TODO: trocar pela foto real do restaurante quando a cliente enviar
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cei',
    title: 'CEI-ASHU (Creche)',
    category: 'educacao',
    description: 'Centro de Educação Infantil com desconto diferenciado para filhos de associados.',
    featured: true,
    highlightText: 'Atendimento Especializado',
    badge: 'Educação Infantil',
    link: '/cei',
    iconName: 'Baby',
    image: '/fotos/cei-entrada.jpg',
  },
  {
    id: 'esportes',
    title: 'Campo Oficial & Quadras',
    category: 'esporte',
    description: 'Campo de futebol, quadra de beach tennis e quadra poliesportiva para treinos, campeonatos e momentos de lazer em família.',
    featured: true,
    highlightText: 'Estrutura Completa',
    badge: 'Lazer & Esporte',
    link: '/seja-associado',
    iconName: 'Trophy',
    // TODO: foto real do campo
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'juridico',
    title: 'Assessoria Jurídica',
    category: 'saude',
    description: 'Orientação técnica e acompanhamento jurídico especializado nas demandas dos servidores do HU/UFSC e EBSERH.',
    featured: false,
    highlightText: 'Suporte Técnico',
    badge: 'Direito do Servidor',
    link: '/seja-associado',
    iconName: 'Scale',
  },
  {
    id: 'planos-saude',
    title: 'Planos de Saúde & TempoMed',
    category: 'saude',
    description: 'Convênios com UNIMED e TEMPOMED com condições diferenciadas para associados.',
    featured: false,
    highlightText: 'Preços Diferenciados',
    badge: 'Convênio Médico',
    link: '/seja-associado',
    iconName: 'HeartPulse',
  },
  // Plano Odontológico Uniodonto: removido a pedido da cliente (não consta na lista oficial de benefícios)
  {
    id: 'aulas-parceiros',
    title: 'Aulas com Professores Parceiros',
    category: 'esporte',
    description: 'Escolinha de futebol, capoeira e kung fu com professores parceiros. Valores definidos pelos professores.',
    featured: false,
    highlightText: 'Aulas Extras',
    badge: 'Esporte & Cultura',
    link: '/seja-associado',
    iconName: 'Sparkles',
  },
  {
    id: 'clube-beneficios',
    title: 'Clube de Benefícios SIDESC & DR. EXAMES',
    category: 'convenio',
    description: 'Clube de benefícios SIDESC e DR. EXAMES, com descontos em serviços, exames e parceiros em Florianópolis.',
    featured: false,
    highlightText: 'Descontos Exclusivos',
    badge: 'Rede Parceira',
    link: '/seja-associado',
    iconName: 'Gift',
  },
  {
    id: 'salao-festas',
    title: 'Salão de Festas Exclusivo',
    category: 'esporte',
    description: 'Salão amplo com cozinha para aniversários, reuniões e comemorações, com desconto na locação para associados.',
    image: '/fotos/salao-maior-1.jpg',
    featured: false,
    highlightText: 'Reserva Direta',
    badge: 'Eventos Privados',
    link: '/salao-de-festas',
    iconName: 'Building',
  },
];
