
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export const OurJourneySection = () => {
  const [selectedYear, setSelectedYear] = useState(2005);

  const timelinePoints = [
    {
      year: "2005",
      yearNum: 2005,
      position: "left-[704px] top-0",
      highlighted: true,
      label: "The Foundation Surat, Gujarat",
    },
    {
      year: "2009",
      yearNum: 2009,
      position: "left-[948px] top-[30px]",
      highlighted: false,
    },
    {
      year: "2010",
      yearNum: 2010,
      position: "left-[1154px] top-[94px]",
      highlighted: false,
    },
    {
      year: "2011",
      yearNum: 2011,
      position: "left-[1321px] top-48",
      highlighted: false,
    },
    {
      year: "2012",
      yearNum: 2012,
      position: "left-[1430px] top-[331px]",
      highlighted: false,
      isBold: true,
    },
  ];

  const descriptionList = [
    {
      year: 2005,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
    },
    {
      year: 2009,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      year: 2010,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
    {
      year: 2011,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
    {
      year: 2012,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
  ];

  const handleYearClick = (year: number) => {
    setSelectedYear(year);
  };

  const getSelectedDescription = () => {
    const description = descriptionList.find(item => item.year === selectedYear);
    return description ? description.text : "";
  };

  return (
    <section className="relative w-full py-6 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Section Heading */}
          <h2 className="font-extrabold text-[#032534] text-3xl sm:text-4xl lg:text-[42px] leading-tight mb-4">
            Our Journey
          </h2>

          {/* Subtitle */}
          <div className="font-semibold text-[#1f8ccc] text-xl sm:text-2xl lg:text-[32px] mb-3">
            Precision. Progress. Precast — The Journey of Trilok Group
          </div>

          {/* Secondary Subtitle */}
          <div className="font-semibold text-[#032534] text-lg sm:text-xl lg:text-2xl mb-6">
            From One City to 70+ Locations Across India
          </div>

          {/* Information Card */}
          <Card className="w-full max-w-[787px] mb-8 border border-[#032534] shadow-[0_0_24px_#0000000f] rounded-xl">
            <CardContent className="p-4 sm:p-6">
              <p className="font-medium text-[#032534] text-base sm:text-lg">
                TRILOK Cement Products was born in Surat, with a bold vision —
                to revolutionize India&apos;s infrastructure through durable
                precast innovation.
              </p>
            </CardContent>
          </Card>

          {/* Foundation Label */}
          <div className="text-base sm:text-lg lg:text-xl mb-8">
            <span className="font-bold text-[#1f8ccc]">The Foundation </span>
            <span className="font-black text-[#1f8ccc]">Surat, Gujarat</span>
          </div>

          {/* Timeline - Only visible on lg and up */}
          <div className="relative hidden lg:block w-full h-[420px] mb-8">
            <img
              className="w-full max-w-[1489px] h-[420px] mx-auto relative"
              alt="Timeline path"
              src="./aboutus/obj_1.svg"
            />

            {/* Timeline Points */}
            {timelinePoints.map((point, index) => {
              const isSelected = selectedYear === point.yearNum;
              return (
                <div
                  key={`timeline-point-${index}`}
                  className={`absolute w-[84px] h-[125px] ${point.position} cursor-pointer transition-all duration-300 hover:scale-110`}
                  onClick={() => handleYearClick(point.yearNum)}
                >
                  {isSelected ? (
                    <div className="absolute w-[66px] h-[66px] top-0 left-2 bg-[#032534] rounded-[33px] shadow-lg">
                      <div className="relative w-[34px] h-[34px] top-4 left-4 bg-[#1f8ccc] rounded-[17px]" />
                    </div>
                  ) : (
                    <div className="absolute w-12 h-12 top-0 left-[17px] bg-white rounded-3xl shadow-[0px_0px_24px_#0000000f] hover:shadow-lg">
                      <div className="relative w-5 h-5 top-3.5 left-3.5 bg-[#032534] rounded-[10px]" />
                    </div>
                  )}
                  <div
                    className={`absolute top-16 left-0 ${point.isBold ? "font-extrabold" : "font-semibold"
                      } ${isSelected ? "text-[#1f8ccc]" : "text-[#032534]"
                      } text-[28px] xl:text-[34px] transition-colors duration-300`}
                  >
                    {point.year}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Description Section - Only on lg and up */}
          <div className="hidden lg:block md:w-full max-w-4xl">
            <Card className="border border-[#1f8ccc] shadow-lg rounded-xl">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="font-bold text-[#1f8ccc] text-2xl">
                    {selectedYear}
                  </h3>
                </div>
                <p className="font-medium text-[#032534] text-lg leading-relaxed">
                  {getSelectedDescription()}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
