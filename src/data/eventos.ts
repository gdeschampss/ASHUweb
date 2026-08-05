export interface EventItem {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  category: 'esporte' | 'social' | 'cultural' | 'institucional';
  description: string;
  location: string;
  image: string;
}

export const EVENTOS_DATA: EventItem[] = [
  {
    id: '1',
    title: 'Tradicional Festa Junina da ASHU',
    date: '14 de Junho, 2025',
    month: 'JUN',
    day: '14',
    category: 'social',
    description: 'Quadrilha, comidas típicas, atrações musicais e espaço kids para todos os servidores, dependentes e comunidade.',
    location: 'Sede Social da ASHU / HU-UFSC',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Torneio Interdepartamental de Futebol Suíço',
    date: '20 a 22 de Julho, 2025',
    month: 'JUL',
    day: '20',
    category: 'esporte',
    description: 'Campeonato de integração entre as equipes do HU/UFSC, EBSERH e convidados no Campo Oficial.',
    location: 'Campo Oficial da ASHU',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'Comemoração do Dia do Servidor Público',
    date: '28 de Outubro, 2025',
    month: 'OUT',
    day: '28',
    category: 'institucional',
    description: 'Almoço festivo no Restaurante A\'ntenas com homenagens aos servidores aposentados e sorteio de prêmios.',
    location: 'Restaurante A\'ntenas & Salão de Festas',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    title: 'Apresentação Cultural do CEI-ASHU',
    date: '05 de Dezembro, 2025',
    month: 'DEZ',
    day: '05',
    category: 'cultural',
    description: 'Encerramento do ano letivo com apresentações teatrais e exposição de artes dos alunos do CEI.',
    location: 'Auditório do HU / CEI-ASHU',
    image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80',
  },
];
