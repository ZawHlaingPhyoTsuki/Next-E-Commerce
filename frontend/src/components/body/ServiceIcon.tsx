import React from "react";
import { IconType } from "react-icons";

interface ServiceIconProps {
  data: {
    icon: IconType;
    number: number;
    desc: string;
  };
}

export default function ServiceIcon({ data }: ServiceIconProps) {
  return (
    <div className="flex flex-col gap-4 items-center border-2 border-slate-800/20 rounded-lg pt-10 pb-4 group-hover:border-none group hover:bg-red-500 px-4 transition-all duration-200">
      <div className=" flex items-center justify-center h-20 w-20 bg-slate-500/60 group-hover:bg-white/35 rounded-full p-2">
        <div className="text-4xl bg-black rounded-full p-3 text-white group-hover:text-black group-hover:bg-white">
          {/* <LiaShippingFastSolid className="text-white" /> */}
          <data.icon />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center mb-5">
        <h3 className="font-semibold text-3xl group-hover:text-white">{data.number}k</h3>
        <p className="text-slate-500 text-lg group-hover:text-white">{data.desc}</p>
      </div>
    </div>
  );
}
