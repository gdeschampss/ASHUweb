"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StatCounterProps {
  endValue: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
}

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
      if (!countRef.current || !containerRef.current) return;

      const obj = { val: 0 };
      gsap.to(obj, {
        val: endValue,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.innerText = `${prefix}${Math.floor(obj.val)}${suffix}`;
          }
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-[20px] border border-[#037533]/15 shadow-sm text-center transform transition-transform hover:-translate-y-1"
    >
      <div className="font-bold text-4xl sm:text-5xl text-[#037533] tabular-nums tracking-tight mb-2">
        <span ref={countRef}>
          {prefix}0{suffix}
        </span>
      </div>
      <h4 className="text-sm font-bold text-[#1A1D1B] uppercase tracking-wider mb-1">
        {label}
      </h4>
      {sublabel && (
        <p className="text-xs text-[#024E22]/70 font-medium max-w-[200px]">
          {sublabel}
        </p>
      )}
    </div>
  );
};
