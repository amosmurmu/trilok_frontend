import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function ProjectGallery() {
  return (
    <>
      {/* Project Gallery Section */}
      < section className="w-full bg-[#fbfbfb] rounded-3xl py-12 px-10" >
        <h2 className="text-center  font-extrabold text-[#1f8ccc] text-[42px] leading-[54px] mb-10">
          Project Gallery
        </h2>

        <div className="relative w-full max-w-[1400px] mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="flex items-center justify-center">
              <CarouselItem className="flex justify-center basis-auto min-w-0 pl-4">
                <div className="w-[230px] h-[190px] bg-white rounded-xl overflow-hidden border border-solid border-[#032534] shadow-[0px_0px_24px_#0000000f]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Gallery image 1"
                    src="./products/product_1.png"
                  />
                </div>
              </CarouselItem>

              <CarouselItem className="flex justify-center basis-auto min-w-0 pl-4">
                <div className="w-[382px] h-[298px] bg-white rounded-xl overflow-hidden border border-solid border-[#032534] shadow-[0px_0px_24px_#0000000f]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Gallery image 2"
                    src="./products/product_2.png"
                  />
                </div>
              </CarouselItem>

              <CarouselItem className="flex justify-center basis-auto min-w-0 pl-4">
                <div className="w-[518px] h-[406px] bg-white rounded-xl overflow-hidden border border-solid border-[#032534] shadow-[0px_0px_24px_#0000000f]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Gallery image 3"
                    src="./products/product_3.png"
                  />
                </div>
              </CarouselItem>

              <CarouselItem className="flex justify-center basis-auto min-w-0 pl-4">
                <div className="w-[382px] h-[298px] bg-white rounded-xl overflow-hidden border border-solid border-[#032534] shadow-[0px_0px_24px_#0000000f]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Gallery image 4"
                    src="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=800&auto=format&fit=crop"
                  />
                </div>
              </CarouselItem>

              <CarouselItem className="flex justify-center basis-auto min-w-0 pl-4">
                <div className="w-[230px] h-[190px] bg-white rounded-xl overflow-hidden border border-solid border-[#032534] shadow-[0px_0px_24px_#0000000f]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Gallery image 5"
                    src="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=600&auto=format&fit=crop"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-white shadow-[0px_0px_24px_#00000026] h-12 w-12" />
            <CarouselNext className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-white shadow-[0px_0px_24px_#00000026] h-12 w-12" />
          </Carousel>
        </div>
      </section >
    </>

  )
}    