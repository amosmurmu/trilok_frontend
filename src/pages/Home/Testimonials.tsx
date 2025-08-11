import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const ClientTestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Working with Trilok Precast was a seamless experience. Their precast products are of exceptional quality and met all our site requirements. The team was professional, responsive, and delivered on time. We look forward to future collaborations.",
      company: "Astral Pipes",
      logoSrc: "./homepage/logo_1.png",
    },
    {
      id: 2,
      text: "Working with Trilok Precast was a seamless experience. Their precast products are of exceptional quality and met all our site requirements. The team was professional, responsive, and delivered on time. We look forward to future collaborations.",
      company: "RFL",
      logoSrc: "./homepage/logo_7.png",
    },
    {
      id: 3,
      text: "Working with Trilok Precast was a seamless experience. Their precast products are of exceptional quality and met all our site requirements. The team was professional, responsive, and delivered on time. We look forward to future collaborations.",
      company: "HIL",
      logoSrc: "./homepage/logo_3.png",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
      <div className="relative mx-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Header Section */}
        <div className="text-center sm:text-left mb-6 sm:mb-8 md:mb-10">
          <h2 className="font-semibold text-[#032534] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[42px] leading-tight mb-2 sm:mb-3">
            Testimonials
          </h2>
          <p className="font-semibold text-[#1a1a1a] text-base sm:text-lg md:text-xl lg:text-xl">
            Proven trust, shared by our pan-India project partners.
          </p>
        </div>

        {/* Carousel Section */}
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 sm:pl-3 md:pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 mt-8 sm:mt-10 md:mt-12">
                  <Card className="h-full rounded-xl sm:rounded-2xl shadow-[0px_0px_20px_#00000020] relative overflow-visible transition-transform duration-300 ease-in-out hover:scale-110">
                    <div className="absolute w-20 h-16 md:w-24 md:h-18 lg:w-28 lg:h-20 xl:w-32 xl:h-22 -top-6 md:-top-8 lg:-top-10 xl:-top-12 left-1/2 -translate-x-1/2 z-20">
                      <img
                        className="w-full h-full object-contain"
                        alt="Quote icon"
                        src="./homepage/qoute_2.svg"
                      />
                    </div>
                    <CardContent className="p-0 h-full">
                      <div className="px-2 md:px-4 lg:px-6 xl:px-8 flex flex-col items-center justify-center h-full py-3 md:py-6 lg:py-8 xl:py-10 space-y-2 md:space-y-4 lg:space-y-6">
                        <div className="w-full">
                          <p className="font-normal text-[#1a1a1a] text-sm md:text-lg lg:text-xl text-center leading-[1.3] md:leading-relaxed px-1 md:px-2">
                            {testimonial.text}
                          </p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, index) => (
                            <img
                              key={index}
                              className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 mx-0.5 md:mx-1"
                              alt="Star rating"
                              src="./homepage/star.png"
                            />
                          ))}
                        </div>
                        <div className="font-medium text-[#1a1a1a] text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                          {testimonial.company}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="absolute w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 -bottom-8 md:-bottom-10 lg:-bottom-12 xl:-bottom-14 left-1/2 -translate-x-1/2 bg-white rounded-full border-2 border-solid border-[#1f8ccc] shadow-[4px_4px_12px_#00000026,-4px_-4px_12px_#00000026] flex items-center justify-center z-10">
                    <img
                      className="object-contain max-w-[60%] max-h-[60%] sm:max-w-[65%] sm:max-h-[65%] md:max-w-[70%] md:max-h-[70%] transition-transform duration-300 ease-in-out hover:scale-110"
                      alt={`${testimonial.company} logo`}
                      src={testimonial.logoSrc}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16">
            <CarouselPrevious className="relative cursor-pointer static mr-2 sm:mr-3 md:mr-4 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-[54px] xl:w-[54px] rounded-full" />
            <CarouselNext className="relative cursor-pointer static ml-2 sm:ml-3 md:ml-4 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-[54px] xl:w-[54px] rounded-full" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
