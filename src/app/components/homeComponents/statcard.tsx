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

function StatCard({
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
  if (isHover === false) {
    return (
      <div
        className={`flex flex-col ${width} ${height} items-center justify-center gap-2 ${padding} ${bgColor} ${rounded} shadow-md ${className}`}
      >
        {children}
        <p className={`${titleName}`}>{title}</p>
        <p className={`text-[#314158] text-center ${descName}`}>
          {description}
        </p>
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      className={`flex flex-col ${width} ${height} items-center justify-center gap-2 ${padding} ${bgColor} ${rounded} shadow-sm ${className}`}
    >
      {children}
      <p className={`${titleName}`}>{title}</p>
      <p className={`text-[#314158] text-center ${descName}`}>{description}</p>
    </motion.div>
  );
}

export default StatCard;
