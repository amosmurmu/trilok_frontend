import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface VideoShort {
  id: string;
  thumbnail: string;
  title: string;
  views: string;
  likes: string;
  comments: string;
  shares: string;
}

const videoShorts: VideoShort[] = [
  { id: "1", thumbnail: "./homepage/shorts_1.svg", title: "TRILOK PRECAST", views: "5000", likes: "8000", comments: "7000", shares: "6000" },
  { id: "2", thumbnail: "./homepage/shorts_2.png", title: "Company Growth", views: "6000", likes: "9000", comments: "8000", shares: "7000" },
  { id: "3", thumbnail: "./homepage/shorts_3.png", title: "Milestone Achieved", views: "7000", likes: "10000", comments: "9000", shares: "8000" },
  { id: "4", thumbnail: "./homepage/shorts_1.svg", title: "TRILOK PRECAST 2", views: "5000", likes: "8000", comments: "7000", shares: "6000" },
];

const VideoGallery: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="w-full min-h-fit bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[140px] mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Video Gallery
          </h1>

          {/* Social icons + button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] md:w-[54px] md:h-[54px] bg-[#1f8ccc] rounded-full flex items-center justify-center">
                <img className="w-6 h-6 md:w-8 md:h-8" alt="Instagram" src="./instagram.svg" />
              </div>
              <div className="w-[40px] h-[40px] md:w-[54px] md:h-[54px]">
                <img className="w-full h-full" alt="YouTube" src="./homepage/group-3510.png" />
              </div>
            </div>
            <button className="bg-[#1f8ccc] text-white hover:bg-[#1a7ab3] rounded-md px-8 py-3">
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* Swiper */}
      <div className="relative w-full max-w-[1200px] mx-auto">
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation === "object") {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
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
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {videoShorts.map((short, index) => (
            <SwiperSlide key={short.id}>
              <div
                className={`transform transition-transform duration-500 ease-in-out ${index === current ? "scale-100" : "scale-95"
                  }`}
              >
                <div className="relative bg-white rounded-xl overflow-hidden border border-[#032534] shadow-lg">
                  <img
                    src={short.thumbnail}
                    alt={short.title}
                    className="w-full object-cover aspect-[9/16] max-h-[350px] sm:max-h-[380px] md:max-h-[700px]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-base mb-2">{short.title}</h3>
                      <div className="flex justify-between text-white/80 text-sm">
                        <span>{short.views} views</span>
                        <span>{short.likes} likes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons — desktop only */}
        <div
          ref={prevRef}
          className="absolute hidden lg:flex top-1/2 -translate-y-1/2 -left-14 z-10 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-300 cursor-pointer hover:bg-white hover:shadow-xl transition-all duration-300 items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </div>

        <div
          ref={nextRef}
          className="absolute hidden lg:flex top-1/2 -translate-y-1/2 -right-14 z-10 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-300 cursor-pointer hover:bg-white hover:shadow-xl transition-all duration-300 items-center justify-center"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
