import ProductCards from "@/components/sections/Product/ProductCards";
import React from "react";

import { getAllProducts } from "@/lib/services";


export default async function page() {
  const { products } = await getAllProducts();
  // console.log(products);

  return (
    <>
      <ProductCards products={products} />
    </>
  );
}

