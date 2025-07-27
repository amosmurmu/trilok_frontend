
import { Card, CardContent } from "@/components/ui/card";

export const OurClientsSection = () => {
  const clients = [
    {
      id: 1,
      imgSrc: "./homepage/logo_1.png",
      cardPosition: "md:col-start-1 md:row-start-1",
    },
    {
      id: 2,
      imgSrc: "./homepage/logo_2.png",
      cardPosition: "md:col-start-2 md:row-start-1",
    },
    {
      id: 3,
      imgSrc: "./homepage/logo_3.png",
      cardPosition: "md:col-start-3 md:row-start-1",
    },
    {
      id: 4,
      imgSrc: "./homepage/logo_4.png",
      cardPosition: "md:col-start-4 md:row-start-1",
    },
    {
      id: 5,
      imgSrc: "./homepage/tata-logo.svg",
      cardPosition: "md:col-start-5 md:row-start-1",
    },
    {
      id: 6,
      imgSrc: "./homepage/ntpc_logo.png",
      cardPosition: "md:col-start-1 md:row-start-2",
    },
    {
      id: 7,
      imgSrc: "./homepage/logo_7.png",
      cardPosition: "md:col-start-2 md:row-start-2",
    },
    {
      id: 8,
      imgSrc: "./homepage/logo_8.png",
      cardPosition: "md:col-start-3 md:row-start-2",
    },
    {
      id: 9,
      imgSrc: "./homepage/logo_9.png",
      cardPosition: "md:col-start-4 md:row-start-2",
    },
    {
      id: 10,
      imgSrc: "./homepage/logo_10.png",
      cardPosition: "md:col-start-5 md:row-start-2",
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-semibold text-[#032534] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px] leading-tight mb-4">
          Honoring Relationships
        </h2>
        <p className="font-semibold text-[#1a1a1a] text-base sm:text-lg md:text-xl lg:text-2xl leading-snug mb-8">
          Trusted precast partner for builders, contractors, and infrastructure
          projects across India.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {clients.map((client) => (
            <Card
              key={client.id}
              className={`relative h-[164px] border border-solid border-[#03253466] shadow-[0px_0px_24px_#0000000f] ${client.cardPosition}`}
            >
              <CardContent className="p-0 h-full flex items-center justify-center overflow-hidden">
                <img
                  className="max-w-full max-h-full object-contain"
                  alt="Client logo"
                  src={client.imgSrc}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;