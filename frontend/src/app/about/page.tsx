import React from "react";
import AboutUs from "../../components/body/AboutUs/AboutUs";
import ServiceIcons from "../../components/body/ServiceIcons";
import { aboutData } from "../../lib/data";
import ServiceIcon from "../../components/body/ServiceIcon";
import Team from "@/components/body/AboutUs/Team";

export default function page() {
  return (
    <main className="flex flex-col items-center gap-20 min-h-screen mt-10">
      <AboutUs />

      <div className="w-full flex flex-col items-center px-[20px] md:px-[50px] lg:px-[100px] xl:px-[150px]">
        {/* Icons */}
        <div className="w-full mt-14 grid grid-cols-2 lg:grid-cols-4 gap-8  place-content-between">
          {aboutData.map((data, index) => (
            <React.Fragment key={data.desc + index}>
              <ServiceIcon data={data} />
            </React.Fragment>
          ))}
        </div>
        <Team />
        <ServiceIcons />
      </div>
    </main>
  );
}
