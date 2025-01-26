import React from "react";
import Tag from "./Tag";
import Image from "next/image";
import ServiceIcons from "./ServiceIcons";

type TextProps = {
  text: { heading: string; desc: string };
  className?: string;
};

const Text = ({ text, className }: TextProps) => {
  return (
    // max-xl:-translate-x-10 max-xl:translate-y-5
    <div
      className={`${className} scale-75 xl:scale-100 absolute bottom-0 text-white`}
    >
      <h3 className="font-semibold text-3xl">{text.heading}</h3>
      <div className="hidden md:flex flex-col gap-3">
        <p>{text.desc}</p>
        <p className="text-lg">
          <span className="border-b-2 border-slate-500">Shop Now</span>
        </p>
      </div>
    </div>
  );
};

const text = [
  { heading: "PlayStation 5", desc: "The future of entertainment is here" },
  {
    heading: "Woman's Collections",
    desc: "Featured woman collections that give you another vibe.",
  },
  { heading: "Speaker", desc: "Amazon wireless speakers" },
  { heading: "Perfume", desc: "GUCCI INTENSE OUD EDP" },
];

export default function FeaturedSection() {
  return (
    <section className="flex flex-col gap-16 pb-20">
      <div className="flex flex-col gap-5">
        <Tag>Featured</Tag>
        <h1 className="text-[40px] font-semibold">New Arrival</h1>
      </div>

      {/* Bento Products */}
      <div className="grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-10 w-full">
        <div className=" col-span-2 row-span-2 rounded-lg relative lg:col-span-2 lg:row-span-2 bg-black flex items-center justify-center">
          <Image
            src="/images/ps4.png"
            alt="image"
            width={500}
            height={500}
            className="mx-auto mt-auto"
            priority
          />
          <Text className="-left-2 xl:left-10 bottom-4 xl:bottom-6 " text={text[0]} />
        </div>

        <div className="rounded-lg relative col-span-2 lg:col-span-2 lg:col-start-3 bg-[#0D0D0D] flex items-center justify-center ">
          <Image
            src="/images/woman.png"
            alt="woman"
            width={500}
            height={500}
            className="ml-auto"
            style={{ width: "auto", height: "100%" }}
            priority
          />
          <Text className="-left-5 xl:left-10 bottom-4 xl:bottom-6 " text={text[1]} />
        </div>

        <div className="rounded-lg relative row-start-4 lg:col-start-3 lg:row-start-2 bg-gradient-to-tl from-[#151515] via-[#252525] to-[#151515] flex items-center justify-center p-4 lg:p-6 xl:p-16">
          <Image
            src="/images/speaker.png"
            alt="speaker"
            width={500}
            height={500}
            style={{ objectFit: "contain", width: "auto", height: "100%" }}
            priority
          />
          <Text className="left-0 xl:left-8 bottom-4 xl:bottom-6" text={text[2]} />
        </div>

        <div className="rounded-lg relative row-start-4 lg:col-start-4 lg:row-start-2  bg-gradient-to-tr from-[#151515] via-[#2b2b2b] to-[#151515] flex items-center justify-center p-4 lg:p-6 xl:p-16">
          <Image
            src="/images/perfume.png"
            alt="perfume"
            width={500}
            height={500}
            style={{ objectFit: "contain", width: "auto", height: "100%" }}
            priority
          />
          <Text className=" left-0 xl:left-8 bottom-4 xl:bottom-6" text={text[3]} />
        </div>
      </div>

      <ServiceIcons />
    </section>
  );
}
