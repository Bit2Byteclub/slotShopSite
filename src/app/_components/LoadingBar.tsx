"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// loading bar component that appears at the top during page transitions
export default function LoadingBar() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // uses setTimeout to batch state updates and avoid cascading renders
    const startTimer = setTimeout(() => setLoading(true), 0);
    const endTimer = setTimeout(() => setLoading(false), 300);
    
    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, [pathname]);

  return (
    // the animation
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 1, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 h-1 bg-primary z-100 origin-left"
        />
      )}
    </AnimatePresence>
  );
}
