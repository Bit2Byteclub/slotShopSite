import { RevStarIcon } from "@/app/assets/icons";

interface ReviewProps {
  comment: string;
  name: string;
  info: string;
  rating?: number; // Add rating prop
}

function Review({ comment, name, info, rating = 5 }: ReviewProps) {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl flex flex-col p-8 gap-6 shadow-lg">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <img key={i} src={RevStarIcon} alt="" className="w-4 h-4" />
        ))}
      </div>

      <p className="text-left">{comment}</p>

      <div className="border-t border-gray-200 text-left pt-4">
        <h6>{name}</h6>
        <p className="text-sm text-[#62748E]">{info}</p>
      </div>
    </div>
  );
}

export default Review;
