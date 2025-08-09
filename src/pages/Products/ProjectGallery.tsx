import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { type EmblaCarouselType } from 'embla-carousel-react';

export function ProjectGallery() {
  const galleryImages = [
    "./products/product_1.png",
    "./products/product_2.png",
    "./products/product_3.png",
    "./products/product_4.png",
    "./products/compound.jpg",
  ];

  const [api, setApi] = useState<EmblaCarouselType | undefined>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <>
      {/* Project Gallery Section */}
      <section className="w-full bg-[#fbfbfb] rounded-3xl py-12 px-10">
        <h2 className="text-center  font-extrabold text-[#1f8ccc] text-[42px] leading-[54px] mb-10">
          Project Gallery
        </h2>

        <div className="relative w-full max-w-[1400px] mx-auto">
          <Carousel setApi={setApi} className="w-full" opts={{
            align: "center",
            loop: true,
          }}>
            <CarouselContent className="flex items-center -ml-4">
              {galleryImages.map((src, index) => (
                <CarouselItem key={index} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <div className={`transform transition-transform duration-500 ease-in-out ${index === current ? 'scale-125 z-10' : 'scale-75'}`}>
                    <div className="bg-white rounded-xl overflow-hidden border border-solid border-[#032534] shadow-[0px_0px_24px_#0000000f]">
                      <img
                        className="w-full h-full object-cover aspect-[4/3]"
                        alt={`Gallery image ${index + 1}`}
                        src={src}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-white shadow-[0px_0px_24px_#00000026] h-12 w-12" />
            <CarouselNext className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-white shadow-[0px_0px_24px_#00000026] h-12 w-12" />
          </Carousel>
        </div>
      </section>
    </>

  )
}    