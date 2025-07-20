import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


export const OurProjectsSection = () => {
  // Star rating data
  const stars = Array(5).fill({
    src: "./homepage/star.png",
    alt: "Star",
  });

  return (
    <section className="relative w-full py-12 bg-[#fbfbfb]">
      <div className="container mx-auto px-4">
        <div className=
          "flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-12">
          <h2 className=" font-bold text-[#032534] text-[42px] leading-[62px]">
            Our Recent Projects
          </h2>
          <Button className="bg-[#1f8ccc] text-white hover:bg-[#1a7ab3] rounded-md px-4 py-2 md:px-8 md:py-3">
            <span className=" font-semibold text-lg md:text-2xl">
              Explore Our Products
            </span>
          </Button>
        </div>

        <p className="font-medium text-[#1a1a1a] text-xl text-justify leading-[30px] mb-8">
          From residential developments to large-scale industrial installations,
          our recent projects reflect the strength, quality, and versatility of
          Trilok Precast solutions. Each project is a testament to our
          commitment to innovation, precision, and timely execution.
        </p>

        <Card className="w-full shadow-[0px_0px_34.3px_#0000001f] rounded-2xl overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Project Image */}
              <div className="w-full md:w-[629px] h-[496px] rounded-xl overflow-hidden shadow-[0px_0px_34.3px_#0000001f]">
                <img
                  className="w-full h-full object-cover"
                  alt="Empty road by building against sky"
                  src="./homepage/product_1.png"
                />
              </div>

              {/* Project Details */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    {/* Star Rating */}
                    <div className="flex items-center gap-[3.51px]">
                      {stars.map((star, index) => (
                        <img
                          key={`star-${index}`}
                          className="w-[27.45px] h-[26.24px]"
                          alt={star.alt}
                          src={star.src}
                        />
                      ))}
                    </div>

                    {/* Client Name */}
                    <h3 className=" font-medium text-[#032534] text-[22px] leading-[30px]">
                      Godrej Enterprises
                    </h3>
                  </div>

                  {/* Client Logo */}
                  <div className="w-28 h-28 bg-white rounded-[4.04px] overflow-hidden border-[1.01px] border-solid border-[#1f8ccc] flex items-center justify-center">
                    <img
                      className="w-28 h-[86px] object-cover"
                      alt="Godrej logo"
                      src="./homepage/logo_7.png"
                    />
                  </div>
                </div>

                {/* Project Description */}
                <div className="mt-8  text-[#1a1a1a] text-xl text-justify leading-[30px]">
                  <span className="font-normal">
                    We&apos;ve had the privilege of working with some of the
                    most respected names in the industry — including{" "}
                  </span>
                  <span className="font-medium">Godrej</span>
                  <span className="font-normal">
                    {" "}
                    — delivering high-quality precast solutions tailored to
                    their infrastructure needs. From residential to industrial
                    spaces, our recent projects are a reflection of precision,
                    durability, and on-time delivery.
                  </span>
                </div>
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-[21px] absolute bottom-6 right-6">
              <img
                className="w-[54px] h-[54px]"
                alt="Previous"
                src="https://c.animaapp.com/mda3wbuoE58tBx/img/handle-bar-1.svg"
              />
              <div className="relative w-11 h-[42px] rotate-180">
                <div className="relative w-[42px] h-[42px] bg-[#1f8ccc] rounded-[37px] shadow-[0px_0px_38.59px_#0000001f]">
                  <div className="absolute w-[30px] h-[30px] top-1.5 left-1.5 bg-[#032534] rounded-[15px] shadow-[0px_0px_32.16px_#0000001f]" />
                  <div className="absolute top-2.5 left-4 rotate-180  font-semibold text-white text-base text-justify leading-[20.8px] whitespace-nowrap">
                    1
                  </div>
                </div>
              </div>
              <img
                className="w-[54px] h-[54px]"
                alt="Next"
                src="https://c.animaapp.com/mda3wbuoE58tBx/img/handle-bar-2.svg"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
