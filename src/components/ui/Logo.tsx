import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "default" | "light" | "footer";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({ variant = "default", className = "", size = "md" }) => {
  const heightPixels = {
    sm: 42,
    md: 52,
    lg: 64,
  };

  const isLight = variant === "light";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Official ASHU Emblem Image */}
      <div className="relative flex items-center justify-center shrink-0">
        <Image
          src="/logo.webp"
          alt="Logo Oficial ASHU"
          width={heightPixels[size]}
          height={heightPixels[size]}
          className="w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
          style={{ height: `${heightPixels[size]}px` }}
          priority
        />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <span
            className={`font-black tracking-wider text-2xl lg:text-3xl leading-none ${
              isLight ? "text-white" : "text-[#037533]"
            }`}
            style={{
              textShadow: isLight ? "0 2px 4px rgba(0,0,0,0.3)" : "none",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            ASHU
          </span>
        </div>
        <span
          className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider leading-tight ${
            isLight ? "text-emerald-100" : "text-[#024E22]/80"
          }`}
        >
          Associação dos Servidores HU / UFSC
        </span>
      </div>
    </Link>
  );
};
