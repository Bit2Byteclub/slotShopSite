"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { RevStarIcon } from "@/app/assets/icons";

interface ReviewProps {
  comment: string;
  name: string;
  info: string;
  rating?: number;
}

// reusable review component
const Review = memo(function Review({ comment, name, info, rating = 5 }: ReviewProps) {
  // star animation
  const starElements = useMemo(() => 
    Array.from({ length: rating }).map((_, i) => (
      <motion.img
        key={i}
        src={RevStarIcon}
        alt=""
        className="w-4 h-4"
        animate={{ y: [-10, 0] }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.3,
          delay: i * 0.1, // stagger each star for wave effect
        }}
      />
    )),
    [rating]
  );

  return (
    <div className="w-90 max-w-sm bg-white rounded-xl flex flex-col p-8 gap-6 shadow-lg">
      {/* stars */}
      <div className="flex gap-1">
        {starElements}
      </div>

      {/* comment */}
      <p className="text-left">{comment}</p>

      {/* reviewer info */}
      <div className="border-t border-gray-200 text-left pt-4">
        <h6>{name}</h6>
        <p className="text-sm text-[#62748E]">{info}</p>
      </div>
    </div>
  );
});

export default Review;
