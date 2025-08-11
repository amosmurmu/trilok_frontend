import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export const ProductsSubsection = () => {
  const thumbnails = [
    { id: 1, src: "./products/product_1.png" },
    { id: 2, src: "./products/product_2.png" },
    { id: 3, src: "./products/product_3.png" },
    { id: 4, src: "./products/product_4.png" },
  ];

  const [selectedImage, setSelectedImage] = useState(thumbnails[0].src);

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-[42px] font-extrabold text-[#1f8ccc] text-center leading-[54px]  mb-12">
          Compound Wall
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
            <div className="flex">
              {/* Thumbnails */}
              <div className="flex flex-col gap-4 mr-4">
                {thumbnails.slice(0, 4).map((thumbnail, index) => {
                  if (index < 3) {
                    return (
                      <div
                        key={thumbnail.id}
                        className="w-[124px] h-[124px] rounded-md cursor-pointer"
                        onClick={() => setSelectedImage(thumbnail.src)}
                      >
                        <img
                          className="w-full h-full object-cover rounded-md"
                          src={thumbnail.src}
                          alt={`Thumbnail ${thumbnail.id}`}
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key="more-thumbnails"
                        className="w-[124px] h-[124px] rounded-md border bg-white flex items-center justify-center font-bold text-2xl text-[#032534] cursor-pointer"
                      >
                        +2
                      </div>
                    );
                  }
                })}
              </div>

              {/* Main Image */}
              <Card className="w-full h-[544px] rounded-xl overflow-hidden shadow-[0px_0px_24px_#0000000f]">
                <CardContent className="p-0 h-full">
                  <img
                    className="w-full h-full object-cover"
                    src={selectedImage}
                    alt="Compound Wall"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Description */}
          <div className="w-full lg:w-1/2">
            <h2 className=" font-extrabold text-[#032534] text-[32px] mb-6">
              Description
            </h2>

            <p className=" font-medium text-[#032534] text-lg text-justify leading-[26px] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut ultricies orci. Pellentesque ut arcu ac dui placerat maximus et
              sed massa. Pellentesque cursus consectetur urna at aliquam. Cras
              fringilla aliquam lectus, eu imperdiet enim. Nam dignissim
              vestibulum nulla efficitur mollis. Duis interdum lacus euismod
              nunc pellentesque fringilla at nec sapien. In efficitur
              ullamcorper vestibulum. Etiam tristique eget ligula vel convallis.
              Integer tincidunt mollis scelerisque. Phasellus at nibh sit amet
              nulla finibus hendrerit a vitae lacus. Donec sed lectus aliquam,
              interdum ante non, blandit nunc. Vivamus accumsan, felis a
              scelerisque posuere, enim sapien elementum purus, sed sollicitudin
              lacus justo sed purus. Sed vel urna euismod, mollis magna non,
              aliquet ligula. Suspendisse dolor ligula, interdum eget efficitur
              blandit, placerat lobortis est.
            </p>

            <div className=" text-lg text-justify leading-[26px]">
              <span className="font-medium text-[#032534]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ut ultricies orci. Pellentesque ut arcu ac dui
                placerat maximus et sed massa. Pellentesque cursus consectetur
                urna at aliquam. Cras fringilla aliquam lectus, eu imperdiet
                enim. Nam dignissim vestibulum nulla efficitur mollis. Duis
                interdum lacus euismod nunc pellentesque{" "}
              </span>



              <span className="font-medium text-[#032534]">
                at nec sapien. In efficitur ullamcorper vestibulum. Etiam
                tristique eget ligula vel convallis. Integer tincidunt mollis
                scelerisque. Phasellus at nibh sit amet nulla finibus hendrerit
                a vitae lacus. Donec sed lectus aliquam, interdum ante non,
                blandit nunc. Vivamus accumsan, felis a scelerisque posuere,
                enim sapien elementum purus, sed sollicitudin lacus justo sed
                purus. Sed vel urna euismod, mollis magna non, aliquet ligula.
                Suspendisse dolor ligula, interdum eget efficitur blandit,
                placerat lobortis est.
              </span>

              <span className="font-extrabold text-[#1f8ccc] cursor-pointer">
                Read More.....
                <br />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
