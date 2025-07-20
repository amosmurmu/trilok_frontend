import { Card, CardContent } from "@/components/ui/card";

export const FeaturesSubsection = () => {
  const features = [
    {
      title: "Modular & Easily Assembled",
      description:
        "The wall panels are prefabricated and designed for quick, on-site installation with minimal effort",
    },
    {
      title: "RCC / High-Strength Concrete Construction",
      description:
        "Made from reinforced cement concrete (RCC), often with M25-grade or higher, ensuring durability and robust performance",
    },
    {
      title: "Consistent Thickness (~50 mm Panels)",
      description:
        "Standard wall panel thickness is around 50 mm, offering a balanced combination of strength and lightweight handling",
    },
    {
      title: "Varied Height Options (2 ft up to 10 ft)",
      description:
        "Available in multiple height options to suit different security or aesthetic needs, typically ranging from 2 feet to 10 feet",
    },
    {
      title: "Crack‑Resistant Design",
      description:
        "Engineered to resist cracking, providing a long-lasting, low-maintenance structure",
    },
    {
      title: "Customizable Appearance (Colors & Finishes)",
      description:
        "Available in grey by default, but can be colored or finished per customer specifications, including options like stone design, white wave effect, etc.",
    },
  ];

  return (
    <section className="w-full bg-[#fbfbfb] rounded-3xl p-12 relative">
      <h2 className="text-[42px] text-[#1f8ccc] font-extrabold text-center mb-10  leading-[54px]">
        Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border border-solid border-[#032534] rounded-xl overflow-hidden"
          >
            <CardContent className="p-8">
              <h3 className="font-['Raleway',Helvetica] font-semibold text-[#1f8ccc] text-2xl mb-3">
                {feature.title}
              </h3>
              <p className="font-['Poppins',Helvetica] font-normal text-[#032534] text-lg leading-[30px]">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
