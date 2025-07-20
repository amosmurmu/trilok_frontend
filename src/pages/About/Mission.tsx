
import { Card, CardContent } from "@/components/ui/card";

export const MissionVisionSection = () => {
  // Data for mission and vision cards
  const cards = [
    {
      id: "mission",
      title: "Our Mission",
      description:
        "Trilok Precast is committed to provide high Quality Products and Services in an environment friendly manner, achieving the zenith level in the Cement Product Industry, meeting the needs of customers and employees whilst adding value to the community.",
      iconSrc: "./aboutus/mission.png",
      iconWidth: "w-[150px]",
      iconHeight: "h-[124px]",
      iconTop: "top-[13px]",
      iconLeft: "left-0",
    },
    {
      id: "vision",
      title: "Our Vision",
      description:
        "To be recognized globally as the epitome of excellence in the Cement Product Industry, setting benchmarks for quality, innovation, and responsible business practices",
      iconSrc: "./aboutus/vision.png",
      iconWidth: "w-[135px]",
      iconHeight: "h-[150px]",
      iconTop: "top-0",
      iconLeft: "left-2",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 lg:py-[100px] bg-[#fbfbfb] flex justify-center">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 px-4 max-w-7xl w-full justify-center">
        {cards.map((card) => (
          <Card
            key={card.id}
            className="w-full lg:w-[788px] min-h-[400px] lg:h-[570px] relative rounded-3xl shadow-[0px_0px_24px_#0000000f] border-none mx-auto"
          >
            {/* Icon - Hidden on mobile and small tablets */}
            <div className="hidden lg:block absolute w-[218px] h-[218px] top-[-52px] left-1/2 transform -translate-x-1/2 bg-white rounded-xl overflow-hidden border border-solid border-[#032534]">
              <div className="relative w-[150px] h-[150px] top-[34px] left-[34px] overflow-hidden">
                <img
                  className={`absolute ${card.iconWidth} ${card.iconHeight} ${card.iconTop} ${card.iconLeft}`}
                  alt={card.title}
                  src={card.iconSrc}
                />
              </div>
            </div>

            <CardContent className="pt-8 lg:pt-[198px] px-6 md:px-8 flex flex-col items-center h-full">
              <h2 className="font-['Mulish',Helvetica] font-extrabold text-[#032534] text-2xl lg:text-[28px] mb-6 lg:mb-[38px] text-center">
                {card.title}
              </h2>
              <p className="font-['Mulish',Helvetica] font-medium text-[#1a1a1a] text-lg lg:text-xl text-justify leading-7 lg:leading-[30px] w-full flex-1 flex items-center">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};