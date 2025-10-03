import Banner from "@/app/components/Banner";
import ProductDetailComp from "@/app/components/ProductDetailComp";
import { client } from "@/sanity/lib/client";

const getData = async () => {
  const res = await client.fetch(`*`);
  return res;
};

export default async function Product({
  params,
}: {
  params: { product: string };
}) {
  const products = await getData();
  const decodedProductName = decodeURIComponent(params.product);

  const selectedProduct = products.find(
    (product: any) => product.name === decodedProductName
  );

  if (!selectedProduct) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="overflow-hidden mb-20 lg:mb-40">
      <Banner
        title="Home"
        title2="Pages"
        heading={selectedProduct.name}
        subheading="Product Details"
      />
      <ProductDetailComp
        image={selectedProduct.image}
        title={selectedProduct.name}
        price={selectedProduct.price}
        discountedPrice={selectedProduct.discountedPrice}
        description={selectedProduct.description}
        stock={selectedProduct.stockLevel}
      />
    </div>
  );
}
