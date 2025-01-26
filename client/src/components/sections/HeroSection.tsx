import Image from "next/image";
import React from "react";
import { categories } from "../../lib/data";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse mt-10 md:mt-0 md:grid md:grid-cols-5">
      <div className="col-span-1 border-r-2 border-r-slate-200 pt-10">
        <ul className="text-sm lg:text-xl">
          {categories.map((category) => (
            <li className="p-2 py-3 cursor-pointer" key={category}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-4 md:pt-10 md:pl-10 ">
        <Image
          src="/images/image.svg"
          width={1200}
          height={450}
          alt="image"
          priority
        />
      </div>
    </section>
  );
}
