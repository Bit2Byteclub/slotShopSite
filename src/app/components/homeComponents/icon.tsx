interface IconProps {
  icon: string;
  bgColor?: string;
  size?: string;
  iconSize?: string;
  rounded?: string;
  className?: string;
}

function Icon({
  icon,
  bgColor = "bg-gradient-to-b from-secondary to-primary",
  size = "w-10 h-10 md:w-12 md:h-12",
  iconSize = "w-4 h-4",
  rounded = "rounded-full",
  className = "",
}: IconProps) {
  return (
    <div
      className={`${size} ${rounded} ${bgColor} flex items-center justify-center ${className}`}
    >
      <img src={icon} alt="icon" className={`${iconSize} object-contain`} />
    </div>
  );
}

export default Icon;
