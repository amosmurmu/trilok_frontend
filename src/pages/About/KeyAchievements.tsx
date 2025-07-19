import { Card } from "@/components/ui/card";

export const KeyAchievementsSection = () => {
  const achievements = [
    {
      icon: "https://c.animaapp.com/mdajl2rutaPJ37/img/vector-2.svg",
      title: "82,00,000+ RMT Wall Manufactured",
      description:
        "TRILOK has delivered over 82 lakh running meters of RCC precast walls across India — a testament to our consistency and capability",
    },
    {
      icon: "https://c.animaapp.com/mdajl2rutaPJ37/img/component-10.svg",
      title: "Presence in 70+ Indian Cities",
      description:
        "With over 70 manufacturing units nationwide, we ensure faster delivery, localized execution, and seamless project coordination.",
    },
    {
      icon: "https://c.animaapp.com/mdajl2rutaPJ37/img/vector-3.svg",
      title: "4,50,000+ MT Concrete Casted",
      description:
        "Our cumulative production has surpassed 4.5 lakh metric tonnes of concrete — reinforcing our position as a large-scale infrastructure enabler.",
    },
    {
      icon: "https://c.animaapp.com/mdajl2rutaPJ37/img/objects.svg",
      title: "Pan-India Precast Product Portfolio",
      description:
        "From compound walls and security cabins to full-scale precast homes, swimming pools, and road systems — we build for every sector and every need",
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-8">
          <h2 className="font-['Mulish',Helvetica] font-extrabold text-[#032534] text-[42px] leading-[62px] text-center">
            Key Achievements
          </h2>
          <p className="font-['Mulish',Helvetica] font-semibold text-[#1f8ccc] text-[32px] text-center mt-4 max-w-4xl">
            TRILOK Group&apos;s milestones that showcase our strength, scale,
            and leadership in India&apos;s precast industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="relative">
              <div className="absolute w-[100px] h-[100px] top-[38px] left-[-50px] bg-[#1f8ccc] rounded-[13.33px] overflow-hidden flex items-center justify-center">
                <img
                  className="w-20 h-20 object-contain"
                  alt={`Achievement icon ${index + 1}`}
                  src={achievement.icon}
                />
              </div>
              <Card className="ml-12 border border-solid border-[#032534] rounded-xl shadow-[0px_0px_24px_#0000000f] p-6">
                <h3 className="font-['Mulish',Helvetica] font-bold text-[#032534] text-2xl mb-4">
                  {achievement.title}
                </h3>
                <p className="font-['Mulish',Helvetica] font-medium text-[#032534] text-lg">
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
