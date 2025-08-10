import { useState } from "react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const galleryItems = [
  { src: "./products/product_1.png", alt: "Gallery image 1" },
  { src: "./products/product_2.png", alt: "Gallery image 2" },
  { src: "./products/product_3.png", alt: "Gallery image 3" },
  { src: "./products/product_4.png", alt: "Gallery image 4" },
  { src: "./products/compound.jpg", alt: "Gallery image 5" },
];

export function ProjectGallery() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="w-full bg-[#fbfbfb] rounded-3xl py-12 px-10">
      <h2 className="text-center font-extrabold text-[#1f8ccc] text-[42px] leading-[54px] mb-10">
        Project Gallery
      </h2>

      <div className="relative w-full max-w-[1400px] mx-auto">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{ clickable: true }}
          className="mySwiper"
          onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`transform transition-transform duration-500 ease-in-out ${
                  index === current ? "scale-101 z-10" : "scale-75"
                }`}
              >
                <div className="bg-white rounded-xl overflow-hidden border rounded-lg border-solid border-[#032534] shadow-lg">
                  <img
                    className="w-full h-full object-cover aspect-video"
                    alt={item.alt}
                    src={item.src}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
