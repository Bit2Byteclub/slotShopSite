import type { ReactNode } from "react";

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
  size = "w-[119px] h-[38px]",
  rounded = "rounded-2xl",
  className = "",
}: TagProps) {
  return (
    <div
      className={`w-fit flex items-center gap-1 ${size} ${rounded} ${bgColor} ${className}`}
    >
      {icon}
      <p className={`text-sm ${textColor}`}>{title}</p>
    </div>
  );
}

export default Tag;
