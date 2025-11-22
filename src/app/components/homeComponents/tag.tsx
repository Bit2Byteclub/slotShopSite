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
}

function Tag({
  title,
  icon,
  bgColor = "",
  textColor = "text-gray-900",
  size = "w-30 h-10",
  rounded = "rounded-2xl",
  className = "",
}: TagProps) {
  return (
    <div
      className={`w-fit flex items-center gap-1 ${size} ${rounded} ${bgColor} ${className}`}
    >
      {icon}
      <motion.p className={`text-sm ${textColor}`}>{title}</motion.p>
    </div>
  );
}

export default Tag;
