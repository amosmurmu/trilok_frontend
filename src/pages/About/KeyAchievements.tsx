
import { Card } from "@/components/ui/card";

export const KeyAchievementsSection = () => {
  const achievements = [
    {
      icon: "./aboutus/achievement_1.png",
      title: "82,00,000+ RMT Wall Manufactured",
      description:
        "TRILOK has delivered over 82 lakh running meters of RCC precast walls across India — a testament to our consistency and capability",
    },
    {
      icon: "./aboutus/achievement_2.png",
      title: "Presence in 70+ Indian Cities",
      description:
        "With over 70 manufacturing units nationwide, we ensure faster delivery, localized execution, and seamless project coordination.",
    },
    {
      icon: "./aboutus/achievement_3.png",
      title: "4,50,000+ MT Concrete Casted",
      description:
        "Our cumulative production has surpassed 4.5 lakh metric tonnes of concrete — reinforcing our position as a large-scale infrastructure enabler.",
    },
    {
      icon: "./aboutus/achievement_4.png",
      title: "Pan-India Precast Product Portfolio",
      description:
        "From compound walls and security cabins to full-scale precast homes, swimming pools, and road systems — we build for every sector and every need",
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center mb-10 text-center px-4">
          <h2 className="font-extrabold text-[#032534] text-[32px] md:text-[42px] leading-tight">
            Key Achievements
          </h2>
          <p className="font-semibold text-[#1f8ccc] text-[20px] md:text-[28px] mt-4 max-w-4xl">
            TRILOK Group&apos;s milestones that showcase our strength, scale,
            and leadership in India’s precast industry.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-center"
            >
              {/* Icon Box */}
              <div className="flex-shrink-0 w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-[#1f8ccc] rounded-[13px] flex items-center justify-center shadow-md -mt-10 md:mt-0 md:mr-6 z-10">
                <img
                  src={achievement.icon}
                  alt={`Icon ${index + 1}`}
                  className="w-10 h-10 md:w-14 md:h-14 object-contain"
                />
              </div>

              {/* Card */}
              <Card className="w-full -mt-6 md:mt-0 pt-10 md:pt-6 border border-[#032534] rounded-xl shadow-[0px_0px_24px_#0000000f] p-6 md:pl-8 md:pr-8 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-[#032534] mb-4">
                  {achievement.title}
                </h3>
                <p className="text-base md:text-lg font-medium text-[#032534]">
                  {achievement.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
