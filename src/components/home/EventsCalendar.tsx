"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { EVENTOS_DATA } from "@/data/eventos";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export const EventsCalendar: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-[#037533]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8F3EC] text-[#037533] text-xs font-bold uppercase rounded-full mb-2">
              <Calendar className="w-4 h-4" />
              <span>Integração & Cultura</span>
            </div>
            <h2 className="text-3xl font-bold text-[#1A1D1B] font-serif">
              Próximos Eventos da ASHU
            </h2>
          </div>
          <Link
            href="/eventos"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#037533] hover:text-[#024E22] mt-4 md:mt-0"
          >
            <span>Ver Calendário Completo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENTOS_DATA.map((event) => (
            <div
              key={event.id}
              className="group bg-[#F5EFE6] rounded-2xl overflow-hidden border border-[#037533]/15 hover:border-[#037533] transition-all flex flex-col justify-between hover:shadow-md"
            >
              <div className="relative h-44 w-full overflow-hidden bg-gray-900">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute top-3 left-3 bg-white text-[#037533] p-2 rounded-xl text-center shadow-md min-w-[50px]">
                  <span className="text-[10px] font-bold uppercase block text-gray-500 leading-none">
                    {event.month}
                  </span>
                  <span className="text-xl font-black block leading-tight">
                    {event.day}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-[#1A1D1B] font-serif leading-snug group-hover:text-[#037533] transition-colors mb-2">
                    {event.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#037533]/10 flex items-center gap-2 text-[11px] text-[#024E22] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#DD0B14] shrink-0" />
                  <span className="truncate">{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
