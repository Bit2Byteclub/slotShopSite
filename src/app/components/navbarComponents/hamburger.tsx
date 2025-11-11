"use client";

import Hamburger from "hamburger-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface HamburgerComponentProps {
  links: {
    href: string;
    text: string;
    icon: React.ReactNode;
  }[];
}

export default function HamburgerComponent({ links }: HamburgerComponentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // helper function to get the correct class depending on if the current path is active
  const getLinkClass = (path: string) => {
    return pathname === path
      ? "text-white bg-accent-dark rounded-full m-1 p-3 flex items-center gap-3"
      : "text-black flex items-center gap-3 hover:bg-accent-dark p-3 m-1 hover:text-white rounded-full transition-colors";
  };

  return (
    <div className="md:hidden">
      {/* Hamburger button that is only visible on mobile */}
      <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} color="black" />

      {/* Dropdown menu */}
      {/* animate presence is for slide animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 right-0 bg-white mt-3 shadow-lg rounded-3xl overflow-hidden"
          >
            <nav className="flex flex-col">
              {/* Map each hamburger link to its respective class */}
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
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
