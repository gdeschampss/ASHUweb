import React from "react";
import { CheckCircle2 } from "lucide-react";

interface ValueChipProps {
  label: string;
}

export const ValueChip: React.FC<ValueChipProps> = ({ label }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-ashu-green/25 rounded-full text-xs sm:text-sm font-semibold text-ashu-green-dark shadow-2xs hover:border-ashu-green hover:bg-ashu-green-light hover:text-ashu-green transition-all duration-200 transform hover:-translate-y-0.5">
      <CheckCircle2 className="w-4 h-4 text-ashu-green shrink-0" />
      <span>{label}</span>
    </div>
  );
};
