import { getProduct } from "@/lib/services";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface ProductDetailProps {
  params: { id: string };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailProps) {
  const product = await getProduct(Number(params.id));
  console.log(product);
  const rating = product.rating ? Math.ceil(product.rating) : 0;

  return (
    // <ProductLayout noLayout>
    <div className="flex lg:flex-row flex-col justify-between gap-32 w-full px-36 mt-20">
      {/* Product Image */}
      <div className="flex gap-20 justify-between w-full">
        <div className="flex flex-col gap-3 justify-between">
          {/* Displaying thumbnails of images */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="border-slate-300 rounded-lg border-4 py-4 px-6"
            >
              <Image
                src="/image.png" // Use image from the array
                width={100}
                height={100}
                alt={`Thumbnail ${index + 1}`}
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
          ))}
        </div>
        <div className="w-full h-full py-8 px-12">
          {/* Displaying the main product image */}
          <Image
            src="/image.png" // Use the first image in the array
            width={500}
            height={500}
            alt="Product Image"
            style={{
              objectFit: "contain",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            className=" mx-auto"
          />
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-[500px] flex flex-col gap-6 ">
        <h3 className="text-3xl font-semibold">{product.title}</h3>
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
        <p className="text-3xl">$ {product.price}</p>
        <p className="text-slate-500">{product.description}</p>
        <hr className="border-slate-500/65 border-1 rounded-full"></hr>

        {/* Color and Size Selection */}
        <p className="text-2xl">Colors: </p>
        <p className="text-2xl">Size: </p>
        <div className="flex flex-row justify-between items-center">
          <QuantityBtn />
          <Button className="bg-red-500 text-xl border-2 border-red-500 hover:bg-red-700 hover:border-red-700 text-white font-semibold py-6 px-8">
            Buy Now
          </Button>
          <Button variant={"outline"} className="py-6">
            <Heart />
          </Button>
        </div>
        <div className="flex flex-col gap-5">
          <div>Free</div>
          <div>Return</div>
        </div>
      </div>
    </div>
    // </ProductLayout>
  );
}

const QuantityBtn = () => {
  return (
    <div className="flex gap-3 justify-between items-center border-2 rounded-lg border-slate-500 ">
      <Button
        variant={"outline"}
        className="text-3xl border-y-0 border-l-0 border-r-2 border-slate-500 rounded-r-none py-6 px-4"
      >
        -
      </Button>
      <div className="text-xl min-w-[40px] text-center">1</div>
      <Button className="bg-red-500 text-3xl border-2 border-red-500 hover:bg-red-700 hover:border-red-700  rounded-l-none py-6 px-4">
        +
      </Button>
    </div>
  );
};
