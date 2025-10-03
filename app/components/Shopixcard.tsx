import React from "react";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

interface ShopexCardProps {
  image: string;
  title: string;
  description: string;
}

const ShopexCard: React.FC<ShopexCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="w-[270px] h-[320px] bg-white  flex flex-col items-center justify-center ">
      <img src={image} alt="Card" className="w-[65px] h-[65px]" />

      <h2 className="text-[22px] font-bold text-center text-[#151875] mt-[21px]">
        {title}
      </h2>

      <p
        className={`${lato.className} text-base font-bold text-[#1A0B5B4D] text-center mt-5 w-[225px] h-[85px]`}
      >
        {description}
      </p>
    </div>
  );
};

export default ShopexCard;
