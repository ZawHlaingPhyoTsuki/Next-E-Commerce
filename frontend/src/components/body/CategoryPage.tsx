import React from "react";
import { Button } from "../ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { ElectronicsG } from "../../lib/data";
import Tag from "./Tag";

export default function Category() {
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
          {ElectronicsG.map((item) => (
            <li key={item.name}>
              <Button
                variant={"outline"}
                className="flex flex-col items-center justify-center  w-[220px] h-[190px] hover:bg-red-500 hover:text-white border-slate-300 hover:border-none [&_svg]:size-14 pt-5"
              >
                <item.icon />
                <h3 className="text-xl py-4">{item.name}</h3>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
