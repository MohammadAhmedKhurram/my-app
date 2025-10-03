import React from "react";
import { SecondCardProps } from "../types/cardcomptypes";

const TrendingProductsCardComp: React.FC<SecondCardProps> = ({
  image,
  title,
  price,
  originalPrice,
}) => {
  return (
    <div className="w-[270px] flex flex-col items-center justify-between">
      {/* Image Section */}
      <div className="h-[244px] bg-[#F7F7F7] w-full flex justify-center items-center">
        <img src={image} alt="Card Image" className="max-h-full max-w-full" />
      </div>

      {/* Title - Centered across the entire row */}
      <div className="w-full flex justify-center mt-4">
        <h2 className="text-lg font-semibold text-center text-[#151875]">
          {title}
        </h2>
      </div>

      {/* Price and Original Discounted Price - Centered in a new row */}
      <div className="w-full flex justify-center items-center  gap-2">
        <span className="text-[#151875] font-semibold text-base">
          ${originalPrice}
        </span>
        {originalPrice && (
          <span className="text-red-500 line-through text-sm">${price}</span>
        )}
      </div>
    </div>
  );
};

export default TrendingProductsCardComp;
