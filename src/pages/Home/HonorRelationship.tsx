import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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
    { id: 11, imgSrc: "./homepage/logo_1.png" },
    { id: 12, imgSrc: "./homepage/logo_2.png" },
    { id: 13, imgSrc: "./homepage/logo_3.png" },
    { id: 14, imgSrc: "./homepage/logo_4.png" },
    { id: 15, imgSrc: "./homepage/tata-logo.svg" },
    { id: 16, imgSrc: "./homepage/ntpc_logo.png" },
    { id: 17, imgSrc: "./homepage/logo_7.png" },
    { id: 18, imgSrc: "./homepage/logo_8.png" },
    { id: 19, imgSrc: "./homepage/logo_9.png" },
    { id: 20, imgSrc: "./homepage/logo_10.png" },
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
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        reverseDirection: direction === "rtl",
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
      slidesPerView={1.5}
      spaceBetween={12}
      centeredSlides={false}
      breakpoints={{
        // Mobile phones (320px and up)
        320: {
          slidesPerView: 1.5,
          spaceBetween: 10
        },
        // Large phones (480px and up)
        480: {
          slidesPerView: 2,
          spaceBetween: 12
        },
        // Small tablets (640px and up)
        640: {
          slidesPerView: 2.5,
          spaceBetween: 14
        },
        // Medium tablets (768px and up)
        768: {
          slidesPerView: 3,
          spaceBetween: 16
        },
        // Large tablets (1024px and up)
        1024: {
          slidesPerView: 4,
          spaceBetween: 18
        },
        // Desktop (1280px and up)
        1280: {
          slidesPerView: 5,
          spaceBetween: 20
        },
      }}
    >
      {clients.map((client) => (
        <SwiperSlide key={client.id}>
          <Card className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 border border-solid border-[#03253466] shadow-lg">
            <CardContent className="p-2 sm:p-3 md:p-4 h-full flex items-center justify-center overflow-hidden">
              <img
                className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                alt="Client logo"
                src={client.imgSrc}
                loading="lazy"
              />
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <section className="w-full py-8 sm:py-10 md:py-12 bg-white">
      <div className="relative px-4 sm:px-6">
        <div className="container mx-auto mb-6 sm:mb-8">
          <h2 className="font-semibold text-[#032534] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-3 sm:mb-4">
            Honoring Relationships
          </h2>
          <p className="font-semibold text-[#1a1a1a] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-snug">
            Trusted precast partner for builders, contractors, and
            infrastructure projects across India.
          </p>
        </div>

        <div className="w-full space-y-4 sm:space-y-6 relationship">
          {renderCarouselRow(row1Clients, "rtl", "row1")}
          {renderCarouselRow(row2Clients, "ltr", "row2")}
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;