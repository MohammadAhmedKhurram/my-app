import { client } from "@/sanity/lib/client";
import SecondTrendingCard from "./SecondTrendingComp";
import ThirdTrendingComp from "./ThirdTrendingComp";
import TrendingProductsCardComp from "./TrendingprojectCardcomp";
import { urlFor } from "@/sanity/lib/image";

const getData = async () => {
  const res = await client.fetch(
    `*[_type == 'product' || name == 'Nordic Net Red Chair'|| name == 'Futuristic Sleek Modern Chair' || name == 'Tribù Elio Chair' || name == 'Stylish Sofa' || name == 'Wooden Showpiece' || name == 'Liberty Wood 63']{
      name,
      image,
      price,
      discountedPrice
    }`
  );
  return res;
};

const products = await getData();

export default function TrendingProductsSec() {
  return (
    <div>
      {/* Heading */}
      <h1 className="text-[30px] md:text-[32px] xl:text-[42px] font-bold flex justify-center mt-10 lg:mt-20 leading-[1.2] text-center text-[#151875]">
        Trending Products
      </h1>

      {/* First Row */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-7 lg:mt-14 px-4 md:px-16 lg:px-32">
        {products.slice(8, 12).map((product: any) => (
          <TrendingProductsCardComp
            key={product.name}
            image={
              product.image ? urlFor(product.image).url() : "default_image_url"
            }
            title={product.name}
            price={product.discountedPrice}
            originalPrice={product.price}
          />
        ))}
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10 mt-10 px-4 md:px-16 lg:px-32">
        <SecondTrendingCard
          key={products[0].name}
          image={
            products[0].image
              ? urlFor(products[0].image).url()
              : "default_image_url"
          }
          mainTitle="50% off in all products"
          subTitle="View Collection"
          bgColor="#ffff"
        />

        <SecondTrendingCard
          key={products[5].name}
          image={
            products[5].image
              ? urlFor(products[5].image).url()
              : "default_image_url"
          }
          mainTitle="50% off in all products"
          subTitle="View Collection"
          bgColor="#EEEFFC"
        />

        <ul className="flex flex-col gap-4 mt-4">
          {products.slice(4, 7).map((product: any) => (
            <li key={product.name}>
              <ThirdTrendingComp
                image={
                  product.image
                    ? urlFor(product.image).url()
                    : "default_image_url"
                }
                title={product.name}
                price={product.discountedPrice}
                originalPrice={product.price}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
