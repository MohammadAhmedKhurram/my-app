import Link from "next/link";
import Banner from "../components/Banner";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

export default function OrderCompleted() {
  return (
    <div>
      <Banner
        title="Home"
        title2="Pages"
        heading="Order Completed"
        subheading="Order Completed"
      />
      <div className="flex">
        <div className="ml-[415px] mt-[219px]">
          <img src="/clock 1.png" alt="--" />
        </div>
        <div className="w-[640px] h-[326px] mt-[181px] ml-[139px] flex justify-center items-center flex-col">
          <img src="/Vector 15.png" alt="" className="mt-[20px]" />
          <h2 className="text-[36px] leading-[42.19px] text-center font-bold mt-[46px] text-[#101750]">
            Your Order Is Completed!
          </h2>
          <p
            className={`${lato.className} text-[16px] font-semibold leading-[30px] text-center text-[#8D92A7] mt-[28px] h-[90px]`}
          >
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <Link href="../products">
            <button
              className={`${lato.className} bg-[#FB2E86] text-white border-2 mt-[10px] border-[#FB2E86] text-sm font-semibold tracking-[0.020em] rounded-[3px] cursor-pointer flex items-center justify-center h-[59px] w-[208px] text-[16px] leading-[30px] text-left`}
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>

      <img src="/checklist 1.png" alt="--" className="ml-[1483px] mt-[27px]" />

      <div className="w-full flex justify-center mt-[84px] mb-[84px]">
        <img src="/image 1174.png" alt="-" />
      </div>
    </div>
  );
}
