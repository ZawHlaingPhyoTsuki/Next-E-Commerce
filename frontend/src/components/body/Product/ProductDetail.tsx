import { Product } from "@/app/types/products.type";
import Image from "next/image";
import React from "react";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className=" flex lg:flex-row flex-col justify-between gap-32 w-full">
      {/* Product Image */}
      <div className=" flex gap-20 justify-between w-full">
        <div className="flex flex-col gap-3 justify-between">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="border-slate-300 rounded-lg border-4 py-4 px-6">
              <Image
                src={product.image}
                width={100}
                height={100}
                alt="image"
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
          ))}
        </div>
        <div className="max-w-full h-full border-slate-300 rounded-lg border-4 py-8 px-12">
          <Image
            src={product.image}
            width={500}
            height={500}
            alt="image"
            style={{
              objectFit: "contain",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>
      </div>

      {/* Product Detail */}
      <div className="x max-w-[500px] flex flex-col gap-6 bg-slate-50">
        <h3 className="text-3xl font-semibold">{product.title}</h3>
        <div>stars</div>
        <p className="text-3xl">$ {product.price.toFixed(2)}</p>
        <p className="text-slate-500">{product.description}</p>
        <hr className="border-slate-500/65 border-1 rounded-full"></hr>
        <p className="text-2xl">Colors: </p>
        <p className="text-2xl">Size: </p>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="flex flex-col gap-5">
          <div>Free</div>
          <div>Return</div>
        </div>
      </div>
    </div>
  );
}
