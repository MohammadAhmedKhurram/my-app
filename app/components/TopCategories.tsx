import { client } from "@/sanity/lib/client";
import TopCategotiesCard from "./TopCategoriesCard";
import { urlFor } from "@/sanity/lib/image";

const getData = async () => {
  const res = await client.fetch(
    `*[_type == 'product' && isTopCategoryProduct == true]{
      name,
      image,
      price,
      discountedPrice
    }`
  );
  return res;
};

const products = await getData();

export default function TopCategotySec() {
  return (
    <div className="mt-16 lg:mt-24 xl:mt-40">
      <h1 className="text-[30px] xl:text-[42px] flex font-bold justify-center leading-[49.22px] text-left underline-offset-[0.1em] text-[#151875]">
        Top Categories
      </h1>
      <div className="flex justify-center flex-wrap gap-4 md:gap-7 lg:gap-16 mt-6 lg:mt-12 mb-6 lg:mb-12">
        {products.slice(0, 4).map((product: any) => (
          <TopCategotiesCard
            key={product.title}
            image={
              product.image ? urlFor(product.image).url() : "default_image_url"
            }
            name={product.name}
            price={product.price}
            originalPrice={product.discountedPrice}
          />
        ))}
      </div>

      <div className="flex gap-3 justify-center">
        <div className="w-[10px] h-[10px] bg-[#FB2E86] rounded-full"></div>
        <div className="w-[10px] h-[10px] rounded-full border border-[#FB2E86]"></div>
        <div className="w-[10px] h-[10px] rounded-full border border-[#FB2E86]"></div>
      </div>
    </div>
  );
}
