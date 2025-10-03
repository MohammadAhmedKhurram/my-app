import { client } from "@/sanity/lib/client";
import CardComponent from "./cardcomponent";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const getData = async () => {
  const res = await client.fetch(
    `*[_type == 'product' && isFeaturedProduct == true]`
  );
  return res;
};

const FeaturedProducts = await getData();


export default function Featuredproductssec() {
  return (
    <div className="">
      <h1 className="text-[30px] 2xl:text-[42px] flex font-bold justify-center mt-10 lg:mt-20 leading-[49.22px] text-left underline-offset-[0.1em] text-[#151875]">
        Featured Products
      </h1>

      <div className="flex justify-center flex-wrap gap-10 lg:gap-20 mt-10 lg:mt-20 mb-10 lg:mb-20">
        {FeaturedProducts.slice(0, 4).map(
          (product: {
            discountedPrice: string | number;
            image: SanityImageSource;
            name: string;
            price: string | number;
          }) => (
            <CardComponent
            key={product.name}
              image={
                product.image
                  ? urlFor(product.image).url()
                  : "default_image_url"
              }
              title={product.name}
              price={product.price}
              discountedPrice={product.discountedPrice}
              boxColors={["#28A745", "#FFC107", "#DC3545"]}
            />
          )
        )}
      </div>

      <div className="flex gap-2 justify-center">
        <div className="w-[24px] h-[4px] bg-[#FB2E86]"></div>

        <div className="w-[24px] h-[4px] bg-[#FEBAD7]"></div>

        <div className="w-[24px] h-[4px] bg-[#FEBAD7]"></div>

        <div className="w-[24px] h-[4px] bg-[#FEBAD7]"></div>
      </div>
    </div>
  );
}
