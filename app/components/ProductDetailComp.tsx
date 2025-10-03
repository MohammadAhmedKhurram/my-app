"use client";

import { urlFor } from "@/sanity/lib/image";
import { CiHeart } from "react-icons/ci";
import React from "react";
import { useAppContext } from "@/context";

const ProductDetailComp = (props: {
  image: string;
  title: string;
  price: number | string;
  discountedPrice: number | string;
  description: string;
  stock: number;
}) => {
  const { addToCart, addToWishlist } = useAppContext();

  const handleAddToCart = () => {
    const newProduct = {
      image: props.image,
      name: props.title,
      discountedPrice: props.discountedPrice,
      stock: props.stock,
    };
    alert("Product added to cart");
    addToCart(newProduct);
  };
  const handleAddToWishlist = () => {
    const newProduct = {
      image: props.image,
      name: props.title,
      discountedPrice: props.discountedPrice,
      price: props.price,
    };
    alert("Product added to wishlist");
    addToWishlist(newProduct);
    console.log("handleAddToCart", newProduct);
  };

  {
    return (
      <div className="mt-10 lg:mt-20">
        <div className="flex justify-center flex-wrap">
          <div className="p-3">
            <img
              src={urlFor(props.image).url()}
              alt="--"
              className="h-[auto] lg:w-[470px] xl:w-[570px]"
            />
          </div>
          <div className="flex flex-col justify-center ml-0 lg:ml-[25px] xl:ml-[41px] p-4">
            <h1 className="text-[24px] lg:text-[30px] xl:text-[36px] lg:leading-[42.19px] underline-offset-[0.625em] text-[#0D134E]">
              {props.title}
            </h1>
            <div className="flex gap-1 items-center">
              <img src="/Group 236.png" alt="--" />
              <p className="text-[10px] lg:text-[12px] xl:text-[14px] lg:leading-[29px] text-left underline underline-offset-[0.625em]">
                (22)
              </p>
            </div>
            <div className="flex items-center mt-[7px] lg:mt-[14px] gap-1 md:gap-4">
              <p className="text-lg font-normal text-[#151875]">
                ${props.discountedPrice}
              </p>
              <p className="text-sm font-normal text-red-500 line-through">
                ${props.price}
              </p>
            </div>
            <h4 className="text-[10px] lg:text-[12px] xl:text-[14px] lg:leading-[18.75px] underline-offset-[0.625em] mt-[6px] lg:mt-[12px] text-[#151875]">
              Color
            </h4>
            <p className="text-[10px] lg:text-[12px] xl:text-[16px] lg:leading-[29px] text-left underline-offset-[0.625em] mt-[6px] lg:mt-[12px] text-[#A9ACC6]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus <br /> porttitor purus, et volutpat sit.
            </p>
            <div className="flex text-[#151875] mt-[8px] lg:mt-[16px] items-center gap-1 md:gap-3">
              <h4 className="text-[10px] lg:text-[12px] xl:text-[14px] lg:leading-[29px] text-left underline-offset-[0.625em]">
                <button onClick={handleAddToCart}>Add To Cart</button>
              </h4>
              <CiHeart
                onClick={handleAddToWishlist}
                className="w-[31px] h-[31px] cursor-pointer"
              />
            </div>
            <h4 className="text-[10px] lg:text-[12px] xl:text-[14px] lg:leading-[29px] text-left underline-offset-[0.625em] mt-[8.5px] lg:mt-[17px] text-[#151875]">
              Categories:
            </h4>
            <h4 className="text-[10px] lg:text-[12px] xl:text-[14px] lg:leading-[29px] text-left underline-offset-[0.625em] mt-[5px] lg:mt-[10px] text-[#151875]">
              Tags
            </h4>
            <div className="flex items-center gap-2 mt-[5px] lg:mt-[10px]">
              <h4 className="text-[10px] lg:text-[12px] xl:text-[14px] lg:leading-[29px] text-left underline-offset-[0.625em] text-[#151875]">
                Share
              </h4>
              <img src="/Group 205.png" alt="--" />
            </div>
          </div>
        </div>

        <div className=" text-[#151875] mt-10 lg:mt-20 md:ml-[50px] xl:ml-[200px] 2xl:ml-[375px] md:mr-[50px] xl:mr-[200px] 2xl:mr-[375px] flex flex-col justify-center ml-5 mr-5">
          <ul className="flex items-center gap-[10px] lg:gap-5 xl:gap-32 font-semibold">
            <li className="text-[14px] lg:text-[18px] xl:text-[24px] lg:leading-[28.13px] text-left underline decoration-solid ">
              Description
            </li>
          </ul>
          <h3 className="text-sm md:text-[16px] lg:text-[22px] lg:leading-[25.78px] text-left mt-5 lg:mt-10 font-semibold">
            {props.description}
          </h3>
          <p className="text-[14px] lg:text-[16px] lg:leading-[29px] text-left mt-[14px] text-[#A9ACC6]"></p>

          <h1 className="text-[30px] lg:text-[36px] lg:leading-[42.19px] font-bold mt-10 md:mt-20 text-center lg:text-start">
            Related Products
          </h1>
          <div className="flex gap-3 md:gap-[30px] mt-[47px] text-[14px] lg:text-[16px] flex-wrap justify-center lg:justify-normal">
            <div>
              <img src="/item/Rectangle 129.png" alt="--" />
              <div className="flex justify-between items-center mt-[20px]">
                <p>Mens Fashion Wear</p>
                <img src="/Group 236.png" alt="--" />
              </div>
              <p className="mt-[15px]">$43.00</p>
            </div>
            <div>
              <img src="/item/Rectangle 133.png" alt="--" />
              <div className="flex justify-between items-center mt-[45px]">
                <p>Women’s Fashion</p>
                <img src="/Group 236.png" alt="--" />
              </div>
              <p className="mt-[15px]">$67.00</p>
            </div>
            <div>
              <img src="/item/Rectangle 130.png" alt="--" />
              <div className="flex justify-between items-center mt-[20px]">
                <p>Wolx Dummy Fashion</p>
                <img src="/Group 236.png" alt="--" />
              </div>
              <p className="mt-[15px]">$67.00</p>
            </div>
            <div>
              <img src="/item/Rectangle 131.png" alt="--" />
              <div className="flex justify-between items-center mt-[20px]">
                <p>Top Wall Digital Clock</p>
                <img src="/Group 236.png" alt="--" />
              </div>
              <p className="mt-[15px]">$51.00</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-center mt-10 lg:mt-20">
            <img src="/image 1174.png" alt="--" />
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetailComp;
