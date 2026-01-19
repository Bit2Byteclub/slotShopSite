"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { GiBranchArrow } from "react-icons/gi";

interface TagProps {
  title: string;
  icon?: ReactNode;
  bgColor?: string;
  textColor?: string;
  size?: string;
  rounded?: string;
  className?: string;
  shimmer?: boolean;
}

// reusable tag component
function TagComponent({
  title,
  icon = <GiBranchArrow />,
  bgColor = "",
  textColor = "text-gray-900",
  size = "w-30 h-10",
  rounded = "rounded-2xl",
  className = "",
  shimmer = false,
}: TagProps) {
  return (
    <div
      className={`flex items-center justify-center gap-1 ${size} ${rounded} ${bgColor} ${className} relative overflow-hidden`}
    >
      {/* shimmer styling effect */}
      {shimmer && (
        <motion.div
          className="absolute top-0 left-0 h-full w-full bg-linear-to-r from-transparent via-[#FFFFFF]/60 to-transparent pointer-events-none z-10"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
      )}
      {icon}
      
      {/* title */}
      <span
        className={`text-sm text-center ${textColor} relative block overflow-hidden`}
      >
        {title}
      </span>
    </div>
  );
}

const Tag = memo(TagComponent);

export default Tag;
