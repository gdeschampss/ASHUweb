import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BENEFICIOS_DATA } from "@/data/beneficios";
import { CheckCircle2, ArrowRight, Dumbbell, Utensils, Baby, Trophy, Scale, HeartPulse, ShieldCheck, Gift, Building, Sparkles } from "lucide-react";

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

const featuredBenefits = BENEFICIOS_DATA.filter((b) => b.featured);
const compactBenefits = BENEFICIOS_DATA.filter((b) => !b.featured);

export const BenefitsList: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 bg-ashu-cream border-b border-ashu-green/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-reveal-stagger className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-ashu-green-light border border-ashu-green/20 rounded-full text-xs font-bold uppercase tracking-wider text-ashu-green">
            <CheckCircle2 className="w-4 h-4 text-ashu-green" />
            <span>Vantagens Exclusivas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink font-serif">
            Nossos Benefícios
          </h2>
          <p className="text-sm sm:text-base text-ashu-green-dark/80 leading-relaxed">
            Uma infraestrutura robusta e completa desenhada para suprir as necessidades de esporte, saúde, lazer, alimentação e educação de toda a família.
          </p>
        </div>

        {/* Grid Container */}
        <div className="space-y-12">
          {/* Featured Cards (Grid 2x2) */}
          <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredBenefits.map((item) => {
              const IconComponent = ICON_MAP[item.iconName] || CheckCircle2;
              return (
                <div
                  key={item.id}
                  className="group bg-white rounded-[24px] overflow-hidden border-2 border-ashu-green/15 shadow-md hover:shadow-xl hover:border-ashu-green transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-ashu-green-dark">
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
                      <span className="px-3.5 py-1 bg-ashu-green text-white text-xs font-bold rounded-lg shadow-sm">
                        {item.badge}
                      </span>
                    </div>

                    {item.highlightText && (
                      <div className="absolute bottom-4 right-4 z-10">
                        <span className="px-3.5 py-1 bg-ashu-red text-white text-xs font-bold rounded-lg shadow-sm">
                          {item.highlightText}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2.5 bg-ashu-green-light text-ashu-green rounded-xl shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-ink font-serif group-hover:text-ashu-green transition-colors">
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
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ashu-green hover:text-ashu-green-dark pt-2"
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
          <div data-reveal className="bg-white p-6 sm:p-8 rounded-[24px] border border-ashu-green/20 shadow-sm">
            <h3 className="text-lg font-bold text-ashu-green font-serif mb-6 flex items-center gap-2 border-b border-ashu-green/10 pb-3">
              <Sparkles className="w-5 h-5 text-ashu-red" />
              <span>Mais Convênios & Assistência aos Servidores</span>
            </h3>

            <div data-reveal-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {compactBenefits.map((item) => {
                const IconComponent = ICON_MAP[item.iconName] || CheckCircle2;
                return (
                  <div
                    key={item.id}
                    className="p-4 bg-ashu-cream rounded-xl border border-ashu-green/15 hover:border-ashu-green hover:bg-white transition-all group"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-2 bg-white rounded-lg text-ashu-green shadow-2xs group-hover:bg-ashu-green group-hover:text-white transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-xs text-ink leading-tight">
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
        <div data-reveal className="mt-14 text-center">
          <Link
            href="/seja-associado"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-ashu-red hover:bg-ashu-red-dark text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            <span>Quero Acesso a Todos os Benefícios</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
