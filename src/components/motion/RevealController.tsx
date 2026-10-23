"use client";

import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

type RevealVariant = "up" | "fade" | "left" | "right" | "scale";

const FROM: Record<RevealVariant, gsap.TweenVars> = {
  up: { y: 32 },
  fade: {},
  left: { x: -40 },
  right: { x: 40 },
  scale: { scale: 0.94 },
};

const variantOf = (value: string | undefined): RevealVariant =>
  value && value in FROM ? (value as RevealVariant) : "up";

/**
 * Animações de entrada no scroll, declaradas no markup:
 *
 *   <div data-reveal>                 → o próprio elemento entra
 *   <div data-reveal-stagger>         → os filhos diretos entram em cascata
 *   data-reveal="left|right|fade|scale"  variante (vale também para -stagger)
 *   data-reveal-delay="0.2"           atraso em segundos
 *
 * O estado inicial (opacity: 0) vem do CSS em globals.css, então não há
 * "piscada" antes da hidratação. Re-executa a cada troca de rota.
 */
export const RevealController: React.FC = () => {
  const pathname = usePathname();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const reveal = (targets: HTMLElement[], trigger: HTMLElement, variant: RevealVariant) => {
          if (!targets.length) return;

          // transition-all do Tailwind brigaria com o tween frame a frame
          targets.forEach((t) => (t.style.transition = "none"));

          gsap.fromTo(
            targets,
            { autoAlpha: 0, ...FROM[variant] },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.09,
              delay: Number(trigger.dataset.revealDelay ?? 0),
              clearProps: "transform,visibility",
              scrollTrigger: { trigger, start: "top 88%", once: true },
              onComplete: () => targets.forEach((t) => t.style.removeProperty("transition")),
            }
          );
        };

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          reveal([el], el, variantOf(el.dataset.reveal));
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((el) => {
          const children = Array.from(el.children).filter(
            (c): c is HTMLElement => c instanceof HTMLElement && !c.hasAttribute("data-reveal-stagger")
          );
          reveal(children, el, variantOf(el.dataset.revealStagger));
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    },
    { dependencies: [pathname], revertOnUpdate: true }
  );

  return null;
};
