import React from "react";
import { CrossPattern } from "@/components/ui/CrossPattern";
import { Building, Calendar, PhoneCall, CheckCircle2, MapPin, Users, MessageSquare } from "lucide-react";
import Image from "next/image";
import { whatsappLink } from "@/config/contato";

export const metadata = {
  title: "Salão de Festas & Espaço de Eventos | ASHU HU/UFSC",
  description: "Reserve o Salão de Festas da ASHU para aniversários e comemorações. Estrutura completa com churrasqueiras e cozinha no campus do HU/UFSC.",
};

const SALOES = [
  {
    nome: "Salão Maior",
    descricao: "Amplo, com mesas e cadeiras para grandes eventos",
    fotos: [
      { src: "/fotos/salao-maior-1.jpg", alt: "Salão maior da ASHU com mesas redondas de toalha verde e cadeiras brancas" },
      { src: "/fotos/salao-maior-2.jpg", alt: "Outra vista do salão maior da ASHU com mesas montadas e balcão ao fundo" },
    ],
  },
  {
    nome: "Salão Menor",
    descricao: "Espaço livre com cozinha, ideal para festas menores",
    fotos: [
      { src: "/fotos/salao-menor-1.jpg", alt: "Salão menor da ASHU, vazio, com pilares, espelhos e acesso à cozinha" },
      { src: "/fotos/salao-menor-2.jpg", alt: "Salão menor da ASHU com cadeiras empilhadas e acesso aos banheiros" },
    ],
  },
];

export default function SalaoDeFestasPage() {
  const whatsappUrl = whatsappLink(
    "Olá! Sou servidor/associado e gostaria de consultar a disponibilidade de data para reserva do Salão de Festas da ASHU."
  );

  return (
    <main className="pt-20 pb-20 bg-ashu-cream min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 bg-ashu-green text-white border-b-4 border-ashu-red">
        <CrossPattern color="#FFFFFF" opacity={0.05} size={48} />
        <div data-reveal-stagger className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-emerald-100">
            <Building className="w-4 h-4" />
            <span>Infraestrutura Social</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Salão de Festas & Espaço de Confraternização
          </h1>

          <p className="text-base text-emerald-100/90 leading-relaxed">
            Estrutura ampla e climatizada para celebrar aniversários, reuniões de família e eventos de integração com desconto para associados.
          </p>
        </div>
      </section>

      {/* Main Details */}
      <section className="py-16">
        <div data-reveal-stagger className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal-stagger className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Gallery Image Grid */}
            <div className="lg:col-span-7 space-y-8">
              {SALOES.map((salao) => (
                <div key={salao.nome} className="space-y-3">
                  <div className="flex items-baseline gap-3">
                    <span className="px-3 py-1 bg-ashu-green text-white text-xs font-bold uppercase tracking-wider rounded-lg">
                      {salao.nome}
                    </span>
                    <span className="text-xs text-gray-600">{salao.descricao}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {salao.fotos.map((foto) => (
                      <div
                        key={foto.src}
                        className="relative h-56 rounded-2xl overflow-hidden border border-ashu-green/20 shadow-md"
                      >
                        <Image
                          src={foto.src}
                          alt={foto.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 29vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Reservation Info & WhatsApp CTA */}
            <div className="lg:col-span-5 bg-white p-8 rounded-[24px] border-2 border-ashu-green/20 shadow-md space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-ashu-green block mb-1">
                  Solicitação de Reserva
                </span>
                <h2 className="text-2xl font-bold text-ink font-serif">
                  Como Agendar o Salão de Festas?
                </h2>
                <p className="text-xs text-gray-600 mt-2">
                  Atendimento direto e rápido com a Secretaria da ASHU via WhatsApp.
                </p>
              </div>

              <div className="space-y-3 text-xs text-ink">
                <div className="flex items-center gap-3 p-3 bg-ashu-cream rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-ashu-green shrink-0" />
                  <span>Capacidade para até 120 convidados sentados</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-ashu-cream rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-ashu-green shrink-0" />
                  <span>Cozinha equipada com freezer e geladeira industrial</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-ashu-cream rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-ashu-green shrink-0" />
                  <span>Churrasqueira grande com balcão de apoio</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-ashu-cream rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-ashu-green shrink-0" />
                  <span>Estacionamento interno privativo</span>
                </div>
              </div>

              {/* WhatsApp CTA Button */}
              <div className="pt-4 border-t border-ashu-green/15 space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Solicitar Agenda via WhatsApp</span>
                </a>
                <p className="text-[11px] text-gray-500 text-center">
                  Horário de resposta: Segunda a Sexta, das 8h às 17h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
