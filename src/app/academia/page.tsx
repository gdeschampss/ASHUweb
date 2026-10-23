import React from "react";
import { CrossPattern } from "@/components/ui/CrossPattern";
import { Dumbbell, Clock, Users, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Academia Completa | ASHU HU/UFSC",
  description: "Academia da ASHU gratuita para associados e dependentes. Aparelhos modernos de musculação e aeróbico no campus do HU/UFSC.",
};

export default function AcademiaPage() {
  return (
    <main className="pt-20 pb-20 bg-ashu-cream min-h-screen">
      {/* Top Banner */}
      <section className="relative py-16 bg-ashu-green text-white border-b-4 border-ashu-red">
        <CrossPattern color="#FFFFFF" opacity={0.05} size={48} />
        <div data-reveal-stagger className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ashu-red rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-md">
            <ShieldCheck className="w-4 h-4" />
            <span>GRATUITA PARA ASSOCIADOS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Academia ASHU — Saúde & Performance
          </h1>

          <p className="text-base text-emerald-100/90 leading-relaxed font-medium">
            Estrutura completa com aparelhos de musculação, área de aeróbico e acompanhamento profissional de Educação Física.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16">
        <div data-reveal-stagger className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal-stagger className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-6">
              <div className="relative h-[420px] rounded-[24px] overflow-hidden border-2 border-ashu-green/20 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
                  alt="Academia ASHU HU UFSC"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                      Espaço Fitness Próprio
                    </span>
                    <h3 className="text-xl font-bold font-serif">
                      Equipamentos Modernos & Climatizado
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Pricing & Hours Card 1: Associados */}
              <div className="bg-white p-6 rounded-[24px] border-2 border-ashu-green shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-ashu-green-light text-ashu-green text-xs font-bold uppercase rounded-lg">
                    Associados ASHU
                  </span>
                  <span className="text-2xl font-black text-ashu-green uppercase">
                    100% Grátis
                  </span>
                </div>

                <h3 className="text-xl font-bold text-ink font-serif">
                  Acesso Completo Incluso na Mensalidade
                </h3>

                <div className="p-4 bg-ashu-cream rounded-xl text-xs text-ink space-y-2 border border-ashu-green/15">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-ashu-green" />
                    <span><strong>Horário de Funcionamento:</strong> 8h30 às 20h30</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-ashu-red" />
                    <span><strong>Presença do Professor:</strong> 14h30 às 20h30</span>
                  </div>
                </div>
              </div>

              {/* Pricing & Hours Card 2: Comunidade Externa */}
              <div className="bg-white p-6 rounded-[24px] border-2 border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold uppercase rounded-lg">
                    Comunidade (Não-Associados)
                  </span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-ashu-red tabular-nums">
                      R$ 90,00
                    </span>
                    <span className="text-[11px] text-gray-500 block">/ mês</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-ink font-serif">
                  Plano para a Comunidade Externa
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed">
                  Atendimento exclusivo das <strong>14h30 às 20h30</strong>, obrigatoriamente durante o período com presença do Professor de Educação Física.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/seja-associado"
                  className="w-full py-4 bg-ashu-red hover:bg-ashu-red-dark text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Filie-se para ter Academia Grátis</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
