import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export const OurProductsSection = () => {
  const productCards = [
    {
      id: 1,
      title: "Security Cabin",
      image: "./products/product_1.png",
    },
    {
      id: 2,
      title: "Compound Wall",
      image: "./products/product_2.png",
    },
    {
      id: 3,
      title: "Labor Quarter",
      image: "./products/product_3.png",
    },
    {
      id: 4,
      title: "Precast Foundation",
      image: "./products/product_4.png",
    },
  ];

  return (
    <section className="relative w-full bg-[#fbfbfb] py-12">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-12">
          <h2 className=" font-extrabold text-[#032534] text-[42px] leading-[62px]">
            Our Products
          </h2>
          <Button className="bg-[#1f8ccc] text-white hover:bg-[#1a7ab3] rounded-md px-6 py-4 md:px-10 md:py-5">
            <span className=" font-semibold text-lg md:text-2xl">
              Explore Our Products
            </span>
          </Button>
        </div>

        <div className="mb-12">
          <p className=" text-xl leading-[30px] text-justify mb-4">
            <span className="font-semibold text-[#1a1a1a]">
              Trilok Precast brings you India&apos;s most trusted range of RCC
              precast construction solutions,{" "}
            </span>
            <span className="font-extrabold text-[#1f8ccc]">
              built for strength, speed, and scale
            </span>
            <span className="font-semibold text-[#1a1a1a]">.</span>
          </p>

          <p className=" font-semibold text-[#1a1a1a] text-xl leading-[30px] text-justify mb-4">
            Explore our RCC Compound Wall &amp; Boundary Wall Solutions,
            designed for fast installation and long-term durability. Our precast
            fencing walls, retaining walls, and readymade cement walls are used
            across residential, industrial, and commercial sites.
          </p>

          <p className=" text-xl leading-[30px] text-justify">
            <span className="font-semibold text-[#1a1a1a]">
              Discover our Precast Modular Building Units like precast labour
              quarters, security cabins, precast toilets, and portable site
              offices – factory-finished and{" "}
            </span>
            <span className="font-extrabold text-[#1f8ccc]">
              100% ready to install at project sites across India
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {productCards.map((product) => (
            <Card
              key={product.id}
              className="group rounded-xl overflow-hidden shadow-[0px_0px_25.34px_#0000001f] bg-white hover:bg-[#032534] transition-colors duration-300"
            >
              <CardContent className="p-4">
                <div className="bg-white rounded-[9px] overflow-hidden shadow-[0px_0px_25.34px_#0000001f] mb-8">
                  <img
                    className="w-full h-[242px] object-cover"
                    alt={product.title}
                    src={product.image}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-base text-[#1f8ccc] group-hover:text-white">
                    {product.title}
                  </span>
                  <div className="w-7 h-7 bg-white rounded-full shadow-[0px_0px_25.34px_#0000001f] flex items-center justify-center">
                    <img
                      className="w-[13px] h-2.5"
                      alt="Icon"
                      src="https://c.animaapp.com/mda3wbuoE58tBx/img/icon-2.svg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center gap-6 mb-6">
          <Button
            variant="outline"
            size="icon"
            className="w-[54px] h-[54px] p-0 rounded-full"
          >
            <ChevronLeftIcon className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-[54px] h-[54px] p-0 rounded-full"
          >
            <ChevronRightIcon className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
