import { GenButton } from "../types/propsType";

export default function GeneralButton(props: GenButton) {
  return (
    <button
      className={` bg-[#FB2E86] text-[#ECF0F1] border-2 border-[#FB2E86] tracking-[0.020em] font-normal cursor-pointer flex items-center justify-center w-[130px] h-[40px] text-[14px] 2xl:w-[163px] 2xl:h-[50px] 2xl:text-[17px] leading-[19.92px] text-left`}
    >
      {props.title}
    </button>
  );
}
