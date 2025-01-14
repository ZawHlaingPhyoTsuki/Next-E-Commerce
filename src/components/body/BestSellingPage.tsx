import React from "react";
import Tag from "./Tag";
import { Button } from "../ui/button";
import ProductCard from "./ProductCard";
import { products } from "@/lib/data";

export default function BestSelling() {
  

  return (
    <section className="flex flex-col gap-16 border-b-2 border-b-slate-200  pb-20">
      <div className="flex flex-col gap-5">
        <Tag>This Month</Tag>
        <div className="flex justify-between ">
          <h1 className="text-[40px] font-semibold">Best Selling Products</h1>
          <Button className="w-[160px] h-[56px] bg-red-500 hover:bg-red-700 text-xl">
            View All
          </Button>
        </div>
      </div>
      <ul className="flex gap-10 overflow-x-auto scrollbar-customize ">
        {products.map((item, index) => (
          <li key={item.name + index}>
            <ProductCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
