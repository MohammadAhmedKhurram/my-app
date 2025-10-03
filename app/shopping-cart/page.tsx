"use client";

import Cart from "@/app/components/Shopping-Cart";
import Banner from "../components/Banner";
import Link from "next/link";
import { useAppContext } from "@/context";

export default function ShoppingCart() {

  const {
    cart,
    incrementQuantity,
    decrementQuantity,
    subTotal,
    totalPrice,
    clearCart,
  } = useAppContext();

  const handleIncrement = (productName: any) => {
    incrementQuantity(productName);
  };

  const handleDecrement = (productName: any) => {
    decrementQuantity(productName);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="mb-[145px]">
      <Banner
        title="Home"
        title2="Pages"
        heading="Shopping Cart"
        subheading="Shopping Cart"
      />

      <div className="flex gap-20 mt-[131px] flex-wrap justify-center ">
        <div className="">
          <div className="flex max-w-[335px] md:max-w-[670px] text-[12px] md:text-[20px] text-[#1D3178] font-bold ">
            <h1 className="w-[285px]">Product</h1>
            <div className="flex gap-[25px] md:gap-[85px] ml-0">
              <h1>Price</h1>
              <h1>Quantity</h1>
              <h1>Total</h1>
            </div>
          </div>
          <div className="mt-[48px]">
            {cart.length > 0 ? (
              cart.map((product: any, index) => (
                <Cart
                  key={index}
                  name={product.name}
                  price={product.discountedPrice}
                  quantity={product.quantity}
                  image={product.image}
                  stock={product.stock}
                  incrementQuantity={() => handleIncrement(product.name)}
                  decrementQuantity={() => handleDecrement(product.name)}
                />
              ))
            ) : (
              <div className="text-center text-[#A1A8C1] text-sm">
                Your cart is empty.
              </div>
            )}
          </div>
          <div className="flex w-full justify-center mt-0 ">
            <button
              onClick={handleClearCart}
              className="bg-[#FB2E86] text-white border-2 mt-[20px] border-[#FB2E86] text-xs md:text-sm font-semibold tracking-[0.020em] rounded-[3px] cursor-pointer flex items-center justify-center h-[39px] w-full text-[17px] leading-[19.92px] text-left"
            >
              Clear Cart
            </button>
          </div>
        </div>

        <div className="items-center flex-col text-center ">
          <div>
            <h1 className="text-[20px] text-[#1D3178] font-bold">
              Cart Totals
            </h1>

            <div className="w-[300px] md:w-[371px] h-[284px] bg-[#F4F4FC] py-[30px] px-[20px] mt-[48px]">
              <div className="flex justify-between text-lg font-semibold text-[#1D3178]">
                <h1>Subtotals:</h1>
                <span className="font-normal text-base">
                  <p>${subTotal}.00</p>
                </span>
              </div>
              <hr className="mt-1 border-t-[2px]" />

              <div className="flex justify-between text-lg font-semibold text-[#1D3178] mt-[30px]">
                <h1>Totals:</h1>
                <span className="font-normal text-base">
                  <p>${totalPrice}.00</p>
                </span>
              </div>
              <hr className="mt-1 border-t-[2px]" />

              <div className="flex items-center text-xs font-normal gap-1 mt-[25px]">
                <img
                  src="/uil_check.png"
                  alt="--"
                  className="w-[8px] h-[8px]"
                />
                <p className="text-[#8A91AB]">
                  Shipping & taxes calculated at checkout
                </p>
              </div>

              <Link href="../shipment">
                <button
                  disabled={cart.length === 0}
                  className="bg-[#19D16F] text-white border-2 mt-[35px] border-[#19D16F] text-xs md:text-sm font-semibold tracking-[0.020em] rounded-[3px] cursor-pointer flex items-center justify-center w-full h-[40px] text-[17px] leading-[19.92px] text-left"
                >
                  Proceed To Cheakout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
