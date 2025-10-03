"use client";

import { useAppContext } from "@/context";
import { urlFor } from "@/sanity/lib/image";
import WishlistCardComp from "@/app/components/wishlistCardComp";
import Banner from "../components/Banner";

export default function Wishlist() {
  const { wishlist, clearWishlist } = useAppContext();

  const handleClearWishlist = () => {
    return clearWishlist();
  };

  return (
    <div>
      <Banner
        title={"Home"}
        title2={"Pages"}
        heading={"Wishlist"}
        subheading={"Wishlist"}
      />
      <div className="mt-12 mb-10">
        <h1 className="text-[30px] 2xl:text-[42px] flex font-bold justify-center leading-[49.22px] text-left underline-offset-[0.1em] text-[#151875]">
          Wishlist
        </h1>

        <div className="flex justify-center flex-wrap gap-7 lg:gap-16 mt-12">
          {wishlist.length > 0 ? (
            wishlist.map((product: any, index) => (
              <WishlistCardComp
                key={index}
                image={
                  product.image
                    ? urlFor(product.image).url()
                    : "default_image_url"
                }
                title={product.name}
                price={product.price}
                discountedPrice={product.discountedPrice}
                boxColors={["#28A745", "#FFC107", "#DC3545"]}
                stock={product.stock}
              />
            ))
          ) : (
            <div>No items exist in the wishlist.</div>
          )}
        </div>
        <div className="flex w-full justify-center mt-12">
          <button
            onClick={handleClearWishlist}
            className="w-[270px] bg-[#151875] text-[#ECF0F1] text-sm md:text-lg h-7 md:h-10 rounded mt-2"
          >
            Clear Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
