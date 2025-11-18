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
}

function StatCard({
  title,
  description,
  children,
  className = "",
  width = "w-[270px]",
  height = "h-[162px]",
  padding = "p-2",
  bgColor = "bg-white/60",
  rounded = "rounded-xl",
  titleName = "",
  descName = "",
}: StatCardProps) {
  return (
    <div
      className={`flex flex-col ${width} ${height} items-center justify-center gap-2 ${padding} ${bgColor} ${rounded} shadow-sm ${className}`}
    >
      {children}
      <p className={`text-gray-900 ${titleName}`}>{title}</p>
      <p className={`text-gray-600 text-center ${descName}`}>{description}</p>
    </div>
  );
}

export default StatCard;
