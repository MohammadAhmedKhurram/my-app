import { client } from "@/sanity/lib/client";
import TopCategotiesCard from "../components/TopCategoriesCard";
import { urlFor } from "@/sanity/lib/image";
import CardComponent from "../components/cardcomponent";
import SecondCardComponent from "../components/Secondcardcomp";
import TrendingProductsCardComp from "../components/TrendingprojectCardcomp";
import Link from "next/link";
import Banner from "../components/Banner";

const getData = async () => {
  const res = await client.fetch(`*`);
  return res;
};

export default async function Products() {
  const products = await getData();

  const latestProducts = products.filter(
    (product: any) => product.isLatestProduct === true
  );
  const topCategoryProducts = products.filter(
    (product: any) => product.isTopCategoryProduct === true
  );
  const trendingProducts = products.filter(
    (product: any) => product.isTrendingProduct === true
  );
  const featuredProducts = products.filter(
    (product: any) => product.isFeaturedProduct === true
  );



  return (
    <>
      <div className="mb-10 lg:mb-20">
        <Banner
          title="Home"
          title2="Pages"
          heading="Products"
          subheading="Products"
        />
        <h1 className="text-[30px] 2xl:text-[42px] flex font-bold justify-center mt-10 lg:mt-20 leading-[49.22px] text-left underline-offset-[0.1em] text-[#151875]">
          Trending Products
        </h1>

        <div className="flex justify-center flex-wrap gap-7 lg:gap-16 mt-12">
          {trendingProducts.map((product: any,) => (
            <Link key={product.name} href={`/products/${product.name}`}>
              <TrendingProductsCardComp
                image={
                  product.image
                    ? urlFor(product.image).url()
                    : "default_image_url"
                }
                title={product.name}
                price={product.price}
                originalPrice={product.discountedPrice}
              />
            </Link>
          ))}
        </div>

        <h1 className="text-[30px] 2xl:text-[42px] flex font-bold justify-center mt-10 lg:mt-20 leading-[49.22px] text-left underline-offset-[0.1em] text-[#151875]">
          Top Category
        </h1>
        <div className="flex justify-center flex-wrap gap-7 lg:gap-16 mt-12">
          {topCategoryProducts.map((product: any,) => (
            <Link key={product.name} href={`/products/${product.name}`}>
              <TopCategotiesCard
                image={
                  product.image
                    ? urlFor(product.image).url()
                    : "default_image_url"
                }
                name={product.name}
                price={product.price}
                originalPrice={product.discountedPrice}
              />
            </Link>
          ))}
        </div>

        <h1 className="text-[30px] 2xl:text-[42px] flex font-bold justify-center mt-10 lg:mt-20 leading-[49.22px] text-left underline-offset-[0.1em] text-[#151875]">
          Latest Products
        </h1>
        <div className="flex justify-center flex-wrap gap-7 lg:gap-16 mt-12">
          {latestProducts.map((product: any,) => (
            <Link key={product.name} href={`/products/${product.name}`}>
              <SecondCardComponent
                image={
                  product.image
                    ? urlFor(product.image).url()
                    : "default_image_url"
                }
                title={product.name}
                price={product.price}
                originalPrice={product.discountedPrice}
              />
            </Link>
          ))}
        </div>

        <h1 className="text-[30px] 2xl:text-[42px] flex font-bold justify-center mt-10 lg:mt-20 leading-[49.22px] text-left underline-offset-[0.1em] text-[#151875]">
          Featured Products
        </h1>
        <div className="flex justify-center flex-wrap gap-7 lg:gap-16 mt-12">
          {featuredProducts.map((product: any,) => (
            <Link key={product.name} href={`/products/${product.name}`}>
              <CardComponent
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
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
