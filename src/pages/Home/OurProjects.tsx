import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const OurProjectsSection = () => {
  const projects = [
    {
      id: 1,
      image: "./projects/project_1.png",
      imageAlt: "Empty road by building against sky",
      logo: "https://c.animaapp.com/mdahcrcekTrHmF/img/image-12.png",
      logoAlt: "Godrej logo",
      company: "Godrej Enterprises",
      description: (
        <>
          <span className="font-semibold">
            We&apos;ve had the privilege of working with some of the most
            respected names in the industry — including{" "}
          </span>
          <span className="font-black">Godrej</span>
          <span className="font-semibold">
            {" "}
            — delivering high-quality precast solutions tailored to their
            infrastructure needs.
          </span>
        </>
      ),
    },
    {
      id: 2,
      image: "./projects/project_2.png",
      imageAlt: "Reliance Industries project",
      logo: "https://c.animaapp.com/mdahcrcekTrHmF/img/image-10.png",
      logoAlt: "Reliance logo",
      company: "Reliance Industries",
      description: (
        <>
          <span className="font-semibold">
            We&apos;ve proudly partnered with industry giants like{" "}
          </span>
          <span className="font-black">Reliance Industries</span>
          <span className="font-semibold">
            , providing robust and customized precast solutions that meet their
            large-scale infrastructure demands.
          </span>
        </>
      ),
    },
  ];

  return (
    <section className="relative w-full py-12 bg-[#fbfbfb]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-12">
          <h2 className="font-bold text-[#032534] text-[42px] leading-[62px]">
            Our Recent Projects
          </h2>
          <Button className="bg-[#1f8ccc] text-white hover:bg-[#1a7ab3] rounded-md px-4 py-2 md:px-8 md:py-3">
            <span className="font-semibold text-lg md:text-2xl">
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

        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <Card className="w-full shadow-[0px_0px_34.3px_#0000001f] rounded-2xl overflow-hidden">
                  <CardContent className="p-6 relative">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-[629px] h-[496px] rounded-xl overflow-hidden shadow-[0px_0px_34.3px_#0000001f]">
                        <img
                          className="w-full h-full object-cover"
                          alt={project.imageAlt}
                          src={project.image}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div className="space-y-4">
                            <div className="flex items-center gap-[3.51px]">
                              {[...Array(5)].map((_, i) => (
                                <img
                                  key={i}
                                  className="w-[27.45px] h-[26.24px]"
                                  alt="Star"
                                  src="./homepage/star.png"
                                />
                              ))}
                            </div>
                            <h3 className="font-medium text-[#032534] text-[22px] leading-[30px]">
                              {project.company}
                            </h3>
                          </div>
                          <div className="w-28 h-28 bg-white rounded-[4.04px] overflow-hidden border-[1.01px] border-solid border-[#1f8ccc] flex items-center justify-center">
                            <img
                              className="w-28 h-[86px] object-cover"
                              alt={project.logoAlt}
                              src={project.logo}
                            />
                          </div>
                        </div>
                        <div className="mt-8 text-[#1a1a1a] text-xl text-justify leading-[30px]">
                          {project.description}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
