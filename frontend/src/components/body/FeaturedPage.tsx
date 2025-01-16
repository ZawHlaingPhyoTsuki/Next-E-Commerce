import React from "react";
import Tag from "./Tag";
import Image from "next/image";
import ServiceIcons from "./ServiceIcons";

export default function FeaturedPage() {
  return (
    <section className="flex flex-col gap-16  pb-20">
      <div className="flex flex-col gap-5">
        <Tag>Featured</Tag>
        <h1 className="text-[40px] font-semibold">New Arrival</h1>
      </div>
      {/* Bento Products */}
      <div className="grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-10 w-full">
        <div className="rounded-lg col-span-2 row-span-2 relative lg:col-span-2 lg:row-span-2 bg-black flex flex-col justify-end">
          <Image
            src="/ps4.png"
            alt="image"
            width={510}
            height={510}
            className="mx-auto mt-auto"
          />
          {/* text */}
          <div className="scale-75 xl:scale-100 max-xl:-translate-x-10 max-xl:translate-y-5 absolute text-white flex flex-col gap-3 m-10">
            <h3 className="font-semibold text-3xl">PlayStation 5</h3>
            <p>
              Black and White version of the PS5
              <br />
              coming out on sale.
            </p>
            <p className=" text-lg">
              <span className="border-b-2 border-slate-500">Shop Now</span>
            </p>
          </div>
        </div>
        <div className=" rounded-lg relative col-span-2 lg:col-span-2 lg:col-start-3 bg-[#0D0D0D]">
          <Image
            src="/woman.png"
            alt="woman"
            width={430}
            height={280}
            className="ml-auto"
          />
          {/* text */}
          <div className="scale-75 xl:scale-100 max-xl:-translate-x-10 max-xl:translate-y-5 absolute text-white flex flex-col gap-3 m-10 -bottom-2">
            <h3 className="font-semibold text-2xl">Women's Collections</h3>
            <p>
              Features woman collections that
              <br />
              gives you another vibe
            </p>
            <p className="text-lg">
              <span className="border-b-2 border-slate-500">Shop Now</span>
            </p>
          </div>
        </div>
        <div className="rounded-lg relative row-start-4 lg:col-start-3 lg:row-start-2 bg-gradient-to-tl from-[#151515] via-[#252525] to-[#151515] flex items-center justify-center ">
          <Image src="/speaker.png" alt="speaker" width={190} height={220} />
          {/* text */}
          <div className="scale-75 xl:scale-100 max-xl:-translate-x-5 max-xl:translate-y-5 absolute text-white flex flex-col gap-3 m-10 -left-2 -bottom-3">
            <h3 className="font-semibold text-2xl">Speakers</h3>
            <p>Amazon wireless speakers</p>
            <p className=" text-lg">
              <span className="border-b-2 border-slate-500">Shop Now</span>
            </p>
          </div>
        </div>
        <div className="rounded-lg relative row-start-4  lg:col-start-4 lg:row-start-2 flex items-center justify-center  bg-gradient-to-tr from-[#151515] via-[#2b2b2b] to-[#151515]">
          <Image src="/perfume.png" alt="perfume" width={200} height={200} />
          {/* text */}
          <div className="scale-75 xl:scale-100 max-xl:-translate-x-5 max-xl:translate-y-5 absolute text-white flex flex-col gap-3 m-10 -left-2 -bottom-3">
            <h3 className="font-semibold text-2xl">Perfume</h3>
            <p>GUCCI INTENSE OUD EDP</p>
            <p className=" text-lg">
              <span className="border-b-2 border-slate-500">Shop Now</span>
            </p>
          </div>
        </div>
      </div>
      <ServiceIcons />
    </section>
  );
}

// 151515
