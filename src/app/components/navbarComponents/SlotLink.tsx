"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

interface SlotLinkProps {
  href: string;
  text: string;
  icon: React.ReactNode;
}

export default function SlotLink({ href, text, icon }: SlotLinkProps) {
  const pathname = usePathname();
  const lineHeight = 28; // Height of one line of text
  const rolls = 8; // Number of times to roll through
  const isActive = pathname === href;
  const [isAnimating, setIsAnimating] = useState(false);

  // get the right css classes based on the route the user is in
  const getLinkClass = (path: string) => {
    return pathname === path
      ? "text-white bg-accent-dark rounded-full p-3"
      : "text-black ";
  };

  // Don't animate if this is the active page
  if (isActive) {
    return (
      <Link href={href} className={getLinkClass(href)}>
        <span className="flex items-center gap-2">
          {icon}
          {text}
        </span>
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAnimating(true)}
      onMouseLeave={() => setIsAnimating(false)}
    >
      {/* Invisible clickable link always on top */}
      <Link
        href={href}
        className={`${getLinkClass(href)} relative z-10 opacity-0`}
      >
        <span className="flex items-center gap-2">
          {icon}
          {text}
        </span>
      </Link>

      {/* Animated background slot machine effect */}
      <div
        className="absolute top-0 overflow-hidden pointer-events-none"
        style={{
          height: lineHeight,
          lineHeight: `${lineHeight}px`,
          left: isAnimating ? "-12px" : "0", // Offset by padding amount (px-3 = 12px)
        }}
      >
        <motion.div
          animate={{
            y: isAnimating ? -(lineHeight * rolls) : 0,
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Create multiple copies for continuous rolling effect */}
          {[...Array(rolls + 1)].map((_, i) => (
            <div
              key={i}
              className={
                isAnimating
                  ? "text-center text-accent-dark rounded-full px-3 whitespace-nowrap relative overflow-hidden"
                  : "text-black whitespace-nowrap"
              }
              style={{ height: lineHeight, lineHeight: `${lineHeight}px` }}
            >
              {/* Animated background that slides in from left */}
              {isAnimating && (
                <motion.div
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                />
              )}
              <span className="flex items-center gap-2">
                {icon}
                {text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
