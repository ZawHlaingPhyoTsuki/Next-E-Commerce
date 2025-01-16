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
    // <div className="flex flex-col justify-between max-w-[280px] max-h-[400px]  xl:max-w-[345px] xl:max-h-[450px]">
    <div className="mx-auto mb-5 flex flex-col gap-3 justify-between max-w-xs bg-white border border-gray-200 rounded-lg shadow-md p-4">
      <div className="bg-slate-100 flex items-center justify-center py-4 px-6 rounded-lg h-[256px] w-[256px]">
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
          <FaStar key={`filled-${i}`} className="size-6 text-[#FFAD38]" />
        ))}
      </div>
    </div>
  );
}
