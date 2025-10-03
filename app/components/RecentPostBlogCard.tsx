import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

export default function RecentPostCardBlog(props: {
  img: string;
  heading: string;
}) {
  return (
    <div className="w-[250px] h-[51px] flex items-center">
      <img src={props.img} alt="--" className="w-[70px] h-[51px]" />
      <div className="ml-[6px]">
        <h4 className="text-[14px] font-normal leading-[14px] text-left text-[#3F509E]">
          {props.heading}
        </h4>
        <p
          className={`${lato.className} mt-1 text-[11px] font-semibold leading-[13.2px] text-left text-[#8A8FB9]`}
        >
          Aug 09 2020
        </p>
      </div>
    </div>
  );
}
