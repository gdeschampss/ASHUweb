"use client";

import { MotionConfig } from "framer-motion";

// Respeita "reduzir movimento" do sistema em todas as animações do Framer Motion.
export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);
