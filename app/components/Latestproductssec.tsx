import { client } from "@/sanity/lib/client";
import SecondCardComponent from "./Secondcardcomp";
import { urlFor } from "@/sanity/lib/image";

const getData = async () => {
  const res = await client.fetch(
    `*[_type == 'product' && isLatestProduct == true]`
  );
  return res;
};

const LatestProducts = await getData();

export default function LatestProductSec() {
  return (
    <div>
      <div className="">
        <h1 className="text-[30px] xl:text-[42px] font-bold flex justify-center mt-10 lg:mt-20 leading-[49.22px] text-left underline-offset-[0.1em] text-[#151875]">
          Latest Products
        </h1>
        <ul className="text-[12px] md:text-[14px] xl:text-[16px] flex gap-[10px] md:gap-14 justify-center mt-5 lg:mt-10 mb-10 lg:mb-20 text-[#151875] ml-0 mr-0">
          <li>New Arrival</li>
          <li>Best Seller</li>
          <li>Featured</li>
          <li>Special Offer</li>
        </ul>
      </div>
      <div className="flex flex-wrap justify-center gap-x-16 xl:gap-x-32 gap-y-14 xl:gap-y-[116.02px] ml-[40px] mr-[40px] lg:ml-[100px] lg:mr-[100px]">
        {LatestProducts.slice(0, 6).map((product: any) => (
          <SecondCardComponent
            key={product._id}
            title={product.name}
            image={
              product.image ? urlFor(product.image).url() : "default_image_url"
            }
            price={product.price}
            originalPrice={product.discountedPrice}
          />
        ))}
      </div>
    </div>
  );
}
