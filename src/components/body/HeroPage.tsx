import Image from "next/image";
import React from "react";
import { categories } from "@/lib/data";

export default function Hero() {
  return (
    <section className=" grid grid-cols-5">
      <div className="col-span-1 border-r-2 border-r-slate-200 pt-10">
        <ul className="text-xl">
          {categories.map((category) => (
            <li className="p-2 py-3 cursor-pointer" key={category}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-4 pt-10 pl-10">
        <Image src="/image.svg" width={1200} height={400} alt="image" />
      </div>
    </section>
  );
}
