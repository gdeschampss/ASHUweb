"use client";

import React from "react";
import { Download, ArrowRight } from "lucide-react";

export const StickyMobileCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t-2 border-[#DD0B14] shadow-2xl lg:hidden">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#037533]">
            Associação ASHU
          </span>
          <span className="text-xs text-[#1A1D1B] font-semibold">
            Formulário em PDF
          </span>
        </div>
        <a
          href="#formulario-download"
          className="min-h-[44px] px-5 py-2.5 bg-[#DD0B14] hover:bg-[#A80810] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-98"
        >
          <Download className="w-4 h-4 animate-bounce" />
          <span>Baixar Ficha</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
