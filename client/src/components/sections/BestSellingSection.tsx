import React from "react";
import Tag from "./Tag";
import { Button } from "../ui/button";
import { ProductResponse } from "@/types/products.type";
import {ProductCard} from "./Product/ProductCards";
import Link from "next/link";
import { getAllProducts } from "@/lib/services";



export default async function BestSelling() {
  const {products} = await getAllProducts(10);
  // console.log(products);

  return (
    <section className="flex flex-col gap-16 border-b-2 border-b-slate-200  pb-20">
      <div className="flex flex-col gap-5">
        <Tag>This Month</Tag>
        <div className="flex justify-between ">
          <h1 className="text-[40px] font-semibold">Best Selling Products</h1>
          <Button asChild className="w-[160px] h-[56px] bg-red-500 hover:bg-red-700 text-xl">
            <Link href="/products" >View All</Link>
          </Button>
        </div>
      </div>
      <ul className="w-full flex gap-10 overflow-x-auto scrollbar-customize">
        {products.map((item, index) => (
          <li className="w-[300px] flex-shrink-0" key={item.title + index}>
            <ProductCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
