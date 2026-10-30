// Contatos oficiais da ASHU — usar sempre daqui, nunca repetir os números nas páginas.
export const CONTATO = {
  whatsapp: "554891854116", // só dígitos, com 55 + DDD (formato do wa.me)
  whatsappDisplay: "(48) 9185-4116",
  instagram: "https://www.instagram.com/gremiodohu/",
  fichaCadastro: "/docs/Cadastro_socio_2026.docx",
};

export const whatsappLink = (mensagem?: string) =>
  `https://wa.me/${CONTATO.whatsapp}${mensagem ? `?text=${encodeURIComponent(mensagem)}` : ""}`;
