import React from "react";
import { Product } from "@/types/products.type";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface ProductCardsProps {
  products: Product[];
}

export default function ProductCards({ products }: ProductCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product, index) => (
        <React.Fragment key={index}>
          <ProductCard item={product} />
        </React.Fragment>
      ))}
    </div>
  );
}

interface ItemProps {
  item: Product;
}

export function ProductCard({ item }: ItemProps) {
  // Safely calculate the rating and use 5 stars if the rating is undefined
  const rating = item.rating ? Math.ceil(item.rating) : 0; // Assuming rating is a number, not an object
  const altText = item?.title || "Product image"; // Alt text fallback

  // console.log(item.images[0]);

  return (
    <Link href={`/products/${item.id}`}>
      <div className="mx-auto mb-5 flex flex-col gap-3 justify-between max-w-full bg-white border border-gray-200 rounded-lg shadow-md p-4">
        <div className="flex items-center justify-center py-4 px-6 rounded-lg max-h-[256px] max-w-[256px] mx-auto">
          {/* Ensure alt text is available */}
          <Image
            src="/images/image.png"
            alt={altText}
            width={140}
            height={140}
            style={{
              objectFit: "contain",
              width: "auto",
              height: "auto",
            }}
            className="mx-auto"
          />
        </div>

        <h5 className="text-2xl font-medium line-clamp-1 max-w-64">
          {item.title}
        </h5>
        <div className="flex items-center gap-3">
          <p className="text-red-500 text-xl font-medium ">$ {item.price}</p>
          <p className="text-slate-500 text-lg line-through font-medium">
            $ {(item.price * 1.5).toFixed(2)}
          </p>
        </div>

        {/* Star Ratings */}
        <div className="flex gap-1">
          {Array.from({ length: rating }, (_, i) => (
            <FaStar key={`filled-${i}`} className="size-6 text-[#FFAD38]" />
          ))}
          {/* Optional: If you want to add empty stars for missing ratings */}
          {Array.from({ length: 5 - rating }, (_, i) => (
            <FaStar key={`empty-${i}`} className="size-6 text-[#d3d3d3]" />
          ))}
        </div>
      </div>
    </Link>
  );
}
