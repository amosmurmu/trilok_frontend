import { CalendarIcon, MapPinIcon } from "lucide-react";
import { Card } from "./ui/card";

export const EventsExhibitions = () => {
  const topRowGalleryItems = [
    {
      id: 1,
      image: "./homepage/event/event_1.png",
      location: "Ahmedabad",
      date: "25-6-2025",
      hasOverlay: true,
    },
    {
      id: 2,
      image: "./homepage/event/event_2.png",
      hasOverlay: false,
    },
    {
      id: 3,
      image: "./homepage/event/event_3.png",
      hasOverlay: false,
    },
  ];

  const bottomRowGalleryItems = [
    {
      id: 1,
      image: "./homepage/event/event_3.png",
    },
    {
      id: 2,
      image: "./homepage/event/event_5.png",
    },
  ];

  return (
    <section className="w-full bg-[#fbfbfb] py-12">
      <div className="container mx-auto px-10">
        <h2
          className="
        font-semibold text-[#032534]
  text-[28px] leading-[38px]          // base
  sm:text-[32px] sm:leading-[46px]    // small screens ≥640px
  md:text-[36px] md:leading-[52px]    // medium screens ≥768px
  lg:text-[42px] lg:leading-[62px]    // large screens ≥1024px
  mb-10"
        >
          Event &amp; Exhibitions
        </h2>

        <div className="flex flex-col gap-10">
          {/* Top row with three cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            {topRowGalleryItems.map((item) => (
              <Card
                key={item.id}
                className={`overflow-hidden rounded-[20px] !py-0 h-[311px] ${
                  item.id === 1 ? "bg-[#1a1a1a]" : "bg-white"
                }`}
              >
                <div className="relative h-full">
                  <img
                    className="w-full h-full object-cover"
                    alt="Exhibition image"
                    src={item.image}
                  />

                  {item.hasOverlay && (
                    <>
                      <div className="absolute w-full h-[260px] bottom-0 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]" />

                      <div className="absolute bottom-4 left-4 flex items-center gap-1 ">
                        <div className="relative w-6 h-6">
                          <MapPinIcon className="w-[17px] h-[21px] absolute top-0.5 left-1 text-white" />
                        </div>
                        <span className="font-normal text-white text-xl">
                          {item.location}
                        </span>
                      </div>

                      <div className="absolute bottom-4 right-4 flex items-center gap-1">
                        <div className="relative w-6 h-6">
                          <CalendarIcon className="w-[19px] h-[21px] absolute top-0.5 left-0.5 text-white" />
                        </div>
                        <span className="font-normal text-white text-xl">
                          {item.date}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom row with two cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {bottomRowGalleryItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden !py-0 rounded-[20px] h-[390px] bg-white"
              >
                <img
                  className="w-full h-full object-cover"
                  alt="Exhibition image"
                  src={item.image}
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
