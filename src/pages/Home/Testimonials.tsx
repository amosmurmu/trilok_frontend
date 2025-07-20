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
      <div className="container mx-auto px-10">
        <h2 className="font-['Mulish',Helvetica] font-semibold text-[#032534] text-[42px] leading-[62px] mb-4">
          Testimonials
        </h2>

        <p className="font-['Mulish',Helvetica] font-semibold text-[#1a1a1a] text-xl mb-12">
          Proven trust, shared by our pan-India project partners.
        </p>

        <Carousel className="w-full">

          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/3 lg:basis-1/3"
              >
                {/* Wrapper div to handle the quote and logo positioning */}
                <div className="relative h-[450px] mb-20 mt-16"> {/* Added mt-16 for quote space */}
                  {/* I have svg qoute */}
                  <img
                    className="absolute w-[80px] h-[64px] -top-16 left-1/2 -translate-x-1/2 z-20"
                    alt="Quote icon"
                    src="./homepage/qoute.png"
                  />

                  <Card className="h-full rounded-xl shadow-[0px_0px_24px_#00000026] relative overflow-visible"> {/* Added overflow-visible */}
                    <CardContent className="p-0 h-full">
                      <div className="pt-[40px] px-[73px] flex flex-col items-center justify-even h-full">

                        {/* Testimonial text */}
                        <p className="font-['Mulish',Helvetica] font-normal text-[#1a1a1a] text-xl text-center leading-7 mt-8">
                          {testimonial.text}
                        </p>

                        {/* Star ratings */}
                        <div className="flex mt-12 mb-5">
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
                        <div className="font-['Aleo',Helvetica] font-medium text-[#1a1a1a] mb-[20px] text-2xl text-center">
                          {testimonial.company}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Company logo - positioned outside and below the card */}
                  <div className="absolute w-[154px] h-[154px] -bottom-[77px] left-1/2 -translate-x-1/2 bg-white rounded-full border border-solid border-[#1f8ccc] shadow-[4px_4px_12px_#00000026,-4px_-4px_12px_#00000026] flex items-center justify-center z-10">
                    <img
                      className="object-cover"
                      style={{
                        width: testimonial.logoWidth,
                        height: testimonial.logoHeight,
                      }}
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
