import React from "react";
import { CrossPattern } from "@/components/ui/CrossPattern";
import { Baby, ShieldCheck, Heart, BookOpen, Clock, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "CEI-ASHU | Centro de Educação Infantil",
  description: "Creche e centro de educação infantil da ASHU que atende filhos de servidores do HU/UFSC, EBSERH e comunidade com ensino humanizado e afetuoso.",
};

export default function CeiPage() {
  return (
    <main className="pt-28 pb-20 bg-[#F5EFE6] min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 bg-[#037533] text-white border-b-4 border-[#DD0B14]">
        <CrossPattern color="#FFFFFF" opacity={0.05} size={48} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-emerald-100">
              <Baby className="w-4 h-4" />
              <span>Educação Infantil Integrada</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif">
              CEI-ASHU — Centro de Educação Infantil
            </h1>
            <p className="text-base text-emerald-100/90 leading-relaxed">
              Desenvolvimento pedagógico, segurança e afeto para os filhos de servidores do HU/UFSC, EBSERH e comunidade de Florianópolis.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#037533] block">
                Proposta Pedagógica Humanizada
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#1A1D1B] font-serif leading-tight">
                Um lugar de acolhimento, aprendizado e brincadeira.
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                O CEI-ASHU é administrado com orgulho pela Associação dos Servidores do HU, oferecendo um espaço seguro, aconchegante e com corpo docente altamente qualificado. Atendemos crianças do berçário ao pré-escolar com alimentação balanceada e atividades lúdicas.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#037533]/15">
                  <CheckCircle2 className="w-5 h-5 text-[#037533] shrink-0" />
                  <span className="text-xs font-bold text-[#1A1D1B]">Vagas prioritárias com desconto para filhos de associados ASHU</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#037533]/15">
                  <CheckCircle2 className="w-5 h-5 text-[#037533] shrink-0" />
                  <span className="text-xs font-bold text-[#1A1D1B]">Atendimento extensivo aberto também à comunidade externa</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#037533]/15">
                  <CheckCircle2 className="w-5 h-5 text-[#037533] shrink-0" />
                  <span className="text-xs font-bold text-[#1A1D1B]">Alimentação nutritiva acompanhada por nutricionista especializada</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-96 rounded-[24px] overflow-hidden border-2 border-[#037533]/20 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80"
                  alt="Crianças no CEI ASHU"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 bg-white border-y border-[#037533]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[#037533] font-serif">
              Diferenciais do CEI-ASHU
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#F5EFE6] rounded-2xl border border-[#037533]/20 space-y-3">
              <div className="p-3 bg-[#037533] text-white rounded-xl w-fit">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#024E22] font-serif">
                Ensino Lúdico & Pedagógico
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Projetos alinhados à BNCC que estimulam a autonomia, a imaginação, o respeito ao próximo e a coordenação motora.
              </p>
            </div>

            <div className="p-6 bg-[#F5EFE6] rounded-2xl border border-[#037533]/20 space-y-3">
              <div className="p-3 bg-[#DD0B14] text-white rounded-xl w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1D1B] font-serif">
                Estrutura Segura & Adaptada
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Salas de aula climatizadas, parque infantil ao ar livre, fraldário completo e monitoramento para tranquilidade dos pais.
              </p>
            </div>

            <div className="p-6 bg-[#F5EFE6] rounded-2xl border border-[#037533]/20 space-y-3">
              <div className="p-3 bg-[#037533] text-white rounded-xl w-fit">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#024E22] font-serif">
                Afeto & Equipe Multidisciplinar
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Pedagogas experientes, auxiliares preparadas e suporte de saúde preventiva próximo ao Hospital Universitário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Matrículas */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold text-[#1A1D1B] font-serif">
            Interessado em matricular seu filho no CEI-ASHU?
          </h2>
          <p className="text-sm text-gray-600">
            Entre em contato com a secretaria do CEI para verificar turmas disponíveis, valores com desconto de associado e agendamento de visita presencial.
          </p>

          <Link
            href="/seja-associado"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#DD0B14] hover:bg-[#A80810] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-colors"
          >
            <span>Falar com a Secretaria do CEI</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
