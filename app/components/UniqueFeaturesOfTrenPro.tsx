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
  const res = await client.fetch(
    `*[_type == 'product' && isUniqueImage == true]{
      image
    }`
  );
  return res;
};

const uniqueFeatureOfTrendProImage = await getData();


export default  function UniqueFeatureOfTrenPro() {
  const image = uniqueFeatureOfTrendProImage[0]?.image;
  return (
    <div className="overflow-hidden relative h-[579px] pl-2 md:pl-[50px] md:pr-[50px] xl:pl-[200px] xl:pr-[200px] 2xl:pl-[371px] 2xl:pr-[371px] bg-[#F1F0FF] flex justify-center lg:justify-start">
      <div className="relative pl-[0px] pt-[36px]">
        {/* First Image */}
        <img
          src={image ? urlFor(image).url() : "default_image_url"}
          alt="--"
          className="hidden lg:block relative w-[509px] h-[550px] z-20 ml-[70px]"
        />

        {/* Second Image */}
      </div>
      <img
        src="/UniqueFeatureOfTrendPro.png"
        alt="--"
        className="hidden 2xl:block absolute top-0 left-0  ml-[392px] w-[481px] h-[449.62] mt-[60px]"
      />
      <div>
        <h1 className="text-center 2xl:w-[507px] md:ml-[40px] 2xl:h-[92px] font-bold mt-[82px] text-[30px] xl:text-[35px] text-[#151875]">
          Unique Features Of leatest & Trending Poducts
        </h1>
        <div className="flex  md:ml-[40px] gap-2 mt-12 items-center">
          <div
            className={`${lato.className} w-[11px] h-[11px] bg-[#F52B70]  rounded-full`}
          ></div>
          <p className="text-[14px] xl:text-[16px] font-medium text-[#ACABC3]">
            All frames constructed with hardwood solids and laminates
          </p>
        </div>
        <div className="flex md:ml-[40px] gap-2 mt-1 mb-1 items-center">
          <div
            className={`${lato.className} w-[11px] h-[11px] bg-[#2B2BF5]  rounded-full`}
          ></div>
          <p className="text-[14px] xl:text-[16px] font-medium text-[#ACABC3] ">
            Reinforced with double wood dowels, glue, screw - nails corner
            blocks and machine nails
          </p>
        </div>
        <div className="flex md:ml-[40px] gap-2 items-center">
          <div
            className={`${lato.className} w-[11px] h-[11px] bg-[#2BF5CC]  rounded-full`}
          ></div>
          <p className="text-[14px] xl:text-[16px] font-medium text-[#ACABC3]">
            Arms, backs and seats are structurally reinforced
          </p>
        </div>
        <div className="flex items-center mt-12 gap-4 ml-[40px]">
          <Link href="../shopping-cart">
            <GeneralButton title="Add To Cart" />
          </Link>
          <ul>
            <li className="text-[14px] xl:text-[16px] text-[#151875]">
              B&B Italian Sofa{" "}
            </li>
            <li
              className={`${lato.className} text-[14px] xl:text-[16px] text-[#151875] font-semibold`}
            >
              $32.00
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
