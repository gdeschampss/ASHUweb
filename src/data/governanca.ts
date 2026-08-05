export interface Member {
  name: string;
  role: string;
  department?: string;
}

export interface GovernanceData {
  gestionPeriod: string;
  directoria: Member[];
  conselhoFiscal: Member[];
  relatorios: {
    year: string;
    title: string;
    description: string;
    pdfUrl: string;
  }[];
}

export const GOVERNANCA_DATA: GovernanceData = {
  gestionPeriod: "Gestão 2024 - 2026",
  directoria: [
    { name: "Presidência", role: "Presidente Executivo", department: "HU / UFSC" },
    { name: "Vice-Presidência", role: "Vice-Presidente", department: "EBSERH" },
    { name: "Secretaria Geral", role: "1º Secretário", department: "HU / UFSC" },
    { name: "Tesouraria Principal", role: "Diretor Financeiro", department: "EBSERH" },
    { name: "Diretoria de Esportes", role: "Diretor Social e Esportivo", department: "HU / UFSC" },
    { name: "Diretoria de Comunicação", role: "Diretor de Relações Públicas", department: "UFSC" },
  ],
  conselhoFiscal: [
    { name: "Conselheiro 01", role: "Presidente do Conselho Fiscal" },
    { name: "Conselheiro 02", role: "Membro Titular" },
    { name: "Conselheiro 03", role: "Membro Titular" },
    { name: "Conselheiro Suplente 01", role: "Membro Suplente" },
    { name: "Conselheiro Suplente 02", role: "Membro Suplente" },
  ],
  relatorios: [
    {
      year: "2024",
      title: "Relatório Anual de Prestação de Contas e Balanço Patrimonial 2024",
      description: "Demonstrativo financeiro auditado e aprovado pelo Conselho Fiscal relativo ao exercício de 2024.",
      pdfUrl: "#",
    },
    {
      year: "2023",
      title: "Prestação de Contas Exercício 2023",
      description: "Relatório de gestão, aplicação dos recursos dos associados e auditoria independente.",
      pdfUrl: "#",
    },
    {
      year: "2022",
      title: "Balanço Financeiro Anual 2022",
      description: "Demostrativo de receitas, despesas e investimentos na infraestrutura do clube e CEI.",
      pdfUrl: "#",
    },
  ],
};
