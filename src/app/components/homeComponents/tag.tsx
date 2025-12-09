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

function Tag({
  title,
  icon,
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
      {shimmer && (
        <motion.div
          className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-[#FFFFFF]/60 to-transparent pointer-events-none z-10"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
        />
      )}
      {icon}
      <span
        className={`text-sm text-center ${textColor} relative block overflow-hidden`}
      >
        {title}
      </span>
    </div>
  );
}

export default Tag;
