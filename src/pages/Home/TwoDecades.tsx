
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export const TwoDecades = () => {
  const statsData = [
    {
      number: "82",
      unit: "Lakh + RMT",
      description: "Precast Wall Installed Across India",
      iconSrc: "./aboutus/about_1.png",
    },
    {
      number: "70+",
      unit: "Cities",
      description: "Nationwide Manufacturing Presence",
      iconSrc: "./aboutus/about_2.png",
    },
    {
      number: "4.5",
      unit: "Lakh + MTT",
      description: "Concrete Casted for Infra Projects",
      iconSrc: "./aboutus/about_3.png",
    },
    {
      number: "15+",
      unit: "Precast Products",
      description: "Modular Solutions for Every Sector",
      iconSrc: "./aboutus/about_4.png ",
    },
  ];

  return (
    <section className="relative w-full py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="font-['Mulish',Helvetica] font-extrabold text-[#032534] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] leading-tight">
            Two Decades of Precast Innovation
          </h2>
          <p className="font-['Mulish',Helvetica] font-semibold text-[#1f8ccc] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] leading-normal mt-4">
            Transforming infrastructure with faster, smarter, and stronger
            precast solutions
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-4 sm:gap-0">
          {statsData.map((stat, index) => (
            <React.Fragment key={index}>
              <Card className="w-full sm:w-[300px] md:w-[350px] lg:w-[382px] h-auto min-h-[250px] lg:h-[290px] rounded-[14px] border-none shadow-none">
                <CardContent className="p-4 sm:p-0 relative h-full flex flex-col items-center justify-center">
                  <div className="mt-0 sm:mt-[25px] text-center">
                    <span className="font-['Mulish',Helvetica] font-black text-[#1f8ccc] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84.8px] leading-tight">
                      {stat.number}
                    </span>
                    <span className="font-['Mulish',Helvetica] font-black text-[#032534] text-lg sm:text-xl md:text-2xl leading-tight">
                      {" "}
                      {stat.unit}
                    </span>
                  </div>
                  <img
                    className="w-[60px] h-[60px] sm:w-[76px] sm:h-[76px] mt-6 sm:mt-[49px]"
                    alt="Component icon"
                    src={stat.iconSrc}
                  />
                  <p className="mt-4 sm:mt-6 lg:mt-10 lg:relative lg:bottom-[25px] px-4 sm:px-0 font-['Mulish',Helvetica] font-semibold text-[#032534] text-sm sm:text-base lg:text-lg text-center leading-normal">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
              {index < statsData.length - 1 && (
                <div className="hidden lg:block w-[4px] h-[172px] bg-blue-300 my-auto" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};