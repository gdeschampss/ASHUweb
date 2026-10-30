import React from "react";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { CrossPattern } from "@/components/ui/CrossPattern";
import { InscricaoFlow } from "@/components/associado/InscricaoFlow";
import { UserPlus, CheckCircle2, ShieldCheck, HeartPulse, ArrowDown, Info } from "lucide-react";

export const metadata = {
  title: "Seja Associado | ASHU — Como se associar",
  description: "Saiba como se associar à ASHU: baixe a ficha de cadastro, envie os documentos pelo WhatsApp e aproveite os benefícios. Para servidores do HU/UFSC/EBSERH e terceirizados do HU.",
};

// Lista oficial de benefícios enviada pela ASHU
const BENEFICIOS_LIST = [
  "Academia gratuita para sócio e dependentes",
  "Desconto na locação dos salões",
  "Participação em eventos corporativos da associação",
  "Campo de futebol, quadra de beach tennis e quadra poliesportiva",
  "Assessoria jurídica",
  "Convênios com UNIMED e TEMPOMED",
  "Clube de benefícios: SIDESC e DR. EXAMES",
  "Aulas extras com professores parceiros (escolinha de futebol, capoeira e kung fu — valores definidos pelos professores)",
  "Desconto diferenciado na creche CEI-ASHU",
  "Desconto no Restaurante A'ntenas para sócios e dependentes",
];

const BENEFICIOS_CARD = [
  "Academia gratuita para sócio e dependentes",
  "Desconto no Restaurante A'ntenas",
  "Desconto na creche CEI-ASHU",
  "Convênios UNIMED, TEMPOMED, SIDESC e DR. EXAMES",
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
            Benefícios completos para você e toda a sua família por uma contribuição justa, paga por débito automático.
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
              Contribuição mensal sobre o salário base, via débito automático no Banco do Brasil ou na Caixa.
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
                  {BENEFICIOS_CARD.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-ashu-green shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="#inscricao"
                  className="w-full px-5 py-3.5 bg-ashu-green hover:bg-ashu-green-dark text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Quero me associar</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
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
                  {BENEFICIOS_CARD.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-ashu-red shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-start gap-2 p-3 bg-white rounded-xl border border-gray-200 text-xs text-gray-700 leading-relaxed">
                  <Info className="w-4 h-4 text-ashu-red shrink-0 mt-px" />
                  <span>
                    É preciso comprovar <strong>1 ano de vínculo com o HU</strong> ou pagar{" "}
                    <strong>3 contribuições</strong> ao entrar na ASHU.
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#inscricao"
                  className="w-full px-5 py-3.5 bg-ashu-red hover:bg-ashu-red-dark text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Quero me associar</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
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
            {BENEFICIOS_LIST.map((item) => (
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

      {/* Como se associar — passo a passo */}
      <section id="inscricao" className="py-16 bg-ashu-green-light/50 border-t border-ashu-green/15 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal-stagger className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-ashu-green block mb-1">
              Inscrição
            </span>
            <h2 className="text-3xl font-bold text-ink font-serif mb-2">
              Como se associar — passo a passo
            </h2>
            <p className="text-sm text-gray-600">
              Baixe a ficha, preencha, assine e envie com os documentos para o WhatsApp da ASHU.
            </p>
          </div>

          <InscricaoFlow />
        </div>
      </section>
    </main>
  );
}
