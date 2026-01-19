import React from "react";
import Image from "next/image";
import SlotLink from "./SlotLink";
import HamburgerComponent from "./hamburger";
import { IoMdHome } from "react-icons/io";
import { MdPolicy } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { GiTwoCoins } from "react-icons/gi";
import type { Route } from "next";

// navbar navigation options and icons
const links = [
  { href: "/" as Route, text: "Home", icon: <IoMdHome /> },
  { href: "/slot-machines" as Route, text: "Slot Machines", icon: <GiTwoCoins /> },
  { href: "/about" as Route, text: "About", icon: <MdPolicy /> },
  { href: "/contact-us" as Route, text: "Contact", icon: <IoIosContacts /> },
];

// main navbar component
const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="bg-white py-1.5 px-5 max-w-7xl mx-auto my-2 md:my-4 rounded-full w-full relative shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
        <div className="flex justify-between items-center">

          {/* logo and company name */}
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden">
              <Image src="/logos/logo.png" alt="Company logo" fill className="object-cover" />
            </div>
            <span className="font-semibold text-sm md:text-base lg:text-lg text-[#0F172B]">
              Used Slot Shop
            </span>
          </div>

          {/* desktop navigation */}
          <div className="hidden md:flex items-center gap-x-3">
            {links.map((link) => (
              <SlotLink key={link.href} {...link} />
            ))}
          </div>

          {/* mobile navigation */}
          <HamburgerComponent links={links} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
