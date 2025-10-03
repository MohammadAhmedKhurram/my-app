import React from "react";
import { SecondCardProps } from "../types/cardcomptypes";
const SecondCardComponent: React.FC<SecondCardProps> = ({
  image,
  title,
  price,
  originalPrice,
}) => {
  return (
    <div className="w-[270px] lg:w-[365px] h-[306px] flex flex-col items-center justify-between">
      <div className="h-[269.96px] bg-[#F7F7F7] w-full flex justify-center items-center">
        <img
          src={image}
          alt="Card Image"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="w-full pr-4 flex justify-between items-center mt-4">
        <h2 className=" text-[14px] xl:text-lg font-semibold text-left text-[#151875]">
          {title}
        </h2>

        <div className="flex items-center gap-2">
          <span className="text-[#151875] font-normal text-[12px] xl:text-base">
            ${originalPrice}
          </span>
          {price && (
            <span className="text-red-500 line-through font-normal text-[10px] xl:text-sm">
              ${price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecondCardComponent;
