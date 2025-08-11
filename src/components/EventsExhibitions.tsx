import { CalendarIcon, MapPinIcon } from "lucide-react";
import { Card } from "./ui/card";

export const EventsExhibitions = () => {
  const topRowGalleryItems = [
    {
      id: 1,
      image: "./homepage/event/event_1.png",
      location: "Ahmedabad",
      date: "25-6-2025",
    },
    {
      id: 2,
      image: "./homepage/event/event_2.png",
      location: "Mumbai",
      date: "10-7-2025",
    },
    {
      id: 3,
      image: "./homepage/event/event_3.png",
      location: "Delhi",
      date: "15-8-2025",
    },
  ];

  const bottomRowGalleryItems = [
    {
      id: 1,
      image: "./homepage/event/event_3.png",
      location: "Kolkata",
      date: "1-9-2025",
    },
    {
      id: 2,
      image: "./homepage/event/event_5.png",
      location: "Chennai",
      date: "20-9-2025",
    },
  ];

  const CardOverlay = ({ location, date }: { location: string; date: string }) => (
    <>
      <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <MapPinIcon className="w-[17px] h-[21px] text-white" />
        <span className="font-normal text-white text-xl">{location}</span>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <CalendarIcon className="w-[19px] h-[21px] text-white" />
        <span className="font-normal text-white text-xl">{date}</span>
      </div>
    </>
  );

  return (
    <section className="w-full bg-[#fbfbfb] py-12">
      <div className="container mx-auto px-10">
        <h2 className="font-semibold text-[#032534]
          text-[28px] leading-[38px]
          sm:text-[32px] sm:leading-[46px]
          md:text-[36px] md:leading-[52px]
          lg:text-[42px] lg:leading-[62px]
          mb-10">
          Event &amp; Exhibitions
        </h2>

        <div className="flex flex-col gap-10">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            {topRowGalleryItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden rounded-[20px] !py-0 h-[311px] bg-white group relative"
              >
                <img
                  className="w-full h-full object-cover"
                  alt="Exhibition image"
                  src={item.image}
                />
                <CardOverlay location={item.location} date={item.date} />
              </Card>
            ))}
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {bottomRowGalleryItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden rounded-[20px] !py-0 h-[390px] bg-white group relative"
              >
                <img
                  className="w-full h-full object-cover"
                  alt="Exhibition image"
                  src={item.image}
                />
                <CardOverlay location={item.location} date={item.date} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
