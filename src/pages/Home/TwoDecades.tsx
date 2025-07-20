import { Card, CardContent } from "@/components/ui/card";

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
      iconSrc: "./aboutus/about_4.png",
    },
  ];

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-extrabold text-[#032534] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Two Decades of Precast Innovation
          </h2>
          <p className="font-semibold text-[#1f8ccc] text-lg sm:text-xl md:text-2xl mt-4">
            Transforming infrastructure with faster, smarter, and stronger precast solutions
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="flex flex-col items-center border-none shadow-none text-center"
            >
              <CardContent className="flex flex-col items-center justify-between h-full">
                {/* Number + Unit in one row, centered */}
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-[#1f8ccc] font-extrabold text-5xl sm:text-6xl lg:text-7xl">
                    {stat.number}
                  </span>
                  <span className="text-[#032534] font-extrabold text-base sm:text-lg md:text-xl">
                    {stat.unit}
                  </span>
                </div>

                {/* Icon */}
                <img
                  src={stat.iconSrc}
                  alt="icon"
                  className="mt-6 w-[60px] h-[60px] sm:w-[76px] sm:h-[76px]"
                />

                {/* Description */}
                <p className="mt-4 text-[#032534] font-medium text-sm sm:text-base">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

