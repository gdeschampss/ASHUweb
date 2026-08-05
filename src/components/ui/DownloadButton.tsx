"use client";

import React from "react";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  label: string;
  fileTitle?: string;
  variant?: "red" | "green";
  className?: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  label,
  fileTitle = "documento PDF",
  variant = "red",
  className = "",
}) => {
  const bgClass =
    variant === "red"
      ? "bg-[#DD0B14] hover:bg-[#A80810] text-white"
      : "bg-[#037533] hover:bg-[#024E22] text-white";

  return (
    <button
      onClick={() => {
        alert(`Download de ${fileTitle} iniciado!`);
      }}
      className={`px-5 py-3 ${bgClass} text-xs font-bold uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors focus:outline-none ${className}`}
    >
      <Download className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
};
