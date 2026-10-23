"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import {
  Baby,
  Building,
  ChevronDown,
  ChevronRight,
  Dumbbell,
  Menu,
  UserPlus,
  Utensils,
  X,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "./Logo";
import { lockScroll, unlockScroll } from "@/lib/scroll";

interface NavLink {
  href: string;
  label: string;
}

interface StructureLink extends NavLink {
  description: string;
  icon: LucideIcon;
}

const STRUCTURE_LINKS: StructureLink[] = [
  { href: "/cei", label: "CEI-ASHU", description: "Creche e Educação Infantil", icon: Baby },
  { href: "/restaurante", label: "Restaurante", description: "A'ntenas com 10% OFF", icon: Utensils },
  { href: "/academia", label: "Academia", description: "Gratuita para Associados", icon: Dumbbell },
  { href: "/salao-de-festas", label: "Salão de Festas", description: "Espaço de Confraternização", icon: Building },
];

// Desktop: poucos itens + "Estrutura" agrupando os espaços físicos. "Home" fica no logo
// e "Seja Associado" no botão de destaque.
const DESKTOP_BEFORE: NavLink[] = [{ href: "/quem-somos", label: "Quem Somos" }];
const DESKTOP_AFTER: NavLink[] = [
  { href: "/eventos", label: "Eventos" },
  { href: "/governanca", label: "Governança" },
];

const MOBILE_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/seja-associado", label: "Seja Associado" },
  ...STRUCTURE_LINKS,
  ...DESKTOP_AFTER,
];

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const PILL_SPRING = { type: "spring", stiffness: 500, damping: 38 } as const;

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  // Compacta ao rolar; esconde ao descer e reaparece ao subir
  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(y > 20);
    if (Math.abs(y - previous) > 4) setHideOnScroll(y > previous && y > 200);
  });

  useEffect(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  // Fecha menus ao trocar de página
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Drawer mobile: trava o scroll e fecha com Esc
  useEffect(() => {
    if (!isOpen) return;
    lockScroll();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      unlockScroll();
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  // Dropdown: fecha com Esc ou clique fora
  useEffect(() => {
    if (!dropdownOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDropdownOpen(false);
    const onPointer = (e: PointerEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setDropdownOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [dropdownOpen]);

  const openDropdown = useCallback(() => {
    clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  }, []);

  const scheduleCloseDropdown = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 140);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const structureActive = STRUCTURE_LINKS.some((link) => isActive(link.href));
  const isHidden = hideOnScroll && !isOpen && !dropdownOpen;

  const renderDesktopLink = (link: NavLink) => {
    const active = isActive(link.href);
    return (
      <Link
        key={link.href}
        href={link.href}
        aria-current={active ? "page" : undefined}
        onMouseEnter={() => setHovered(link.href)}
        onFocus={() => setHovered(link.href)}
        className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
          active ? "text-ashu-green" : "text-ink/80 hover:text-ashu-green"
        }`}
      >
        <NavPill show={hovered === link.href} />
        <span className="relative">{link.label}</span>
        <ActiveDot show={active} />
      </Link>
    );
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: isHidden ? "-100%" : "0%" }}
        transition={{ duration: 0.4, ease: EASE_OUT }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
          isScrolled
            ? "bg-ashu-cream/85 backdrop-blur-md border-ashu-green/15 shadow-[0_10px_30px_-18px_rgba(2,78,34,0.45)]"
            : "bg-ashu-cream border-ashu-green/10"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 transition-[height] duration-300 ease-out-expo ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          <Logo size={isScrolled ? "sm" : "md"} taglineClassName="lg:hidden xl:block" priority />

          {/* Desktop Navigation */}
          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-1"
            onMouseLeave={() => setHovered(null)}
          >
            {DESKTOP_BEFORE.map(renderDesktopLink)}

            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleCloseDropdown}
            >
              <button
                type="button"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                aria-controls="nav-estrutura"
                onClick={() => setDropdownOpen((open) => !open)}
                onMouseEnter={() => setHovered("estrutura")}
                onFocus={() => setHovered("estrutura")}
                className={`relative flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                  structureActive || dropdownOpen ? "text-ashu-green" : "text-ink/80 hover:text-ashu-green"
                }`}
              >
                <NavPill show={hovered === "estrutura" || (dropdownOpen && !hovered)} />
                <span className="relative">Estrutura</span>
                <ChevronDown
                  className={`relative w-4 h-4 transition-transform duration-300 ease-out-expo ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
                <ActiveDot show={structureActive} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    id="nav-estrutura"
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.28, ease: EASE_OUT }}
                    style={{ transformOrigin: "top center" }}
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                  >
                    <ul className="grid w-[480px] grid-cols-2 gap-1 rounded-2xl border border-ashu-green/15 bg-white p-2 shadow-[0_24px_60px_-20px_rgba(2,78,34,0.35)]">
                      {STRUCTURE_LINKS.map((link, idx) => {
                        const Icon = link.icon;
                        const active = isActive(link.href);
                        return (
                          <motion.li
                            key={link.href}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.04 * idx, duration: 0.25, ease: EASE_OUT }}
                          >
                            <Link
                              href={link.href}
                              aria-current={active ? "page" : undefined}
                              className={`group flex items-start gap-3 rounded-xl p-3 transition-colors ${
                                active ? "bg-ashu-green-light" : "hover:bg-ashu-cream"
                              }`}
                            >
                              <span
                                className={`shrink-0 rounded-lg p-2 transition-colors ${
                                  active
                                    ? "bg-ashu-green text-white"
                                    : "bg-ashu-green-light text-ashu-green group-hover:bg-ashu-green group-hover:text-white"
                                }`}
                              >
                                <Icon className="w-4 h-4" />
                              </span>
                              <span>
                                <span className="block text-sm font-bold text-ink group-hover:text-ashu-green transition-colors">
                                  {link.label}
                                </span>
                                <span className="block text-xs text-ashu-green-dark/70 mt-0.5">
                                  {link.description}
                                </span>
                              </span>
                            </Link>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {DESKTOP_AFTER.map(renderDesktopLink)}
          </nav>

          {/* CTA Desktop */}
          <Link
            href="/seja-associado"
            className="group hidden lg:inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-ashu-red hover:bg-ashu-red-dark text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md transition-[background-color,box-shadow,translate] duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <UserPlus className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            <span>Seja Associado</span>
          </Link>

          {/* Mobile Menu Button (Min 44px touch target) */}
          <div className="flex items-center lg:hidden gap-2">
            <Link
              href="/seja-associado"
              className="hidden sm:inline-flex items-center justify-center px-3.5 py-2 bg-ashu-red text-white text-xs font-bold rounded-lg shadow-xs"
            >
              Associar
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-drawer"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white border border-ashu-green/20 text-ashu-green hover:bg-ashu-green-light transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scroll progress */}
        <motion.div
          aria-hidden
          style={{ scaleX: progress }}
          className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-ashu-red"
        />
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs z-[60] lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              data-lenis-prevent
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-ashu-cream z-[60] shadow-2xl flex flex-col lg:hidden border-l border-ashu-green/20 overflow-y-auto overscroll-contain"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-ashu-green/15 flex items-center justify-between bg-white">
                <Logo size="sm" />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Fechar menu"
                  autoFocus
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-ashu-green-light text-ashu-green hover:bg-ashu-green hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <motion.nav
                aria-label="Navegação principal"
                className="p-5 flex-1 space-y-1.5"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.035, delayChildren: 0.12 } } }}
              >
                <span className="text-[11px] font-bold text-ashu-green uppercase tracking-wider px-3 mb-2 block">
                  Navegação Principal
                </span>
                {MOBILE_LINKS.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      variants={{
                        hidden: { opacity: 0, x: 24 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE_OUT } },
                      }}
                    >
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between min-h-[48px] px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                          active
                            ? "bg-ashu-green text-white font-semibold shadow-xs"
                            : "text-ink bg-white hover:bg-ashu-green-light hover:text-ashu-green border border-ashu-green/10"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className={`w-4 h-4 ${active ? "text-white" : "text-ashu-green/50"}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              {/* Drawer Footer CTA */}
              <div className="p-5 bg-white border-t border-ashu-green/15 space-y-3">
                <Link
                  href="/seja-associado"
                  className="w-full min-h-[48px] flex items-center justify-center gap-2 px-5 py-3 bg-ashu-red hover:bg-ashu-red-dark text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-md transition-colors"
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Quero me associar agora</span>
                </Link>
                <p className="text-center text-xs text-ashu-green-dark font-medium">
                  Servidores HU/UFSC e EBSERH
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// Fundo que "desliza" entre os itens sob o cursor
const NavPill: React.FC<{ show: boolean }> = ({ show }) =>
  show ? (
    <motion.span
      layoutId="nav-hover-pill"
      transition={PILL_SPRING}
      className="absolute inset-0 rounded-full bg-ashu-green-light"
    />
  ) : null;

// Indicador da página atual
const ActiveDot: React.FC<{ show: boolean }> = ({ show }) =>
  show ? (
    <motion.span
      layoutId="nav-active-dot"
      transition={PILL_SPRING}
      className="absolute bottom-0.5 left-1/2 h-1 w-4 -translate-x-1/2 rounded-full bg-ashu-red"
    />
  ) : null;
