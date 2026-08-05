import React from "react";
import { GovernanceData } from "@/data/governanca";
import { Users, ShieldCheck, UserCheck } from "lucide-react";

interface GovernanceBlockProps {
  data: GovernanceData;
}

export const GovernanceBlock: React.FC<GovernanceBlockProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Diretoria Executiva */}
      <div className="lg:col-span-7 bg-white p-8 rounded-[24px] border border-[#037533]/20 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-[#037533]/15 pb-4">
          <div className="p-3 bg-[#E8F3EC] text-[#037533] rounded-xl">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#037533] font-serif">
              Diretoria Executiva Vigente
            </h2>
            <p className="text-xs text-gray-500">{data.gestionPeriod}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.directoria.map((member, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#F5EFE6] rounded-xl border border-[#037533]/15 flex items-start gap-3"
            >
              <div className="p-2 bg-white text-[#037533] rounded-lg shrink-0 mt-0.5">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#037533] uppercase tracking-wider block">
                  {member.role}
                </span>
                <h4 className="font-bold text-sm text-[#1A1D1B]">{member.name}</h4>
                {member.department && (
                  <span className="text-[10px] text-gray-500 font-medium">
                    Vínculo: {member.department}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conselho Fiscal */}
      <div className="lg:col-span-5 bg-white p-8 rounded-[24px] border border-[#037533]/20 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-[#037533]/15 pb-4">
          <div className="p-3 bg-[#E8F3EC] text-[#DD0B14] rounded-xl">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#DD0B14] font-serif">
              Conselho Fiscal
            </h2>
            <p className="text-xs text-gray-500">Órgão Fiscalizador Eleito</p>
          </div>
        </div>

        <div className="space-y-3">
          {data.conselhoFiscal.map((member, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-[#F5EFE6] rounded-xl border border-gray-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white text-gray-700 rounded-md">
                  <ShieldCheck className="w-4 h-4 text-[#DD0B14]" />
                </div>
                <span className="font-bold text-xs text-[#1A1D1B]">
                  {member.name}
                </span>
              </div>
              <span className="text-[10px] font-semibold uppercase px-2 py-0.5 bg-white text-gray-600 rounded">
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
