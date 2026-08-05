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
    description: 'Espaço com aparelhos modernos de musculação e aeróbico. Gratuita para associados efetivos e terceirizados.',
    featured: true,
    highlightText: 'Gratuito para Associados',
    badge: 'Saúde & Bem-Estar',
    link: '/academia',
    iconName: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cei',
    title: 'CEI-ASHU (Creche)',
    category: 'educacao',
    description: 'Centro de Educação Infantil preparado para acolher os filhos de servidores e comunidade com ensino humanizado e seguro.',
    featured: true,
    highlightText: 'Atendimento Especializado',
    badge: 'Educação Infantil',
    link: '/cei',
    iconName: 'Baby',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'esportes',
    title: 'Campo Oficial & Quadras',
    category: 'esporte',
    description: 'Campo de futebol de grama oficial e quadras poliesportivas para treinos, campeonatos e momentos de lazer em família.',
    featured: true,
    highlightText: 'Estrutura Completa',
    badge: 'Lazer & Esporte',
    link: '/seja-associado',
    iconName: 'Trophy',
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
    description: 'Parcerias com Unimed, TempoMed e SIDESC com tabelas diferenciadas e ampla cobertura médica regional.',
    featured: false,
    highlightText: 'Preços Diferenciados',
    badge: 'Convênio Médico',
    link: '/seja-associado',
    iconName: 'HeartPulse',
  },
  {
    id: 'odonto',
    title: 'Plano Odontológico Uniodonto',
    category: 'saude',
    description: 'Cuidados odontológicos completos com rede credenciada de excelência em Santa Catarina para toda a família.',
    featured: false,
    highlightText: 'Rede Credenciada',
    badge: 'Odontologia',
    link: '/seja-associado',
    iconName: 'ShieldCheck',
  },
  {
    id: 'clube-beneficios',
    title: 'Clube de Benefícios & Descontos',
    category: 'convenio',
    description: 'Rede de parcerias com comércios, escolas de idiomas, faculdades e serviços em Florianópolis com descontos em folha.',
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
    description: 'Espaço equipado com churrasqueiras, cozinha e salão amplo para aniversários, reuniões e comemorações dos associados.',
    featured: false,
    highlightText: 'Reserva Direta',
    badge: 'Eventos Privados',
    link: '/salao-de-festas',
    iconName: 'Building',
  },
];
