import Link from "next/link";
import GeneralButton from "./Btn";
import { Lato } from "next/font/google";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

const getData = async () => {
  const res = await client.fetch(`*[_type == 'product' && isHeroImage == true] {
    image
  }`);
  return res;
};

const HeroImage = await getData();

export default function Herosec() {
  
  const heroImage = HeroImage[0]?.image;

  return (
    <div className="pb-11 bg-[#F2F0FF]">
      <div className="flex justify-between 2xl:justify-start">
        <img
          src="/Vector 14.png"
          alt="--"
          className="hidden xl:block absolute top-[216px] left-[1230px] 2xl:top-[216px] 2xl:left-[1598px] w-16 h-16 2xl:w-[136px] 2xl:h-[138px]"
        />
        <p className="hidden xl:block w-[35px] h-[37px] 2xl:w-[69px] 2xl:h-[74px] xl:top-[230px] 2xl:top-[258px] xl:left-[1250.39px] 2xl:left-[1637.39px] absolute xl:text-[18px] 2xl:text-[35px] xl:leading-[20px] 2xl:leading-[43.89px] text-left text-underline-offset-[0.1em] text-white">
          50% off
        </p>

        <div className="absolute ">
          <img
            src="/Herosec/image 32.png"
            alt="--"
            className="hidden xl:block pl-[70px] lg:w-[190px] lg:h-[190px] 2xl:w-[387px] 2xl:h-[387px]"
          />
        </div>

        <div className="mr-7 md:mr-0 ml-7 md:ml-[50px] xl:ml-[200px] mb-10 md:mb-0 mt-[80px] 2xl:ml-[375px] 2xl:mt-[203px]">
          <p
            className={`${lato.className} text-[#FB2E86] m-0 font-bold text-[14px] xl:text-[16px]`}
          >
            Best Furniture For Your Castle....
          </p>
          <h1 className=" text-[36px] 2xl:text-[53px] xl:leading-[40px] 2xl:leading-[81.98px] tracking-[0.015em] font-bold text-left underline decoration-transparent pt-[22px] pb-[22px] m-0">
            New Furniture Collection
            <br />
            Trends in 2025
          </h1>
          <p
            className={`${lato.className} font-bold m-0 text-[#8A8FB9] text-[14px] xl:text-[16px] tracking-[0.25em]`}
          >
            Limited-Time Offer: Get{" "}
            <span className="text-[#FB2E86] font-extrabold">50%</span> Off on
            all <span className="font-extrabold text-[#FB2E86]">Products</span>!
          </p>
          <div className="mt-[44px]">
            <Link href="../shop">
              <GeneralButton title="Shop Now" />
            </Link>
          </div>
        </div>

        <img
          src={heroImage ? urlFor(heroImage).url() : "default_image_url"}
          alt="--"
          className="hidden md:block z-10 mt-[99px] ml-[32px] w-[310px] h-[310px] 2xl:w-[629px] 2xl:h-[629px] mr-[50px] xl:mr-[200px]"
        />

        <div className="hidden xl:block xl:w-[350px] xl:h-[350px] 2xl:w-[648px] 2xl:h-[648px] rounded-full absolute xl:top-[202px] xl:left-[891px] 2xl:top-[202px] 2xl:left-[1041px] bg-[#ECD2FA59]"></div>
        <div className="hidden xl:block xl:w-[350px] xl:h-[350px] 2xl:w-[648px] 2xl:h-[648px] rounded-full absolute xl:top-[161px] xl:left-[946px] 2xl:top-[161px] 2xl:left-[1096px] bg-[#ECD2FA59]"></div>
      </div>
      <div className="flex gap-4 justify-center ">
        {/* First Diamond */}
        <div className="w-[10px] h-[9.89px] bg-[#FB2E86] transform rotate-45"></div>

        {/* Second Diamond */}
        <div className="w-[10px] h-[9.89px] transform rotate-45 border border-[#FB2E86]"></div>

        {/* Third Diamond */}
        <div className="w-[10px] h-[9.89px] transform rotate-45 border border-[#FB2E86]"></div>
      </div>
    </div>
  );
}
