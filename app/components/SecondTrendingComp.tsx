import React from "react";

interface SecondTrendingCardProps {
  mainTitle: string;
  subTitle: string;
  image: string;
  bgColor: string;
}

const SecondTrendingCard: React.FC<SecondTrendingCardProps> = ({
  mainTitle,
  subTitle,
  image,
  bgColor,
}) => {
  return (
    <div
      className={`w-[420px] h-[270px] relative flex flex-col justify-between pl-4`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="absolute top-4 left-4">
        <h2 className="text-[26px] font-semibold text-[#151875]">
          {mainTitle}
        </h2>
        <h3 className="text-base underline text-[#FB2E86] mt-1">{subTitle}</h3>
      </div>

      <div className="absolute bottom-4 right-4">
        <img src={image} alt="Dynamic Component" className="m-0 p-0" />
      </div>
    </div>
  );
};

export default SecondTrendingCard;
