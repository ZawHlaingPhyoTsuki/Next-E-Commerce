import React from "react";
import { Input } from "../ui/input";
import { Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between mx-[150px] pt-10 pb-4">
      <Link href="/" className="font-bold text-3xl">
        Tsukuyomi
      </Link>
      <div>
        <Menu />
      </div>
      <div className="flex gap-5 items-center justify-between">
        <div className="relative">
          <Input
            placeholder="What are you looking for?"
            className="bg-slate-100 cursor-pointer outline-none border-none "
          />
          <Search className="absolute top-2 right-3 size-5 cursor-pointer" />
        </div>
        <div className="cursor-pointer">
          <Heart />
        </div>
        <div className="cursor-pointer">
          <ShoppingCart />
        </div>
      </div>
    </nav>
  );
}
