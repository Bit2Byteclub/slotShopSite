"use client";

import Image from "next/image";

interface IconProps {
  icon: string;
  bgColor?: string;
  size?: string;
  iconSize?: string;
  rounded?: string;
  className?: string;
  shadow?: boolean;
}

// tailwind size class to pixel mapping
const sizeMap: Record<string, number> = {
  'w-4': 16,
  'w-5': 20,
  'w-6': 24,
  'w-8': 32,
  'w-10': 40,
  'w-12': 48,
  'w-16': 64,
};

// reusable icon component
function Icon({
  icon,
  bgColor = "bg-gradient-to-b from-primary to-primary-light",
  size = "w-10 h-10 md:w-12 md:h-12",
  iconSize = "w-4 h-4",
  rounded = "rounded-full",
  className = "",
  shadow = false,
}: IconProps) {
  // extract width class and convert to pixels
  const widthClass = iconSize.split(' ')[0];
  const width = sizeMap[widthClass] || 16;
  const shadowClass = shadow ? 'shadow-lg shadow-black/10' : '';
  
  return (
    <div className={`${size} ${rounded} ${bgColor} flex items-center justify-center ${shadowClass} ${className}`}>
      <div className={`relative ${iconSize}`}>
        <Image 
          src={icon} 
          alt="icon" 
          width={width} 
          height={width} 
          className="object-contain" 
        />
      </div>
    </div>
  );
}

export default Icon;
