import React from "react";
import { wishlistProps } from "../types/cardcomptypes";
import { useAppContext } from "@/context";

const WishlistCardComp = (props: wishlistProps) => {
  const { addToCart } = useAppContext();

  const handleAddToCart = () => {
    const newProduct = {
      image: props.image,
      name: props.title,
      discountedPrice: props.discountedPrice,
      stock: props.stock,
      boxColors: props.boxColors,
      price: props.price,
    };
    alert("Product added to cart");

    addToCart(newProduct);
  };

  return (
    <div className="w-[270px] h-auto flex flex-col items-center shadow-[0px_0px_25px_0px_#0000001A] rounded pl-2 pr-2 pt-2 pb-2">
      {/* Image */}
      <div className="h-[236px] bg-[#F6F7FB] w-full flex justify-center items-center">
        <img
          src={props.image}
          alt="Card Image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="pt-4">
        {/* Title */}
        <h2 className=" text-lg font-semibold text-center text-[#FB2E86]">
          {props.title}
        </h2>

        {/* Colored Boxes */}
        <div className="flex justify-center gap-2 mt-2">
          {props.boxColors.slice(0, 3).map((color, index) => (
            <div
              key={index}
              className={`w-[14px] h-[4px] `}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>

        {/* Price */}
        <div className="mt-2 flex items-center justify-center gap-2">
          <p className="text-lg font-normal text-[#151875]">
            ${props.discountedPrice}
          </p>
          <p className="text-sm font-normal text-red-500  line-through">
            ${props.price}
          </p>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="w-[80%] bg-[#FB2E86] text-[#ECF0F1] text-sm md:text-lg h-7 md:h-10 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default WishlistCardComp;
