"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Só anima em navegações client-side; o primeiro carregamento fica a cargo
// das animações de revelação, sem atrasar o LCP com um fade da página inteira.
let hasNavigated = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const [animateIn] = useState(() => hasNavigated);

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <motion.div
      initial={animateIn ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
