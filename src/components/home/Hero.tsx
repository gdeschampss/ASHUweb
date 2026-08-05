"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { CrossPattern, SingleCrossGraphic } from "../ui/CrossPattern";
import { UserPlus, ArrowRight, ShieldCheck, Heart, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (badgeRef.current) {
        tl.from(badgeRef.current, { y: 20, opacity: 0, duration: 0.6 });
      }

      if (textRef.current) {
        tl.from(
          textRef.current,
          { y: 30, opacity: 0, duration: 0.8 },
          "-=0.3"
        );
      }

      if (buttonsRef.current) {
        tl.from(
          buttonsRef.current,
          { y: 20, opacity: 0, duration: 0.6 },
          "-=0.4"
        );
      }

      // Parallax effect on Red Cross graphic
      gsap.to(".cross-parallax", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#F5EFE6] border-b border-[#037533]/15"
    >
      {/* Background Red Cross Pattern */}
      <CrossPattern color="#DD0B14" opacity={0.05} size={56} />

      {/* Floating Graphic Cross Accents */}
      <div className="cross-parallax absolute -right-12 top-20 hidden lg:block opacity-70">
        <SingleCrossGraphic size={280} color="#DD0B14" />
      </div>
      <div className="cross-parallax absolute -left-16 bottom-10 hidden lg:block opacity-50">
        <SingleCrossGraphic size={200} color="#037533" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6 text-left">
            {/* Institution Badge */}
            <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#037533]/25 shadow-2xs">
              <Award className="w-4 h-4 text-[#DD0B14]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#024E22]">
                45+ Anos de Atuação (Fundada em 1980)
              </span>
            </div>

            {/* Main Headline */}
            <h1
              ref={textRef}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1A1D1B] leading-[1.15] font-serif tracking-tight"
            >
              Promovendo{" "}
              <span className="text-[#037533] underline decoration-[#DD0B14] decoration-4 underline-offset-8">
                qualidade de vida
              </span>
              , integração e benefícios para servidores, famílias e comunidade.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#024E22]/85 max-w-2xl font-normal leading-relaxed">
              Estrutura própria consolidada com academia, restaurante, creche (CEI-ASHU), quadras esportivas, assessoria jurídica e os melhores planos de saúde.
            </p>

            {/* Hero CTAs */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/seja-associado"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#DD0B14] hover:bg-[#A80810] text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <UserPlus className="w-5 h-5" />
                <span>Seja Associado ASHU</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#beneficios"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-[#E8F3EC] text-[#037533] border-2 border-[#037533] text-sm font-bold rounded-xl shadow-xs transition-all duration-200"
              >
                <span>Explorar Benefícios</span>
              </Link>
            </div>

            {/* Highlights Bar */}
            <div className="pt-8 border-t border-[#037533]/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-[#024E22]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#037533]" />
                <span>HU/UFSC & EBSERH</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#DD0B14]" />
                <span>Mais de 1.000 Associados</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-[#037533]" />
                <span>Gestão Transparente</span>
              </div>
            </div>
          </div>

          {/* Right Highlight Box */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative p-6 bg-white rounded-[24px] border-2 border-[#037533]/20 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8F3EC] rounded-bl-full -z-0 opacity-60" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#DD0B14] text-white rounded-xl">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#037533] text-lg">Quem Pode Associar?</h3>
                    <p className="text-xs text-gray-600">Servidores & Colaboradores</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-[#1A1D1B]">
                  <div className="p-3 bg-[#F5EFE6] rounded-xl border border-[#037533]/10">
                    <span className="font-bold text-[#037533] block">Servidores Efetivos:</span>
                    <span>1% do salário base para acesso ilimitado a todos os benefícios.</span>
                  </div>
                  <div className="p-3 bg-[#F5EFE6] rounded-xl border border-[#037533]/10">
                    <span className="font-bold text-[#037533] block">Terceirizados do HU:</span>
                    <span>2% do salário base para você e sua família.</span>
                  </div>
                </div>

                <Link
                  href="/seja-associado"
                  className="w-full py-3 bg-[#037533] hover:bg-[#024E22] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Baixar Ficha de Inscrição</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
