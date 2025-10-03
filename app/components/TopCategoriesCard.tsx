import React from "react";
import { TopCateg } from "../types/cardcomptypes";

const TopCategotiesCard: React.FC<TopCateg> = ({
  image,
  name,
  price,
  originalPrice,
}) => {
  return (
    <div className="w-[269px] h-[345px] flex flex-col items-center justify-between ">
      <div className="h-[269px] bg-[#F6F7FB] w-full flex justify-center items-center rounded-full">
        <img src={image} alt="Card Image" className="w-[80%] h-[80%]" />
      </div>

      <div className="w-full flex justify-center mt-4">
        <h2 className="text-lg font-semibold text-center text-[#151875]">
          {name}
        </h2>
      </div>

      <div className="w-full flex justify-center items-center  gap-2">
        <span className="text-[#151875] font-semibold text-base">${price}</span>
        {originalPrice && (
          <span className="text-red-500 line-through text-sm">
            ${originalPrice}
          </span>
        )}
      </div>
    </div>
  );
};

export default TopCategotiesCard;
