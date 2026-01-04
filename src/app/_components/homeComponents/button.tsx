"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  className?: string;
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

// animation configuration
const animations = {
  hover: {
    scale: 1.1,
    backgroundColor: "#0F172B",
    border: "2px solid #B8E5DF",
    color: "#B8E5DF",
  },
  tap: { scale: 0.95 },
};

// reusable button component
function Button({ className, text, onClick, type = 'button', ariaLabel }: ButtonProps) {
  const defaultClasses = "w-36 h-11 flex items-center justify-center bg-primary rounded-xl";
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel || text}
      whileHover={animations.hover}
      whileTap={animations.tap}
      className={className || defaultClasses}
    >
      {text}
    </motion.button>
  );
}

export default Button;
