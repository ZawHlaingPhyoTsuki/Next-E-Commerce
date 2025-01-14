import Link from "next/link";
import React from "react";

export default function AdBar() {
  return (
    <div className="bg-black py-[6px]">
      <div className="w-[80%] mx-auto flex items-center justify-between text-[#d9d9d9] text-xs p-2 ">
        <div></div>
        <div className="lg:-mr-24 font-semibold">
          Summer Sale For All Swimsuits And Free Express Delivery - OFF 50%!
          <Link href="/" className="font-bold underline px-2 cursor-pointer text-sm">
            {" "}
            ShopNow
          </Link>
        </div>
        <div className=" flex items-center gap-2 ">
          <p>English</p>
          <span>{/* <IoIosArrowDown className="text-sm" /> */}</span>
        </div>
      </div>
    </div>
  );
}
