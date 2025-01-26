import React from "react";
import { GoShieldCheck } from "react-icons/go";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";



export default function ServiceIcons() {
  return (
    <div className="flex gap-5 justify-evenly mt-20 flex-wrap w-full">
      <div className="flex flex-col gap-4 items-center">
        <div className=" flex items-center justify-center h-20 w-20 bg-slate-500/60 rounded-full p-2">
          <div className="text-4xl bg-black rounded-full p-3">
            <LiaShippingFastSolid className="text-white" />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center mb-5">
          <h3 className="font-semibold text-xl">FREE AND FAST DELIVERY</h3>
          <p className="text-slate-500 text-sm">
            Free delivery for all orders over $140
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className=" flex items-center justify-center h-20 w-20 bg-slate-500/60 rounded-full p-2">
          <div className="text-4xl bg-black rounded-full p-3">
            <TfiHeadphoneAlt className="text-white" />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center mb-5">
          <h3 className="font-semibold text-xl">24/7 CUSTOMER SERVICE</h3>
          <p className="text-slate-500 text-sm">
            Friendly 24/7 customer support
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className=" flex items-center justify-center h-20 w-20 bg-slate-500/60 rounded-full p-2">
          <div className="text-4xl bg-black rounded-full p-3">
            <GoShieldCheck className="text-white" />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center mb-5">
          <h3 className="font-semibold text-xl">MONEY BACK GUARANTEE</h3>
          <p className="text-slate-500 text-sm">
            We return money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
}
