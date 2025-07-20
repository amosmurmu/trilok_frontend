import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export const OurJourneySection = () => {
  const [selectedYear, setSelectedYear] = useState(2005);

  // Timeline data for mapping
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
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora provident molestias officia, fuga animi, nemo, deserunt soluta numquam hic repellat dolores. Aliquam beatae, nihil ullam accusantium, illum alias tenetur ipsa nisi vero reiciendis eius dolorum soluta? Perspiciatis non earum voluptatem, quod ut voluptas praesentium vero repudiandae autem beatae libero at molestiae odit fuga nisi dolorem corrupti asperiores ullam, nemo dicta, animi tempore explicabo? Eum ratione fugit ipsam voluptatem impedit debitis nesciunt reiciendis quia necessitatibus, minus ipsa tempore inventore corrupti non deleniti cupiditate, culpa sit autem ex? Natus, odit? Beatae, quis!"
    },
    {
      year: 2009,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur amet maxime ipsam quibusdam fugiat ipsa, nisi consectetur numquam quam ex voluptatibus rerum sed distinctio quo. Tempore provident veniam aut nihil ipsam. Aut, non autem reprehenderit quidem voluptas eaque voluptates dolore!"
    },
    {
      year: 2010,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sunt vero unde optio temporibus magni iusto pariatur. Ab distinctio dolorem alias aut nemo voluptas quasi? Unde autem explicabo omnis."
    },
    {
      year: 2011,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sunt vero unde optio temporibus magni iusto pariatur. Ab distinctio dolorem alias aut nemo voluptas quasi? Unde autem explicabo omnis."
    },
    {
      year: 2012,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sunt vero unde optio temporibus magni iusto pariatur. Ab distinctio dolorem alias aut nemo voluptas quasi? Unde autem explicabo omnis."
    }
  ];

  const handleYearClick = (year: number) => {
    setSelectedYear(year);
  };

  const getSelectedDescription = () => {
    const description = descriptionList.find(item => item.year === selectedYear);
    return description ? description.text : "";
  };

  return (
    <section className="relative w-full py-2 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          {/* Section Heading */}
          <h2 className="font-['Mulish',Helvetica] font-extrabold text-[#032534] text-[42px] leading-[62px] mb-6">
            Our Journey
          </h2>
          {/* Subtitle */}
          <div className="font-['Mulish',Helvetica] font-semibold text-[#1f8ccc] text-[32px] text-center mb-4">
            Precision. Progress. Precast — The Journey of Trilok Group
          </div>
          {/* Secondary Subtitle */}
          <div className="font-['Mulish',Helvetica] font-semibold text-[#032534] text-2xl text-center mb-8">
            From One City to 70+ Locations Across India
          </div>
          {/* Information Card */}
          <Card className="w-full max-w-[787px] mb-10 border border-solid border-[#032534] shadow-[0px_0px_24px_#0000000f] rounded-xl">
            <CardContent className="p-4">
              <p className="font-['Mulish',Helvetica] font-medium text-[#032534] text-lg">
                TRILOK Cement Products was born in Surat, with a bold vision —
                to revolutionize India&apos;s infrastructure through durable
                precast innovation.
              </p>
            </CardContent>
          </Card>
          {/* Foundation Label */}
          <div className="font-['Mulish',Helvetica] text-xl mb-12">
            <span className="font-bold text-[#1f8ccc]">The Foundation </span>
            <span className="font-black text-[#1f8ccc]">Surat, Gujarat</span>
          </div>
          {/* Timeline */}
          <div className="relative hidden lg:block w-full h-[420px] mb-8">
            {/* Timeline Path */}
            <img
              className="w-full max-w-[1489px] h-[420px] mx-auto relative"
              alt="Timeline path"
              src="./aboutus/obj_1.svg"
            />
            {/* I can add visual globe man for effect */}
            {/* <img
              className="w-full max-w-[1489px] h-[420px] mx-auto relative"
              alt="background globe"
              src="./aboutus/obj_2.svg"
            /> */}

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
                    // Highlighted point (selected year)
                    <div className="absolute w-[66px] h-[66px] top-0 left-2 bg-[#032534] rounded-[33px] shadow-lg">
                      <div className="relative w-[34px] h-[34px] top-4 left-4 bg-[#1f8ccc] rounded-[17px]" />
                    </div>
                  ) : (
                    // Regular points
                    <div className="absolute w-12 h-12 top-0 left-[17px] bg-white rounded-3xl shadow-[0px_0px_24px_#0000000f] hover:shadow-lg transition-shadow">
                      <div className="relative w-5 h-5 top-3.5 left-3.5 bg-[#032534] rounded-[10px]" />
                    </div>
                  )}
                  {/* Year Label */}
                  <div
                    className={`absolute top-16 left-0 font-['Mulish',Helvetica] ${point.isBold ? "font-extrabold" : "font-semibold"
                      } ${isSelected ? "text-[#1f8ccc]" : "text-[#032534]"
                      } text-[34px] transition-colors duration-300`}
                  >
                    {point.year}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Description Section */}
          <div className="w-full max-w-4xl">
            <Card className="border border-solid border-[#1f8ccc] shadow-lg rounded-xl">
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