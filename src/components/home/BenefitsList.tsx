"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { BENEFICIOS_DATA } from "@/data/beneficios";
import { CheckCircle2, ArrowRight, Dumbbell, Utensils, Baby, Trophy, Scale, HeartPulse, ShieldCheck, Gift, Building, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ICON_MAP = {
  Dumbbell,
  Utensils,
  Baby,
  Trophy,
  Scale,
  HeartPulse,
  ShieldCheck,
  Gift,
  Building,
  Sparkles,
};

export const BenefitsList: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!gridRef.current) return;
      const cards = gridRef.current.querySelectorAll(".benefit-card-stagger");

      // Soft GSAP entrance without hiding initial SSR content
      gsap.fromTo(
        cards,
        { y: 25, opacity: 0.8 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const featuredBenefits = BENEFICIOS_DATA.filter((b) => b.featured);
  const compactBenefits = BENEFICIOS_DATA.filter((b) => !b.featured);

  return (
    <section id="beneficios" ref={containerRef} className="py-20 bg-[#F5EFE6] border-b border-[#037533]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E8F3EC] border border-[#037533]/20 rounded-full text-xs font-bold uppercase tracking-wider text-[#037533]">
            <CheckCircle2 className="w-4 h-4 text-[#037533]" />
            <span>Vantagens Exclusivas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1D1B] font-serif">
            Nossos Benefícios
          </h2>
          <p className="text-sm sm:text-base text-[#024E22]/80 leading-relaxed">
            Uma infraestrutura robusta e completa desenhada para suprir as necessidades de esporte, saúde, lazer, alimentação e educação de toda a família.
          </p>
        </div>

        {/* Grid Container */}
        <div ref={gridRef} className="space-y-12">
          {/* Featured Cards (Grid 2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredBenefits.map((item) => {
              const IconComponent = ICON_MAP[item.iconName] || CheckCircle2;
              return (
                <div
                  key={item.id}
                  className="benefit-card-stagger group bg-white rounded-[24px] overflow-hidden border-2 border-[#037533]/15 shadow-md hover:shadow-xl hover:border-[#037533] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-[#024E22]">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                      <span className="px-3.5 py-1 bg-[#037533] text-white text-xs font-bold rounded-lg shadow-sm">
                        {item.badge}
                      </span>
                    </div>

                    {item.highlightText && (
                      <div className="absolute bottom-4 right-4 z-10">
                        <span className="px-3.5 py-1 bg-[#DD0B14] text-white text-xs font-bold rounded-lg shadow-sm">
                          {item.highlightText}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2.5 bg-[#E8F3EC] text-[#037533] rounded-xl shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1A1D1B] font-serif group-hover:text-[#037533] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {item.link && (
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#037533] hover:text-[#024E22] pt-2"
                      >
                        <span>Saiba mais detalhes</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Compact Cards (Grid 5-col) */}
          <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#037533]/20 shadow-sm">
            <h3 className="text-lg font-bold text-[#037533] font-serif mb-6 flex items-center gap-2 border-b border-[#037533]/10 pb-3">
              <Sparkles className="w-5 h-5 text-[#DD0B14]" />
              <span>Mais Convênios & Assistência aos Servidores</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {compactBenefits.map((item) => {
                const IconComponent = ICON_MAP[item.iconName] || CheckCircle2;
                return (
                  <div
                    key={item.id}
                    className="benefit-card-stagger p-4 bg-[#F5EFE6] rounded-xl border border-[#037533]/15 hover:border-[#037533] hover:bg-white transition-all group"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-2 bg-white rounded-lg text-[#037533] shadow-2xs group-hover:bg-[#037533] group-hover:text-white transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-xs text-[#1A1D1B] leading-tight">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-snug">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section Bottom */}
        <div className="mt-14 text-center">
          <Link
            href="/seja-associado"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#DD0B14] hover:bg-[#A80810] text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <span>Quero Acesso a Todos os Benefícios</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
