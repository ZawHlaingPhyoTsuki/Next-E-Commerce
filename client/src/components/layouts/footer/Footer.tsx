import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { SendHorizonal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#323232] text-[#d9d9d9] flex flex-col items-center gap-5 py-5 px-[8vw] pt-[80px] mt-[100px]">
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-5 gap-[80px] mb-8">
        <div className="flex flex-col gap-6 col-span-1 -mt-1">
          <h2 className=" font-bold text-3xl">
            <Link href="/">Tsukuyomi</Link>
          </h2>
          <h3 className="font-semibold text-xl pl-1">Subscribe</h3>
          <div className="pl-1 flex flex-col gap-5">
            <Label htmlFor="discount">Get 10% off your first order</Label>
            <Input
              id="discount"
              placeholder="Enter your email"
              icon={<SendHorizonal />}
              className="p-5 pr-14"
            />
          </div>
        </div>
        <div className=" col-span-1">
          <h3 className="font-semibold text-2xl">Support</h3>
          <div className="flex flex-col gap-2 mt-4">
            <p>Tachileik, Shan State, Myanmar</p>
            <p>tro2233zhp@gmail.com</p>
            <p>+099 39 70 422</p>
          </div>
        </div>
        <div className=" col-span-1">
          <h3 className="font-semibold text-2xl">Account</h3>
          <div className="flex flex-col gap-2 mt-4">
            <p>
              <Link href="/profile">Profile</Link>
            </p>
            <p>
              <Link href="/sign-in">Login</Link> /{" "}
              <Link href="/sign-up">Register</Link>
            </p>
            <p>
              <Link href="/cart">Cart</Link>
            </p>
            <p>
              <Link href="/wishlist">Wishlist</Link>
            </p>
            <p>
              <Link href="/products">Shop</Link>
            </p>
          </div>
        </div>
        <div className=" col-span-1">
          <h3 className="font-semibold text-2xl">Quick Link</h3>
          <div className="flex flex-col gap-2 mt-4">
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>
              <Link href="/contact">Contact</Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 col-span-1">
          <h3 className="font-semibold text-2xl">Social Media</h3>

          <div className="flex flex-row lg:gap-3 justify-between mt-4 ">
            <Link
              href={"https://www.facebook.com/ZawHlaingPhyo.23"}
              className="text-3xl lg:text-2xl"
            >
              <FaFacebookF className="hover:text-[#d2d2d2] text-white" />
            </Link>
            <Link
              href={"https://x.com/ZawHlaingPhyo"}
              className="text-3xl lg:text-2xl"
            >
              <FaTwitter className="hover:text-[#d2d2d2] text-white" />
            </Link>
            <Link
              href={"https://www.instagram.com/tsukuyomi1123/"}
              className="text-3xl lg:text-2xl"
            >
              <FaInstagram className="hover:text-[#d2d2d2] text-white" />
            </Link>
            <Link
              href={"https://github.com/ZawHlaingPhyoTsuki"}
              className="text-3xl lg:text-2xl"
            >
              <FaGithub className="hover:text-[#d2d2d2] text-white" />
            </Link>
          </div>
        </div>
      </div>
      <hr className=" border-t-2 border-gray-400 w-full lg:mt-3 mt-10" />
      <p className="text-zinc-500">
        © Copyright Tsukuyomi {new Date().getFullYear()}. All Right Reversed
      </p>
    </footer>
  );
}
