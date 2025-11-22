import type { ReactNode } from "react";
import Button from "./button";

interface ProductProps {
  tag?: ReactNode;
  image?: string;
  name: string;
  condition: string;
  price: string;
  className?: string;
}

function Product({
  tag,
  image,
  name,
  condition,
  price,
  className = "",
}: ProductProps) {
  return (
    <div className={`w-96 bg-white rounded-2xl overflow-hidden ${className}`}>
      {/* Image Section */}
      <div className="relative h-72 p-4 bg-gray-50">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
        )}
        {tag && <div className="absolute top-4 right-4">{tag}</div>}
      </div>

      {/* Info Section */}
      <div className="p-4 space-y-4">
        <div>
          <h3 className="text-xl text-gray-900">{name}</h3>
          <p className="text-[#62748E] mt-1">Condition:</p>
          <p className="text-[#62748E] border-b border-gray-300 pb-1">
            {condition}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <p className="text-4xl">${price}</p>
          <Button text="View Details"></Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
