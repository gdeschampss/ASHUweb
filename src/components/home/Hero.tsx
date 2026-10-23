"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { CrossPattern, SingleCrossGraphic } from "../ui/CrossPattern";
import { UserPlus, ArrowRight, ShieldCheck, Heart, Award } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  // Parallax nas cruzes decorativas (a entrada do conteúdo vem do data-reveal)
  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".cross-parallax-a", {
          yPercent: -30,
          rotate: 8,
          ease: "none",
          scrollTrigger: { trigger: containerRef.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".cross-parallax-b", {
          yPercent: -55,
          rotate: -10,
          ease: "none",
          scrollTrigger: { trigger: containerRef.current, start: "top top", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-ashu-cream border-b border-ashu-green/15"
    >
      {/* Background Red Cross Pattern */}
      <CrossPattern color="#DD0B14" opacity={0.05} size={56} />

      {/* Floating Graphic Cross Accents */}
      <div className="cross-parallax-a absolute -right-12 top-20 hidden lg:block opacity-70">
        <SingleCrossGraphic size={280} color="#DD0B14" />
      </div>
      <div className="cross-parallax-b absolute -left-16 bottom-10 hidden lg:block opacity-50">
        <SingleCrossGraphic size={200} color="#037533" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div data-reveal-stagger className="lg:col-span-8 space-y-6 text-left">
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-ashu-green/25 shadow-2xs">
              <Award className="w-4 h-4 text-ashu-red" />
              <span className="text-xs font-bold uppercase tracking-wider text-ashu-green-dark">
                45+ Anos de Atuação (Fundada em 1980)
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.15] font-serif tracking-tight"
            >
              Promovendo{" "}
              <span className="text-ashu-green underline decoration-ashu-red decoration-4 underline-offset-8">
                qualidade de vida
              </span>
              , integração e benefícios para servidores, famílias e comunidade.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-ashu-green-dark/85 max-w-2xl font-normal leading-relaxed">
              Estrutura própria consolidada com academia, restaurante, creche (CEI-ASHU), quadras esportivas, assessoria jurídica e os melhores planos de saúde.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/seja-associado"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-ashu-red hover:bg-ashu-red-dark text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <UserPlus className="w-5 h-5" />
                <span>Seja Associado ASHU</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Âncora nativa: o Lenis faz o scroll suave até a seção */}
              <a
                href="#beneficios"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-ashu-green-light text-ashu-green border-2 border-ashu-green text-sm font-bold rounded-xl shadow-xs transition-all duration-200"
              >
                <span>Explorar Benefícios</span>
              </a>
            </div>

            {/* Highlights Bar */}
            <div className="pt-8 border-t border-ashu-green/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-ashu-green-dark">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-ashu-green" />
                <span>HU/UFSC & EBSERH</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-ashu-red" />
                <span>Mais de 1.000 Associados</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-ashu-green" />
                <span>Gestão Transparente</span>
              </div>
            </div>
          </div>

          {/* Right Highlight Box */}
          <div data-reveal="right" data-reveal-delay="0.35" className="lg:col-span-4 hidden lg:block">
            <div className="relative p-6 bg-white rounded-[24px] border-2 border-ashu-green/20 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ashu-green-light rounded-bl-full -z-0 opacity-60" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-ashu-red text-white rounded-xl">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ashu-green text-lg">Quem Pode Associar?</h3>
                    <p className="text-xs text-gray-600">Servidores & Colaboradores</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-ink">
                  <div className="p-3 bg-ashu-cream rounded-xl border border-ashu-green/10">
                    <span className="font-bold text-ashu-green block">Servidores Efetivos:</span>
                    <span>1% do salário base para acesso ilimitado a todos os benefícios.</span>
                  </div>
                  <div className="p-3 bg-ashu-cream rounded-xl border border-ashu-green/10">
                    <span className="font-bold text-ashu-green block">Terceirizados do HU:</span>
                    <span>2% do salário base para você e sua família.</span>
                  </div>
                </div>

                <Link
                  href="/seja-associado"
                  className="w-full py-3 bg-ashu-green hover:bg-ashu-green-dark text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xs flex items-center justify-center gap-2 transition-colors"
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
