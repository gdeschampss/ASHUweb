import React from "react";
import { Hero } from "@/components/home/Hero";
import { QuickLinksGrid } from "@/components/home/QuickLinksGrid";
import { BenefitsList } from "@/components/home/BenefitsList";
import { EventsCalendar } from "@/components/home/EventsCalendar";
import { StatCounter } from "@/components/ui/StatCounter";
import { ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Quick Links Grid */}
      <QuickLinksGrid />

      {/* 3. Stat Counter Section (45+ Anos GSAP Counter) */}
      <section className="py-16 bg-ashu-green text-white relative overflow-hidden border-y-4 border-ashu-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal-stagger className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-200 block mb-1">
              Tradição & Solidariedade
            </span>
            <h2 className="text-3xl font-bold font-serif">
              A força de quem cuida dos servidores do HU/UFSC
            </h2>
          </div>

          <div data-reveal-stagger="scale" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCounter
              endValue={45}
              suffix="+"
              label="Anos de História"
              sublabel="Fundada em Março de 1980"
            />
            <StatCounter
              endValue={1000}
              suffix="+"
              label="Associados Efetivos"
              sublabel="Servidores do HU/UFSC e EBSERH"
            />
            <StatCounter
              endValue={10}
              suffix="%"
              label="Desconto Restaurante"
              sublabel="No Restaurante A'ntenas"
            />
            <StatCounter
              endValue={100}
              suffix="%"
              label="Gratuidade Academia"
              sublabel="Aparelhos completos para membros"
            />
          </div>
        </div>
      </section>

      {/* 4. Benefits List */}
      <BenefitsList />

      {/* 5. Events Calendar */}
      <EventsCalendar />

      {/* 6. High-Conversion Red CTA Banner */}
      <section className="py-20 bg-ashu-red text-white relative overflow-hidden">
        <div data-reveal-stagger className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-white">
            <ShieldCheck className="w-4 h-4" />
            <span>Faça Parte da Nossa Comunidade</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif leading-tight">
            Valorize quem cuida de você. Seja um associado ASHU!
          </h2>

          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Apenas 1% do salário base para servidores efetivos e 2% para terceirizados. Acesso imediato a academia, restaurante, creche, planos de saúde e assessoria jurídica.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/seja-associado"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ashu-red hover:bg-ashu-cream text-sm font-bold uppercase tracking-wider rounded-xl shadow-xl transition-all hover:-translate-y-0.5"
            >
              <span>Quero Me Associar Agora</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/quem-somos"
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-black/10 text-white border-2 border-white text-sm font-bold rounded-xl transition-all"
            >
              Conhecer Nossa História
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
