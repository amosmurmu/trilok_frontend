
import { Card, CardContent } from "@/components/ui/card";

export const MissionVisionSection = () => {
  const cards = [
    {
      id: "mission",
      title: "Our Mission",
      description:
        "Trilok Precast is committed to provide high Quality Products and Services in an environment friendly manner, achieving the zenith level in the Cement Product Industry, meeting the needs of customers and employees whilst adding value to the community.",
      iconSrc: "./aboutus/mission.png",
    },
    {
      id: "vision",
      title: "Our Vision",
      description:
        "To be recognized globally as the epitome of excellence in the Cement Product Industry, setting benchmarks for quality, innovation, and responsible business practices.",
      iconSrc: "./aboutus/vision.png",
    },
  ];

  return (
    <section className="w-full bg-[#fbfbfb] py-12 px-4 flex justify-center">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl w-full">
        {cards.map((card) => (
          <Card
            key={card.id}
            className="relative w-full lg:w-1/2 pt-24 pb-10 px-6 sm:px-10 lg:px-12 text-center rounded-2xl shadow-md border-none bg-white"
          >
            {/* Icon - Top Center Overlapping */}
            <div className="absolute -top-[60px] left-1/2 transform -translate-x-1/2 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] bg-white border border-[#032534] rounded-xl flex items-center justify-center shadow-sm z-10">
              <img
                src={card.iconSrc}
                alt={card.title}
                className="w-[70%] h-auto object-contain"
              />
            </div>

            <CardContent className="flex flex-col items-center h-full">
              <h2 className="text-[#032534] font-extrabold text-xl sm:text-2xl lg:text-[28px] mt-4 mb-6">
                {card.title}
              </h2>
              <p className="text-[#1a1a1a] text-base sm:text-lg lg:text-xl leading-relaxed text-justify">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
