"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/lib/data";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIncrement = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const handleDecrement = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center mt-10 mb-20">
      <Carousel>
        <CarouselContent className="w-[500px] ">
          {teamMembers.map((member, index) => (
            <CarouselItem key={member.name + index} className="mx-auto">
              <TeamProfile key={member.name} {...member} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div onClick={handleDecrement}>
          <CarouselPrevious />
        </div>
        <div onClick={handleIncrement}>
          <CarouselNext />
        </div>
      </Carousel>

      <div className="flex gap-2">
        {teamMembers.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              activeIndex === index ? "bg-black" : "bg-slate-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

interface TeamProps {
  name: string;
  role: string;
  image: string;
  links: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}

function TeamProfile(data: TeamProps) {
  return (
    <div className="flex flex-col gap-6 w-[370px] h-[560px] mx-auto mt-20">
      <div className="relative flex flex-col items-center h-[430px] bg-slate-200/55 overflow-hidden pt-10">
        <Image
          src={data.image}
          width={240}
          height={300}
          alt=""
          style={{ width: "auto", height: "auto" }}
          loading="lazy"
          className="mx-auto mt-auto"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold tracking-widest">{data.name}</h2>
        <p className="text-slate-500">{data.role}</p>
        <ul className="flex gap-4 text-xl mt-2">
          <li>
            <Link href={data.links.facebook} target="_blank">
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link href={data.links.twitter} target="_blank">
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link href={data.links.linkedin} target="_blank">
              <FaLinkedin />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
