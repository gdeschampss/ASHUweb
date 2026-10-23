import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { CrossPattern } from "./CrossPattern";
import { MapPin, Phone, Mail, Clock, Instagram, ShieldCheck, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-ashu-green-dark text-white pt-16 pb-12 overflow-hidden border-t-4 border-ashu-red">
      {/* Background cross pattern */}
      <CrossPattern color="#FFFFFF" opacity={0.03} size={60} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-800/60">
          {/* Brand Info */}
          <div className="space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-emerald-100/80 text-xs leading-relaxed">
              Associação dos Servidores do Hospital Universitário Professor Polydoro Ernani de São Thiago (HU/UFSC & EBSERH).
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ashu-green rounded-lg border border-emerald-600 text-xs font-semibold text-emerald-100">
              <ShieldCheck className="w-4 h-4 text-ashu-cream" />
              <span>Fundada em Março de 1980 (45+ Anos)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-200 border-b border-emerald-800/80 pb-2">
              Acesso Rápido
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/90 font-medium">
              <li>
                <Link href="/quem-somos" className="hover:text-white transition-colors hover:underline">
                  Nossa História e Valores
                </Link>
              </li>
              <li>
                <Link href="/seja-associado" className="hover:text-white transition-colors hover:underline">
                  Como se Associar (Formulário)
                </Link>
              </li>
              <li>
                <Link href="/cei" className="hover:text-white transition-colors hover:underline">
                  CEI-ASHU (Creche Infantil)
                </Link>
              </li>
              <li>
                <Link href="/restaurante" className="hover:text-white transition-colors hover:underline">
                  Restaurante A&apos;ntenas (10% OFF)
                </Link>
              </li>
              <li>
                <Link href="/academia" className="hover:text-white transition-colors hover:underline">
                  Academia Gratuita
                </Link>
              </li>
              <li>
                <Link href="/governanca" className="hover:text-white transition-colors hover:underline">
                  Governança e Transparência
                </Link>
              </li>
            </ul>
          </div>

          {/* Horários & Atendimento */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-200 border-b border-emerald-800/80 pb-2">
              Horários de Atendimento
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/90">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-ashu-red shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-white">Secretaria ASHU:</span>
                  <span>Segunda a Sexta, 8h00 às 17h00</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-ashu-red shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-white">Academia:</span>
                  <span>8h30 às 20h30 (Prof. das 14h30 às 20h30)</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-ashu-red shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-white">Restaurante:</span>
                  <span>11h00 às 14h30</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contato & Localização */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-200 border-b border-emerald-800/80 pb-2">
              Localização & Contato
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-ashu-red shrink-0 mt-0.5" />
                <span>R. Maria Flora Pausewang, s/n - Trindade, Florianópolis - SC, 88036-800 (Anexo ao HU/UFSC)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-emerald-300 shrink-0" />
                <a
                  href="https://www.instagram.com/gremiodohu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors hover:underline text-emerald-200"
                >
                  @gremiodohu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/80 font-medium">
          <p>© {new Date().getFullYear()} ASHU — Associação dos Servidores do HU/UFSC. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Promovendo qualidade de vida desde 1980</span>
            <Heart className="w-3.5 h-3.5 text-ashu-red fill-ashu-red" />
          </div>
        </div>
      </div>
    </footer>
  );
};
