"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface StatCounterProps {
  endValue: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
}

const formatNumber = (value: number) => Math.floor(value).toLocaleString("pt-BR");

export const StatCounter: React.FC<StatCounterProps> = ({
  endValue,
  suffix = "",
  prefix = "",
  label,
  sublabel,
}) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = countRef.current;
      if (!el) return;

      const render = (value: number) => {
        el.textContent = `${prefix}${formatNumber(value)}${suffix}`;
      };

      // Sem animação: mostra o valor final direto
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        render(endValue);
        return;
      }

      const obj = { val: 0 };
      gsap.to(obj, {
        val: endValue,
        duration: 2.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => render(obj.val),
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-[20px] border border-ashu-green/15 shadow-sm text-center transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="font-bold text-4xl sm:text-5xl text-ashu-green tabular-nums tracking-tight mb-2">
        <span ref={countRef}>
          {prefix}0{suffix}
        </span>
      </div>
      <h4 className="text-sm font-bold text-ink uppercase tracking-wider mb-1">
        {label}
      </h4>
      {sublabel && (
        <p className="text-xs text-ashu-green-dark/70 font-medium max-w-[200px]">
          {sublabel}
        </p>
      )}
    </div>
  );
};
