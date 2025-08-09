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
      date: "12-7-2025",
    },
    {
      id: 3,
      image: "./homepage/event/event_3.png",
      location: "Delhi",
      date: "18-8-2025",
    },
  ];

  const bottomRowGalleryItems = [
    {
      id: 1,
      image: "./homepage/event/event_4.png",
      location: "Bangalore",
      date: "05-9-2025",
    },
    {
      id: 2,
      image: "./homepage/event/event_5.png",
      location: "Chennai",
      date: "21-10-2025",
    },
  ];

interface GalleryItem {
  id: number;
  image: string;
  location: string;
  date: string;
}

  const renderCard = (item: GalleryItem, heightClass: string) => (
    <Card
      key={item.id}
      className={`group overflow-hidden border border-solid border-[#032534] rounded-[20px] ${heightClass} bg-white`}
    >
      <div className="relative h-full">
        <img
          className="w-full h-full object-cover"
          alt="Exhibition image"
          src={item.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
          <div className="flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-5 h-5" />
              <span className="font-normal text-xl">{item.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              <span className="font-normal text-xl">{item.date}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );


  return (
    <section className="w-full bg-[#fbfbfb] py-12">
      <div className="container mx-auto px-10">
        <h2 className="
        font-semibold text-[#032534]
  text-[28px] leading-[38px]          // base
  sm:text-[32px] sm:leading-[46px]    // small screens ≥640px
  md:text-[36px] md:leading-[52px]    // medium screens ≥768px
  lg:text-[42px] lg:leading-[62px]    // large screens ≥1024px
  mb-10">

          Event &amp; Exhibitions
        </h2>

        <div className="flex flex-col gap-10">
          {/* Top row with three cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            {topRowGalleryItems.map((item) => renderCard(item, "h-[311px]"))}
          </div>

          {/* Bottom row with two cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {bottomRowGalleryItems.map((item) => renderCard(item, "h-[390px]"))}
          </div>
        </div>
      </div>
    </section>
  );
};
