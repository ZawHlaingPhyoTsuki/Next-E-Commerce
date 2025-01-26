"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MenuDropDown() {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu className="size-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href="/"
            className={`${
              pathname === "/" && "border-b-2 border-slate-800 font-bold"
            }`}
          >
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact" && "border-b-2 border-slate-800 font-bold"
            }`}
          >
            Contact
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/about"
            className={`${
              pathname === "/about" && "border-b-2 border-slate-800 font-bold"
            }`}
          >
            About
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/sign-up"
            className={`${
              pathname === "/sign-up" && "border-b-2 border-slate-800 font-bold"
            }`}
          >
            Sign up
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
