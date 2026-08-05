import React from "react";
import { CrossPattern } from "@/components/ui/CrossPattern";
import { Utensils, Percent, Clock, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Restaurante A'ntenas | ASHU HU/UFSC",
  description: "A'ntenas Restaurante do Grêmio do HU. 10% de desconto para associados da ASHU. Buffet livre e por quilo no campus da UFSC.",
};

export default function RestaurantePage() {
  return (
    <main className="pt-28 pb-20 bg-[#F5EFE6] min-h-screen">
      {/* Top Banner */}
      <section className="relative py-16 bg-[#037533] text-white border-b-4 border-[#DD0B14]">
        <CrossPattern color="#FFFFFF" opacity={0.05} size={48} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#DD0B14] rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-md">
            <Percent className="w-4 h-4" />
            <span>10% DE DESCONTO PARA ASSOCIADOS E DEPENDENTES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            A&apos;ntenas — Restaurante do Grêmio do HU
          </h1>

          <p className="text-base text-emerald-100/90 leading-relaxed font-medium">
            Alimentação saudável, buffet variado e o melhor custo-benefício da região universitária.
          </p>
        </div>
      </section>

      {/* Pricing Tables Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Pricing Cards */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-4 bg-white rounded-2xl border-l-4 border-[#DD0B14] shadow-2xs">
                <span className="text-xs font-bold text-[#037533] uppercase block">
                  Tabela Oficial de Preços
                </span>
                <p className="text-sm font-serif italic text-gray-700 mt-1">
                  &ldquo;Um dos melhores custos-benefícios da região.&rdquo;
                </p>
              </div>

              {/* Pricing Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Buffet Livre */}
                <div className="bg-white p-6 rounded-[20px] border-2 border-[#037533] shadow-md flex flex-col justify-between">
                  <div>
                    <span className="px-2.5 py-1 bg-[#E8F3EC] text-[#037533] text-[10px] font-bold uppercase rounded-md">
                      Modalidade Popular
                    </span>
                    <h3 className="text-xl font-bold text-[#1A1D1B] font-serif mt-3 mb-1">
                      Buffet Livre
                    </h3>
                    <p className="text-xs text-gray-500 mb-4">
                      Coma à vontade incluindo saladas, pratos quentes e sobremesa.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#037533]/15">
                    <span className="text-3xl font-black text-[#037533] tabular-nums">
                      R$ 37,90
                    </span>
                    <span className="text-xs text-gray-500 block mt-0.5">
                      (-10% p/ associados)
                    </span>
                  </div>
                </div>

                {/* Buffet por Quilo */}
                <div className="bg-white p-6 rounded-[20px] border-2 border-gray-200 shadow-md flex flex-col justify-between">
                  <div>
                    <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-[10px] font-bold uppercase rounded-md">
                      Por Peso
                    </span>
                    <h3 className="text-xl font-bold text-[#1A1D1B] font-serif mt-3 mb-1">
                      Buffet por Quilo
                    </h3>
                    <p className="text-xs text-gray-500 mb-4">
                      Monte seu prato com precisão e aproveite a variedade diária.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-3xl font-black text-[#DD0B14] tabular-nums">
                      R$ 55,90
                    </span>
                    <span className="text-xs text-gray-500 block mt-0.5">
                      / kg (-10% p/ associados)
                    </span>
                  </div>
                </div>
              </div>

              {/* Information Bullets */}
              <div className="bg-white p-6 rounded-[20px] border border-[#037533]/15 space-y-3 text-xs text-[#1A1D1B]">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#037533] shrink-0" />
                  <span><strong>Horário de Funcionamento:</strong> Segunda a Sexta, das 11h00 às 14h30</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#DD0B14] shrink-0" />
                  <span><strong>Localização:</strong> Anexo à sede da ASHU no campus do HU/UFSC</span>
                </div>
              </div>
            </div>

            {/* Restaurant Image */}
            <div className="lg:col-span-6">
              <div className="relative h-[420px] rounded-[24px] overflow-hidden border-2 border-[#037533]/20 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                  alt="Restaurante A'ntenas HU UFSC"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                      Gastronomia Universitária
                    </span>
                    <h3 className="text-xl font-bold font-serif">
                      Qualidade e Sabor Todos os Dias
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
