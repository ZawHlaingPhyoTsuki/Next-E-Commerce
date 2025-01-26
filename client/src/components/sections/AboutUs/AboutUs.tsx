import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="mx-auto px-[20px] md:px-[50px] lg:pr-0 lg:pl-[100px] xl:pl-[150px]">
      <div className="flex flex-col items-center lg:flex-row w-full">
        {/* Content */}
        <div className="flex flex-col gap-6 lg:gap-12 self-center w-full lg:w-1/2 lg:pr-10 mb-20 lg:mb-0">
          <h1 className="text-6xl xl:text-7xl font-semibold text-center lg:text-left">
            Our Story
          </h1 >
          <div className="mx-auto w-full flex flex-col gap-6 tracking-wider">
            <p className="text-xl xl:text-2xl font-sans mt-2 indent-16 lg:indent-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              maxime quaerat, harum molestiae officia eligendi fugiat nostrum
              saepe repudiandae iste sint cum a. Labore sapiente dignissimos
              soluta ullam debitis. Atque.
            </p>
            <p className="text-xl xl:text-2xl font-sans indent-16 lg:indent-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium facere et quis, earum blanditiis corrupti omnis magnam
              reprehenderit pariatur labore?
            </p>
          </div>
        </div>
        {/* Image */}
        <div className="w-full lg:w-1/2 mb-auto">
          <Image
            src="/images/Pasted image.png"
            width={1000}
            height={800}
            alt="image"
            className="ml-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
