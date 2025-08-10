import { Card, CardContent } from "@/components/ui/card";

export const OurClientsSection = () => {
  const clients = [
    { id: 1, imgSrc: "./homepage/logo_1.png" },
    { id: 2, imgSrc: "./homepage/logo_2.png" },
    { id: 3, imgSrc: "./homepage/logo_3.png" },
    { id: 4, imgSrc: "./homepage/logo_4.png" },
    { id: 5, imgSrc: "./homepage/tata-logo.svg" },
    { id: 6, imgSrc: "./homepage/ntpc_logo.png" },
    { id: 7, imgSrc: "./homepage/logo_7.png" },
    { id: 8, imgSrc: "./homepage/logo_8.png" },
    { id: 9, imgSrc: "./homepage/logo_9.png" },
    { id: 10, imgSrc: "./homepage/logo_10.png" },
  ];

  const row1Clients = clients.slice(0, 5);
  const row2Clients = clients.slice(5, 10);

interface Client {
  id: number;
  imgSrc: string;
}

  const renderMarqueeRow = (clients: Client[], animationClass: string) => (
    <div className="flex overflow-hidden">
      <div className={`flex flex-shrink-0 ${animationClass}`}>
        {[...clients, ...clients].map((client, index) => (
          <Card
            key={index}
            className="relative w-40 h-40 mx-2 border border-solid border-[#03253466] shadow-lg flex-shrink-0"
          >
            <CardContent className="p-4 h-full flex items-center justify-center overflow-hidden">
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
  );

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

        <div className="space-y-4">
          {renderMarqueeRow(row1Clients, "animate-scroll-rtl")}
          {renderMarqueeRow(row2Clients, "animate-scroll-ltr")}
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;