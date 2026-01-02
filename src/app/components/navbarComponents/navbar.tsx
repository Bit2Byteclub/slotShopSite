import React from "react";
import Image from "next/image";
import SlotLink from "./SlotLink";
import HamburgerComponent from "./hamburger";
import { IoMdHome } from "react-icons/io";
import { MdPolicy } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { GiTwoCoins } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";

const links = [
  { href: "/", text: "Home", icon: <IoMdHome /> },
  { href: "/slotMachines", text: "Slot Machines", icon: <GiTwoCoins /> },
  { href: "/policy", text: "Policy", icon: <MdPolicy /> },
  { href: "/contactUs", text: "Contact Us", icon: <IoIosContacts /> },
  { href: "/search", text: "", icon: <IoIosSearch /> },
];

const Navbar: React.FC = () => {
  // actual navbar with custom tag component for the slot machine effect
  return (
    <nav className="flex justify-center">
      <div className="bg-white shadow-lg py-1 px-5 max-w-7xl m-4 rounded-full md:m-8 w-full lg:w-3/4 relative">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="relative w-12 h-11">
            <Image src="/logo.png" alt="Company logo" fill />
          </div>

          {/* Desktop navigation links - HIDDEN on mobile, VISIBLE on md+ */}
          <div className="hidden md:flex items-center gap-x-7">
            {links.map((link) => (
              <SlotLink
                key={link.href}
                href={link.href}
                text={link.text}
                icon={link.icon}
              />
            ))}
          </div>

          {/* Mobile hamburger menu - VISIBLE on mobile, HIDDEN on md+ */}
          <HamburgerComponent links={links} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
