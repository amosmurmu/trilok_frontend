import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const galleryItems = [
  { src: "./products/product_1.png", alt: "Gallery image 1" },
  { src: "./products/product_2.png", alt: "Gallery image 2" },
  { src: "./products/product_3.png", alt: "Gallery image 3" },
  { src: "./products/product_4.png", alt: "Gallery image 4" },
  { src: "./products/compound.jpg", alt: "Gallery image 5" },
];

export function ProjectGallery() {
  const [current, setCurrent] = useState(0);

  // refs for navigation buttons
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-[#fbfbfb] rounded-3xl py-12 px-4 sm:px-8">
      <h2 className="text-center font-extrabold text-[#1f8ccc] text-3xl sm:text-[42px] leading-[1.3] mb-10">
        Project Gallery
      </h2>

      <div className="relative w-full max-w-[1400px] mx-auto">
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            // Bind refs before Swiper init with proper type checking
            if (swiper.params.navigation && typeof swiper.params.navigation === 'object') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
          grabCursor
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: true },
            480: { slidesPerView: 1.1, centeredSlides: true },
            640: { slidesPerView: 1.3, centeredSlides: true },
            768: { slidesPerView: 1.7, centeredSlides: true },
            1024: { slidesPerView: 3, centeredSlides: true },
          }}
          className="pb-16"
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`transform transition-transform duration-500 ease-in-out ${index === current ? "scale-100" : "scale-90"
                  }`}
              >
                <div className="bg-white rounded-xl overflow-hidden border border-[#032534] shadow-lg">
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

        {/* Navigation buttons - only on large screens */}
        <div
          ref={prevRef}
          className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg border border-gray-300 cursor-pointer hover:bg-white hover:shadow-xl transition-all duration-300 hidden lg:flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
        </div>

        <div
          ref={nextRef}
          className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg border border-gray-300 cursor-pointer hover:bg-white hover:shadow-xl transition-all duration-300 hidden lg:flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
        </div>
      </div>
    </section>
  );
}
