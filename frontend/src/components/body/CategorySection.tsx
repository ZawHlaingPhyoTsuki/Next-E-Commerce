import React from "react";
import { Button } from "../ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import Tag from "./Tag";
import Link from "next/link";
import { getCatogories } from "@/lib/services";


export default async function Category() {
  const categories = await getCatogories();
  console.log(categories);

  return (
    <section className="flex flex-col gap-16 border-b-2 border-b-slate-200 pb-20">
      <div className="flex flex-col gap-5">
        <Tag>Categories</Tag>
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
      <div>
        <ul className="flex gap-10 overflow-x-auto scrollbar-customize">
          {categories.map((item) => (
            <li key={item.slug}>
              <Button
                variant={"outline"}
                asChild
                className="flex flex-col items-center justify-center  w-[220px] h-[190px] hover:bg-red-500 hover:text-white border-slate-300 hover:border-none [&_svg]:size-14 pt-5"
              >
                <Link href={`/products/category/${item.slug}`}>
                  {/* <item.icon /> */}
                  <h3 className="text-xl py-4">{item.name}</h3>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
