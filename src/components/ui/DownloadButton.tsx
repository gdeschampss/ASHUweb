"use client";

import React from "react";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  label: string;
  href: string;
  /** Nome sugerido para o arquivo salvo; por padrão usa o nome do arquivo no servidor. */
  fileName?: string;
  variant?: "red" | "green";
  className?: string;
  onDownload?: () => void;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  label,
  href,
  fileName,
  variant = "red",
  className = "",
  onDownload,
}) => {
  const bgClass =
    variant === "red"
      ? "bg-ashu-red hover:bg-ashu-red-dark text-white"
      : "bg-ashu-green hover:bg-ashu-green-dark text-white";

  return (
    <a
      href={href}
      download={fileName ?? true}
      onClick={onDownload}
      className={`px-5 py-3 ${bgClass} text-xs font-bold uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ashu-green ${className}`}
    >
      <Download className="w-4 h-4" />
      <span>{label}</span>
    </a>
  );
};
