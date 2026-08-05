import React from "react";
import { CrossPattern } from "@/components/ui/CrossPattern";
import { EVENTOS_DATA } from "@/data/eventos";
import { Calendar, MapPin, Sparkles, Trophy, Users, Heart } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Calendário de Eventos | ASHU HU/UFSC",
  description: "Confira a programação anual de festas, torneios esportivos e eventos de celebração da Associação dos Servidores do HU/UFSC.",
};

export default function EventosPage() {
  return (
    <main className="pt-28 pb-20 bg-[#F5EFE6] min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 bg-[#037533] text-white border-b-4 border-[#DD0B14]">
        <CrossPattern color="#FFFFFF" opacity={0.05} size={48} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-emerald-100">
            <Calendar className="w-4 h-4" />
            <span>Integração & Tradição</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-serif">
            Calendário Anual de Eventos
          </h1>

          <p className="text-base text-emerald-100/90 leading-relaxed">
            Momentos especiais de confraternização, lazer e celebração para servidores, familiares e comunidade.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENTOS_DATA.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-[24px] overflow-hidden border-2 border-[#037533]/15 shadow-md flex flex-col sm:flex-row hover:border-[#037533] transition-all"
              >
                <div className="relative h-56 sm:h-auto sm:w-1/2 overflow-hidden bg-gray-900 shrink-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute top-4 left-4 bg-white text-[#037533] p-3 rounded-2xl text-center shadow-lg min-w-[60px]">
                    <span className="text-xs font-bold uppercase block text-gray-500 leading-none">
                      {event.month}
                    </span>
                    <span className="text-2xl font-black block leading-tight">
                      {event.day}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="px-3 py-1 bg-[#E8F3EC] text-[#037533] text-[10px] font-bold uppercase rounded-lg">
                      {event.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#1A1D1B] font-serif mt-2 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#037533]/15 flex items-center gap-2 text-xs text-[#024E22] font-semibold">
                    <MapPin className="w-4 h-4 text-[#DD0B14] shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
