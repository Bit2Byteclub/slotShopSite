"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  // get the right css classes based on the route the user is in
  const getLinkClass = (path: string) => {
    return pathname === path
      ? "text-white bg-accent-dark rounded-full p-3 block"
      : "text-black block";
  };

  // Slot machine rolling component
  const SlotLink = ({ href, text }: { href: string; text: string }) => {
    const lineHeight = 28; // Height of one line of text
    const rolls = 8; // Number of times to roll through
    const isActive = pathname === href;
    const [isAnimating, setIsAnimating] = useState(false);

    // Don't animate if this is the active page
    if (isActive) {
      return (
        <Link href={href} className={getLinkClass(href)}>
          {text}
        </Link>
      );
    }

    return (
      <div
        className="inline-block relative"
        onMouseEnter={() => setIsAnimating(true)}
        onMouseLeave={() => setIsAnimating(false)}
      >
        {/* Invisible clickable link always on top */}
        <Link href={href} className={`relative z-10 opacity-0`}>
          {text}
        </Link>

        {/* Animated background slot machine effect */}
        <div
          className="absolute top-0 left-0 w-full overflow-hidden"
          style={{ height: lineHeight, lineHeight: `${lineHeight}px` }}
        >
          <motion.div
            className="text-center"
            animate={{ y: isAnimating ? -(lineHeight * rolls) : 0 }}
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
                  isAnimating ? "text-center text-primary" : getLinkClass(href)
                }
              >
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  };

  // actual navbar with custom tag component for the slot machine effect
  return (
    <nav className="flex justify-center">
      <div className="bg-white shadow-lg rounded-full py-1 px-5 max-w-7xl m-4 md:m-8 w-full lg:w-3/4">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="relative w-12 h-11">
            <Image src="/logo.png" alt="Company logo" fill />
          </div>

          {/* navagation links to subpages */}
          <div className="flex items-center gap-x-7">
            <SlotLink href="/" text="Home" />
            <SlotLink href="/slotMachines" text="Slot Machines" />
            <SlotLink href="/policy" text="Policy" />
            <SlotLink href="/contactUs" text="Contact Us" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
