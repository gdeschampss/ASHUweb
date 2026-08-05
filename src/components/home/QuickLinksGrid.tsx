"use client";

import React from "react";
import Link from "next/link";
import { UserPlus, Baby, Gift, Calendar, Utensils, Dumbbell, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const QUICK_LINKS = [
  {
    title: "Seja Associado",
    subtitle: "Filie-se e aproveite vantagens",
    href: "/seja-associado",
    icon: UserPlus,
    color: "bg-[#DD0B14] text-white hover:bg-[#A80810]",
    badge: "Principal",
  },
  {
    title: "CEI-ASHU",
    subtitle: "Creche e Educação Infantil",
    href: "/cei",
    icon: Baby,
    color: "bg-white text-[#037533] border-2 border-[#037533]/20 hover:border-[#037533] hover:bg-[#E8F3EC]",
  },
  {
    title: "Programa de Benefícios",
    subtitle: "Convênios, Saúde & Lazer",
    href: "#beneficios",
    icon: Gift,
    color: "bg-white text-[#037533] border-2 border-[#037533]/20 hover:border-[#037533] hover:bg-[#E8F3EC]",
  },
  {
    title: "Eventos Anuais",
    subtitle: "Calendário social e esportivo",
    href: "/eventos",
    icon: Calendar,
    color: "bg-white text-[#037533] border-2 border-[#037533]/20 hover:border-[#037533] hover:bg-[#E8F3EC]",
  },
  {
    title: "Restaurante",
    subtitle: "A'ntenas com 10% OFF",
    href: "/restaurante",
    icon: Utensils,
    color: "bg-white text-[#037533] border-2 border-[#037533]/20 hover:border-[#037533] hover:bg-[#E8F3EC]",
  },
  {
    title: "Academia",
    subtitle: "Gratuito para Associados",
    href: "/academia",
    icon: Dumbbell,
    color: "bg-white text-[#037533] border-2 border-[#037533]/20 hover:border-[#037533] hover:bg-[#E8F3EC]",
  },
];

export const QuickLinksGrid: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-[#037533]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#037533] block mb-1">
              Acesso Rápido
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1D1B] font-serif">
              O que você procura na ASHU?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#024E22]/70 mt-2 md:mt-0 max-w-md">
            Serviços, instalações e convênios pensados para o dia a dia do servidor do Hospital Universitário.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {QUICK_LINKS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  href={item.href}
                  className={`group flex flex-col justify-between p-4 h-full rounded-[16px] shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden ${item.color}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl ${item.badge ? 'bg-white/20' : 'bg-[#E8F3EC]'}`}>
                      <Icon className="w-5 h-5 shrink-0" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
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
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
