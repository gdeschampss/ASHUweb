import React from "react";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { CrossPattern } from "@/components/ui/CrossPattern";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { UserPlus, CheckCircle2, ShieldCheck, HeartPulse, FileText } from "lucide-react";

export const metadata = {
  title: "Seja Associado | ASHU — Formulário e Planos",
  description: "Saiba como se associar à ASHU. Vantagens exclusivas para servidores efetivos do HU/UFSC, EBSERH e terceirizados por apenas 1% do salário base.",
};

const CONVENIOS_LIST = [
  "Academia Gratuita",
  "A'ntenas Restaurante (10% OFF)",
  "CEI-ASHU (Creche)",
  "Campo Oficial de Futebol",
  "Quadras Poliesportivas",
  "Salões de Festas",
  "Assessoria Jurídica Técnica",
  "Unimed Grande Florianópolis",
  "TempoMed",
  "Uniodonto Santa Catarina",
  "SIDESC",
  "Eventos & Festas Anuais",
];

export default function SejaAssociadoPage() {
  return (
    <main className="pt-20 pb-28 bg-ashu-cream min-h-screen relative">
      <StickyMobileCTA />

      {/* Header Banner */}
      <section className="relative py-16 bg-ashu-red text-white border-b-4 border-ashu-green">
        <CrossPattern color="#FFFFFF" opacity={0.06} size={50} />
        <div data-reveal-stagger className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <UserPlus className="w-4 h-4" />
            <span>Filiação ASHU</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif mb-4">
            Associe-se e Fortaleça Nossa Comunidade
          </h1>
          <p className="text-base text-white/90 leading-relaxed">
            Benefícios completos para você e toda a sua família por uma mensalidade justa descontada em folha.
          </p>
        </div>
      </section>

      {/* Publico Elegivel */}
      <section className="py-16">
        <div data-reveal-stagger className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-[24px] border border-ashu-green/20 shadow-md">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-ashu-green font-serif mb-2">
                Quem pode se associar?
              </h2>
              <p className="text-sm text-ashu-green-dark/80">
                A ASHU é de todos que constroem a história do Hospital Universitário diariamente.
              </p>
            </div>

            <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-ashu-green-light rounded-2xl border border-ashu-green/20 flex items-start gap-4">
                <div className="p-3 bg-ashu-green text-white rounded-xl shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-ashu-green-dark mb-1">
                    Servidores Efetivos
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Profissionais efetivos do Hospital Universitário da UFSC (HU/UFSC) e contratados via EBSERH.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-ashu-cream rounded-2xl border border-ashu-green/20 flex items-start gap-4">
                <div className="p-3 bg-ashu-red text-white rounded-xl shrink-0">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-ink mb-1">
                    Terceirizados do HU
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Trabalhadores terceirizados com vínculo ativo no Hospital Universitário da UFSC.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white border-y border-ashu-green/15">
        <div data-reveal-stagger className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-ashu-green block mb-1">
              Valores Justos
            </span>
            <h2 className="text-3xl font-bold text-ink font-serif">
              Quanto custa se associar?
            </h2>
            <p className="text-xs sm:text-sm text-ashu-green-dark/80 mt-2">
              Desconto em folha sem burocracia nem taxas ocultas.
            </p>
          </div>

          <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1: Servidor Efetivo */}
            <div className="bg-ashu-cream p-8 rounded-[24px] border-2 border-ashu-green shadow-lg flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-ashu-green text-white px-4 py-1 text-[11px] font-bold uppercase rounded-bl-xl">
                Recomendado
              </div>

              <div>
                <h3 className="text-xl font-bold text-ashu-green font-serif mb-2">
                  Servidor Efetivo HU / EBSERH
                </h3>
                <p className="text-xs text-gray-600 mb-6">
                  Acesso completo a todas as áreas e convênios para o titular e dependentes.
                </p>

                <div className="mb-6 p-4 bg-white rounded-xl border border-ashu-green/20">
                  <span className="text-3xl font-black text-ashu-green tabular-nums">
                    1%
                  </span>
                  <span className="text-xs font-bold text-ink ml-2">
                    do salário base
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-ink">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ashu-green" />
                    <span>Academia 100% gratuita</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ashu-green" />
                    <span>Desconto no Restaurante A&apos;ntenas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ashu-green" />
                    <span>Desconto no CEI-ASHU</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ashu-green" />
                    <span>Acesso a Planos de Saúde e Odonto</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <DownloadButton
                  label="Baixar Ficha de Servidor"
                  fileTitle="Ficha de Servidor Efetivo PDF"
                  variant="green"
                  className="w-full py-3.5"
                />
              </div>
            </div>

            {/* Card 2: Terceirizados */}
            <div className="bg-ashu-cream p-8 rounded-[24px] border-2 border-gray-300 hover:border-ashu-red shadow-sm transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-ink font-serif mb-2">
                  Terceirizados do HU
                </h3>
                <p className="text-xs text-gray-600 mb-6">
                  Para trabalhadores terceirizados com atuação no Hospital Universitário.
                </p>

                <div className="mb-6 p-4 bg-white rounded-xl border border-gray-200">
                  <span className="text-3xl font-black text-ashu-red tabular-nums">
                    2%
                  </span>
                  <span className="text-xs font-bold text-ink ml-2">
                    do salário base
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-ink">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ashu-red" />
                    <span>Uso da academia e quadras</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ashu-red" />
                    <span>Desconto no Restaurante A&apos;ntenas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ashu-red" />
                    <span>Clube de Benefícios & Convênios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ashu-red" />
                    <span>Participação nos eventos e festas</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <DownloadButton
                  label="Baixar Ficha Terceirizados"
                  fileTitle="Ficha de Terceirizados PDF"
                  variant="red"
                  className="w-full py-3.5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Beneficios Incluidos */}
      <section className="py-16">
        <div data-reveal-stagger className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-ashu-green font-serif">
              Resumo dos Benefícios Inclusos
            </h2>
          </div>

          <div data-reveal-stagger className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {CONVENIOS_LIST.map((item) => (
              <div
                key={item}
                className="px-4 py-2.5 bg-white rounded-full border border-ashu-green/20 text-xs font-bold text-ashu-green-dark flex items-center gap-2 shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-ashu-green" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section (Ficha em PDF) */}
      <section id="formulario-download" className="py-16 bg-white border-t border-ashu-green/15">
        <div data-reveal-stagger className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="p-4 bg-ashu-green-light text-ashu-green rounded-2xl w-fit mx-auto">
            <FileText className="w-8 h-8" />
          </div>

          <h2 className="text-3xl font-bold text-ink font-serif">
            Baixe a Ficha de Autorização de Desconto
          </h2>

          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Preencha a ficha de autorização de desconto em folha e entregue na Secretaria da ASHU (anexo ao HU/UFSC) ou envie digitalizada pelo WhatsApp.
          </p>

          <div className="p-8 bg-ashu-cream rounded-[24px] border-2 border-dashed border-ashu-green/40 max-w-xl mx-auto space-y-4">
            <div className="flex items-center justify-between text-left">
              <div>
                <h4 className="font-bold text-sm text-ashu-green">Ficha_Inscricao_ASHU.pdf</h4>
                <p className="text-xs text-gray-500">Documento Oficial em PDF (1.2 MB)</p>
              </div>
              <DownloadButton
                label="Download"
                fileTitle="Ficha Oficial da ASHU (PDF)"
                variant="red"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
