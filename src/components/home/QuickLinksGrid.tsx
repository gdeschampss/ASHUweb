import React from "react";
import Link from "next/link";
import { UserPlus, Baby, Gift, Calendar, Utensils, Dumbbell, ArrowUpRight } from "lucide-react";

const QUICK_LINKS = [
  {
    title: "Seja Associado",
    subtitle: "Filie-se e aproveite vantagens",
    href: "/seja-associado",
    icon: UserPlus,
    color: "bg-ashu-red text-white hover:bg-ashu-red-dark",
    badge: "Principal",
  },
  {
    title: "CEI-ASHU",
    subtitle: "Creche e Educação Infantil",
    href: "/cei",
    icon: Baby,
    color: "bg-white text-ashu-green border-2 border-ashu-green/20 hover:border-ashu-green hover:bg-ashu-green-light",
  },
  {
    title: "Programa de Benefícios",
    subtitle: "Convênios, Saúde & Lazer",
    href: "#beneficios",
    icon: Gift,
    color: "bg-white text-ashu-green border-2 border-ashu-green/20 hover:border-ashu-green hover:bg-ashu-green-light",
  },
  {
    title: "Eventos Anuais",
    subtitle: "Calendário social e esportivo",
    href: "/eventos",
    icon: Calendar,
    color: "bg-white text-ashu-green border-2 border-ashu-green/20 hover:border-ashu-green hover:bg-ashu-green-light",
  },
  {
    title: "Restaurante",
    subtitle: "A'ntenas com 10% OFF",
    href: "/restaurante",
    icon: Utensils,
    color: "bg-white text-ashu-green border-2 border-ashu-green/20 hover:border-ashu-green hover:bg-ashu-green-light",
  },
  {
    title: "Academia",
    subtitle: "Gratuito para Associados",
    href: "/academia",
    icon: Dumbbell,
    color: "bg-white text-ashu-green border-2 border-ashu-green/20 hover:border-ashu-green hover:bg-ashu-green-light",
  },
];

export const QuickLinksGrid: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-ashu-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal-stagger className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-ashu-green block mb-1">
              Acesso Rápido
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink font-serif">
              O que você procura na ASHU?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ashu-green-dark/70 mt-2 md:mt-0 max-w-md">
            Serviços, instalações e convênios pensados para o dia a dia do servidor do Hospital Universitário.
          </p>
        </div>

        <div data-reveal-stagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {QUICK_LINKS.map((item) => {
            const Icon = item.icon;
            // Âncoras da própria página usam <a> para o Lenis rolar suavemente
            const Anchor = item.href.startsWith("#") ? "a" : Link;
            return (
              <div key={item.title}>
                <Anchor
                  href={item.href}
                  className={`group flex flex-col justify-between p-4 h-full rounded-[16px] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden ${item.color}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl ${item.badge ? 'bg-white/20' : 'bg-ashu-green-light'}`}>
                      <Icon className="w-5 h-5 shrink-0" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>

                  <div>
                    {item.badge && (
                      <span className="inline-block px-2 py-0.5 mb-1 bg-white/20 text-[10px] font-bold uppercase rounded-md">
                        {item.badge}
                      </span>
                    )}
                    <h3 className="font-bold text-sm leading-tight mb-1">
                      {item.title}
                    </h3>
                    <p className={`text-[11px] leading-tight line-clamp-2 ${item.badge ? 'text-white/80' : 'text-gray-600'}`}>
                      {item.subtitle}
                    </p>
                  </div>
                </Anchor>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
