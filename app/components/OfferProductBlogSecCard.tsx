import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

export default function OfferProductBlogSecCard(props: {
  img: string;
  heading: string;
}) {
  return (
    <div className="w-[126px] h-[126px] flex flex-col items-center">
      <img src={props.img} alt="--" className="h-[80px] w-full" />
      <h4
        className={`${lato.className} text-[#151875] text-[14px] font-semibold leading-[16.8px] text-center mt-[9px]`}
      >
        {props.heading}
      </h4>
      <p
        className={`${lato.className} text-[12px] font-semibold leading-[14.4px] text-center text-[#8A8FB9] mt-[6px]`}
      >
        $12.00 - $15.00
      </p>
    </div>
  );
}
