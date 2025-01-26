import React from "react";
import Tag from "@/components/sections/Tag";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";
import ProductCards from "./ProductCards";
import { ProductResponse } from "@/types/products.type";

async function getProducts(): Promise<ProductResponse> {
  const res = await fetch('https://dummyjson.com/products');
  return await res.json();
}

export default async function ProductsSection() {
  const {products} = await getProducts();
  // console.log(products);

  return (
    <section className="flex flex-col gap-16 border-b-2 border-b-slate-200  pb-20">
      <div className="flex flex-col gap-5">
        <Tag>Out Products</Tag>
        <div className="flex items-center justify-between">
          <h1 className="text-[40px] font-semibold">Browse By Category</h1>
          <div className="flex gap-3">
            <Button
              className="rounded-full size-12 bg-slate-100 hover:bg-slate-200 border-none"
              variant={"outline"}
            >
              <MoveLeft />
            </Button>
            <Button
              className="rounded-full size-12 bg-slate-100 hover:bg-slate-200 border-none"
              variant={"outline"}
            >
              <MoveRight />
            </Button>
          </div>
        </div>
      </div>

      {/* Products */}
      <ProductCards products={products} />

      <Button
        asChild
        className="bg-red-500 hover:bg-red-700 w-[235px] h-[56px] mx-auto text-xl"
      >
        <Link href="/products">View All Products</Link>
      </Button>
    </section>
  );
}
