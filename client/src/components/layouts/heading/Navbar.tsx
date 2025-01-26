import React from "react";
import { Input } from "../../ui/input";
import { Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Menu from "./Menu";
import MenuDropDown from "./MenuDropDown";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-[20px] md:px-[50px] lg:px-[100px] xl:px-[150px] pt-10 pb-4">
      <Link href="/" className="font-bold text-2xl md:text-3xl">
        Tsukuyomi
      </Link>
      <div className="hidden lg:block">
        <Menu />
      </div>
      <div className="flex gap-5 items-center justify-between">
        <div className="relative">
          <Input
            placeholder="What are you looking for?"
            className="bg-slate-100 cursor-pointer outline-none border-none hidden sm:block"
          />
          <Search className=" sm:absolute top-2 right-3  sm:size-5 cursor-pointer" />
        </div>
        <Link href="/wishlist" className="cursor-pointer hover:text-red-500 ">
          <Heart />
        </Link>
        <Link href="/cart" className="cursor-pointer hover:text-red-500">
          <ShoppingCart />
        </Link>
        <div className=" lg:hidden flex items-center justify-center">
          <MenuDropDown />
        </div>
      </div>
    </nav>
  );
}
