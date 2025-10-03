import { urlFor } from "@/sanity/lib/image";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Cart({
  name,
  price,
  quantity,
  image,
  incrementQuantity,
  decrementQuantity,
}: any) {
  const imageUrl = image ? urlFor(image).url() : "default_image_url";
  return (
    <div className="max-w-[335px] md:max-w-[670px]">
      <div className="flex items-center">
        <div>
          <img
            src={imageUrl}
            alt="Image"
            className="w-12 h-12 md:w-[83px] md:h-[87px]"
          />
        </div>

        <div className="w-[90px] md:w-[183px]">
          <h1 className="text-xs md:text-sm text-left font-bold">{name}</h1>
        </div>

        <div className="flex gap-[20px] md:gap-[100px] ml-auto">
          <div className="text-[12px] md:text-sm text-[#15245E]">${price}</div>

          <div className="text-[12px] md:text-sm text-[#15245E] flex items-center gap-2">
            <span className="text-[15px]" onClick={incrementQuantity}>
              <FaPlus />
            </span>
            {quantity}
            <span className="text-[15px]" onClick={decrementQuantity}>
              <FaMinus />
            </span>
          </div>

          <div className="text-[12px] md:text-sm text-[#15245E]">
            ${price * quantity}.00
          </div>
        </div>
      </div>

      <hr className="mt-[15px] mb-[15px]" />
    </div>
  );
}
