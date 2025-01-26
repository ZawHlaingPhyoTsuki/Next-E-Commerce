"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Menu() {
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <ul className="flex gap-8 text-lg">
      <Link
        href="/"
        className={`${
          pathname === "/" && "border-b-2 border-slate-800 font-bold"
        }`}
      >
        Home
      </Link>
      <Link
        href="/contact"
        className={`${
          pathname === "/contact" && "border-b-2 border-slate-800 font-bold"
        }`}
      >
        Contact
      </Link>
      <Link
        href="/about"
        className={`${
          pathname === "/about" && "border-b-2 border-slate-800 font-bold"
        }`}
      >
        About
      </Link>
      <Link
        href="/sign-up"
        className={`${
          pathname === "/sign-up" && "border-b-2 border-slate-800 font-bold"
        }`}
      >
        Sign up
      </Link>
    </ul>
  );
}
