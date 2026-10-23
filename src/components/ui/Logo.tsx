import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "default" | "light";
  className?: string;
  size?: "sm" | "md" | "lg";
  /** Classes extras da tagline — use para escondê-la em larguras apertadas */
  taglineClassName?: string;
  priority?: boolean;
}

const HEIGHT_PX = {
  sm: 42,
  md: 52,
  lg: 64,
};

export const Logo: React.FC<LogoProps> = ({
  variant = "default",
  className = "",
  size = "md",
  taglineClassName = "",
  priority = false,
}) => {
  const isLight = variant === "light";
  const height = HEIGHT_PX[size];

  return (
    <Link
      href="/"
      aria-label="ASHU — página inicial"
      className={`inline-flex items-center gap-3 group rounded-lg ${className}`}
    >
      {/* Official ASHU Emblem Image */}
      <Image
        src="/logo.webp"
        alt=""
        width={HEIGHT_PX.lg}
        height={HEIGHT_PX.lg}
        className="w-auto shrink-0 object-contain drop-shadow-md group-hover:scale-105 transition-[height,scale] duration-300 ease-out-expo"
        style={{ height }}
        priority={priority}
      />

      {/* Brand Text */}
      <div className="flex flex-col">
        <span
          className={`font-sans font-black tracking-wider text-2xl lg:text-3xl leading-none ${
            isLight ? "text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]" : "text-ashu-green"
          }`}
        >
          ASHU
        </span>
        <span
          className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider leading-tight ${
            isLight ? "text-emerald-100" : "text-ashu-green-dark/80"
          } ${taglineClassName}`}
        >
          Associação dos Servidores HU / UFSC
        </span>
      </div>
    </Link>
  );
};
