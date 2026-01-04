"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
  width?: string;
  height?: string;
  padding?: string;
  bgColor?: string;
  rounded?: string;
  titleName?: string;
  descName?: string;
  hoverScale?: number;
  isHover?: boolean;
}

// reusable stat card component
function StatCardComponent({
  title,
  description,
  children,
  className = "",
  width = "w-68",
  height = "h-41",
  padding = "p-2",
  bgColor = "bg-white/60",
  rounded = "rounded-xl",
  titleName = "",
  descName = "",
  hoverScale = 1.1,
  isHover = true,
}: StatCardProps) {
  // base styles
  const baseClasses = `flex flex-col ${width} ${height} items-center justify-center gap-2 ${padding} ${bgColor} ${rounded} ${className}`;
  const shadowClass = isHover ? "shadow-sm" : "shadow-md";
  
  // card content
  const content = (
    <>
      {children}
      <p className={titleName}>{title}</p>
      <p className={`text-[#314158] text-center ${descName}`}>{description}</p>
    </>
  );

  // conditional hover effect
  if (!isHover) {
    return <div className={`${baseClasses} ${shadowClass}`}>{content}</div>;
  }

  return (
    <motion.div whileHover={{ scale: hoverScale }} className={`${baseClasses} ${shadowClass}`}>
      {content}
    </motion.div>
  );
}

const StatCard = memo(StatCardComponent);

export default StatCard;
