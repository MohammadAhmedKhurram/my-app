import Link from "next/link";
import BlogsSec from "./components/BlogsSec";
import DiscountSec from "./components/DiscountSec";
import Featuredproductssec from "./components/Featuredprojectsec";
import Herosec from "./components/Herosec";
import LatestProductSec from "./components/Latestproductssec";
import TopCategotySec from "./components/TopCategories";
import TrendingProductsSec from "./components/Trendingproducts";
import UniqueFeatureOfTrenPro from "./components/UniqueFeaturesOfTrenPro";
import WhatShoppixOffer from "./components/Whatshopixoffer";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <Herosec />
      <Featuredproductssec />
      <LatestProductSec />
      <WhatShoppixOffer />
      <UniqueFeatureOfTrenPro />
      <TrendingProductsSec />
      <DiscountSec />
      <TopCategotySec />
      <div className="mt-10 lg:mt-20">
        <div className="relative w-full h-48 md:h-[300px] xl:h-[462px]">
          <Image
            src="/Rectangle 102.png"
            alt="--"
            layout="fill"
            objectFit="cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-[#151875] font-bold text-[20px] md:text-[26px] xl:text-[35px] pr-4 pl-4">
                Get Latest Update By Subscribing
                <span className="hidden lg:inline">
                  <br />
                </span>
                Our Newsletter
              </h1>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 mt-10 lg:mt-20">
            <Link href="./shop">
              <button className="bg-[#FB2E86] text-white border-2 border-[#FB2E86] font-normal rounded-[3px] cursor-pointer flex items-center justify-center h-[35px] lg:h-[40px] w-[80px] lg:w-[150px] text-[12px] leading-[19.92px] text-left">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-5 md:mt-10 lg:mt-20 w-[100%] h-[100px]">
        <Image
          src="/image 1174.png"
          width={904}
          height={93}
          alt="image"
        ></Image>
      </div>
      <BlogsSec />

    </>

  );
}
