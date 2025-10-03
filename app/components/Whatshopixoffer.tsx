import ShopexCard from "./Shopixcard";

export default function WhatShoppixOffer() {
  return (
    <div>
      <h1 className="text-[30px] xl:text-[42px] leading-[49.22px] text-left font-bold flex justify-center text-[#151875] mt-20 lg:mt-40">
        What Shopex Offer
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
  );
}
