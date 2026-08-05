import React from "react";
import { GOVERNANCA_DATA } from "@/data/governanca";
import { CrossPattern } from "@/components/ui/CrossPattern";
import { GovernanceBlock } from "@/components/governanca/GovernanceBlock";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { ShieldCheck, FileText } from "lucide-react";

export const metadata = {
  title: "Governança & Transparência | ASHU HU/UFSC",
  description: "Diretoria Vigente, Conselho Fiscal e Relatórios de Prestação de Contas Auditados da Associação dos Servidores do HU/UFSC.",
};

export default function GovernancaPage() {
  return (
    <main className="pt-28 pb-20 bg-[#F5EFE6] min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 bg-[#024E22] text-white border-b-4 border-[#DD0B14]">
        <CrossPattern color="#FFFFFF" opacity={0.04} size={48} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-emerald-100">
            <ShieldCheck className="w-4 h-4" />
            <span>Transparência & Gestão Ética</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Governança & Prestação de Contas
          </h1>

          <p className="text-base text-emerald-100/90 leading-relaxed font-medium">
            Conheça os membros eleitos para a diretoria, o conselho fiscal e acesse os relatórios financeiros e balanços patrimoniais da ASHU.
          </p>

          <div className="pt-2">
            <span className="inline-block px-4 py-1.5 bg-[#037533] rounded-lg text-xs font-bold uppercase tracking-wider text-emerald-100 border border-emerald-500/40">
              {GOVERNANCA_DATA.gestionPeriod}
            </span>
          </div>
        </div>
      </section>

      {/* Main Governance Content Component */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Diretoria & Conselho Fiscal Blocks */}
          <GovernanceBlock data={GOVERNANCA_DATA} />

          {/* Prestação de Contas PDF Downloads */}
          <div className="bg-white p-8 sm:p-10 rounded-[24px] border border-[#037533]/20 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-[#037533]/15 pb-4">
              <div className="p-3 bg-[#E8F3EC] text-[#037533] rounded-xl">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1A1D1B] font-serif">
                  Prestação de Contas & Auditorias Anuais
                </h2>
                <p className="text-xs text-gray-500">
                  Documentos contábeis e pareceres aprovados pelo Conselho Fiscal para download.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {GOVERNANCA_DATA.relatorios.map((rel) => (
                <div
                  key={rel.year}
                  className="p-6 bg-[#F5EFE6] rounded-2xl border border-[#037533]/20 space-y-4 flex flex-col justify-between"
                >
                  <div>
                    <span className="px-3 py-1 bg-[#037533] text-white text-xs font-bold rounded-md">
                      Exercício {rel.year}
                    </span>
                    <h3 className="font-bold text-base text-[#1A1D1B] font-serif mt-3 mb-2 leading-snug">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {rel.description}
                    </p>
                  </div>

                  <DownloadButton
                    label="Baixar PDF Auditado"
                    fileTitle={`Relatório ${rel.year}`}
                    variant="green"
                    className="w-full py-2.5"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
