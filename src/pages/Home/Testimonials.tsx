import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const ClientTestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Working with Trilok Precast was a seamless experience. Their precast products are of exceptional quality and met all our site requirements. The team was professional, responsive, and delivered on time. We look forward to future collaborations.",
      company: "Astral Pipes",
      logoSrc: "./homepage/logo_1.png",
      logoWidth: "108px",
      logoHeight: "68px",
      logoTop: "43px",
      logoLeft: "22px",
    },
    {
      id: 2,
      text: "Working with Trilok Precast was a seamless experience. Their precast products are of exceptional quality and met all our site requirements. The team was professional, responsive, and delivered on time. We look forward to future collaborations.",
      company: "RFL",
      logoSrc: "./homepage/logo_7.png",
      logoWidth: "146px",
      logoHeight: "97px",
      logoTop: "28px",
      logoLeft: "4px",
    },
    {
      id: 3,
      text: "Working with Trilok Precast was a seamless experience. Their precast products are of exceptional quality and met all our site requirements. The team was professional, responsive, and delivered on time. We look forward to future collaborations.",
      company: "HIL",
      logoSrc: "./homepage/logo_3.png",
      logoWidth: "105px",
      logoHeight: "69px",
      logoTop: "42px",
      logoLeft: "24px",
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <h2 className="font-semibold text-[#032534] text-[28px] md:text-[36px] lg:text-[42px] leading-[42px] md:leading-[54px] lg:leading-[62px] mb-4">
          Testimonials
        </h2>
        <p className="font-semibold text-[#1a1a1a] text-[18px] md:text-[19px] lg:text-[20px] mb-12">
          Proven trust, shared by our pan-India project partners.
        </p>
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                {/* Wrapper div to handle the quote and logo positioning */}
                <div className="relative h-[600px] mb-20 mt-16">
                  <Card className="h-full rounded-xl shadow-[0px_0px_24px_#00000026] relative overflow-visible">
                    {/* Quote icon positioned at the top center overlapping the card */}
                    <div className="absolute w-[80px] h-[64px] -top-8 left-1/2 -translate-x-1/2 z-20">
                      <img
                        className="w-full h-full object-contain"
                        alt="Quote icon"
                        src="./homepage/qoute_2.svg"
                      />
                    </div>
                    <CardContent className="p-0 h-full mb-30">
                      <div className="px-[15x] md:px-[50px] lg:px-[73px] flex flex-col items-center justify-between h-full">
                        {/* Testimonial text */}
                        <p className="font-normal text-[#1a1a1a] text-[18px] md:text-[19px] lg:text-[20px] text-center leading-[28px] mt-8">
                          {testimonial.text}
                        </p>

                        {/* Star ratings */}
                        <div className="flex">
                          {[...Array(5)].map((_, index) => (
                            <img
                              key={index}
                              className="w-[26px] h-[25px] mx-1"
                              alt="Star rating"
                              src="./homepage/star.png"
                            />
                          ))}
                        </div>

                        {/* Company name */}
                        <div className="font-medium text-[#1a1a1a] text-[22px] md:text-[23px] lg:text-[24px] text-center">
                          {testimonial.company}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Company logo - positioned outside and below the card */}
                  <div className="absolute w-[154px] h-[154px] -bottom-[77px] left-1/2 -translate-x-1/2 bg-white rounded-full border border-solid border-[#1f8ccc] shadow-[4px_4px_12px_#00000026,-4px_-4px_12px_#00000026] flex items-center justify-center z-10">
                    <img
                      className="object-contain max-w-[80%] max-h-[80%]"
                      alt={`${testimonial.company} logo`}
                      src={testimonial.logoSrc}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-24">
            <CarouselPrevious className="relative static mr-4 h-[54px] w-[54px] rounded-full" />
            <CarouselNext className="relative static ml-4 h-[54px] w-[54px] rounded-full" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};