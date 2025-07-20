
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
      // Responsive icon styles
      mobileIconWidth: "w-[80px]",
      mobileIconHeight: "h-[66px]",
      mobileIconTop: "top-[7px]",
      mobileIconLeft: "left-0",
      tabletIconWidth: "w-[120px]",
      tabletIconHeight: "h-[99px]",
      tabletIconTop: "top-[10px]",
      tabletIconLeft: "left-0",
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
      // Responsive icon styles
      mobileIconWidth: "w-[72px]",
      mobileIconHeight: "h-[80px]",
      mobileIconTop: "top-0",
      mobileIconLeft: "left-1",
      tabletIconWidth: "w-[108px]",
      tabletIconHeight: "h-[120px]",
      tabletIconTop: "top-0",
      tabletIconLeft: "left-1.5",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[100px] bg-[#fbfbfb] flex justify-center">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-12 px-4 max-w-7xl w-full justify-center">
        {cards.map((card) => (
          <Card
            key={card.id}
            className="w-full lg:w-[788px] min-h-[350px] sm:min-h-[380px] md:min-h-[420px] lg:h-[570px] relative rounded-2xl sm:rounded-3xl shadow-[0px_0px_16px_#0000000a] sm:shadow-[0px_0px_24px_#0000000f] border-none mx-auto"
          >
            {/* Icon Container - Now visible on all screen sizes with responsive positioning */}
            <div className="absolute 
              w-[120px] h-[120px] top-[-28px] 
              sm:w-[150px] sm:h-[150px] sm:top-[-35px] 
              md:w-[180px] md:h-[180px] md:top-[-42px] 
              lg:w-[218px] lg:h-[218px] lg:top-[-52px] 
              left-1/2 transform -translate-x-1/2 
              bg-white rounded-lg sm:rounded-xl 
              overflow-hidden border border-solid border-[#032534]"
            >
              <div className="relative 
                w-[80px] h-[80px] top-[20px] left-[20px] 
                sm:w-[100px] sm:h-[100px] sm:top-[25px] sm:left-[25px] 
                md:w-[120px] md:h-[120px] md:top-[30px] md:left-[30px] 
                lg:w-[150px] lg:h-[150px] lg:top-[34px] lg:left-[34px] 
                overflow-hidden"
              >
                <img
                  className={`absolute 
                    ${card.mobileIconWidth} ${card.mobileIconHeight} ${card.mobileIconTop} ${card.mobileIconLeft}
                    sm:${card.tabletIconWidth} sm:${card.tabletIconHeight} sm:${card.tabletIconTop} sm:${card.tabletIconLeft}
                    lg:${card.iconWidth} lg:${card.iconHeight} lg:${card.iconTop} lg:${card.iconLeft}
                  `}
                  alt={card.title}
                  src={card.iconSrc}
                />
              </div>
            </div>

            <CardContent className="
              pt-16 sm:pt-20 md:pt-24 lg:pt-[198px] 
              px-4 sm:px-6 md:px-8 
              pb-6 sm:pb-8 
              flex flex-col items-center h-full"
            >
              <h2 className="font-extrabold text-[#032534] 
                text-xl sm:text-2xl lg:text-[28px] 
                mb-4 sm:mb-6 lg:mb-[38px] 
                text-center"
              >
                {card.title}
              </h2>
              <p className="font-normal text-[#1a1a1a] 
                text-base sm:text-lg lg:text-xl 
                text-justify 
                leading-6 sm:leading-7 lg:leading-[30px] 
                w-full flex-1 flex items-center"
              >
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};