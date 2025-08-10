import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

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

  const row1Clients = clients.slice(0, 10);
  const row2Clients = clients.slice(10, 20);

  interface Client {
    id: number;
    imgSrc: string;
  }

  // Helper to render a Swiper carousel row
  const renderCarouselRow = (
    clients: Client[],
    direction: "rtl" | "ltr",
    key: string
  ) => (
    <Swiper
      key={key}
      dir={direction}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
      slidesPerView={5}
      spaceBetween={6}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
    >
      {clients.map((client) => (
        <SwiperSlide key={client.id}>
          <Card className="relative w-60 h-40 mx-auto border !mx-0 border-solid border-[#03253466] shadow-lg flex-shrink-0">
            <CardContent className="p-4 h-full flex items-center justify-center overflow-hidden">
              <img
                className="max-w-full max-h-full object-contain"
                alt="Client logo"
                src={client.imgSrc}
              />
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <section className="w-full py-12 bg-white">
      <div className="">
        <div className="container mx-auto px-4">
          <h2 className="font-semibold text-[#032534] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px] leading-tight mb-4">
            Honoring Relationships
          </h2>
          <p className="font-semibold text-[#1a1a1a] text-base sm:text-lg md:text-xl lg:text-2xl leading-snug mb-8">
            Trusted precast partner for builders, contractors, and
            infrastructure projects across India.
          </p>
        </div>

        <div className="space-y-6 relationship">
          {renderCarouselRow(row1Clients, "rtl", "row1")}
          {renderCarouselRow(row2Clients, "ltr", "row2")}
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;
