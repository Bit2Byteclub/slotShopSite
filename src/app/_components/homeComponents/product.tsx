import { memo } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Button from "./button";

interface ProductProps {
  tag?: ReactNode;
  image?: string;
  name: string;
  condition: string;
  price: string;
  className?: string;
}

// product card component
const Product = memo(function Product({
  tag,
  image,
  name,
  condition,
  price,
  className = "",
}: ProductProps) {
  return (
    <div
      className={`w-full max-w-[360px] lg:max-w-[384px] bg-white rounded-2xl overflow-hidden ${className}`}
    >
      {/* product image section */}
      <div className="relative h-48 sm:h-64 lg:h-72 p-4 bg-gray-50">
        {image && (
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
        {tag && <div className="absolute top-4 right-4">{tag}</div>}
      </div>

      {/* product info section */}
      <div className="p-4 space-y-4">
        <div>
          <h3 className="text-xl text-gray-900">{name}</h3>
          <p className="text-[#62748E] mt-1">Condition:</p>
          <p className="text-[#62748E] border-b border-gray-300 pb-1">
            {condition}
          </p>
        </div>

        {/* price and button section */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-4xl">${price}</p>
          <Button text="View Details"></Button>
        </div>
      </div>
    </div>
  );
});

export default Product;
