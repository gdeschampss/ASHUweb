import React from "react";
import { StatCounter } from "@/components/ui/StatCounter";
import { ValueChip } from "@/components/ui/ValueChip";
import { CrossPattern } from "@/components/ui/CrossPattern";
import { ShieldCheck, Target, Eye, Heart, Award } from "lucide-react";
import Image from "next/image";

const VALORES_LIST = [
  "Ética",
  "Transparência",
  "Compromisso",
  "Respeito às pessoas",
  "Valorização da família",
  "Responsabilidade social",
  "Cooperação",
  "Sustentabilidade",
  "Excelência no atendimento",
];

export const metadata = {
  title: "Quem Somos | ASHU — Associação dos Servidores do HU/UFSC",
  description: "História, Missão, Visão e Valores da Associação dos Servidores do Hospital Universitário da UFSC e EBSERH desde 1980.",
};

export default function QuemSomosPage() {
  return (
    <main className="pt-28 pb-20 bg-[#F5EFE6] min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 bg-white border-b border-[#037533]/15">
        <CrossPattern color="#037533" opacity={0.04} size={48} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#037533] block mb-2">
              Institucional
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#1A1D1B] font-serif mb-4">
              Nossa História & Propósito
            </h1>
            <p className="text-base text-[#024E22]/80 leading-relaxed">
              Há mais de 45 anos unindo a comunidade do Hospital Universitário Professor Polydoro Ernani de São Thiago (HU/UFSC e EBSERH) com estrutura, bem-estar e serviços de excelência.
            </p>
          </div>
        </div>
      </section>

      {/* Main History & Counter Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Story Text Column */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[24px] border border-[#037533]/15 shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8F3EC] text-[#037533] text-xs font-bold rounded-lg">
                <Award className="w-4 h-4" />
                <span>Fundada em Março de 1980</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#037533] font-serif">
                Uma história construída por e para servidores
              </h2>

              <div className="prose text-sm sm:text-base text-[#1A1D1B] space-y-4 leading-relaxed">
                <p>
                  Fundada em março de 1980, a Associação dos Servidores do Hospital Universitário (ASHU) nasceu da união de servidores que acreditavam na importância da integração, do lazer e do fortalecimento da comunidade do Hospital Universitário da Universidade Federal de Santa Catarina, incluindo hoje a EBSERH e UFSC.
                </p>
                <p>
                  Ao longo de mais de quatro décadas, a Associação ampliou sua atuação e passou a oferecer uma ampla estrutura de benefícios voltada ao bem-estar, à qualidade de vida e ao desenvolvimento de seus associados e familiares.
                </p>
                <p>
                  Atualmente, a ASHU disponibiliza academia, restaurante, campos esportivos, quadras, salão de festas, planos de saúde, plano odontológico, assessoria jurídica, Clube de Benefícios e administra o CEI-ASHU, centro de educação infantil que atende tanto filhos de associados quanto a comunidade.
                </p>
                <p className="font-bold text-[#037533] text-base border-l-4 border-[#DD0B14] pl-4 py-1 bg-[#F5EFE6]">
                  Mais do que uma associação, a ASHU é um espaço de convivência, pertencimento e valorização das pessoas.
                </p>
              </div>
            </div>

            {/* GSAP Animated Counter Column */}
            <div className="lg:col-span-5 space-y-6">
              <StatCounter
                endValue={45}
                suffix="+"
                label="Anos de História Viva"
                sublabel="Desde 1980 ao serviço da comunidade universitária"
              />

              <div className="p-6 bg-[#037533] text-white rounded-[20px] shadow-md space-y-4">
                <h3 className="text-lg font-bold font-serif border-b border-emerald-600 pb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-200" />
                  <span>Vínculo Institucional</span>
                </h3>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  Integrada ao Hospital Universitário da UFSC e à EBSERH, a ASHU atua em sintonia com os profissionais da área de saúde e apoio universitário.
                </p>
              </div>

              {/* Photo Card */}
              <div className="relative h-64 rounded-[20px] overflow-hidden border border-[#037533]/20 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                  alt="Comunidade HU UFSC"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Integração & Valorização do Servidor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão & Visão */}
      <section className="py-16 bg-white border-y border-[#037533]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Missão */}
            <div className="p-8 bg-[#F5EFE6] rounded-[24px] border border-[#037533]/20 space-y-4">
              <div className="p-3 bg-[#037533] text-white rounded-xl w-fit">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#037533] font-serif">
                Missão
              </h3>
              <p className="text-sm text-[#1A1D1B] leading-relaxed">
                Promover qualidade de vida, integração e bem-estar aos associados e suas famílias, oferecendo benefícios, serviços e espaços de convivência que fortaleçam o espírito comunitário e contribuam para o desenvolvimento social.
              </p>
            </div>

            {/* Visão */}
            <div className="p-8 bg-[#F5EFE6] rounded-[24px] border border-[#037533]/20 space-y-4">
              <div className="p-3 bg-[#DD0B14] text-white rounded-xl w-fit">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#DD0B14] font-serif">
                Visão
              </h3>
              <p className="text-sm text-[#1A1D1B] leading-relaxed">
                Ser reconhecida como uma associação de referência em Santa Catarina pela excelência na gestão, inovação em benefícios e compromisso com seus associados, fortalecendo continuamente sua atuação junto à comunidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores (Chips Visuals) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#037533] block mb-1">
              Princípios Orientadores
            </span>
            <h2 className="text-3xl font-bold text-[#1A1D1B] font-serif">
              Nossos Valores
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {VALORES_LIST.map((val) => (
              <ValueChip key={val} label={val} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
