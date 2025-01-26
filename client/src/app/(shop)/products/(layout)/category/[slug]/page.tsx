import ProductCards from "@/components/sections/Product/ProductCards";
import { getProductByCategory } from "@/lib/services";
import React from "react";

export default async function page({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const { slug } = await params;
  const { products } = await getProductByCategory(slug);
//   console.log(products);
  return (
    <div className="col-span-4">
      <ProductCards products={products} />
    </div>
  );
}
