"use client";

import Hamburger from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { Route } from "next";

interface HamburgerComponentProps {
  links: {
    href: Route;
    text: string;
    icon: React.ReactNode;
  }[];
}

// hamburger menu for mobile navigation
export default function HamburgerComponent({ links }: HamburgerComponentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // use active state to determine link styling
  const getLinkClass = (path: Route) => {
    const baseClasses = "flex items-center gap-3 rounded-full m-1 p-3 transition-colors";
    const activeClasses = "text-white bg-accent-dark";
    const inactiveClasses = "text-black hover:bg-accent-dark hover:text-white";
    
    return pathname === path 
      ? `${baseClasses} ${activeClasses}` 
      : `${baseClasses} ${inactiveClasses}`;
  };

  return (
    <div className="md:hidden">
      {/* hamburger button only visible on mobile */}
      <div aria-label="Toggle navigation menu">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} color="black" />
      </div>

      {/* dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          // dropdown animation
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 right-0 bg-white mt-3 shadow-lg rounded-3xl overflow-hidden"
          >
            <nav className="flex flex-col">
              {/* map each hamburger link to its respective class */}
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  className={getLinkClass(link.href)}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span>{link.text}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
