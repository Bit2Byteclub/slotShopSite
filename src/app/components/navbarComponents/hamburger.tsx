"use client";

import Hamburger from "hamburger-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { MdPolicy } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { GiTwoCoins } from "react-icons/gi";

export default function HamburgerComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", text: "Home", icon: <IoMdHome /> },
    { href: "/slotMachines", text: "Slot Machines", icon: <GiTwoCoins /> },
    { href: "/policy", text: "Policy", icon: <MdPolicy /> },
    { href: "/contactUs", text: "Contact Us", icon: <IoIosContacts /> },
  ];

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "text-white bg-accent-dark rounded-full m-1 p-3 flex items-center gap-3"
      : "text-black flex items-center gap-3 hover:bg-accent-dark p-3 m-1 hover:text-white rounded-full transition-colors";
  };

  return (
    <div className="md:hidden">
      {/* Hamburger button - only visible on mobile */}
      <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} color="black" />

      {/* Dropdown menu - only visible on mobile when open */}
      {isOpen && (
        <div className="absolute left-0 right-0 bg-white mt-3 shadow-lg rounded-3xl">
          <nav className="flex flex-col ">
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
        </div>
      )}
    </div>
  );
}
