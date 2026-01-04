"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Route } from "next";

interface SlotLinkProps {
  href: Route;
  text: string;
  icon: React.ReactNode;
}

// link component for navbar
export default function SlotLink({ href, text, icon }: SlotLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const linkContent = (
    <span className="flex items-center gap-2">
      {icon}
      {text}
    </span>
  );

  const handleClick = (e: React.MouseEvent) => {
    if (isActive) {
      e.preventDefault();
    }
  };

  // base, active, and inactive link styles
  const baseClasses = "rounded-full p-3 transition-colors duration-200";
  const activeClasses = "text-white bg-black shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] cursor-default";
  const inactiveClasses = "text-[#45556C] hover:text-white hover:bg-black";

  if (isActive) {
    return <span className={`${baseClasses} ${activeClasses}`}>{linkContent}</span>;
  }

  return (
    <Link href={href} prefetch={true} onClick={handleClick} className={`${baseClasses} ${inactiveClasses}`}>
      {linkContent}
    </Link>
  );
}
