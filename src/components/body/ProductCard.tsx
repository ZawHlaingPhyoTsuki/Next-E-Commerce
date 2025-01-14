import React from "react";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";

interface ItemProps {
  item: {
    name: string;
    price: number;
    originalPrice: number;
    star: number;
    image: string;
  };
}

export default function ProductCard({ item }: ItemProps) {

  return (
    <div className="flex flex-col justify-between w-[345px] h-[450px]">
      <div className="bg-slate-100 flex items-center justify-center w-[345px] h-[315px] rounded-lg">
        <Image src={item.image} alt={item.name} width={190} height={190} />
      </div>
      <h5 className="text-2xl font-medium">{item.name}</h5>
      <div className="flex items-center gap-3">
        <p className="text-red-500 text-xl font-medium ">$ {item.price}</p>
        <p className="text-slate-500 text-lg line-through font-medium">
          $ {item.originalPrice}
        </p>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: item.star }, (_, i) => (
          <FaStar key={`filled-${i}`} className="size-6 text-[#FFAD38]"/>
        ))}
      </div>
    </div>
  );
}
