import { Product } from "@/app/types/products.type";
import ProductDetail from "@/components/body/Product/ProductDetail";
import React from "react";

async function getProduct(id: number) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await res.json();
}

export default async function page({
  params,
}: {
  params: { product: string };
}) {
  // Await params.product before using it
  const productId = parseInt(params.product, 10);
  const product = await getProduct(productId);

  console.log(product);

  return (
    <div className="mt-28 mx-auto flex flex-col gap-20 px-[20px] md:px-[50px] lg:px-[100px] xl:px-[150px] ">
      <ProductDetail product={product} />
    </div>
  );
}
