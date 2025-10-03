import { RiFacebookFill } from "react-icons/ri";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { ImTwitter } from "react-icons/im";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

export default function Footer() {
  return (
    <div>
      <footer className="w-full lg:h-[478px] bg-[#EEEFFB] flex 2xl:justify-start gap-7 lg:gap-[60px] 2xl:gap-[100px] 2xl:px-[310px] px-4 justify-center flex-wrap h-auto pb-[40px] lg:pb-0">
        <div className="flex flex-col mt-[92px]">
          {/* First Column */}
          <h2 className="text-black text-[38px] font-bold mb-4">Seat Yourself
          </h2>
          <div className={`${lato.className}`}>
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="w-[120px] md:w-[200px] h-[40px] border-gray-300 px-3 text-sm outline-none"
              />
              <button className="h-[40px] w-[135px] bg-[#FB2E86] text-white px-4">
                Sign Up
              </button>
            </div>
            <ul className="text-[#8A8FB9] text-sm space-y-2 mt-6">
              <li>Contact Info</li>
              <li>17 Princess Road, London, Greater London NW1 8JR, UK</li>
            </ul>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col mt-[94px]">
          <h2 className="text-black text-lg font-semibold mb-11">Categories</h2>
          <div className={`${lato.className}`}>
            <ul className="text-[#8A8FB9] text-sm space-y-4">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>
        </div>

        {/* Third Column */}
        <div className="flex flex-col mt-[94px]">
          <h2 className="text-black text-lg font-semibold mb-11">
            Customer Care
          </h2>
          <div className={`${lato.className}`}>
            <ul className="text-[#8A8FB9] text-sm space-y-4">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
        </div>

        {/* Fourth Column */}
        <div className="flex flex-col mt-[94px]">
          <h2 className="text-black text-lg font-semibold mb-11">Pages</h2>
          <div className={`${lato.className}`}>
            <ul className="text-[#8A8FB9] text-sm space-y-4">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="w-full bg-[#E7E4F8] flex justify-center items-center lg:block">
        <div
          className={`${lato.className} lg:ml-[50px] lg:mr-[500px] xl:ml-[275px] xl:mr-[645px] h-[53px] gap-3 bg-[#E7E4F8] flex justify-between items-center flex-wrap`}
        >
          <p className="text-[#9DA0AE]  text-xs lg:text-[16px] font-semibold">
            ©Webecy - All Rights Reserved
          </p>
          <div className="flex gap-2  bg-[#E7E4F8]">
            <RiFacebookFill className=" w-4 lg:w-[19.42px] h-4 lg:h-[19.42px]" />
            <TbBrandInstagramFilled className="w-4 lg:w-[19.42px] h-4 lg:h-[19.42px]" />
            <ImTwitter className="w-4 lg:w-[19.42px] h-4 lg:h-[19.42px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
