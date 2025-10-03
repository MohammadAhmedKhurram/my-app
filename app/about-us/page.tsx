import Link from "next/link";
import Image from "next/image";
import Banner from "../components/Banner";
import ShopexCard from "../components/Shopixcard";

export default function AboutUs() {
  return (
    <div className="mb-20 lg:mb-40">
      <Banner
        title="Home"
        title2="Pages"
        heading="About Us"
        subheading="About Us"
      />

      <div className="flex gap-2 lg:gap-[30px] mt-10 lg:mt-20 justify-center flex-wrap">
        <Image
          src="/Group 73.png"
          alt="About our company"
          width={570}
          height={400}
          className="h-auto w-[570px] mt-[38px] lg:mt-0 md:p-0 pl-2 pr-2"
        />

        <div className="flex flex-col justify-center pl-2 pr-2 md:pl-14 md:pr-14 lg:p-0">
          <h3 className="text-xl md:text-2xl lg:text-[36px] font-bold text-[#151875] md:w-[512px] m-0 lg:leading-[48px] text-left mb-[14px] mt-5 lg:mt-[38px]">
            Know About Our Ecomerce Business, History
          </h3>

          <p className="text-xs sm:text-[14px] lg:text-base font-semibold md:w-[580px] text-[#8A8FB9] mb-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>

          <Link href="/contact-us">
            <button className="bg-[#FB2E86] text-white border-2 border-[#FB2E86] text-xs lg:text-sm font-normal tracking-[0.020em] rounded-[3px] cursor-pointer flex items-center justify-center h-[35px] lg:h-[44px] w-[100px] lg:w-[145px] text-[18px] leading-[19.92px]">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-20 lg:mt-40">
        <h1 className="text-[30px] lg:text-[42px] leading-[25.6px] text-black text-center font-bold">
          Our Features
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-0 lg:gap-7 mt-5 lg:mt-10 mb-7 lg:mb-14">
          <ShopexCard
            image="/WhatShopexOffer/free-delivery 1.png"
            title="Free Shipping"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
          <ShopexCard
            image="/WhatShopexOffer/cashback 1.png"
            title="100% Cash Back"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
          <ShopexCard
            image="/WhatShopexOffer/Group (1).png"
            title="Quality Product"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
          <ShopexCard
            image="/WhatShopexOffer/24-hours-support 1.png"
            title="24/7 Support"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
        </div>
      </div>

      <div className="flex justify-center mt-8 lg:mt-20 items-center">
        <div className="w-[689px] h-[265px] flex flex-col justify-center items-center text-center">
          <h1 className="text-[36px] lg:text-[42px] leading-[25.6px] text-black font-bold">
            Our Client Say!
          </h1>

          <Image
            src="/Group 200.png"
            alt="Selina Gomez testimonial photo"
            width={191}
            height={64}
            className="w-[191px] h-[64px] mt-10 lg:mt-20"
          />

          <h2 className="text-[22px] font-semibold text-[#151875] mt-3 md:mt-[25px]">
            Selina Gomez
          </h2>
          <p className="text-[10px] font-semibold text-[#8A8FB9]">
            Ceo At Webecy Digital
          </p>

          <blockquote className="mt-3 md:mt-[14px] text-[#8A8FB9] text-xs sm:text-[14px] lg:text-[16px] font-bold lg:leading-[25.6px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
            ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a
            enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor
            aliquam lacus volutpat praesent.
          </blockquote>

          <div className="flex gap-1 mt-5 lg:mt-10">
            <div className="w-[18px] h-[3px] rounded-[3px] bg-[#FF75B0]"></div>
            <div className="w-[27px] h-[3px] rounded-[3px] bg-[#FB2E86]"></div>
            <div className="w-[18px] h-[3px] rounded-[3px] bg-[#FF75B0]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
