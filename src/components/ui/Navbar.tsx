"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Menu, X, ChevronRight, UserPlus, PhoneCall, Calendar, HeartHandshake } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/seja-associado", label: "Seja Associado", badge: "Ação" },
  { href: "/cei", label: "CEI-ASHU" },
  { href: "/restaurante", label: "Restaurante" },
  { href: "/academia", label: "Academia" },
  { href: "/eventos", label: "Eventos" },
  { href: "/governanca", label: "Governança" },
  { href: "/salao-de-festas", label: "Salão de Festas" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F5EFE6]/95 backdrop-blur-md shadow-md py-2 border-b border-[#037533]/15"
            : "bg-[#F5EFE6] py-3.5 border-b border-[#037533]/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo size={isScrolled ? "sm" : "md"} />

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1.5 bg-white/80 px-4 py-1.5 rounded-full border border-[#037533]/15 shadow-xs">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-[#037533] text-white shadow-xs"
                        : "text-[#024E22] hover:bg-[#E8F3EC] hover:text-[#037533]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/seja-associado"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#DD0B14] hover:bg-[#A80810] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <UserPlus className="w-4 h-4" />
                <span>Seja Associado</span>
              </Link>
            </div>

            {/* Mobile Menu Button (Min 44px touch target) */}
            <div className="flex items-center xl:hidden gap-2">
              <Link
                href="/seja-associado"
                className="hidden sm:inline-flex items-center justify-center px-3.5 py-2 bg-[#DD0B14] text-white text-xs font-bold rounded-lg shadow-xs"
              >
                Associar
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Abrir Menu"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white border border-[#037533]/20 text-[#037533] hover:bg-[#E8F3EC] focus:outline-none transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 xl:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#F5EFE6] z-50 shadow-2xl flex flex-col xl:hidden border-l border-[#037533]/20 overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-[#037533]/15 flex items-center justify-between bg-white">
                <Logo size="sm" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-[#E8F3EC] text-[#037533] hover:bg-[#037533] hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="p-5 flex-1 space-y-1.5">
                <span className="text-[11px] font-bold text-[#037533] uppercase tracking-wider px-3 mb-2 block">
                  Navegação Principal
                </span>
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between min-h-[48px] px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                        isActive
                          ? "bg-[#037533] text-white font-semibold shadow-xs"
                          : "text-[#1A1D1B] bg-white hover:bg-[#E8F3EC] hover:text-[#037533] border border-[#037533]/10"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight
                        className={`w-4 h-4 ${isActive ? "text-white" : "text-[#037533]/50"}`}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Drawer Footer CTA */}
              <div className="p-5 bg-white border-t border-[#037533]/15 space-y-3">
                <Link
                  href="/seja-associado"
                  className="w-full min-h-[48px] flex items-center justify-center gap-2 px-5 py-3 bg-[#DD0B14] hover:bg-[#A80810] text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-md transition-colors"
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Quero me associar agora</span>
                </Link>
                <div className="text-center">
                  <p className="text-xs text-[#024E22] font-medium">
                    Servidores HU/UFSC e EBSERH
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
