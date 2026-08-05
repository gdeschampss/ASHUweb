import React from "react";
import { CheckCircle2 } from "lucide-react";

interface ValueChipProps {
  label: string;
}

export const ValueChip: React.FC<ValueChipProps> = ({ label }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[#037533]/25 rounded-full text-xs sm:text-sm font-semibold text-[#024E22] shadow-2xs hover:border-[#037533] hover:bg-[#E8F3EC] hover:text-[#037533] transition-all duration-200 transform hover:-translate-y-0.5">
      <CheckCircle2 className="w-4 h-4 text-[#037533] shrink-0" />
      <span>{label}</span>
    </div>
  );
};
