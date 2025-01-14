import React from "react";
import Tag from "./Tag";
import { Button } from "../ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductsPage() {
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
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index}>
            <ProductCard
              item={{
                name: "The north coat",
                price: 260,
                originalPrice: 360,
                image: "/image.png",
                star: 5,
              }}
            />
          </div>
        ))}
      </div>
      <Button className="bg-red-500 hover:bg-red-700 w-[235px] h-[56px] mx-auto">
        View All Products
      </Button>
    </section>
  );
}
