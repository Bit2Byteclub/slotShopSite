import { motion } from "framer-motion";

interface ButtonProps {
  className?: string;
  text: string;
}

function Button({ className, text }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={
        className ||
        `w-[134px] h-[44px] flex items-center justify-center bg-primary rounded-xl `
      }
    >
      {text}
    </motion.button>
  );
}

export default Button;
