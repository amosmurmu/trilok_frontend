import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { type EmblaCarouselType } from "embla-carousel";

const galleryItems = [
  { src: "./products/product_1.png", alt: "Gallery image 1" },
  { src: "./products/product_2.png", alt: "Gallery image 2" },
  { src: "./products/product_3.png", alt: "Gallery image 3" },
  { src: "./products/product_4.png", alt: "Gallery image 4" },
  { src: "./products/compound.jpg", alt: "Gallery image 5" },
];

export function ProjectGallery() {
  const [api, setApi] = useState<EmblaCarouselType>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      {/* Project Gallery Section */}
      <section className="w-full bg-[#fbfbfb] rounded-3xl py-12 px-10" >
        <h2 className="text-center  font-extrabold text-[#1f8ccc] text-[42px] leading-[54px] mb-10">
          Project Gallery
        </h2>

        <div className="relative w-full max-w-[1400px] mx-auto">
          <Carousel setApi={setApi} opts={{ align: "center", loop: true }}>
            <CarouselContent className="flex items-center">
              {galleryItems.map((item, index) => (
                <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <div className={`transform transition-transform duration-500 ease-in-out ${index === current ? 'scale-125 z-10' : 'scale-75'}`}>
                    <div className="bg-white rounded-xl overflow-hidden border border-solid border-[#032534] shadow-lg">
                      <img
                        className="w-full h-full object-cover aspect-video"
                        alt={item.alt}
                        src={item.src}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-white shadow-lg h-12 w-12" />
            <CarouselNext className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-white shadow-lg h-12 w-12" />
          </Carousel>
        </div>
      </section >
    </>

  )
}    