import { Card, CardContent } from "@/components/ui/card";

export const OurClientsSection = () => {
  const clients = [
    {
      id: 1,
      imgSrc: "./homepage/logo_1.png",
    },
    {
      id: 2,
      imgSrc: "./homepage/logo_2.png",
    },
    {
      id: 3,
      imgSrc: "./homepage/logo_3.png",
    },
    {
      id: 4,
      imgSrc: "./homepage/logo_4.png",
    },
    {
      id: 5,
      imgSrc: "./homepage/tata-logo.svg",
    },
    {
      id: 6,
      imgSrc: "./homepage/ntpc_logo.png",
    },
    {
      id: 7,
      imgSrc: "./homepage/logo_7.png",
    },
    {
      id: 8,
      imgSrc: "./homepage/logo_8.png",
    },
    {
      id: 9,
      imgSrc: "./homepage/logo_9.png",
    },
    {
      id: 10,
      imgSrc: "./homepage/logo_10.png",
    },
  ];

  const row1Clients = clients.slice(0, 5);
  const row2Clients = clients.slice(5, 10);

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

        <div className="overflow-hidden space-y-4">
          <div className="flex animate-scroll-rtl">
            {[...row1Clients, ...row1Clients].map((client, index) => (
              <Card
                key={index}
                className="relative flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-[164px] border border-solid border-[#03253466] shadow-[0px_0px_24px_#0000000f] mx-2"
              >
                <CardContent className="p-0 h-full flex items-center justify-center overflow-hidden">
                  <img
                    className="max-w-full max-h-full object-contain p-4"
                    alt="Client logo"
                    src={client.imgSrc}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex animate-scroll-ltr">
            {[...row2Clients, ...row2Clients].map((client, index) => (
              <Card
                key={index}
                className="relative flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-[164px] border border-solid border-[#03253466] shadow-[0px_0px_24px_#0000000f] mx-2"
              >
                <CardContent className="p-0 h-full flex items-center justify-center overflow-hidden">
                  <img
                    className="max-w-full max-h-full object-contain p-4"
                    alt="Client logo"
                    src={client.imgSrc}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;