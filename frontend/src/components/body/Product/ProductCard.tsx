import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { Product } from "@/app/types/products.type";

interface ItemProps {
  item: Product;
}

export default function ProductCard({ item }: ItemProps) {
  // Safely calculate the rating
  const rating = item.rating?.rate ? Math.ceil(item.rating.rate) : 0;

  // Provide an alt text for the image. Default to 'Product image' if title is missing
  const altText = item?.title || "Product image";

  return (
    <Link href={`products/${item.id}`}>
      <div className="mx-auto mb-5 flex flex-col gap-3 justify-between max-w-xs bg-white border border-gray-200 rounded-lg shadow-md p-4">
        <div className="flex items-center justify-center py-4 px-6 rounded-lg h-[256px] w-[256px]">
          {/* Ensure alt text is available */}
          <Image
            src={item.image}
            alt={altText}
            width={190}
            height={190}
            style={{
              objectFit: "contain",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>

        <h5 className="text-2xl font-medium">{item.category}</h5>
        <div className="flex items-center gap-3">
          <p className="text-red-500 text-xl font-medium ">$ {item.price}</p>
          <p className="text-slate-500 text-lg line-through font-medium">
            $ {(item.price * 1.5).toFixed(2)}
          </p>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: rating }, (_, i) => (
            <FaStar key={`filled-${i}`} className="size-6 text-[#FFAD38]" />
          ))}
        </div>
      </div>
    </Link>
  );
}
